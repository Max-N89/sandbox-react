import React, {Fragment} from "react";

import {HelloMessage} from "./react-home-page-examples/hello-message";
import {Timer} from "./react-home-page-examples/timer";
import {TodoApp} from "./react-home-page-examples/todo-app";
import {MarkdownEditor} from "./react-home-page-examples/markdown-editor";
import {Clock} from "./rendering-elements/clock";
import {ToggleButton} from "./handling-events/toggle-button";
import {LoginControl} from "./conditional-rendering/login-control/login-control";
import {Mailbox, messages as mailboxMessages} from "./conditional-rendering/mailbox";
import {Page} from "./conditional-rendering/page/page";
import {Blog, posts as blogPosts} from "./lists-and-keys/blog";
import {NameForm} from "./forms/name-form";
import {EssayForm} from "./forms/essay-form";
import {FlavorForm} from "./forms/flavor-form";
import {ReservationForm} from "./forms/reservation-form";
import {Calculator} from "./lifting-state-up/calculator";
import {WelcomeDialog} from "./composition/welcome-dialog"
import {SignUpDialog} from "./composition/sign-up-dialog";
import {FilterableProductTable} from "./thinking-in-react/filterable-product-table";
import filterableProducts from "./thinking-in-react/products.json";

/*
    BTW: sections (among other sections) and samples (among other samples) titles
        must be unique since they are used as a key property

    TODO: fix sections and samples titles usage as a key property
*/

const sectionDescription = {
    title: "React Official Documentation",
    samplesList: [
        {
            title: "Hello Message",
            instance: <HelloMessage to="Max"/>,
        },
        {
            title: "Timer",
            instance: <Timer/>,
        },
        {
            title: "Todo App",
            instance: <TodoApp/>,
        },
        {
            title: "Markdown Editor",
            instance: <MarkdownEditor/>,
        },
        {
            title: "Clock",
            instance: (
                <Fragment>
                    <Clock/>
                    <Clock/>
                    <Clock/>
                </Fragment>
            ),
        },
        {
            title: "Toggle Button",
            instance: <ToggleButton/>,
        },
        {
            title: "Login Control",
            instance: <LoginControl/>,
        },
        {
            title: "Mailbox",
            instance: <Mailbox inboxMessages={mailboxMessages}/>,
        },
        {
            title: "Page",
            instance: <Page/>,
        },
        {
            title: "Blog",
            instance: <Blog posts={blogPosts}/>,
        },
        {
            title: "Name Form",
            instance: <NameForm/>,
        },
        {
            title: "Essay Form",
            instance: <EssayForm/>,
        },
        {
            title: "Flavor Form",
            instance: <FlavorForm/>,
        },
        {
            title: "Reservation Form",
            instance: <ReservationForm/>,
        },
        {
            title: "Calculator",
            instance: <Calculator/>,
        },
        {
            title: "Welcome Dialog",
            instance: <WelcomeDialog/>,
        },
        {
            title: "Sign Up Dialog",
            instance: <SignUpDialog/>,
        },
        {
            title: "Filterable Products Table",
            instance: <FilterableProductTable products={filterableProducts}/>
        }
    ]
};

export {sectionDescription};
