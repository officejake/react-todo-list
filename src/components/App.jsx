import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReminder } from '../actions';
import '../index.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    addReminder() {
        this.props.addReminder(this.state.text);
    }

    renderReminders(){
        const { reminders } = this.props;
        return (
            <ul>
                {
                    reminders.map(reminder => {
                        return (
                            <li key={reminder.id}>
                                <div>{reminder.text}</div>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }

    render() {
        return (
            <div className="App">
                <div className="title">
                    It's a To-Do List?
                </div>
                <div>
                <div className="form-group">
                    <input
                        className="form-control"
                        placeholder="I have to..."
                        onChange={event => this.setState({text: event.target.value})}
                    />
                </div>
                <button
                    type="button"
                    className="btnSubmit"
                    onClick={() => this.addReminder()}
                >
                Add to List!
                </button>
                </div>
                { this.renderReminders() }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        reminders: state
    }
}

export default connect(mapStateToProps, { addReminder })(App);