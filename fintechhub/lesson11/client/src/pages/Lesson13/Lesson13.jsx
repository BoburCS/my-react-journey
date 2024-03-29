import { useState } from "react";

function Lesson13() {
    const [arr, setArr] = useState([]);

    const handleChange = (event) => {
        if (event.target.checked) {
            setArr(prev => [...prev, event.target.value]);
        } 
        else {
            setArr(prev => prev.filter(item => item !== event.target.value));
        }
    }

    return (
        <>
            <div>
                <input onChange={handleChange} value={"html"} type="checkbox" id="html"/>
                <label htmlFor="html">HTML</label>
            </div>
            <div>
                <input onChange={handleChange} value={"css"} type="checkbox" id="css"/>
                <label htmlFor="css">CSS</label>
            </div>
            <div>
                <input onChange={handleChange} value={"js"} type="checkbox" id="js"/>
                <label htmlFor="js">JavaScript</label>
            </div>
            <div>
                <input onChange={handleChange} value={"react"} type="checkbox" id="react"/>
                <label htmlFor="react">React</label>
            </div>

            <div>
                {arr.length > 0 ? (
                    arr.map(item => <p key={item}>{item}</p>) 
                ) : null}
            </div>
        </>
    );
}

export default Lesson13;
