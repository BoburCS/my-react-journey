import { useNavigate, Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Flex from "../../utilities/Flex";
import Form from "../../components/Form";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Text from "../../utilities/Text";
import Color from "../../utilities/Color";

function Signup({ setUsers, setToken, setCurrentUser }) {
    const navigate = useNavigate();
    
    const signupHandler = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = {...Object.fromEntries(formData), id: uuidv4()};
        setUsers(previous => [...previous, data]);
        setToken(prev => !prev);
        setCurrentUser(data);
        navigate("/");
        event.target.reset();
    }

    return (
        <Flex w={"100%"} h={"100vh"} align={"center"} justify={"center"} gap={"150px"}>
            <Flex direction={"column"}>
                <Text color={Color.Blue} fs={"64px"} fw={"700"}>facebook</Text>
                <Text color={Color.Black} fs={"24px"} fw={"500"}>Connect with friends and the world <br/> around you on Facebook.</Text>
            </Flex>
            <Form onSubmit={signupHandler} w={"400px"}>
                <Flex w={"100%"} direction={"column"}>
                    <Flex pb={"20px"} w={"100%"} bb={"1px solid grey"} direction={"column"} align={"center"} gap={"12px"}>
                        <Input name="userName" type="text" placeholder="Name"/>
                        <Input name="userEmail" type="email" placeholder="Email"/>
                        <Input name="userPassword" type="password" placeholder="Password"/>
                        <Button w={"100%"} bg={Color.Blue}>Sign Up</Button>
                        <Text color={Color.Blue}><Link>Forgot Password?</Link></Text>
                    </Flex>
                    <Flex w={"100%"} p={"20px"} justify={"center"}>
                        <Button onClick={() => navigate("/signin")} w={"192px"} bg={Color.Green}>Sign In</Button>
                    </Flex>
                </Flex>
            </Form>
        </Flex>
    );
}

export default Signup;
