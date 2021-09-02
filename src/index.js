import React, {Fragment} from "react";
import ReactDOM from "react-dom";

import "normalize.css";
import "./global.css";

import {Container} from "./components/container";
import {Lens} from "./components/lens";

import {sectionDescription as reactOffDocsSectionDescription} from "./sandbox/react-off-docs/section-description";

const mainHeader = document.createElement("header");
const mainContent = document.createElement("main");

mainHeader.id = "main_header";
mainContent.id = "main_content";

document.body.prepend(mainHeader,  mainContent);

ReactDOM.render(<h1>React Sandbox</h1>, mainHeader);
ReactDOM.render(
    <Fragment>
        {
            [
                reactOffDocsSectionDescription,

            ].map(({title, samplesList}) => (
                // TODO: fix sections titles usage as a key property
                <Container
                    key={title}
                    className="section"
                    header={
                        <h2>{title}</h2>
                    }
                    content={
                        // TODO: fix samples titles usage as a key property
                        samplesList.map(({title, instance}) => (
                            <Container
                                key={title}
                                className="sample"
                                header={
                                    <h3>{title}</h3>
                                }
                                content={
                                    <Lens>
                                        {instance}
                                    </Lens>
                                }
                            />
                        ))
                    }
                />
            ))
        }
    </Fragment>,
    mainContent
);
