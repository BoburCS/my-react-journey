import Card from "../Card";
import "./container.css";

type ContainerProps = {
    products: {
        title: string;
        price: number;
        id: string;
    }[];
}

function Container({ products }: ContainerProps) {
    return (
        <div className="container">
            {products.map(product => (
                <Card key={product.id} product={product}/>
            ))}
        </div>
    );
}

export default Container;
