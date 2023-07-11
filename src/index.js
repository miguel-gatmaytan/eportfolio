import * as React from 'react';
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";


import App from './components/app';

import './styles.scss';


const root = createRoot(document.getElementById("container"));
root.render(
<HashRouter><App /></HashRouter>);
