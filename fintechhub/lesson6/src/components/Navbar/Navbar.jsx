import { useState } from "react";
import { NavLink } from "react-router-dom";
import Flex from "../../utilities/Flex";
import Color from "../../utilities/Color";
import Button from "../Button";
import Form from "../Form";
import Input from "../Input";
import Text from "../Text";

function Navbar() {
    const [login, setLogin] = useState(false);
    const [user, setUser] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);
        setUser(data);
        setLogin(false);
    }

    return (
        <>
            <Flex padding={"20px 100px"} width={"100%"} bg={Color.PrimaryBgColor} align={"center"} justify={"space-between"} gap={"30px"}>
                <Flex gap={"30px"}>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/products">Products</NavLink>
                    <NavLink to="/votingpage">VotingPage</NavLink>
                    <NavLink to="/practice">Practice</NavLink>
                </Flex>
                {user ? <Text>{user.userName}</Text>
                : <Button onClick={() => setLogin(prev => !prev)} padding={"10px 16px"}>Log In</Button>
                }
            </Flex>
            {login &&
                <Form onSubmit={handleSubmit}>
                    <Flex direction={"column"} gap={"30px"}>
                        <Text type={"h2"}>Log In Form</Text>
                        <Input name="userName" type="text" placeholder="Username"/>
                        <Input name="password" type="password" placeholder="Password"/>
                        <Button width={"100%"} padding={"10px 16px"}>Log In</Button>
                    </Flex>
                </Form>
            }
        </>
    );
}

export default Navbar;
