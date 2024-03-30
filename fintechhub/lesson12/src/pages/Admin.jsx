import { useState, useEffect } from "react";
import { useFetchGet, useFetchPost, useFetchPut, useFetchDelete } from "../hooks/useFetch";

function Admin() {
    const [products, setProducts] = useState([]);
    const [editingProduct, setEditingProduct] = useState(null);

    useEffect(() => {
        useFetchGet("http://localhost:8000/products", (res) => {
            res.then(data => setProducts(data));
        })
    }, [products]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = Object.fromEntries(new FormData(event.target));
        
        useFetchPost("http://localhost:8000/products", data, (res) => {
            res.then(newProduct => {
                setProducts(previousProducts => [...previousProducts, newProduct]);
            })
        });

        event.target.reset();
    }

    const handleEdit = (product) => {
        setEditingProduct(product);
    }

    const handleSave = (event) => {
        event.preventDefault();
        const data = Object.fromEntries(new FormData(event.target));
        useFetchPut(`http://localhost:8000/products/${editingProduct.id}`, data, (res) => {
            res.then(() => {
                setEditingProduct(null);
            });
        });
    }

    const handleCancel = () => {
        setEditingProduct(null);
    }

    const handleDelete = (id) => {
        useFetchDelete(`http://localhost:8000/products/${id}`, (res) => {
            res.then(() => {
                setProducts(previousProducts => previousProducts.filter(product => product.id !== id));
            });
        });
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="save-form">
                <input 
                    name="title" 
                    type="text" 
                    placeholder="title" 
                />
                <input 
                    name="description" 
                    type="text" 
                    placeholder="description" 
                />
                <input 
                    name="price" 
                    type="number" 
                    placeholder="price" 
                />
                <button type="submit">Add product</button>
            </form>

            {editingProduct 
            ? (
                <form onSubmit={handleSave} className="edit-form">
                    <input name="title" defaultValue={editingProduct.title} type="text" placeholder="title" />
                    <input name="description" defaultValue={editingProduct.description} type="text" placeholder="description" />
                    <input name="price" defaultValue={editingProduct.price} type="text" placeholder="price" />
                    <button type="submit">Save</button>
                    <button onClick={handleCancel}>Cancel</button>
                </form>
            )
            : null
            }

            <div>
                <div>
                    {products.length > 0 ? (
                        products.map(product => (
                            <div key={product.id}>
                                <h4>{product.title}</h4>
                                <p>{product.description}</p>
                                <p>{product.price}</p>
                                <button onClick={() => handleEdit(product)}>Edit</button>
                                <button onClick={() => handleDelete(product.id)}>Delete</button>
                            </div>
                        ))
                    )
                    : null}
                </div>
            </div>
        </>
    );
}

export default Admin;
