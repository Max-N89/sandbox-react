import React, {Fragment} from "react";
import ReactDOM from "react-dom";

import "normalize.css";
import "./styles.css";

import {SandboxSampleContainer} from "./components/sandbox-sample-container";
import {SandboxSection} from "./components/sandbox-section";

import {sectionDescription as reactOffDocsSectionDescription} from "./sandbox/react-off-docs/section-description";

const sandboxHeader = document.createElement("header");
const sandboxContainer = document.createElement("main");

sandboxHeader.id = "sandbox_header";
sandboxContainer.id = "sandbox_container";

document.body.prepend(sandboxHeader,  sandboxContainer);

ReactDOM.render(<h1>React Sandbox</h1>, sandboxHeader);
ReactDOM.render(
    <Fragment>
        {
            [
                reactOffDocsSectionDescription,

            ].map(({title, samplesList}) => (
                // TODO: fix sections titles usage as a key property
                <SandboxSection key={title} title={title}>
                    {
                        // TODO: fix samples titles usage as a key property
                        samplesList.map(({title, instance}) => (
                            <SandboxSampleContainer key={title} title={title}>
                                {instance}
                            </SandboxSampleContainer>
                        ))
                    }
                </SandboxSection>
            ))
        }
    </Fragment>,
    sandboxContainer
);
