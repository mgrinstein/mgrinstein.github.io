import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from "react-router-dom";  // Change BrowserRouter to HashRouter
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Home, About, Projects, TechArticles, Speaking, Contact} from "./pages";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tech-articles" element={<TechArticles />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/speaking" element={<Speaking />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
