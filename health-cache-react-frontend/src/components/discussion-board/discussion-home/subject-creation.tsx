
import React, {useState, useEffect} from "react";
import { Container,Row,Col,Modal,Button, ModalFooter } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { createSubject} from "../../../redux/actions";

import 'bootstrap/dist/css/bootstrap.min.css';
import ModalHeader from "react-bootstrap/esm/ModalHeader";

import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import './subject-creation.css';
import './discussion.css';


import { FaPlusSquare } from "react-icons/fa";


export const SubjectCreation : React.FC<any> = () => {
  const maxCharacterNumber : number = 500 ;
  const dispatch = useDispatch();

  const handleClose = () => {setShow(false); setConvertedText('');};
  const handleShow = () => setShow(true);

  const [show, setShow] = useState(false);
  const [convertedText, setConvertedText] = useState("");
  const [charCounter, setCharCounter] = useState(0);
  


    useEffect(()=>{
        console.log(convertedText);
    },[convertedText]);

    

    const countCharacters = (e:any)=>{


        if(e.key === 'Backspace' && charCounter!==0 )
            setCharCounter(charCounter-1);
        else if(e.key !== 'Backspace' && charCounter < maxCharacterNumber)
            setCharCounter(charCounter+1);
        
        if(charCounter >= maxCharacterNumber){
            e.preventDefault();
            //setCharCounter(charCounter-1);
            return;
        }

        console.log(charCounter);
    }

    const deleteSpaces = (text:string) => {
        text =text.replaceAll("<p><br></p>",'');
        text =text.replaceAll("<h1><br></h1>",'');
        text =text.replaceAll("<h2><br></h2>",'');
        text =text.replaceAll("<h3><br></h3>",'');
        text =text.replaceAll("<li><br></li>",'');
        return text;
    }

    const seeDate = () => {
        let date:Date = new Date();
        console.log(date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+' '+date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds());

    }

    const createSubjectAsync = async () => {
        let date:Date = new Date();
        dispatch(
            createSubject({
              
              content:deleteSpaces(convertedText),
              timestamp:date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+' '+(date.getHours()+5) + ':' + date.getMinutes() + ':' + date.getSeconds(),
              user_id:89, //This should be the logged in user info
              username:"ImpatientPatient"
          
          })
        );
        handleClose();
    }

    return (
        <div className = "create-thread">
            
            <button className="bg-primary3 text-primary2 rounded" type = "button"><FaPlusSquare size = {25} onClick={handleShow}/> Create New Thread</button>
            <Modal show={show} onHide={handleClose} size="lg" centered>
          <ModalHeader className="bg-primary text-primary2">Create new subject</ModalHeader>
            <Container>
            {/*Modal header*/}
            <br/>
            <Row>
                <Col xs={8} id="modal">
                <ReactQuill 
                    onKeyDown = {countCharacters}
                    className="textEditor"
                    placeholder = "Type your discussion here!"
                    theme='snow'
                    value={convertedText}
                    onChange={setConvertedText}
                />

                </Col>
                <Col xs={1} ></Col>
                <Col xs={3} >
                    <ul className="bg-primary3 text-primary2 textEditor rounded">
                        <li>Rule 1</li>
                        <li>Rule 2</li>
                        <li>Rule 3</li>
                    </ul>
                </Col>

     
            </Row >
            <ModalFooter >
            <Button className="bg-primary3 text-primary2 border-primary3" onClick={handleClose}>Cancel</Button>
            <Button className="bg-primary text-primary2" onClick={createSubjectAsync}>Publish</Button>

            
            </ModalFooter>
        </Container>
        
        </Modal>
        </div>
        
        
    )
}

/*
 </Row>
            <ModalFooter>
            
            <Button variant="secondary" onClick={handleClose}>Cancel</Button>
            <Button variant="primary" onClick={createSubjectAsync}>Publish</Button>
*/