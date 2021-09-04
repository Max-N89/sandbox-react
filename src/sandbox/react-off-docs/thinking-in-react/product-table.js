import React, {Component} from "react";

import {ProductCategoryRow} from "./product-category-row";
import {ProductRow} from "./product-row";

function ProductTable(props) {
    const rows = [];
    let lastCategory = null;

    props.products.forEach(product => {
        if (product.category !== lastCategory) {
            rows.push(<ProductCategoryRow key={product.category} category={product.category}/>)
        }

        rows.push(<ProductRow key={product.name} product={product}/>);
        lastCategory = product.category;
    });

    return (
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
            </thead>
            <tbody>
            {rows}
            </tbody>
        </table>
    );
}

export {ProductTable};
