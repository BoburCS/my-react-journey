import { useState } from "react";
import Form from "../../components/Form";
import Color from "../../utilities/Color";
import Flex from "../../utilities/Flex";
import Text from "../../components/Text";
import Input from "../../components/Input";
import Button from "../../components/Button";

function Practice() {
    const [users, setUsers] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formdata = new FormData(event.target);
        const data = Object.fromEntries(formdata);
        if (users.find(user => user.email === data.email)) {
            alert("User already exists");
            event.target.reset();
            return;
        }
        setUsers(prev => [...prev, data]);
        event.target.reset();
    }

    return (
        <>
        <Form onSubmit={handleSubmit}>
            <Flex direction={"column"} gap={"30px"}> 
            <Input name="email" type="email" placeholder="email" required/>
            <Input name="password" type="password" placeholder="password" required/>
            <Button width={"100%"} padding={"10px 16px"} type="submit">Submit</Button>
            </Flex>
        </Form>
        {users.length > 0 ? users.map((user, index) => {
            return (
                <Flex direction={"column"} gap={"10px"} key={index}>
                    <Text color={Color.PrimaryColor} type={"h1"}>{user.email}</Text>
                </Flex>
            )
        }) : null}
        </>
    );
}

export default Practice;
