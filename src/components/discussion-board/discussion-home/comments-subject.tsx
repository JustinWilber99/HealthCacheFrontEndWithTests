
import React, {useState, useRef, useEffect} from "react";
import { Container,Row,Col,Form,Modal,Button, ModalFooter } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import { FaCalendarAlt } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa";
import {AiFillLike} from "react-icons/ai";
import './comments.css';
import './discussion.css';
import { useDispatch, useSelector } from 'react-redux';
import { FetchAllMessagesAction, fetchAllMessages } from "../../../redux/actions";



import { CommentEditor } from "./comment-editor";
import {Message} from '../../../redux/actions/messages';



import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';


export const CommentThread : React.FC<any> = () => {
    const dispatch = useDispatch();
    const appState = useSelector<any, any>((state) => state);

      useEffect(()=>{        
      },[appState]);

      function renderCreateOption () {
        if(appState.userLogin.user_id!==0) //change to === to check logedIn user in appstate
          return(<></>);
        else 
          return(<CommentEditor id={appState.singleSubject.id}/>);
      }

    return(
       
        <>
        <div>
        <Row >
        <MainSubject/>
        </Row>

        <Row>
        {
            appState.singleSubject.messages.map((itm:any, idx:number) => {
                return(<Row className="centered">
                <Col xs={2}></Col>
                <Comment key={idx} subject={itm}/>
                <Col xs={2}></Col>
                </Row>
                );
            })
        }
        </Row>  

        
        <Row>{renderCreateOption()}</Row>
        
        </div>
        </>


    );
}

export const Comment : React.FC<any> = (message:any) => {

    useEffect(()=> {
        
    },[]);

    function displayContent(content:string):any {
        return {__html: content};
    }

    return(
        <div className = "comment shadow">
        <div >
            <div className="subject-profile">
                <img className="subject-image" src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg" width="50" height="50"/>
                <h4 className="subject-username">User: {message.subject.username.username}</h4>
            </div>

            <div className="subject-content">
                <div dangerouslySetInnerHTML={displayContent(message.subject.content)}></div>
            </div>
            <p className = "subject-date">  <FaCalendarAlt size = {18}/>    {new Date(message.subject.timestamp).toDateString()} </p>
        </div>
        </div>
    );

}


export const MainSubject : React.FC<any> = () => {
function displayContent(content:string):any {
    return {__html: content};
}
const appState = useSelector<any, any>((state) => state);

let [liked,setLiked] = useState(false);

function Liked() { 
    if(appState.singleSubject.votes.some((e:any) => e.id === 1)) //should be changed to the logged in user comparison
    {
        setLiked(true);
        return (<AiFillLike className="text-primary " size = {20}/>)
    }
    else {
        setLiked(false);
        return (<FaRegThumbsUp className="text-primary3" size = {20}/>)
    }
    
}

const handleLike = () => {
    if(liked)
        console.log('dislikeLogic');
    else
        console.log('likeLogic');
}

    return(
        <div className="shadow">
        <Row>
            <div><br></br></div>
        </Row>
    <Row>
    <Col xs = {1}></Col>
    <Col xs={1}>
            <img className="subject-image" src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg" width="80" height="80"/>
    </Col>
    <Col xs={6}><h2 className="text-primary "><strong>{appState.singleSubject.username.username}</strong></h2>
    <Row className="text-primary3">
        <div dangerouslySetInnerHTML={displayContent(appState.singleSubject.content)}></div>
    </Row>
    </Col>
    <Col className="text-primary3" xs={4}> <FaCalendarAlt className="text-primary" /> {appState.singleSubject.timestamp}
    
    <Row>
        <Col xs = {3}>
            
        </Col>
        <Col xs = {1}>
        <Row>
            <div><br></br></div>
        </Row>
           <button type = "button" className = "like" onClick={handleLike}><Liked/></button>
            <Row>
                <Col xs = {2}></Col>
                <Col className="text-primary" xs = {2}>{appState.singleSubject.votes.length}</Col>
            </Row>
        </Col>
    </Row>
    </Col>
    </Row>   
    <Row>
        <div><br></br></div>
    </Row>
   <Row>
        <div><br></br></div>
    </Row>


    <Row>
        <div><br></br></div>
    </Row>
   <Row>
        <div><br></br></div>
    </Row>
    </div>
    );
}