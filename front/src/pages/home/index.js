// Components importation
import Card from "../../components/card/index";
// Data importation
import Data from "../../data/data.json";
// CSS importation
import "../../styles/home.modules.css";

const Home = () => {
    return (
        <div>
            <header className="header-container">

            </header>
            <h1 className="title">NOS OFFRES DE VOYAGE</h1>
            <section className="container card-container">
                {
                    Data.map(data => (
                        <Card key={data.id} data={data} />
                    ))
                }
            </section>
        </div>
    );
};

export default Home;