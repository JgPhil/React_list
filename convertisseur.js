var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var scaleNames = {
    c: 'Celsius',
    f: 'Farenheit'
};

function tryConvert(temperature, convert) {
    var value = parseFloat(temperature);
    if (Number.isNaN(value)) {
        return 'Veuillez entrer une température valide';
    }
    return convert(value).toString();
}

function toCelsius(fahrenheit) {
    return parseFloat((fahrenheit - 32) * 5 / 9).toFixed(1);
}

function toFarenheit(celsius) {
    return parseFloat(celsius * 1.8 + 32).toFixed(1);
}

function BoilingVerdict(_ref) {
    var celsius = _ref.celsius;

    var boiling = celsius >= 100 ? true : false;
    return React.createElement(
        'div',
        { className: 'mt-3 alert alert-' + (boiling ? 'danger' : 'success') },
        boiling ? 'L\'eau est en train de bouillir' : 'L\'eau ne bout pas'
    );
}

var TemperatureInput = function (_React$Component) {
    _inherits(TemperatureInput, _React$Component);

    function TemperatureInput(props) {
        _classCallCheck(this, TemperatureInput);

        var _this = _possibleConstructorReturn(this, (TemperatureInput.__proto__ || Object.getPrototypeOf(TemperatureInput)).call(this, props));

        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }

    _createClass(TemperatureInput, [{
        key: 'handleChange',
        value: function handleChange(e) {
            this.props.onTemperatureChange(e.target.value);
        }
    }, {
        key: 'render',
        value: function render() {
            var scale = this.props.scale;
            var temperature = this.props.temperature;

            var name = 'scale_' + scaleNames[scale].toLowerCase();
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'div',
                    { className: 'form-group' },
                    React.createElement(
                        'label',
                        { htmlFor: name },
                        'Temp\xE9rature en ',
                        scaleNames[scale]
                    ),
                    React.createElement('input', { type: 'text', name: name, value: temperature, id: name, onChange: this.handleChange, className: 'form-control' })
                )
            );
        }
    }]);

    return TemperatureInput;
}(React.Component);

function Columns(_ref2) {
    var left = _ref2.left,
        right = _ref2.right;

    return React.createElement(
        'div',
        { className: 'row' },
        React.createElement(
            'div',
            { className: 'col-md-6' },
            left
        ),
        React.createElement(
            'div',
            { className: 'col-md-6' },
            right
        )
    );
}

var Calculator = function (_React$Component2) {
    _inherits(Calculator, _React$Component2);

    function Calculator(props) {
        _classCallCheck(this, Calculator);

        var _this2 = _possibleConstructorReturn(this, (Calculator.__proto__ || Object.getPrototypeOf(Calculator)).call(this, props));

        _this2.state = {
            scale: 'c',
            temperature: 20
        };
        _this2.handleCelsiusChange = _this2.handleCelsiusChange.bind(_this2);
        _this2.handleFahrenheitChange = _this2.handleFahrenheitChange.bind(_this2);
        return _this2;
    }

    _createClass(Calculator, [{
        key: 'handleChange',
        value: function handleChange(e) {
            this.setState({
                temperature: e.target.value
            });
        }
    }, {
        key: 'handleCelsiusChange',
        value: function handleCelsiusChange(temperature) {
            this.setState({
                scale: 'c',
                temperature: temperature
            });
        }
    }, {
        key: 'handleFahrenheitChange',
        value: function handleFahrenheitChange(temperature) {
            this.setState({
                scale: 'f',
                temperature: temperature
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _state = this.state,
                temperature = _state.temperature,
                scale = _state.scale;

            var celsius = scale === 'c' ? temperature : tryConvert(temperature, toCelsius);
            var fahrenheit = scale === 'f' ? temperature : tryConvert(temperature, toFarenheit);
            return React.createElement(
                'div',
                null,
                React.createElement(Columns, {
                    left: React.createElement(TemperatureInput, { scale: 'c', temperature: celsius, onTemperatureChange: this.handleCelsiusChange }),
                    right: React.createElement(TemperatureInput, { scale: 'f', temperature: fahrenheit, onTemperatureChange: this.handleFahrenheitChange })
                }),
                React.createElement(BoilingVerdict, { celsius: parseFloat(celsius) })
            );
        }
    }, {
        key: 'isBoiling',
        value: function isBoiling(temp) {
            return temp >= 100;
        }
    }]);

    return Calculator;
}(React.Component);

ReactDOM.render(React.createElement(Calculator, null), document.querySelector('#app'));