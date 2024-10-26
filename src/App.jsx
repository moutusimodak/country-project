import React from 'react';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Error from './components/Error';


import './index.css';

const App = () => {
   
return(
    <Router>
         
    <Routes>
   
      <Route path="/" element={<HomePage />} />
      <Route path="/country/:code" element={<DetailPage />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </Router>
)
}



export default App;
