import React from 'react';
import Card from "./components/Card";
import lorem from "./assets/db.json"

const App = () => {
    return (
        <div>
            <Card
                titleMain={lorem.LoremSmall}
                textMain={lorem.LoremBig}
                buttonBack={lorem.LoremSmall}
                />
        </div>
    );
};

export default App;