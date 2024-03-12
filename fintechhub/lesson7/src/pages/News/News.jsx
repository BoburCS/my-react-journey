import Flex from "../../utilities/Flex";
import Text from "../../utilities/Text";
import Color from "../../utilities/Color";

function News({posts}) {
    return (
        <Flex p={"30px"} direction={"column"} gap={"30px"}>
            <Text color={Color.Blue} fs={"24px"} fw={"700"}>News</Text>
            {posts.map(post => (
                <Flex key={post.id} p={"30px"} w={"400px"} bg={Color.White} direction={"column"} gap={"10px"} border={"1px solid #ccc"}>
                    <Text fs={"24px"} fw={"700"}>{post.title}</Text>
                    <Text fs={"18px"}>{post.description}</Text>
                    <Text fs={"18px"}>{post.author}</Text>
                </Flex>
            ))}
        </Flex>
    );
}

export default News;
