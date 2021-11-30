import {FetchAllUsersAction} from "./users";
import {LoginUserAction, LogoutUserAction} from "./login";
import { AddClaimAction, FetchAllClaimsAction, FetchUsersClaimsAction } from "./claims";
import {FetchAllSubjectsAction} from "./subjects"
import {FetchAllMessagesAction, createMessageAction} from "./messages"
//import { createSubject } from "./subjects";
//import { createSubjectAction } from ".";
import {fetchRecentSubjects} from "./subjects"
import { FetchAllSubjectsByUserAction } from "./subjects";
import { fetchById, fetchByIdAction, createSubjectAction } from "./subjects";

export enum ActionTypes{
    fetchaAllUsers,
    login,
    logout,
    register,
    fetchAllClaims,
    addClaim,
    fetchUsersClaims,
    fetchAllSubjects,
    fetchAllMessages,
    createSubject,
    fetchAllSubjectsByUser,
    fetchRecentSubjects,
    fetchById,
    createMessage
}


export type Action = FetchAllUsersAction | LoginUserAction | LogoutUserAction | FetchAllClaimsAction | AddClaimAction | FetchUsersClaimsAction | FetchAllSubjectsAction | FetchAllMessagesAction | FetchAllSubjectsByUserAction  | fetchRecentSubjects | fetchByIdAction | createSubjectAction | createMessageAction
    ;
