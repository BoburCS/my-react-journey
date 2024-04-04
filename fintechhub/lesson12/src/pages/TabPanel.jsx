import React, { useState } from "react";
import "./TabPanel.css";

function TabPanel() {
    const [active, setActive] = useState("contacts");

    const renderContent = () => {
        switch(active) {
            case "contacts":
                return <h1>Contacts panel</h1>
            case "review":
                return <h1>Review panel</h1>
            case "comments":
                return <h1>comments panel</h1>
        }
    }

    return (
        <>
        <div className="panel-page">
            <div>
                <button className={active === "contacts" ? "active" : ""} onClick={() => setActive("contacts")}>Contacts</button>
                <button className={active === "review" ? "active" : ""} onClick={() => setActive("review")}>Review</button>
                <button className={active === "comments" ? "active" : ""} onClick={() => setActive("comments")}>Comments</button>
            </div>

            <div>
                {renderContent()}
            </div>
        </div>

        
        </>
    );
}

export default TabPanel;
