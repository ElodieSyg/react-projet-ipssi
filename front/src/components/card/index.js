// CSS importation
import "../../styles/card.modules.css";

const Card = props => {
    console.log(props)
    return (
        <div className="card-container">
            <img src={props.data.image} alt={props.data.id} />
            <h4>{props.data.title}</h4>
            <p>{props.data.price}</p>
        </div>
    );
};

export default Card;