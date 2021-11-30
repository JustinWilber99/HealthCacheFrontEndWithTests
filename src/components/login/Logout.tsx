import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { logoutUser } from "../../redux/actions";

export const Logout: React.FC<any> = () => {

    const dispatch = useDispatch();
    const appState = useSelector<any, any>((state) => state);
    let navigate = useNavigate();

    useEffect(() => {

    
        logoutUser()
        navigate("/Login");
        
        console.log(appState.userLogin.user_id);
    
});


    return(
        <div></div>
    )

}
