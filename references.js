var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Field = React.forwardRef(function (props, ref) {
    return React.createElement(
        "div",
        { className: "form-group" },
        React.createElement("input", { type: "text", className: "form-control", ref: ref })
    );
});

var Input = function (_React$Component) {
    _inherits(Input, _React$Component);

    function Input() {
        _classCallCheck(this, Input);

        return _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).apply(this, arguments));
    }

    _createClass(Input, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement("input", { type: "text", className: "form-control", ref: this.props.forwardRef })
            );
        }
    }]);

    return Input;
}(React.Component);

var InputWithRef = React.forwardRef(function (props, ref) {
    return React.createElement(Input, { forwardRef: ref });
});

var Home = function (_React$Component2) {
    _inherits(Home, _React$Component2);

    function Home(props) {
        _classCallCheck(this, Home);

        var _this2 = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

        _this2.handleClick = _this2.handleClick.bind(_this2);
        _this2.input = React.createRef();
        return _this2;
    }

    _createClass(Home, [{
        key: "handleClick",
        value: function handleClick(e) {
            console.log(this.input.current.value);
        }
    }, {
        key: "render",
        value: function render() {
            console.log(this.input);
            return React.createElement(
                React.Fragment,
                null,
                React.createElement(Field, { ref: this.input }),
                React.createElement(
                    "button",
                    { onClick: this.handleClick, className: "btn btn-success" },
                    "Tester"
                )
            );
        }
    }]);

    return Home;
}(React.Component);

ReactDOM.render(React.createElement(Home, null), document.querySelector('#app'));