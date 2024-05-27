import React, {useEffect, useState} from "react";
import{Link} from 'react-router-dom'

export default function CampManager() {
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
    <div>
        <p>Availabe campaigns:</p>
        <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-light"
                href=""
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
    </div>
  );
}
