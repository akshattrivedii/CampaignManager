import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../Campaigns.css'; // Import the CSS file

export default function Campaigns() {
  const { name, type } = useParams();
  const [content, setContent] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/api/viewcampaign/${name}/${type}`;
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setContent(data))
      .catch((error) => {
        console.log(error);
      });
  }, [name, type]);

  return (
    <div className="campaigns-container">
      {content.map((item, index) => (
        <div className="campaign-item" key={index}>
          <h2 className="campaign-subject">Subject: {item.subject}</h2>
          <h2 className="campaign-preheader">Preheader: {item.preheader}</h2>
          <h2 className="campaign-content">Content: {item.content}</h2>
        </div>
      ))}
    </div>
  );
}
