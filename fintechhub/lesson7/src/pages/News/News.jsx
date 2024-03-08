import Flex from "../../utilities/Flex";

function News({posts}) {
    return (
        <Flex>
            {posts.map(post => (
                <Flex key={post.id} p={"30px"} direction={"column"} gap={"10px"} border={"1px solid #ccc"}>
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                </Flex>
            ))}
        </Flex>
    );
}

export default News;
