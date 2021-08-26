import React from "react";

function SandboxSection(props) {
    return (
        <section className="sandbox-section">
            <h2>{props.title}</h2>
            {props.children}
        </section>
    );
}

export {SandboxSection};
