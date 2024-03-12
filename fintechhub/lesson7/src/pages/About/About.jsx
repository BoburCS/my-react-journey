import { useState } from "react";
import Flex from "../../utilities/Flex";
import Text from "../../utilities/Text";
import appleImage from "../../assets/images/apple.jpg";
import bananaImage from "../../assets/images/banana.jpg";
import kiwiImage from "../../assets/images/kiwi.jpg";
import orangeImage from "../../assets/images/orange.jpg";

function About() {

    const carouselData = [
        appleImage,
        bananaImage,
        kiwiImage,
        orangeImage
    ]    

    const [current, setCurrent] = useState(0);

    function carouselSwiper (event) 
    {
        let newCurrent = current;
        if (event.target.className === "btn-right") newCurrent = (current + 1) % carouselData.length;
        else if (event.target.className === "btn-left") 
        {
            if (current === 0) newCurrent = carouselData.length - 1;
            else newCurrent--;
        }
        setCurrent(newCurrent);
    }

    return (
        <Flex p={"30px"} direction={"column"} gap={"30px"}>
            <Text fs={"24px"}>About</Text>
            <Flex>
                <button className="btn-left" onClick={carouselSwiper}> &lt; </button>
                <img className="carouselImage" src={carouselData[current]}/>
                <button className="btn-right" onClick={carouselSwiper}> &gt; </button>
            </Flex>
        </Flex>
    );
}

export default About;
