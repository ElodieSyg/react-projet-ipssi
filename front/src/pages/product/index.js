import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// Component importation
import Navbar from "../../components/navbar";
// Data importation
import Data from "../../data/data.json";
// CSS importation
import "../../styles/product.modules.css";

const Product = () => {
    const [data, setData] = useState(null);
    let { id } = useParams();

    useEffect(() => {
        if (id) {
            let data = Data.filter(data => data.id === parseInt(id));
            setData(data);
        };
    }, []);

    console.log(data)

    if (data) {
        return (
            <div>
                <Navbar />
                <div className="product-container">
                    <img className="m1" src={`../.${data[0].image}`} alt={data[0].title} width="1000px" />
                    <div>
                        <p className="m1 bold">{data[0].title}</p>
                        <p className="m1">{data[0].address.country}, {data[0].address.city}</p>
                        <p className="m1">{data[0].description}</p>
                        <p className="m1">{data[0].price} €</p>
                    </div>
                </div>
            </div>
        );
    } else {
        <div>Loading...</div>
    }

};

export default Product;