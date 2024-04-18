import React, { useState } from 'react';
import '../about.css';
import { Link } from 'react-router-dom';

export default function About({ onAddCampaign, campaignList }) {
  const [inputValue, setInputValue] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    if (inputValue.trim() !== '') {
      if (!campaignList.includes(inputValue)) {
        onAddCampaign(inputValue);  
      } else {
        console.log("Campaign already exists!");
      }
      setInputValue('');
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <table className='container'>
      <tbody>
        <tr>
          <td className='left-container'>
            <div className='input-container'>
              <label className='label'>Campaign name:</label>
              <input
                type='text'
                className='input-field'
                value={inputValue}
                onChange={handleInputChange}
              />
            </div>
            <button className="add-campaign-button" onClick={handleSubmit}>
              Create a Campaign
            </button>
          </td>
          <td 
            className="list-container" 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
          >
            <label className="list-containerfont">Campaigns: </label>
            <ul style={{ display: isHovered ? 'block' : 'none' }}>
              {campaignList.map((campaign, index) => (
                <li key={index}>{campaign}</li>
              ))}
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
