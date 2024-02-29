import React, { useState } from "react";
import "./Accordion.css";

function Accordion({ title }) 
{
    const [accordion, setAccordion] = useState(false);
    const [btnText, setBtnText] = useState("See more");

    const handleClick = () => 
    {
        setAccordion(previous => !previous)
        setBtnText(previous => previous === "See more" ? "See less" : "See more");
    };
	return (
        <div className="accordion">
            <div className="accordion-top">
                <h3>{title}</h3>
                <button onClick={handleClick}> {btnText} </button>
            </div>
            {accordion && 
                <div className="accordion-bottom">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quasi exercitationem explicabo iure optio reprehenderit sunt et dicta necessitatibus laboriosam maiores, itaque vel odio dolor provident qui possimus magni eos accusantium expedita eligendi pariatur? Vero repudiandae maiores magnam fuga consequatur pariatur? Consectetur sequi eos reiciendis voluptate ratione alias laborum delectus.</p>
                </div>
            }
        </div>
    );
}

export default Accordion;
