import './App.css'
import React, { useState } from "react";
import ToggleSwitch from "./components/ToggleSwitch";

const ObjectUseState = (props) => {
    // The all state is in one single state object
    const [{ main, secondary1, secondary2, secondary3 }, setState] = useState({
        main: false,
        secondary1: false,
        secondary2: false,
        secondary3: false
    });

    const switchMain = (newMain) => {
        if (newMain) {
            setState(d => ({ ...d, main: !d.main }));
        } else {
            setState(d => ({
                main: !d.main,
                secondary1: false,
                secondary2: false,
                secondary3: false
            }))
        }
    }

    return (
        <div className="App">
            <ToggleSwitch onChange={() => switchMain(!main)} isChecked={main} label="Main" />

            <div className='secondary'>
                <ToggleSwitch onChange={() => setState(d => (d.main ? { ...d, secondary1: !d.secondary1 } : { ...d, secondary1: false }))} isChecked={secondary1} label="secondary 1" />
                <ToggleSwitch onChange={() => setState(d => (d.main ? { ...d, secondary2: !d.secondary2 } : { ...d, secondary2: false }))} isChecked={secondary2} label="secondary 2" />
                <ToggleSwitch onChange={() => setState(d => (d.main ? { ...d, secondary3: !d.secondary3 } : { ...d, secondary3: false }))} isChecked={secondary3} label="secondary 3" />
            </div>
        </div>
    );
}

export default ObjectUseState;