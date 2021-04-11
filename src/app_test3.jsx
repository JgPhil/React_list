function Field({ name, value, onChange, children }) {
    return <div className="form-group" >
        <label htmlFor={name}>{children}</label>
        <input type="text" name={name} id={name} value={value} onChange={onChange} className="form-control" />
    </div>
}

function Checkbox({ checked, onChange, name, children }) {
    return <div className="form-check">
        <input className="form-check-input" type="checkbox" id={name} checked={checked} name={name} onChange={onChange} />
        <label className="form-check-label" htmlFor={name} >{children}</label>
    </div>
}

const initialData = {
            nom: '',
            prenom: '',
            newsletter: false
        }

class Home extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = initialData
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        const name = e.target.name
        const type = e.target.type
        const value = type === 'checkbox' ? e.target.checked : e.target.value
        this.setState({
            [name]: value
        })
    }

    handleSubmit(e){
        e.preventDefault()
        const data = JSON.stringify(this.state)
        this.setState(initialData)
    }

    render() {
        return <form className="container" onSubmit={this.handleSubmit}>
            <div>
                <Field name="nom" value={this.state.nom} onChange={this.handleChange}>Nom</Field>
            </div>
            <div>
                <Field name="prenom" value={this.state.prenom} onChange={this.handleChange}>Prenom</Field>
            </div>
            <div>
                <Checkbox checked={this.state.newsletter} onChange={this.handleChange} name='newsletter'>S'abonner</Checkbox>
            </div>
            <div className="form-group mt-3">
                <button className="btn btn-success">Envoyer</button>
            </div>
        </form>
    }
}

ReactDOM.render(<Home />, document.querySelector('#app'))