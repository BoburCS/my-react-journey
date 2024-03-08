import { useNavigate, Link } from "react-router-dom";
import Flex from "../../utilities/Flex";
import Form from "../../components/Form";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Text from "../../utilities/Text";
import Color from "../../utilities/Color";

function Signin({users, setToken, setCurrentUser}) {
    const navigate = useNavigate();
    const signinHandler = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);
        const currentuser = users.find(user => user.userEmail === data.userEmail && user.userPassword === data.userPassword);
        if (!currentuser) {
            alert("Invalid email or password");
            return;
        }
        setToken(prev => !prev);
        setCurrentUser(currentuser);
        navigate("/");
        event.target.reset();
    }


    return (
        <Flex w={"100%"} h={"100vh"} align={"center"} justify={"center"} gap={"150px"}>
            <Flex direction={"column"} >
                <Text color={Color.Blue} fs={"64px"} fw={"700"}>facebook</Text>
                <Text color={Color.Black} fs={"24px"} fw={"500"}>Connect with friends and the world <br/> around you on Facebook.</Text>
            </Flex>
            <Form onSubmit={signinHandler} w={"400px"}>
                <Flex w={"100%"} direction={"column"}>
                    <Flex pb={"20px"} w={"100%"} bb={"1px solid grey"} direction={"column"} align={"center"} gap={"12px"}>
                        <Input name="userEmail" type="email" placeholder="Email"/>
                        <Input name="userPassword" type="password" placeholder="Password"/>
                        <Button w={"100%"} bg={Color.Blue}>Sign In</Button>
                        <Text color={Color.Blue}><Link>Forgot Password?</Link></Text>
                    </Flex>
                    <Flex w={"100%"} p={"20px"} justify={"center"}>
                        <Button onClick={() => navigate("/signup")} bg={Color.Green}>Create New Account</Button>
                    </Flex>
                </Flex>
            </Form>
        </Flex>
    );
}

export default Signin;
