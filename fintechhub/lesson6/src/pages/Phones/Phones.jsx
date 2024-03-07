import { useParams } from "react-router-dom";
import Flex from "../../utilities/Flex";
import Text from "../../components/Text";

function Phones({phones}) {
    const { id } = useParams();
    const phone = phones.find(phone => String(phone.id) === String(id));
    if (!phone) return <Text type={"p"}>Phone not found</Text>; 
    
    return (
        <Flex padding={"30px"} direction={"column"} gap={"20px"}>
            <Text type={"h3"}>Title: {phone.title}</Text>
            <Text type={"h3"}>Price: {phone.price}</Text>
            <Text type={"h3"}>Brand: {phone.brand}</Text>
            <Text type={"h3"}>Description: {phone.description}</Text>
            <img src={phone.image} alt={phone.title}/>
        </Flex>
    );
}

export default Phones;
