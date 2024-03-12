import Flex from "../../utilities/Flex";

function Profile({ currentUser }) {
    return (
        <Flex p={"30px"}>
            <Flex direction={"column"}>
                <h1>Welcome, {currentUser?.userName}!</h1>
                <h1>Email: {currentUser?.userEmail}</h1>
                <h1>Password: {currentUser?.userPassword}</h1>
                <p>This is your profile page.</p>
            </Flex>
        </Flex>
    );
}

export default Profile;
