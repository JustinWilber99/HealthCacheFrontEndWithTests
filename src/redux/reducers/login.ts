import {User, ActionTypes, Action} from "../actions";

let user :User = {
    addressLineOne: "",
    addressLineTwo: "",
    city: "",
    dob: "",
    email: "",
    firstName: "",
    gender: "",
    lastName: "",
    password: "",
    phoneNo: "",
    profpic: "",
    relationshipStatus: "",
    role: "",
    user_id: 0,
    username: "",
    zipcode: ""

}


export const loginReducer = (state:User = user, action: Action) => {
    console.log("In the LoginReduce With action "+ user + action.type.toString)
    switch (action.type) {
        case ActionTypes.login:
            return action.payload;
        case ActionTypes.logout:
            console.log("IN the Logout Reduces before changing the state!!")
            return action.payload;
        default:
            return state;
    }
}