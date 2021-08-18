import React, {Fragment} from "react";
import ReactDOM from "react-dom";

import "normalize.css";
import "./styles.css";

const sandboxContainer = document.createElement("main");
sandboxContainer.id = "sandbox_container";
document.body.append(sandboxContainer);

import HelloMessage from "./sandbox/react-off-docs/react-home-page-examples/hello-message";
import Timer from "./sandbox/react-off-docs/react-home-page-examples/timer";
import TodoApp from "./sandbox/react-off-docs/react-home-page-examples/todo-app";
import MarkdownEditor from "./sandbox/react-off-docs/react-home-page-examples/markdown-editor";

ReactDOM.render(
    <Fragment>
        <HelloMessage to="Max"/>
        <Timer/>
        <TodoApp/>
        <MarkdownEditor/>
    </Fragment>,
    sandboxContainer
);


/* ticking clock example

import tick from "./sandbox/react-off-docs/rendering-elements/ticking-clock";

setInterval(() => tick(sandboxContainer.id), 1e3);

*/
