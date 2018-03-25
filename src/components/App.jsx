import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReminder } from '../actions';
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
            <ul className='reminderList'>
                {
                    reminders.map(reminder => {
                        return (
                            <li className='reminderItem' key={reminder.id}>
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
                <div>
                    <div className="form-group">
                    <label>
                        <input
                            className="form-control"
                            onChange={event => this.setState({text: event.target.value})}
                        />
                        <div className="label-text"> I have to ... </div>
                    </label>
                    </div>
                    <button
                        type="button"
                        className="btnSubmit"
                        onClick={() => this.addReminder()}
                    >
                    Add reminder
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