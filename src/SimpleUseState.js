import './App.css'
import React, { useState } from "react";
import ToggleSwitch from "./components/ToggleSwitch";

const SimpleUseState = () => {
    // The states are defined and used individually
    const [main, setMain] = useState(false);
    const [secondary1, setSecondary1] = useState(false);
    const [secondary2, setSecondary2] = useState(false);
    const [secondary3, setSecondary3] = useState(false);

    const switchMain = (newMain) => {
        if (newMain) {
            setMain(newMain);
        } else {
            setMain(newMain);
            setSecondary1(false)
            setSecondary2(false)
            setSecondary3(false)
        }
    }

    return (
        <div className="App">
            <ToggleSwitch onChange={() => switchMain(!main)} isChecked={main} label="Main 1" />

            <div className='secondary'>
                <ToggleSwitch onChange={() => main ? setSecondary1(!secondary1) : setSecondary1(false)} isChecked={secondary1} label="secondary 1" />
                <ToggleSwitch onChange={() => main ? setSecondary2(!secondary2) : setSecondary2(false)} isChecked={secondary2} label="secondary 2" />
                <ToggleSwitch onChange={() => main ? setSecondary3(!secondary3) : setSecondary3(false)} isChecked={secondary3} label="secondary 3" />
            </div>
        </div>
    );

};

export default SimpleUseState;