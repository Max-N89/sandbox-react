import React, {Component} from "react";

class TodoApp extends Component{
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            text: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        if (!this.state.text.length) {
            return;
        }

        const newItem = {
            text: this.state.text,
            id: Date.now()
        };
        this.setState(state => ({
            items: state.items.concat(newItem),
            text: ""
        }));
    }

    handleChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    render() {
        return (
            <section>
                <h2>Todo App</h2>
                <TodoList items={this.state.items}/>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="new_todo">
                        What needs to be done?
                    </label>
                    <input
                        id="new_todo"
                        type="text"
                        onChange={this.handleChange}
                        value={this.state.text}
                    />
                    <button>
                        Add #{this.state.items.length + 1}
                    </button>
                </form>
            </section>
        );
    }
}

class TodoList extends Component{
    render() {
        return (
            <ol>
                {
                    this.props.items.map(item => (
                        <li key={item.id}>{item.text}</li>
                    ))
                }
            </ol>
        );
    }
}

export default TodoApp;
