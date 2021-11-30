import axios from "axios";
import { Message } from "./messages";
import {Dispatch} from "redux";
import {ActionTypes} from "./types";

//const urlApi = `http://localhost:8092/subject/` ; //to be set with API host/subject
const urlApi = `/subject/`;

export interface Subject{
    subject_id: number
    username_id: number,
    content: string,
    timestamp: string,
    messages: Message,
    votes: number
}

export interface FetchAllSubjectsAction{
    type: ActionTypes.fetchAllSubjects;
    payload: Subject[];
}

export interface FetchAllSubjectsByUserAction{
    type: ActionTypes.fetchAllSubjectsByUser;
    payload: Subject[];
}

export interface createSubjectAction{
    type: ActionTypes.createSubject;
    payload: Subject[];
}

export const fetchAllSubjects = () => {
    return async (dispatch: Dispatch) => {
        const resp = await axios.get<Subject[]>(urlApi+'getall')
        dispatch<FetchAllSubjectsAction>({
            type: ActionTypes.fetchAllSubjects,
            payload: resp.data
        })
    }
}

export const fetchAllSubjectsByUser = (id:number) => {
    return async (dispatch: Dispatch) => {
        const resp = await axios.get<Subject[]>(urlApi+'getbyuserid?id='+id)
        dispatch<FetchAllSubjectsByUserAction>({
            type: ActionTypes.fetchAllSubjectsByUser,
            payload: resp.data
        })
    }
}


export interface fetchRecentSubjects {
    type: ActionTypes.fetchRecentSubjects,
    payload: Subject[]
}

export interface fetchByIdAction {
    type: ActionTypes.fetchById,
    payload: Subject[]
}

export const fetchRecentSubjects = () => {
    return async (dispatch: Dispatch) => {
        const resp = await axios.get<Subject[]>(urlApi+'getlatestten')
        dispatch<fetchRecentSubjects>({
            type: ActionTypes.fetchRecentSubjects,
            payload: resp.data
        })
    }
}

export interface ISubject{
    content:string,
    timestamp:string,
    user_id:number,
    username:string
}

export const createSubject = (subject:ISubject) => {
    return async (dispatch: Dispatch) => {
    const resp = await axios.post<Subject[]>(urlApi+'create',subject)
        dispatch<createSubjectAction>({
            type: ActionTypes.createSubject,
            payload: resp.data
        })
    }
}


export const fetchById = (id:number) =>{
    return async (dispatch: Dispatch) =>{
        const resp = await axios.get<Subject[]>(urlApi+'getbyid?id=' +  id);
        dispatch<fetchByIdAction>({
            type: ActionTypes.fetchById,
            payload: resp.data
        })
    }
}   
