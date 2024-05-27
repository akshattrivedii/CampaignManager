// App.js

import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Campaign from './components/Campaigns';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Feature1 from './components/Feature1';
import Signup from './components/Signup';
import Login from './components/LoginPage';
import BigData from './components/CampManager';
import CampManager from './components/CampManager';
import Marketing from './components/Marketing';
import Navbar2 from './components/Navbar2';
import Feature from './components/Feature';
import Campaigns from './components/Campaigns';


function App() {
  const [campaignList, setCampaignList] = useState([]);

  const handleAddCampaign = (campaign) => {
    setCampaignList(prevList => [...prevList, campaign]);
  };

  return (
    <Router>
      <div className="app-container"> 
       
        <Routes>
          <Route exact path="/marketing" element={<> <Navbar/> <Marketing/></>} />
          <Route exact path="/createCampaign" element={<><Navbar2/> <About onAddCampaign={handleAddCampaign} campaignList={campaignList} /></>} />
          <Route path='/register' element= {<><Navbar/> <Signup/></>}></Route>
          <Route path='/login' element= {<><Navbar/> <Login/></>}></Route>
          <Route path="/:index" element={<><Navbar/> <Feature1 /></>} />
          <Route path="/manager" element={<CampManager/>}/>
          <Route path="/viewCampaign/:name" element={<><Navbar2/> <Feature/></>} />
          <Route path="/viewCampaign/:name/:type" element={<><Navbar2/> <Campaigns/></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
