import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export default function Feature() {
const navigate = useNavigate()
const { name } = useParams();
const handleClick =(e)=>{
const url = "/viewCampaign/"+name+"/"+e.target.name;
navigate(url);
}
  return (
    <div>
          <button type="submit" name='email'   onClick={handleClick} className="btn btn-success w-100 rounded-0">
            Email
          </button>
          <button type="submit" name='whatsapp'  onClick={handleClick} className="btn btn-success w-100 rounded-0">
            WhatsApp
          </button>
          <button type="submit"  name='text' onClick={handleClick} className="btn btn-success w-100 rounded-0">
            Text
          </button>
    </div>
  );
}
