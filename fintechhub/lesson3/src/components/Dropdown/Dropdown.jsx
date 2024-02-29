import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import "./Dropdown.css";

function Dropdown() 
{
    const [visible, setVisible] = useState(false);

    const handleClick = () => setVisible(previous => !previous);

	return (
        <div className="dropdown-container">
            <button onClick={handleClick}>Options <FaCaretDown /></button>
            {visible && 
                <div className="dropdown">
                    <div className="dropdown-item">
                        <a>Account Settings</a>
                    </div>
                    <div className="dropdown-item">
                        <a>Support</a>
                    </div>
                    <div className="dropdown-item">
                        <a>License</a>
                    </div>
                    <div className="dropdown-item">
                        <a>Sign Out</a>
                    </div>
                </div>
            }
        </div>
    );
}

export default Dropdown;
