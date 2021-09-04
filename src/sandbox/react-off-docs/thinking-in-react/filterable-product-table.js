import React, {Component} from "react";

import {SearchBar} from "./search-bar";
import {ProductTable} from "./product-table";

class FilterableProductTable extends Component{
    constructor(props) {
        super(props);

        this.state = {
            filter: "",
            inStockOnly: false
        }

        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.handleInStockChange = this.handleInStockChange.bind(this);
    }

    handleFilterChange(e) {
        this.setState({filter: e.target.value});
    }

    handleInStockChange(e) {
        this.setState({inStockOnly: e.target.checked});
    }

    render() {
        const {filter, inStockOnly} = this.state;

        const filteredProducts = this.props.products.filter(product => {
            const includesFilter = product.name.toLowerCase().includes(filter.toLowerCase());

            return includesFilter && !(inStockOnly && !product.stocked);
        });

        return (
            <div>
                <SearchBar
                    filter={filter}
                    onFilterChange={this.handleFilterChange}
                    inStockOnly={inStockOnly}
                    onInStockChange={this.handleInStockChange}
                />
                <ProductTable products={filteredProducts}/>
            </div>
        );
    }
}

export {FilterableProductTable};
