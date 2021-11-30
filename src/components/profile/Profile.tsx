import React, { useEffect, useState } from 'react';
import { User } from "../../redux/actions";
import { StoreState } from "../../redux/reducers";
import { connect, useSelector } from "react-redux";
import './Profile.Module.css';
import { Button } from "reactstrap";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils';
import './ProfilePic.css';


interface ProfileProps {
    userLogin: User;
}


const _Profile: React.FC<ProfileProps> = (props) => {
    const navigate = useNavigate();

    const appState = useSelector<any, any>((state) => state);


    const [editMode, setEditMode] = useState(false)
    const [username, setUserName] = useState(appState.userLogin.username)
    const [password, setPassword] = useState(appState.userLogin.password)
    const [firstName, setFirstName] = useState(appState.userLogin.firstName)
    const [lastName, setLastName] = useState(appState.userLogin.lastName)
    // @ts-ignore
    const [dob, setDob] = useState(Date.parse(appState.userLogin.dob))
    const [gender, setGender] = useState(appState.userLogin.gender)
    const [email, setEmail] = useState(appState.userLogin.email)
    const [phoneNo, setPhoneNo] = useState(appState.userLogin.phoneNo)
    const [addressLineOne, setAddressLineOne] = useState(appState.userLogin.addressLineOne)
    const [addressLineTwo, setAddressLineTwo] = useState(appState.userLogin.addressLineTwo)
    const [city, setCity] = useState(appState.userLogin.city)
    const [zipcode, setZipCode] = useState(appState.userLogin.zipcode)
    const [relationshipStatus, setRelationshipStatus] = useState(appState.userLogin.relationshipStatus)
    const [profilePic, setProfilePic] = useState(appState.userLogin.profilePic)

    const renderPic = (): string => {
        console.log(profilePic);
        if (profilePic === null || profilePic === "") {
            return "https://projecttrackerbucket.s3.us-west-1.amazonaws.com/default-profile-pic.jpg"; //replace URLs with HealthCache S3 url
        } else {
            return "https://projecttrackerbucket.s3.us-west-1.amazonaws.com/" + profilePic;
        }
    }



    useEffect(() => {
        console.log(appState)
        if (appState.userLogin.user_id === 0) {
            // @ts-ignore
            navigate("/login");
        }
        console.log(appState.userLogin)
    }, [editMode]);

    const imageHandler = async (e: any) => {
        console.log("in imageHandler method");

        const data = new FormData();
        data.append("file", e.target.files[0]);

        //-----Replace URL with the EC2 HealthCache URL
        //const apiRespose = await axios.post("http://localhost:8083/api/file/upload", data);
        //const apiRespose = await axios.post("http://ec2-3-140-252-233.us-east-2.compute.amazonaws.com:9090/file/upload", data);
        const apiRespose = await axios.post("/file/upload", data);

        console.log(apiRespose);
        setProfilePic(apiRespose.data);

    };


    return (
        <section>
            <div className="container rounded bg-white mt-5 mb-5 text-primary3">
                <div className="row">
                    <div className="col-md-3 border-right">
                        <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img
                            className="rounded-circle mt-5" width="150px"
                            src={renderPic()} />
                            <span
                                className="font-weight-bold">{firstName}</span><span
                                    className="text-black-50">{email}</span><span> </span>
                            <input type="file" accept="image/*" name="image-upload" id="input" onChange={imageHandler} />
                            <div className="label">
                                <label className="image-upload" htmlFor="input">

                                    Select photo
                                </label>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-5 border-right">
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h4 className="text-right">Profile Settings</h4>
                                <Button className={"center bg-primary border-primary text-primary2"} onClick={() => setEditMode(!editMode)}>Update Profile Info</Button>

                            </div>
                            {editMode ? <section>
                                <div className="row mt-2 ">
                                    <div className="col-md-6 "><label className="labels">First Name</label><input type="text"
                                        className="form-control"
                                        placeholder="first name"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                    </div>
                                    <div className="col-md-6"><label className="labels">Last Name</label><input type="text"
                                        className="form-control"
                                        value={lastName}
                                        placeholder="Last Name"
                                        onChange={(e) => setLastName(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-12"><label className="labels">Username</label><input
                                        type="text" className="form-control" placeholder="enter Username"
                                        value={username}
                                        onChange={(e) => setUserName(e.target.value)} />
                                    </div>
                                    <div className="col-md-12"><label className="labels">Password</label><input
                                        type="password" className="form-control" placeholder="enter password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                    <div className="col-md-12"><label className="labels">Date Of Birth</label>
                                        <br />
                                        <DatePicker className={"form-control"}
                                            closeOnScroll={true}
                                            // @ts-ignore
                                            selected={dob}
                                            // @ts-ignore
                                            onChange={(date: Date) => setDob(date)}
                                        />
                                    </div>
                                    <div className="col-md-12"><label className="labels">Gender</label><input
                                        type="text" className="form-control" placeholder="Gender"
                                        value={gender}
                                        onChange={(e) => setGender(e.target.value)}
                                    />
                                    </div>
                                    <div className="col-md-12"><label className="labels">Relationship Status</label><input
                                        type="text" className="form-control" placeholder="Relationship Status"
                                        value={relationshipStatus}
                                        onChange={(e) => setRelationshipStatus(e.target.value)} />
                                    </div>
                                    <div className="col-md-12"><label className="labels">Mobile Number</label><input
                                        type="text" className="form-control" placeholder="enter phone number"
                                        value={phoneNo}
                                        onChange={(e) => setPhoneNo(e.target.value)} />
                                    </div>
                                    <div className="col-md-12"><label className="labels">Address Line 1</label><input
                                        type="text" className="form-control" placeholder="enter address line 1"
                                        value={addressLineOne}
                                        onChange={(e) => setAddressLineOne(e.target.value)} />
                                    </div>
                                    <div className="col-md-12"><label className="labels">Address Line 2</label><input
                                        type="text" className="form-control" placeholder="enter address line 2"
                                        value={addressLineTwo}
                                        onChange={(e) => setAddressLineTwo(e.target.value)} />
                                    </div>
                                    <div className="col-md-12"><label className="labels">City</label><input
                                        type="text" className="form-control" placeholder="enter City"
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)} />
                                    </div>
                                    <div className="col-md-12"><label className="labels">ZipCode</label><input type="text"
                                        className="form-control"
                                        placeholder="enter address line 2"
                                        value={zipcode}
                                        onChange={(e) => setZipCode(e.target.value)} />
                                    </div>
                                    <div className="col-md-12"><label className="labels">Email</label><input type="text"
                                        className="form-control"
                                        placeholder="enter email address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                </div>
                                <div className="mt-5 text-center">
                                    <Button className="btn btn-primary profile-button" type="button">Save Profile</Button>
                                </div>
                            </section> :
                                <section>
                                    <div className="row mt-2">
                                        <div className="col-md-6"><label className="labels">First Name</label><input disabled type="text"
                                            className="form-control"
                                            placeholder="first name"
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                        />
                                        </div>
                                        <div className="col-md-6"><label className="labels">Last Name</label><input disabled type="text"
                                            className="form-control"
                                            value={lastName}
                                            placeholder="Last Name"
                                            onChange={(e) => setLastName(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-12"><label className="labels">Username</label><input
                                            disabled type="text" className="form-control" placeholder="enter Username"
                                            value={username}
                                            onChange={(e) => setUserName(e.target.value)} />
                                        </div>
                                        <div className="col-md-12"><label className="labels">Password</label><input
                                            disabled type="password" className="form-control" placeholder="enter password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)} />
                                        </div>
                                        <div className="col-md-12"><label className="labels">Date Of Birth</label>
                                            <br />
                                            <DatePicker className={"form-control"}
                                                disabled
                                                closeOnScroll={true}
                                                // @ts-ignore
                                                selected={dob}
                                                // @ts-ignore
                                                onChange={(date: Date) => setDob(date)}
                                            />
                                        </div>
                                        <div className="col-md-12"><label className="labels">Gender</label><input
                                            disabled type="text" className="form-control" placeholder="Gender"
                                            value={gender}
                                            onChange={(e) => setGender(e.target.value)}
                                        />
                                        </div>
                                        <div className="col-md-12"><label className="labels">Relationship Status</label><input
                                            disabled type="text" className="form-control" placeholder="Relationship Status"
                                            value={relationshipStatus}
                                            onChange={(e) => setRelationshipStatus(e.target.value)} />
                                        </div>
                                        <div className="col-md-12"><label className="labels">Mobile Number</label><input
                                            disabled type="text" className="form-control" placeholder="enter phone number"
                                            value={phoneNo}
                                            onChange={(e) => setPhoneNo(e.target.value)} />
                                        </div>
                                        <div className="col-md-12"><label className="labels">Address Line 1</label><input
                                            disabled type="text" className="form-control" placeholder="enter address line 1"
                                            value={addressLineOne}
                                            onChange={(e) => setAddressLineOne(e.target.value)} />
                                        </div>
                                        <div className="col-md-12"><label className="labels">Address Line 2</label><input
                                            disabled type="text" className="form-control" placeholder="enter address line 2"
                                            value={addressLineTwo}
                                            onChange={(e) => setAddressLineTwo(e.target.value)} />
                                        </div>
                                        <div className="col-md-12"><label className="labels">City</label><input
                                            disabled type="text" className="form-control" placeholder="enter City"
                                            value={city}
                                            onChange={(e) => setCity(e.target.value)} />
                                        </div>
                                        <div className="col-md-12"><label className="labels">ZipCode</label><input disabled type="text"
                                            className="form-control"
                                            placeholder="enter address line 2"
                                            value={zipcode}
                                            onChange={(e) => setZipCode(e.target.value)} />
                                        </div>
                                        <div className="col-md-12"><label className="labels">Email</label><input disabled type="text"
                                            className="form-control"
                                            placeholder="enter email address"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)} />
                                        </div>
                                    </div>
                                </section>}
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}


const mapStateToProps = ({ userLogin }: StoreState): { userLogin: User } => {
    return { userLogin }
}


export const Profile = connect(
    mapStateToProps,
    {}
)(_Profile)

