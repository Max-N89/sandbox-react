import React from "react";

import "./container.css";

function Container(props) {
    const {
        className,
        header,
        content
    } = props;

    return (
        <section className={`${className} container`}>
            <header>
                {header}
            </header>
            <section className="content">
                {content}
            </section>
        </section>
    );
}

export {Container};
