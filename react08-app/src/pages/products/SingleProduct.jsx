import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const GetSingleProduct = () =>{

    const {id} = useParams();
    const [singleProduct , setSingleProduct] = useState();

    const getSingleProduct = async (id) =>{
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setSingleProduct(res?.data)
    }

    useEffect(() =>{
        getSingleProduct(id);
    },[]);

    return (
        <div className="container mt-5">
            <h1 className="mb-5">Product Data</h1>
            <div className="row">
                <div className="col-md-12">
                    <img className="w-50 h-50 mb-4 img-fluid" src={singleProduct?.image} />
                    <h3>Product Title : {singleProduct?.title}</h3>
                    <h3>Product Description : {singleProduct?.description}</h3>
                </div>
            </div>
        </div>
    )

}
export default GetSingleProduct;