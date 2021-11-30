import axios from "axios";
import {Dispatch} from "redux";
import {ActionTypes} from "./types";

//const urlApi = `http://localhost:8092/message/` ; //to be set with API host/message
const urlApi = `/message/`;

export interface Message{
    message_id: number,
    subject_id: number,
    username_id: number,
    content: string,
    timestamp: string
    
}

export interface FetchAllMessagesAction{
    type: ActionTypes.fetchAllMessages;
    payload: Message[];
}

export const fetchAllMessages = () => {
    return async (dispatch: Dispatch) => {
        const resp = await axios.get<Message[]>(urlApi+'getall')
        dispatch<FetchAllMessagesAction>({
            type: ActionTypes.fetchAllMessages,
            payload: resp.data
        })
    }
}

export interface createMessageAction{
    type: ActionTypes.createMessage;
    payload: Message[];
}

export interface IMessageCreation{
    content:string,
    timestamp:string,
    subject_id:number,
    user_id:number,
    username:string
}

export const createMessage = (message:IMessageCreation) => {
    return async (dispatch: Dispatch) => {
        console.log("im here and message is");
        console.log(message);
        const resp = await axios.post<Message[]>(urlApi+'create',message)
        dispatch<createMessageAction>({
            type: ActionTypes.createMessage,
            payload: resp.data
        })
    }
}