import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS } from '../constants';

export const addReminder = (text) => {
    const action = {
        type: ADD_REMINDER,
        text
    }
    console.log('action performed in addReminder', action);
    return action;
}

export const deleteReminder = (id) => {
    const action = {
        type: DELETE_REMINDER,
        id
    }
    return action;
}

export const clearReminders = () => {
    return {
        type: CLEAR_REMINDERS,
    }
}