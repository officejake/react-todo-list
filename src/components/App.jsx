import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReminder, deleteReminder, clearReminders } from '../actions';
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

   deleteReminder(id) {
      this.props.deleteReminder(id);
   }

   handleSubmit(e) {
      e.preventDefault();
      e.target.reset();
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
                           <div 
                              className='deleteBtn'
                              onClick={() => this.deleteReminder(reminder.id)}
                           >
                           &#x2715;
                        </div>
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
               <form onSubmit={this.handleSubmit.bind(this)}>
                  <label>
                     <input
                        value={this.state.value}
                        className="form-control"
                        placeholder='Eviscerate the Proletariat'
                        onChange={event => this.setState({text: event.target.value})}
                        onKeyPress={event => {
                           if (event.key === 'Enter') {
                              this.addReminder()
                           }
                        }}
                        onSubmit={this.handleChange}
                     />
                     <div className="label-text"> I have to ... </div>
                  </label>
               </form>
               <button
                  type="button"
                  className="btnSubmit"
                  onClick={() => this.addReminder()}
               >
                  Add reminder
               </button>
            </div>
            { this.renderReminders() }
            <div>
               <button
                  type="button" 
                  className='clearBtn'
                  onClick={() => this.props.clearReminders()}
               >
               Clear All
               </button>
            </div>
         </div>
      )
   }
}

function mapStateToProps(state) {
   return {
      reminders: state
   }
}

export default connect(mapStateToProps, { addReminder, deleteReminder, clearReminders })(App);