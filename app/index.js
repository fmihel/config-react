import './template/define.css';
import './template/main.css';
import Common from 'Com/common.jsx';
import { DOM } from 'fmihel-lib';
import React from 'react';
import ReacDOM from 'react-dom';

$(() => {
    ReacDOM.render(<Common caption = "Test react"/>, DOM('#page'));
});
