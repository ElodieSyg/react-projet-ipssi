// Components importations
import Card from "../../components/card/index";
// Data importation
import Data from "../../data/data.json";

const Home = () => {
    return (
        Data.map(data => (
            <Card key={data.id} data={data} />
        ))
    );
};

export default Home;