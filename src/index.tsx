import * as React from 'react';
import * as ReactDOM from "react-dom";

import App from './components/App';
import "./styles/index.scss";

const mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
