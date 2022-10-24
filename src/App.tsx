import React from 'react';
import Card from "./components/Card";
import lorem from "./assets/db.json"
import Loader from "./components/Loader";

const App = () => {
    return (
        <div>
            <Loader size={'medium'}/>
        </div>
    );
};

export default App;