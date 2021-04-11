const scaleNames = {
    c: 'Celsius',
    f: 'Farenheit'
}

function tryConvert(temperature, convert) {
    const value = parseFloat(temperature)
    if (Number.isNaN(value)) {
        return 'Veuillez entrer une température valide';
    }
    return (convert(value)).toString()
}

function toCelsius(fahrenheit) {
    return parseFloat((fahrenheit - 32) * 5 / 9).toFixed(1);
}

function toFarenheit(celsius) {
    return parseFloat((celsius * 1.8) + 32).toFixed(1);
}

function BoilingVerdict({ celsius }) {
    const boiling = celsius >= 100 ? true : false
    return <div className={`mt-3 alert alert-${boiling ? 'danger' : 'success'}`}>
        {boiling ? 'L\'eau est en train de bouillir' : 'L\'eau ne bout pas'}
    </div>
}

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.props.onTemperatureChange(e.target.value)
    }

    render() {
        const { scale } = this.props
        const { temperature } = this.props
        const name = 'scale_' + scaleNames[scale].toLowerCase()
        return <div>
            <div className="form-group">
                <label htmlFor={name}>Température en {scaleNames[scale]}</label>
                <input type="text" name={name} value={temperature} id={name} onChange={this.handleChange} className="form-control" />
            </div>
        </div>
    }
}

function Columns({ left, right }) {
    return <div className="row">
        <div className="col-md-6">{left}</div>
        <div className="col-md-6">{right}</div>
    </div>
}


class Calculator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            scale: 'c',
            temperature: 20
        }
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
    }

    handleChange(e) {
        this.setState({
            temperature: e.target.value
        })
    }

    handleCelsiusChange(temperature) {
        this.setState({
            scale: 'c',
            temperature
        })
    }

    handleFahrenheitChange(temperature) {
        this.setState({
            scale: 'f',
            temperature
        })
    }


    render() {
        const { temperature, scale } = this.state
        const celsius = scale === 'c' ? temperature : tryConvert(temperature, toCelsius)
        const fahrenheit = scale === 'f' ? temperature : tryConvert(temperature, toFarenheit)
        return <div>
            <Columns
                left={<TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleCelsiusChange} />}
                right={<TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange} />}
            />
            <BoilingVerdict celsius={parseFloat(celsius)} />
        </div>

    }

    isBoiling(temp) {
        return temp >= 100
    }
}

ReactDOM.render(<Calculator />, document.querySelector('#app'))