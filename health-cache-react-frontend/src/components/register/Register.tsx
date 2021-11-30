import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/actions";

export const Register: React.FC<any> = () => {

    const dispatch = useDispatch();

    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');
    let [firstName, setFirstname] = useState('');
    let [lastName, setLastname] = useState('');
    let [role, setRole] = useState('');
    let [email, setEmail] = useState('');
    let [gender, setGender] = useState('');
    let [dob, setDob] = useState('');
    let [addressLineOne, setAddressLineOne] = useState('');
    let [addressLineTwo, setAddressLineTwo] = useState('');
    let [zipcode, setZipcode] = useState('');
    let [city, setCity] = useState('');
    let [phoneNo, setPhoneNo] = useState('');
    let [relationshipStatus, setRelationshipStatus] = useState('');
    let [profilePic, setProfilePic] = useState('');

    const handleChange = (e: any) => {
        switch (e.target.name) {
            case 'username':
                setUsername(e.target.value);
                break;
            case 'password':
                setPassword(e.target.value);
                break;
            case 'firstName':
                setFirstname(e.target.value);
                break;
            case 'lastName':
                setLastname(e.target.value);
                break;
            case 'role':
                setRole(e.target.value);
                break;
            case 'email':
                setEmail(e.target.value);
                break;
            case 'gender':
                setGender(e.target.value);
                break;
            case 'dob':
                setDob(e.target.value);
                break;
            case 'addressLineOne':
                setAddressLineOne(e.target.value);
                break;
            case 'addressLineTwo':
                setAddressLineTwo(e.target.value);
                break;
            case 'zipcode':
                setZipcode(e.target.value);
                break;
            case 'city':
                setCity(e.target.value);
                break;
            case 'phoneNo':
                setPhoneNo(e.target.value);
                break;
            case 'relationshipStatus':
                setRelationshipStatus(e.target.value);
                break;
            case 'profilePic':
                setProfilePic(e.target.value);
                break;
                
        }
    }

    const signup = async (event: any) => {
        event.preventDefault();
        await dispatch(
            registerUser({ username, password, firstName, lastName, role, email, gender, dob, addressLineOne, addressLineTwo, zipcode, city, phoneNo, relationshipStatus})
        );
        
    }

    return (
        <div className="container pt-5">

            <div id="register-container" className="container bg-secondary3 shadow p-3 mb-5 rounded">

                <h1 className="fw-light text-primary2">Sign up and create a new account</h1>
                <hr />
                <form>

                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" className="form-control" placeholder="Enter username" name="username" onChange={handleChange} id="username" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" name="password" onChange={handleChange} id="password" />
                    </div>

                    <div className="form-group">
                        <label>First Name</label>
                        <input type="text" className="form-control" placeholder="Enter First Name" name="firstName" onChange={handleChange} id="firstName" />
                    </div>

                    <div className="form-group">
                        <label>Last Name</label>
                        <input type="text" className="form-control" placeholder="Enter Last Name" name="lastName" onChange={handleChange} id="lastname" />
                    </div>

                    <div className="form-group">
                        <label>Role</label>
                        <select className="form-control" name="role" id="role" onChange={handleChange}>
                            <option>Select your role</option>
                            <option value="EMPLOYEE">EMPLOYEE</option>
                            <option value="PATIENT">PATIENT</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" className="form-control" placeholder="Enter Email" name="email" onChange={handleChange} id="email" />
                    </div>

                    <div className="form-group">
                        <label>Gender</label>
                        <select className="form-control" name="gender" id="gender" onChange={handleChange}>
                            <option>Select your gender</option>
                            <option value="MALE">MALE</option>
                            <option value="FEMALE">FEMALE</option>
                            <option value="OTHER">OTHER</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>DOB</label>
                        <input type="date" className="form-control" placeholder="Enter your DOB" name="dob" onChange={handleChange} id="dob" />
                    </div>

                    <div className="form-group">
                        <label>Address Line One</label>
                        <input type="text" className="form-control" placeholder="Enter your address" name="addressLineOne" onChange={handleChange} id="addressLineOne" />
                    </div>

                    <div className="form-group">
                        <label>Address Line Two</label>
                        <input type="text" className="form-control" placeholder="Enter your address" name="addressLineTwo" onChange={handleChange} id="addressLineTwo" />
                    </div>

                    <div className="form-group">
                        <label>Zip Code</label>
                        <input type="text" className="form-control" placeholder="Enter your zip code" name="zipcode" onChange={handleChange} id="zipcode" />
                    </div>

                    <div className="form-group">
                        <label>City</label>
                        <input type="text" className="form-control" placeholder="Enter your city" name="city" onChange={handleChange} id="city" />
                    </div>

                    <div className="form-group">
                        <label>Phone Number</label>
                        <input type="text" className="form-control" placeholder="Enter your phone number" name="phoneNo" onChange={handleChange} id="phoneNo" />
                    </div>

                    <div className="form-group">
                        <label>Status</label>
                        <select className="form-control" name="relationshipStatus" id="relationshipStatus" onChange={handleChange}>
                            <option>Select your relationship Status</option>
                            <option value="MARRIED">MARRIED</option>
                            <option value="SINGLE">SINGLE</option>
                            <option value="OTHER">OTHER</option>
                        </select>
                    </div>
                    <hr />

                    <button type="submit" className="btn btn-primary text-primary2 btn-block" onClick={signup}>Submit</button>

                </form>
            </div>
        </div>
    );





}
