import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {Subject} from '../../../redux/actions/subjects';
import { useNavigate } from 'react-router';


// import {useHistory} from "react-router";

import {
    Nav,
    Row,
    //CardGroup,
   // Card,
    //Col,
    //Form,
    //Button,
    Container,
  } from "react-bootstrap";

import {Discussion} from "./discussion-view"
import { SubjectCreation } from "./subject-creation";
import { fetchAllSubjects, fetchAllSubjectsByUser } from "../../../redux/actions";
import {fetchRecentSubjects} from "../../../redux/actions";
//import { fetchById } from '../../../redux/actions';

export const Discussions: React.FC<any> = () => {
    let usermock = {user_id:89, username:"ImpatientPatient"}; //change calls to usermock to match logedIn user
    //const [search, setSearch] = useState("");
    const dispatch = useDispatch();
    //let navigate = useNavigate();
    const [url, setUrl] = useState("/Discussion")
    const [activeSelection,SetActiveSelection] = useState('recent');
    const [loaded,setLoaded] = useState(false);
    const [lastest, setLastest] = useState(-1);

    const appState = useSelector<any, any>((state) => state);

    // const history = useHistory();

    //const toCreate = () => {
      //  history.push("/bookmarks");
      //};

      useEffect(()=>{
        loadSubjects2();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      },[activeSelection]);

      useEffect(()=>{ 
        console.log(appState);
          if(usermock.user_id < 0)
            SetActiveSelection('your');
          else
            SetActiveSelection('recent');
      }, []);

      useEffect(()=>{ 
        
        if(!loaded||lastest<0||(appState.singleSubject.id&&lastest!=appState.singleSubject.id))
        loadSubjects2();
    }, [appState]);
    
  

      /*
      useEffect(() => {
        (async () => {
          let iListings: Listing[] = []; // Intermediate listing array
          for await (let listing of getListingPreviewsByURL(props.url))
            iListings.push(listing);
          setListings(iListings);
        })();
      });
      */

      /*
      useEffect(()=>{        
        console.log(appState);      
      },[appState]);
      */

      const toDiscussion = () => {
        setLoaded(false);
        setUrl('/Discussion');
        //navigate('/Discussion')
        SetActiveSelection('your');
      }

      const toRecent = () => {
        setLoaded(false);
        setUrl('/Recent');
        //navigate('/Recent')
        SetActiveSelection('recent');
      }

      const loadSubjects2 = async () => {
        if(activeSelection==='your')
          await dispatch(
            fetchAllSubjectsByUser(usermock.user_id)            
          );
        else
          await dispatch(
            fetchRecentSubjects()
          );
          if(appState.subjects.length>0)
            if(activeSelection==='your')
              setLastest(appState.subjects[appState.subjects.length-1].id);
            else
              setLastest(appState.subjects[0].id);

          if(appState.subjects.length>0 && appState.subjects[0].id===lastest)
          setLoaded(true);
          
      }

      const loadSubjects = async () => {
        if (url === '/Discussion'){
          if (appState.userLogin.user_id === 0)
            await dispatch(
              fetchAllSubjects()
            );
          else
            await dispatch(
              fetchAllSubjectsByUser(appState.userLogin.user_id)
            );
        }    
        else if (url === '/Recent')
          await dispatch(
            fetchRecentSubjects()
          );
      }

      function YourDiscussionsOption() {
        
        if(usermock.user_id > 0){
          return (
              <Nav.Item onClick={toDiscussion}>
                <Nav.Link  className={activeSelection==='your'?'active':''}>Your Discussions</Nav.Link>
              </Nav.Item>)

        }
      }
      
      /*
      const loadRecent = async () => {
        await dispatch(
          fetchRecentSubjects()
        );
      }
      */
    
    /*
    const loadSubjectsByUser = async (user_id:number) => {
      await dispatch(
          fetchAllSubjectsByUser(user_id)
      );
    }
    */
      function renderCreateOption () {
        if(appState.userLogin.user_id!==0) //change to === to check logedIn user in appstate
          return(<></>);
        else 
          return(<SubjectCreation />);
      }

      return(
          <>
          <div className="mb-5">
              <Row>
                  {renderCreateOption()}
              </Row>
          </div>
          <div>
            <Container>
                <Nav className="justify-content-center" variant="tabs" defaultActiveKey='/Discussion'>
                    {YourDiscussionsOption()}
                    <Nav.Item onClick={toRecent}>
                        <Nav.Link className={activeSelection==='recent'?'active':''} >Recent</Nav.Link>
                    </Nav.Item>
                        
                </Nav>
                <Row>
                    {
                        appState.subjects.map((itm:any, idx:number) => {
                           return(
                             <div>
                            <Discussion key={idx} subject={itm}/>
                            <br/>
                            </div>
                           );
                        })
                    }
                </Row>

            </Container>
          </div>
          </>
      );      

};