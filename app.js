var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PRODUCTS = [{ category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" }, { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" }, { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" }, { category: "Electronics", price: "$99.99", stocked: true, name: "Ipod touch" }, { category: "Electronics", price: "$399.99", stocked: true, name: "Iphone 5" }, { category: "Electronics", price: "$299.99", stocked: false, name: "Samsung Galaxy 5" }, { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }];

var FilterableProductTable = function (_React$Component) {
    _inherits(FilterableProductTable, _React$Component);

    function FilterableProductTable(props) {
        _classCallCheck(this, FilterableProductTable);

        var _this = _possibleConstructorReturn(this, (FilterableProductTable.__proto__ || Object.getPrototypeOf(FilterableProductTable)).call(this, props));

        _this.state = {
            filterText: 'Foot',
            inStockOnly: false
        };
        _this.handleFilterTextChange = _this.handleFilterTextChange.bind(_this);
        _this.handleInStockChange = _this.handleInStockChange.bind(_this);
        return _this;
    }

    _createClass(FilterableProductTable, [{
        key: "handleFilterTextChange",
        value: function handleFilterTextChange(filterText) {
            this.setState({ filterText: filterText });
        }
    }, {
        key: "handleInStockChange",
        value: function handleInStockChange(inStockOnly) {
            this.setState({ inStockOnly: inStockOnly });
        }
    }, {
        key: "render",
        value: function render() {
            var products = this.props.products;

            return React.createElement(
                React.Fragment,
                null,
                JSON.stringify(this.state),
                React.createElement(SearchBar, {
                    filterText: this.state.filterText,
                    inStockOnly: this.state.inStockOnly,
                    onFilterTextChange: this.handleFilterTextChange,
                    onStockChange: this.handleInStockChange
                }),
                React.createElement(ProductTable, {
                    products: products,
                    filterText: this.state.filterText,
                    inStockOnly: this.state.inStockOnly
                })
            );
        }
    }]);

    return FilterableProductTable;
}(React.Component);

var SearchBar = function (_React$Component2) {
    _inherits(SearchBar, _React$Component2);

    function SearchBar(props) {
        _classCallCheck(this, SearchBar);

        var _this2 = _possibleConstructorReturn(this, (SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).call(this, props));

        _this2.handleFilterTextChange = _this2.handleFilterTextChange.bind(_this2);
        _this2.handleStockChange = _this2.handleStockChange.bind(_this2);
        return _this2;
    }

    _createClass(SearchBar, [{
        key: "handleFilterTextChange",
        value: function handleFilterTextChange(e) {
            this.props.onFilterTextChange(e.target.value);
        }
    }, {
        key: "handleStockChange",
        value: function handleStockChange(e) {
            this.props.onStockChange(e.target.checked);
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                filterText = _props.filterText,
                inStockOnly = _props.inStockOnly;

            return React.createElement(
                "div",
                { className: "mb-3" },
                React.createElement(
                    "div",
                    { className: "form-group mb-0" },
                    React.createElement("input", { type: "text", name: "", id: "text", placeholder: "Search", className: "form-control", value: filterText, onChange: this.handleFilterTextChange })
                ),
                React.createElement(
                    "div",
                    { className: "form-check" },
                    React.createElement("input", { type: "checkbox", className: "form-check-input", name: "checkbox", checked: inStockOnly, onChange: this.handleStockChange, id: "stock" }),
                    React.createElement(
                        "label",
                        { className: "form-check-label", htmlFor: "checkbox" },
                        "Only show products in stock"
                    )
                )
            );
        }
    }]);

    return SearchBar;
}(React.Component);

function ProductRow(_ref) {
    var product = _ref.product;

    var name = product.stocked ? product.name : React.createElement(
        "span",
        { className: "text-danger" },
        product.name
    );
    return React.createElement(
        "tr",
        null,
        React.createElement(
            "td",
            null,
            name
        ),
        React.createElement(
            "td",
            null,
            product.price
        )
    );
}

function ProductCategoryRow(_ref2) {
    var category = _ref2.category;

    return React.createElement(
        "tr",
        null,
        React.createElement(
            "th",
            { colSpan: "2" },
            category
        )
    );
}

function ProductTable(_ref3) {
    var products = _ref3.products,
        inStockOnly = _ref3.inStockOnly,
        filterText = _ref3.filterText;

    var rows = [];
    var lastCategory = null;

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = products[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            product = _step.value;

            if (inStockOnly && !product.stocked) {
                continue;
            }
            if (product.category !== lastCategory) {
                lastCategory = product.category;
                rows.push(React.createElement(ProductCategoryRow, { key: product.category, category: product.category }));
            }
            var key = product.name.replace(/\s+/g, '');
            rows.push(React.createElement(ProductRow, { key: key, product: product }));
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    ;

    return React.createElement(
        "table",
        { className: "table" },
        React.createElement(
            "thead",
            null,
            React.createElement(
                "tr",
                null,
                React.createElement(
                    "th",
                    { scope: "col" },
                    "Name"
                ),
                React.createElement(
                    "th",
                    { scope: "col" },
                    "Price"
                )
            )
        ),
        React.createElement(
            "tbody",
            null,
            rows
        )
    );
}

ReactDOM.render(React.createElement(FilterableProductTable, { products: PRODUCTS }), document.querySelector('#app'));