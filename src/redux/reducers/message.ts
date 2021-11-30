import {Message,ActionTypes,Action} from "../actions";

export const messagesReducer = (state: Message[] = [], action: Action) => {
    switch (action.type) {
        case ActionTypes.fetchAllMessages:
            return action.payload;
        case ActionTypes.createMessage:
            return action.payload;
        default:
            return state;
    }
}