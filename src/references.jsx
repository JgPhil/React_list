const Field = React.forwardRef(function (props, ref) {
    return <div className="form-group">
        <input type="text" className="form-control" ref={ref}/>
    </div>
})

class Input extends React.Component {

    render() {
        return <div>
            <input type="text" className="form-control" ref={this.props.forwardRef}/>
        </div>
    }
} 

const InputWithRef = React.forwardRef((props, ref) => {
    return <Input forwardRef={ref}/>
})


class Home extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.input = React.createRef()
    }

    handleClick(e) {
        console.log(this.input.current.value);
    }

    render() {
        console.log(this.input);
        return <React.Fragment>
            <Field ref={this.input} />
            <button onClick={this.handleClick} className="btn btn-success">Tester</button>
        </React.Fragment>
    }
}


ReactDOM.render(<Home />, document.querySelector('#app'))