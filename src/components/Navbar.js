import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../nav.css';

export default function Navbar() {
  const [campaignList, setCampaignList] = useState([]);

  useEffect(() => {
   fetch("http://localhost:5000/api/campaignList", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
   })
   .then((res)=> res.json())
   .then((data) => setCampaignList(data))
   .catch((error) => {
    console.log(error);
   })
  }, []);


  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand text-light" href="#">
          LG
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active text-light" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-light"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Campaigns
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                {campaignList.map((campaign, index) => (
                  <li key={index}>
                    <Link className="dropdown-item" to={`/${campaign.name}`}>
                      {campaign.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
