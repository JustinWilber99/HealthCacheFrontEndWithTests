import { ActionTypes } from ".";

export interface Claim {
    id: number,
    userId: number,
    claimType: string,
    description: string,
    status: string
}

export interface FetchAllClaimsAction {
    type: ActionTypes.fetchAllClaims;
    payload: Claim[];
}

export interface AddClaimAction {
    type: ActionTypes.addClaim;
    payload: Claim;
}

export interface FetchUsersClaimsAction {
    type: ActionTypes.fetchUsersClaims;
    payload: Claim[];
}