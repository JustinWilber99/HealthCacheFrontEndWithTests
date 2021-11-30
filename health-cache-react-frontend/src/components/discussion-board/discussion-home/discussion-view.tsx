import React, { useEffect } from 'react';
import './discussion.css';
import { FaCalendarAlt } from "react-icons/fa";
import { FaCommentDots } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaPlusSquare } from "react-icons/fa";
import { fetchById } from '../../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';



export const Discussion:React.FC<any> = ({subject}) => {

    const dispatch = useDispatch();
    let navigate = useNavigate();
    const appState = useSelector<any, any>((state) => state);


    useEffect(() => {
    },[appState]);

    const LoadDiscussion = () => {
        getByID().then(()=>{console.log(appState);navigate("/DiscussionView")});
    }

    const getByID = async () => {
        await dispatch(
            fetchById(subject.id)
        );
    }

    function displayContent(content:string):any {
        return {__html: content};
    }

    return(
        <>
        <div className="subject shadow bg-secondary3 rounded">
        <div className="subject-container text-black">
            <div className="subject-profile">
                <img alt="profile-img" className="subject-image" src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg" width="50" height="50"/>
                <h3 className="subject-username text-primary"><strong>User: {subject.username.username}</strong></h3>
            </div>
            <div className="subject-content text-black text-primary3">
                <div dangerouslySetInnerHTML={displayContent(subject.content)}></div>
            </div>
            <p className = "subject-date overflow-wrap text-black text-wrap text-primary3">  <FaCalendarAlt className="text-primary" size = {18}/>    {new Date(subject.timestamp).toDateString()} {new Date(subject.timestamp).toLocaleTimeString()}</p>
            </div>
        <div className = "subject-comment ">
            <button type="button" onClick = {LoadDiscussion}><FaCommentDots className="text-primary" size = {45}/></button>
            <p>{subject.messages.length}</p>
        </div>

        <div className = "subject-likes">
            <button type="button"><FaRegThumbsUp className="text-primary" size = {40}/></button>
            <p>{subject.votes.length}</p>
        </div>
        </div>
        <hr/>
        </>
    );
}

export const NewThread:React.FC<any> = (subject:any) =>{
    return(
        <div className = "create-thread"><button type = "button"><FaPlusSquare size = {25}/> Create New Thread</button></div>
    );
}

