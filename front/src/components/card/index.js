// CSS importation
import "../../styles/card.modules.css";

const Card = props => {
    return (
        <div className="card-container" style={{ backgroundImage: `url(${props.data.image})` }}>
            <div className="card-content">
                <h4 className="white pb-1">{props.data.title}</h4>
                <p className="white pb-1">{props.data.address.country}, {props.data.address.city}</p>
                <p className="white pb-1">{props.data.price} €</p>
                <a href={`/product/${props.data.id}`} className="no-decorations">
                    <button>Voir plus</button>
                </a>
            </div>
        </div>
    );
};

export default Card;