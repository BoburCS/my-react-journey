import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Flex from "../../utilities/Flex";
import Form from "../../components/Form";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Textarea from "../../components/Textarea";
import Text from "../../components/Text";

function Admin({handleSubmit, product, setProduct}) {
    const [form, setForm] = useState(false);
    const navigate = useNavigate();
    const handleChange = (event) => setProduct({...product, [event.target.name]: event.target.value}); 

    return (
        <>
            <Flex padding={"30px"} width={"100%"} gap={"30px"}>
                <Button onClick={() => setForm(prev => !prev)} padding={"10px 16px"}>+Add product</Button>
                <Button onClick={() => navigate("/")} padding={"10px 16px"}>Go back to Home</Button>
            </Flex>

            {form &&
            <Form onSubmit={handleSubmit}>
                <Flex direction={"column"} gap={"30px"}>
                    <Text type={"h1"} align={"center"}>New Product Form</Text>
                    <Input onChange={handleChange} name="title" type="text" placeholder="title"/>
                    <Input onChange={handleChange} name="price" type="text" placeholder="price"/>
                    <Input onChange={handleChange} name="brand" type="text" placeholder="brand"/>
                    <Textarea onChange={handleChange} name="description" cols="30" rows="10" placeholder="description"></Textarea>
                    <Button type="submit" padding={"10px 16px"} width={"100%"}>+Add product</Button>
                </Flex>
            </Form>
            }
        </>
    );
}

export default Admin;
