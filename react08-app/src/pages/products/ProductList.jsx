import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const GetProductsList = () =>{

    const [products , setProducts] = useState(null);

    const productList = async () =>{
        const res = await axios.get("https://fakestoreapi.com/products");
        setProducts(res?.data);
    }

    useEffect(() =>{
        productList();
    } , []);

    return (
        <div className="container mt-5">
            <h1 className="mb-5 text-center">Product List</h1>
            <div className="row">
                {
                    products ? (
                        <>
                        {
                            products.map((product , index) =>{
                                return <div className="col-md-4 mb-4" key={index}>
                                <div class="card" >
                                <img src={product.image} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">{product.title}</h5>
                                    <p class="card-text">{product.description}</p>
                                    <Link to={`/product/${product.id}`} class="btn btn-primary">View More</Link>
                                </div>
                                </div>
                                </div>
                            })
                        }
                        </>
                    ) : ("Loading...")
                }
            </div>
        </div>
    );

}

export default GetProductsList;