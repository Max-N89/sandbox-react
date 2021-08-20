import React, {Fragment} from "react";
import ReactDOM from "react-dom";

import "normalize.css";
import "./styles.css";

const sandboxContainer = document.createElement("main");
sandboxContainer.id = "sandbox_container";
document.body.append(sandboxContainer);


// React official documentation
import HelloMessage from "./sandbox/react-off-docs/react-home-page-examples/hello-message";
import Timer from "./sandbox/react-off-docs/react-home-page-examples/timer";
import TodoApp from "./sandbox/react-off-docs/react-home-page-examples/todo-app";
import MarkdownEditor from "./sandbox/react-off-docs/react-home-page-examples/markdown-editor";
import Clock from "./sandbox/react-off-docs/rendering-elements/clock";
import ToggleButton from "./sandbox/react-off-docs/handling-events/toggle-button";
import LoginControl from "./sandbox/react-off-docs/conditional-rendering/login-control/login-control";
import {Mailbox, messages as mailboxMessages} from "./sandbox/react-off-docs/conditional-rendering/mailbox/mailbox";
import Page from "./sandbox/react-off-docs/conditional-rendering/page/page";

ReactDOM.render(
    <Fragment>
        <HelloMessage to="Max"/>
        <Timer/>
        <TodoApp/>
        <MarkdownEditor/>
        <section>
            <Clock/>
            <Clock/>
            <Clock/>
        </section>
        <section>
            <ToggleButton/>
        </section>
        <LoginControl/>
        <Mailbox inboxMessages={mailboxMessages}/>
        <Page/>
    </Fragment>,
    sandboxContainer
);
