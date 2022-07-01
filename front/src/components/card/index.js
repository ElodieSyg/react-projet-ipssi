import { Link } from "react-router-dom";
// CSS importation
import "../../styles/card.modules.css";

const Card = props => {
    console.log(props)
    return (
        <div className="card-container" style={{ backgroundImage: `url(${props.data.image})` }}>
            <Link to="/product">
                <div className="card-content">
                    <h3 className="white no-decorations pb-1">{props.data.title}</h3>
                    <p className="white pb-1">{props.data.address.country}, {props.data.address.city}</p>
                    <p className="white">{props.data.price} €</p>
                </div>
            </Link>
        </div>
    );
};

export default Card;