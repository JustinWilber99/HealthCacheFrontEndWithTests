
import React, { useEffect } from 'react';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';
import { useState } from 'react';
import './claims/claims.css';




const DarkModeCheckBox: React.FC<any> = () => {

    let sessionDarkModeEnabled = sessionStorage.getItem("DarkModeEnabled");
    const [darkMode, setDarkMode] = useState(sessionDarkModeEnabled === "True");
  
    // Handle page switch and maintain dark mode
    useEffect(() => {
  
      if (darkMode && sessionDarkModeEnabled)
      {
        document.body.className = "body-dk";

        try {
        //login - //container shadow p-3 mb-5 bg-secondary3 text-black rounded
        document.getElementById("login-container")?.classList.add("container-dg");
        document.getElementById("login-container")?.classList.remove("bg-secondary3");
        document.getElementById("login-container")?.classList.remove("text-black");
        } catch(e){console.log(e);}
        
        try {
        // id="register-container" className="container bg-secondary3 shadow p-3 mb-5 rounded"
        document.getElementById("register-container")?.classList.add("container-dg");
        document.getElementById("register-container")?.classList.remove("bg-secondary3");
      } catch(e){console.log(e);}

      try {
        // className="subject shadow bg-primary2"
        let subjectDivs = document.getElementsByClassName("subject");
        Array.from(subjectDivs).forEach(d => {
          d.classList.add("container-dg");
          d.classList.remove("bg-secondary3");
        });
      } catch(e){console.log(e);}

      try {

        document.getElementById("table-container")?.classList.add("container-dg");
        document.getElementById("table-container")?.classList.remove("bg-secondary3");
        document.getElementById("table-container")?.classList.add("white-text");

        //container-lg
        let modalDivs = document.getElementsByClassName("container-lg");
        console.log(modalDivs);
        Array.from(modalDivs).forEach(d => {
          d.classList.add("container-dg");
          d.classList.remove("container-lg");
        });
      } catch(e){console.log(e);}

      }
      else
      {
        document.body.className = "body-lt";

        try {
        //login - //container shadow p-3 mb-5 bg-secondary3 text-black rounded
        document.getElementById("login-container")?.classList.remove("container-dg");
        document.getElementById("login-container")?.classList.add("bg-secondary3");
        document.getElementById("login-container")?.classList.add("text-black");
        } catch(e){console.log(e);}
        
        try {
        // id="register-container" className="container bg-secondary3 shadow p-3 mb-5 rounded"
        document.getElementById("register-container")?.classList.remove("container-dg");
        document.getElementById("register-container")?.classList.add("bg-secondary3");
        } catch(e){console.log(e);}

        try {
        // className="subject shadow bg-secondary3"
        let subjectDivs = document.getElementsByClassName("subject");
        Array.from(subjectDivs).forEach(d => {
        d.classList.remove("container-dg");
        d.classList.add("bg-secondary3");
        });
        } catch(e){console.log(e);}

        try {
        //container-lg - file a claim - table-container
          document.getElementById("table-container")?.classList.remove("container-dg");
          document.getElementById("table-container")?.classList.add("bg-secondary3");
          document.getElementById("table-container")?.classList.remove("white-text");

        let modalDivs = document.getElementsByClassName("container-dg");
        Array.from(modalDivs).forEach(d => {
        d.classList.remove("container-dg");
        d.classList.add("container-lg");
        });
        } catch(e){console.log(e);}

      }
      

      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sessionDarkModeEnabled]); 

    return (
        <>
    <ButtonGroup className="mb-1">
    <ToggleButton
      className="dark-mode-btn"
      id="toggle-check"
      type="checkbox"
      variant="dark"
      size="sm"
      checked={darkMode}
      value="1"
      onChange={(e) => 
        { 
            let enabled = e.currentTarget.checked;
            sessionStorage.setItem("DarkModeEnabled", enabled ? "True": "False");
            setDarkMode(enabled);
            document.body.className = darkMode ? "body-lt": "body-dk";
        }}
    >
      DarkMode
    </ToggleButton>
  </ButtonGroup>
  </>
    )

}

export default DarkModeCheckBox;