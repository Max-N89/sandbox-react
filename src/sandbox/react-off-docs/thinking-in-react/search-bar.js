import React from "react";

function SearchBar(props){
    const {
        filter,
        onFilterChange,
        inStockOnly,
        onInStockChange,
    } = props;

    return (
        <form onSubmit={e => e.preventDefault()}>
            <input
                type="text"
                placeholder="Search..."
                value={filter}
                onChange={onFilterChange}
            />
            <p>
                <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={onInStockChange}
                />
                {" "}
                Only show products in stock
            </p>
        </form>
    );
}

export {SearchBar};
