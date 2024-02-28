import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Form from "./components/Form/Form.jsx";
function App() {

    return (
        <>
            <Navbar />
            <Form />
        </>
    );
}

export default App;

// hook is a function that lets you “hook into” React features from function components.

// useState is adds rendering to the component
// previous state is passed to the function and the new state is returned