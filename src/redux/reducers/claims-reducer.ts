//import { useSelector } from "react-redux";
import { Action, ActionTypes } from "../actions";
import { Claim } from "../actions/claims";
//import { User } from "../actions/users";

let claims: Claim[] = [];

export const ClaimsReducer = (state: Claim[] = claims, action: Action) => {
  switch (action.type) {
    case ActionTypes.fetchAllClaims:
      return action.payload;
    default:
      return state;
  }
};

export const getUserClaims = (userId: number) => {};
