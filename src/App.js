// App.js

import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Campaign from './components/Campaign';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Feature1 from './components/Feature1';
import Signup from './components/Signup';
import Login from './components/LoginPage';

function App() {
  const [campaignList, setCampaignList] = useState([]);

  const handleAddCampaign = (campaign) => {
    setCampaignList(prevList => [...prevList, campaign]);
  };

  return (
    <Router>
      <div className="app-container"> 
        <Navbar campaignList={campaignList} />
        <Routes>
          <Route exact path="/" element={<About onAddCampaign={handleAddCampaign} campaignList={campaignList} />} />
          <Route exact path="/democamp" element={<Campaign />} />
          <Route path='/register' element= {<Signup/>}></Route>
          <Route path='/login' element= {<Login/>}></Route>
          <Route path="/:index" element={<Feature1 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
