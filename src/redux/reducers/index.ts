import {combineReducers} from "redux";
import {usersReducer} from "./users";
import { User} from "../actions";
import { Claim } from "../actions/claims";
import {loginReducer} from "./login";
import { ClaimsReducer } from "./claims-reducer";
import { Subject,Message } from "../actions";
import { subjectsReducer } from "./subjects";
import { singleSubjectsReducer } from "./individualSubject";
import { messagesReducer } from "./message";


export interface StoreState{
    users: User[];
    userLogin: User;
    claims: Claim[];
    messages: Message[];
    subjects: Subject[];
    singleSubject:Subject[];
}

export const reducers = combineReducers<StoreState>({
    users: usersReducer,
    userLogin: loginReducer,
    claims: ClaimsReducer,
    messages: messagesReducer,
    subjects:subjectsReducer,
    singleSubject:singleSubjectsReducer
});