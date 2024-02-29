import React, { useState } from "react";
import "./Form.css";
import UserInfoContainer from "../UserInfoContainer/UserInfoContainer";

function Form() 
{
    const [formData, setFormData] = useState({});

    const handleForm = (event) => 
    {
        event.preventDefault();

        const { userName, userPhone, userEmail, userPassword } = event.target.elements;

        setFormData({
            name: userName.value,
            phone: userPhone.value,
            email: userEmail.value,
            password: userPassword.value
        });
    }

	return (
        <div className="form-container">
            <form onSubmit={handleForm}>
                <input name="userName" type="text" placeholder="Name"/>
                <input name="userPhone" type="tel" placeholder="Phone Number"/>
                <input name="userEmail" type="email" placeholder="Email"/>
                <input name="userPassword" type="password" placeholder="Password"/>
                <button type="submit">Sign In</button>
            </form>
            <UserInfoContainer {...formData}/> 
        </div>
    );
}

export default Form;
