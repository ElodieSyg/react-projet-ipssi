import { useState, useEffect } from "react";
// Components importation
import Card from "../../components/card/index";
import Navbar from "../../components/navbar/index";
// Data importation
import Data from "../../data/data.json";
// CSS importation
import "../../styles/home.modules.css";

const Home = () => {
    const [searchValue, setSearchValue] = useState(null);
    const [data, setData] = useState(null);
    const [filter, setFilter] = useState(false);
    const [isFilter, setIsFilter] = useState(false);

    const searchText = value => {
        setFilter(value);
        setIsFilter(true);

        let dataSearch = data.filter(item => {
            return Object.keys(item).some(key =>
                item[key].toString().toLowerCase().includes(filter.toString().toLowerCase()))
        });

        setSearchValue(dataSearch);
    };

    useEffect(() => {
        setData(Data);
    }, []);

    if (data) {
        return (
            <div>
                <header className="header-container">
                    <Navbar />
                    <input type="text" placeholder="Que recherchez-vous ?" onChange={e => searchText(e.target.value)}></input>
                </header>
                <h1 className="title">NOS OFFRES DE VOYAGE</h1>
                <section className="container card-container">
                    {
                        !isFilter
                            ? data.map(item => (
                                <Card key={item.id} data={item} />
                            ))
                            : searchValue.map(item => (
                                <Card key={item.id} data={item} />
                            ))
                    }
                </section>
            </div>
        );
    } else {
        <div>Loading...</div>
    }

};

export default Home;