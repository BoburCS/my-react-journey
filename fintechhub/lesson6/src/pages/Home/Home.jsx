import { useNavigate } from "react-router-dom";
import phones from "../../data/phones";
import Flex from "../../utilities/Flex";
import Grid from "../../utilities/Grid";
import Card from "../../components/Card";
import Text from "../../components/Text";

function Home({ products }) {
    const navigate = useNavigate();
    const handleCardClick = id => navigate(`/phones/${id}`)

    return (
        <>
            <Flex padding={"30px"} direction={"column"} gap={"30px"}>
                <Text type={"h1"}>Products</Text>
                <Grid>
                    {products.length > 0 ? (
                        products.map((product) => (
                            <Card key={product.id} onClick={() => handleCardClick(product.id)}>
                                <Flex align={"center"} justify={"space-between"}>
                                    <Text>{product.title}</Text>
                                    <Text>Price: ${product.price}</Text>
                                </Flex>
                            </Card>
                        ))
                    ) : (
                        <Text>No products available</Text>
                    )}
                </Grid>
                <Text type={"h1"}>Phones</Text>
                <Grid>
                    {phones.length > 0 ? (
                        phones.map((phone) => (
                            <Card key={phone.id} onClick={() => handleCardClick(phone.id)}>
                                <Flex align={"center"} justify={"space-between"}>
                                    <Text>{phone.title}</Text>
                                    <Text>Price: ${phone.price}</Text>
                                </Flex>
                            </Card>
                        ))
                    ) : (
                        <Text>No phones available</Text>
                    )}
                </Grid>
            </Flex>
        </>
    );
}

export default Home;
