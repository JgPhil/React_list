var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function Field(_ref) {
    var name = _ref.name,
        value = _ref.value,
        onChange = _ref.onChange,
        children = _ref.children;

    return React.createElement(
        "div",
        { className: "form-group" },
        React.createElement(
            "label",
            { htmlFor: name },
            children
        ),
        React.createElement("input", { type: "text", name: name, id: name, value: value, onChange: onChange, className: "form-control" })
    );
}

function Checkbox(_ref2) {
    var checked = _ref2.checked,
        onChange = _ref2.onChange,
        name = _ref2.name,
        children = _ref2.children;

    return React.createElement(
        "div",
        { className: "form-check" },
        React.createElement("input", { className: "form-check-input", type: "checkbox", id: name, checked: checked, name: name, onChange: onChange }),
        React.createElement(
            "label",
            { className: "form-check-label", htmlFor: name },
            children
        )
    );
}

var initialData = {
    nom: '',
    prenom: '',
    newsletter: false
};

var Home = function (_React$Component) {
    _inherits(Home, _React$Component);

    function Home(props) {
        _classCallCheck(this, Home);

        var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

        _this.state = initialData;
        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }

    _createClass(Home, [{
        key: "handleChange",
        value: function handleChange(e) {
            var name = e.target.name;
            var type = e.target.type;
            var value = type === 'checkbox' ? e.target.checked : e.target.value;
            this.setState(_defineProperty({}, name, value));
        }
    }, {
        key: "handleSubmit",
        value: function handleSubmit(e) {
            e.preventDefault();
            var data = JSON.stringify(this.state);
            this.setState(initialData);
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "form",
                { className: "container", onSubmit: this.handleSubmit },
                React.createElement(
                    "div",
                    null,
                    React.createElement(
                        Field,
                        { name: "nom", value: this.state.nom, onChange: this.handleChange },
                        "Nom"
                    )
                ),
                React.createElement(
                    "div",
                    null,
                    React.createElement(
                        Field,
                        { name: "prenom", value: this.state.prenom, onChange: this.handleChange },
                        "Prenom"
                    )
                ),
                React.createElement(
                    "div",
                    null,
                    React.createElement(
                        Checkbox,
                        { checked: this.state.newsletter, onChange: this.handleChange, name: "newsletter" },
                        "S'abonner"
                    )
                ),
                React.createElement(
                    "div",
                    { className: "form-group mt-3" },
                    React.createElement(
                        "button",
                        { className: "btn btn-success" },
                        "Envoyer"
                    )
                )
            );
        }
    }]);

    return Home;
}(React.Component);

ReactDOM.render(React.createElement(Home, null), document.querySelector('#app'));