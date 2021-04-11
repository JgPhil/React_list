function WelcomeFunc({ name, children }) {
    return <div>
        <h1>Bonjour {name}</h1>
        <p>
            {children}
        </p>
    </div>
}

class Welcome extends React.Component {
    render() {
        return <div>
            <h1>Bonjour {this.props.name}</h1>
            <p>
                {this.props.children}
            </p>
        </div>
    }
}

class Clock extends React.Component {

    constructor(props) {
        super(props)
        this.state = { date: new Date() }
        this.timer = null
    }

    componentDidMount() {
        this.timer = window.setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount() {
        window.clearInterval(this.timer)
    }

    tick() {
        this.setState({ date: new Date() })
    }

    render() {
        const date = new Date()
        return <div>
            Nous sommes le {this.state.date.toLocaleDateString()} et il est  {this.state.date.toLocaleTimeString()}
        </div>
    }

}

class Incrementer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            compteur: props.start,
            timer: null
        }
    }

    componentDidMount() {
        this.play()
    }

    componentWillUnmount() {
        this.pause()
    }

    incrementCompteur() {
        this.setState((state, props) => {
            return { compteur: state.compteur + props.step }
        })
    }

    pause() {
        window.clearInterval(this.state.timer)
        this.setState({
            timer: null
        })
    }

    play() {
        window.clearInterval(this.state.timer)
        this.setState({
            timer: window.setInterval(() => this.incrementCompteur(), 1000)
        })
    }

    toggle() {
        return this.state.timer ? this.pause() : this.play()
    }

    label(){
        return this.state.timer ? 'Pause' : 'Play'
    }

    reset() {
        this.pause()
        this.play()
        this.setState((state, props) => {
            return { compteur: props.start }
        })
    }


    render() {
        return <div>Valeur: {this.state.compteur}
            <button onClick={() => this.toggle()}>{this.label()}</button>
            <button onClick={() => this.reset()}>Reset</button>
        </div>
    }
}

Incrementer.defaultProps = {
    start: 0,
    step: 1
}


class ManualIncrementer extends React.Component {
    constructor(props) {
        super(props)
        this.state = { n: 0 }
    }

    increment(e) {
        e.preventDefault()
        this.setState((state, props) => {
            return { n: state.n + 1 }
        })
    }

    render() {
        return <div>Valeur: {this.state.n}
            <button onClick={this.increment.bind(this)} >Incrémenter</button>
        </div>
    }
}

function Home() {
    return <div>
        <Welcome name="Henry" />
        <Welcome name="Jean" />
        <Welcome name="Lucie" />
        <Clock />
        <Incrementer start={100} />
    </div>
}

ReactDOM.render(<Home />, document.querySelector('#app'))