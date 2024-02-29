import React from "react";
import "./UserInfoContainer.css";

function UserInfoContainer({ name, phone, email, password }) 
{
	return (
        <div className="user-info-container">
            <h3>Name: {name}</h3>
            <h3>Phone Number: {phone}</h3>
            <h3>Email: {email}</h3>
            <h3>Password: {password}</h3>
        </div>
    );
}

export default UserInfoContainer;
