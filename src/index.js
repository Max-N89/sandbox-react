import React, {Fragment} from "react";
import ReactDOM from "react-dom";

import "normalize.css";
import "./styles.css";

const sandboxContainer = document.createElement("main");
sandboxContainer.id = "sandbox_container";
document.body.append(sandboxContainer);

import HelloMessage from "./sandbox/react-home-page-examples/HelloMessage";
import Timer from "./sandbox/react-home-page-examples/Timer";
import TodoApp from "./sandbox/react-home-page-examples/TodoApp";
import MarkdownEditor from "./sandbox/react-home-page-examples/MarkdownEditor";

ReactDOM.render(
    <Fragment>
        <HelloMessage name="Max"/>
        <Timer/>
        <TodoApp/>
        <MarkdownEditor/>
    </Fragment>,
    sandboxContainer
);
