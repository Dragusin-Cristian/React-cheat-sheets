import './App.css'
import React, { useReducer } from "react";
import ToggleSwitch from "./components/ToggleSwitch";
import switchReducer from './hooks/SwitchReducer';

const ReducerState = () => {
    // Creation of the reducer state:
    const [switchState, dispatchSwitch] = useReducer(switchReducer, {
        main: false,
        secondary1: false,
        secondary2: false,
        secondary3: false
    })

    return (
        <div className="App">
            <ToggleSwitch onChange={() => dispatchSwitch({ type: 'switchMain' })} isChecked={switchState.main} label="Main 1" />

            <div className='secondary'>
                <ToggleSwitch onChange={() => dispatchSwitch({ type: 'switchSecondary', count: 1 })} isChecked={switchState.secondary1} label="secondary 1" />
                <ToggleSwitch onChange={() => dispatchSwitch({ type: 'switchSecondary', count: 2 })} isChecked={switchState.secondary2} label="secondary 2" />
                <ToggleSwitch onChange={() => dispatchSwitch({ type: 'switchSecondary', count: 3 })} isChecked={switchState.secondary3} label="secondary 3" />
            </div>
        </div>
    );
};

export default ReducerState;