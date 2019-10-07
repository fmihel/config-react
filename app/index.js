import './template/define.css';
import './template/main.css';
import {
    DOM, flex, flexChild, binds,
} from 'fmihel-lib';
import React from 'react';
import ReacDOM from 'react-dom';

class App extends React.Component {
    constructor(p) {
        super(p);
    }

    render() {
        return (
            <div id='app' style={{ ...flex(), ...flexChild() }}>

            </div>
        );
    }
}

$(() => {
    ReacDOM.render(<App/>, DOM('#page'));
});
