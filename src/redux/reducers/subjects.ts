import {Subject,ActionTypes,Action} from "../actions";

export const subjectsReducer = (state: Subject[] = [], action: Action) => {
    switch (action.type) {
        case ActionTypes.fetchAllSubjects:
            return action.payload;
        case ActionTypes.fetchAllSubjectsByUser:
            return action.payload;
        case ActionTypes.fetchRecentSubjects:
            return action.payload;
        default:
            return state;
    }
}
