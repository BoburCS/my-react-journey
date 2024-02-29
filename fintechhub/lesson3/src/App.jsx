import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Form from "./components/Form/Form.jsx";
import Button from "./components/Button/Button.jsx";
import Accordion from "./components/Accordion/Accordion.jsx";
import Dropdown from "./components/Dropdown/Dropdown.jsx";
import "./App.css";
import accordionData from "./Data/AccordionData/index.js";

function App() 
{
    const [form, setForm] = useState(false);

    const handleClick = () => setForm(previousForm => !previousForm);

    return (
        <>
            <Navbar />
            <div className="btn-form">
                <Button title={"Sign In"} form={form} handleFunction={handleClick}/>
                {form && <Form />}
            </div>
            <div>
                {accordionData.map((element, index) => <Accordion key={index} {...element}/>)}
            </div>
            <Dropdown />
        </>
    );
}

export default App;
