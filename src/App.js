import React from "react";
import MyCard from "./components/MyCard";
import Topbar from "./components/Topbar";

const App = () => {
    const list = ["Bowl", "Plate", "A La Carte", "Drinks"];
    return (
        <div>
            <Topbar label='Customer View' list={list} />
            <MyCard title = "bowl" pic = "https://www.eatthis.com/wp-content/uploads/sites/4/2018/10/panda-express-beijing-beef.jpg" />
        </div>
    );
};

export default App;
