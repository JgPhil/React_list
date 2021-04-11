const PRODUCTS = [
    { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
    { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
    { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
    { category: "Electronics", price: "$99.99", stocked: true, name: "Ipod touch" },
    { category: "Electronics", price: "$399.99", stocked: true, name: "Iphone 5" },
    { category: "Electronics", price: "$299.99", stocked: false, name: "Samsung Galaxy 5" },
    { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" },
];

class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            filterText: '',
            inStockOnly: false
        }
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this)
        this.handleInStockChange = this.handleInStockChange.bind(this)
    }

    handleFilterTextChange(filterText) {
        this.setState({ filterText });
    }

    handleInStockChange(inStockOnly) {
        this.setState({ inStockOnly })
    }

    render() {
        const { products } = this.props
        return <React.Fragment>
            {JSON.stringify(this.state)}
            <SearchBar
                filterText={this.state.filterText}
                inStockOnly={this.state.inStockOnly}
                onFilterTextChange={this.handleFilterTextChange}
                onStockChange={this.handleInStockChange}
            />
            <ProductTable
                products={products}
                filterText={this.state.filterText}
                inStockOnly={this.state.inStockOnly}
            />
        </React.Fragment>
    }
}

class SearchBar extends React.Component {

    constructor(props) {
        super(props)
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this)
        this.handleStockChange = this.handleStockChange.bind(this)
    }

    handleFilterTextChange(e) {
        this.props.onFilterTextChange(e.target.value)
    }

    handleStockChange(e) {
        this.props.onStockChange(e.target.checked)
    }

    render() {
        const { filterText, inStockOnly } = this.props
        return <div className="mb-3">
            <div className="form-group mb-0">
                <input type="text" name="" id="text" placeholder="Search" className="form-control" value={filterText} onChange={this.handleFilterTextChange} />
            </div>
            <div className="form-check">
                <input type="checkbox" className="form-check-input" name="checkbox" checked={inStockOnly} onChange={this.handleStockChange} id="stock" />
                <label className="form-check-label" htmlFor="checkbox">Only show products in stock</label>
            </div>
        </div>
    }
}

const ProductRow = React.memo(function ({ product }) {
    const name = product.stocked ?
        product.name :
        <span className="text-danger" >{product.name}</span>
    return <tr>
        <td>{name}</td>
        <td>{product.price}</td>
    </tr>
})

function ProductCategoryRow({ category }) {
    return <tr>
        <th colSpan="2">{category}</th>
    </tr>
}

function ProductTable({ products, inStockOnly, filterText }) {
    let rows = [];
    let lastCategory = null;

    for (product of products) {
        if (
            (inStockOnly && !product.stocked) ||
            (product.name.indexOf(filterText) === -1)
        ) {
            continue
        }
        if (product.category !== lastCategory) {
            lastCategory = product.category
            rows.push(<ProductCategoryRow key={product.category} category={product.category} />)
        }
        const key = product.name.replace(/\s+/g, '')
        rows.push(<ProductRow onClick={() => this.demo = 1} key={key} product={product} />)
    };

    return <table className="table">
        <thead>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
            </tr>
        </thead>
        <tbody>
            {rows}
        </tbody>
    </table>
}

ReactDOM.render(<FilterableProductTable products={PRODUCTS} />, document.querySelector('#app'))

/* const PRODUCTS2 = [...PRODUCTS, { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 8" }];

window.setTimeout(function() {
    ReactDOM.render(<FilterableProductTable products={PRODUCTS2} />, document.querySelector('#app')
    )}, 2000)
 */
