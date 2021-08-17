import React, {Component} from "react";
import {Remarkable} from "remarkable";

class MarkdownEditor extends Component{
    constructor(props) {
        super(props);
        this.state = { value: 'Hello, **world**!' };
        this.md = new Remarkable();
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        });
    }

    getRawMarkup() {
        return { __html: this.md.render(this.state.value) };
    }

    render() {
        return (
            <section className="MarkdownEditor">
                <h2>Input</h2>
                <label htmlFor="markdown-content">
                    Enter some markdown
                </label>
                <textarea
                    id="markdown-content"
                    onChange={this.handleChange}
                    defaultValue={this.state.value}
                >
                </textarea>
                <h2>Output</h2>
                <div
                    className="content"
                    dangerouslySetInnerHTML={this.getRawMarkup()}
                >
                </div>
            </section>
        );
    }
}

export default MarkdownEditor
