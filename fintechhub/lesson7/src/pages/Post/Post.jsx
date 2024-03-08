import { v4 as uuidv4 } from 'uuid';
import Form from "../../components/Form";
import Flex from "../../utilities/Flex";
import Text from "../../utilities/Text";
import Color from "../../utilities/Color";
import Input from "../../components/Input";
import Button from "../../components/Button";

function Post({setPosts}) {

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);
        const newPost = {
            id: uuidv4(),
            title: data.postTitle,
            description: data.postDescription
        };
        setPosts(prev => [...prev, newPost]);
        event.target.reset();
    }

    return (
        <Flex p={"30px"}>
            <Form onSubmit={handleSubmit}>
                <Flex>
                    <Input name="postTitle" type="text" placeholder="Title"/>
                    <Input name="postDescription" type="text" placeholder="Description"/>
                    <Button type="submit" bg={Color.Blue} color={Color.White}>Post</Button>
                </Flex>
            </Form>
        </Flex>
    );
}

export default Post;
