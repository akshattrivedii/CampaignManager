import React, { useState } from 'react';
import '../feature.css';
import '../about.css';
import { useLocation } from 'react-router-dom';

export default function Feature1() {
  // const [image, setImage] = useState(null);

  // react-dom function to get path name from url 
  const location = useLocation();

  const {pathname} = location ; 

  const[form , setForm] = useState({
    subject: "" , 
    preheader: "" , 
    content: "", 
    cta: "",
  })

  function handleChange(event) {
    const { name, value } = event.target;
    setForm(prevValue => {
      return {
        ...prevValue,
        [name]: value
      }
    });
  }

  const handleSubmit = () => {
    console.log(pathname)
    console.log(form)
    fetch(`http://localhost:5000/api/campaigns${pathname}s`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(form),
    })
      .then((res) => console.log(res))
      .catch((res) => console.log(res));
      setForm({
        subject: "" , 
        preheader: "" , 
        content: "", 
        cta: "",
      });
  }

  // const handleImageChange = (event) => {
  //   const file = event.target.files[0];
  //   const imageUrl = URL.createObjectURL(file);
  //   setImage(imageUrl);
  // };


  return (
    <div className='feature-container'>
      <label className='label'>Subject :</label>
      <input type='text' name="subject" value={form.subject} className='input-field' onChange={handleChange}/>
      <br />
      <label className='label'>Preheader :</label>
      <input type='text' name="preheader"  value={form.preheader} className='input-field' onChange={handleChange}/>
      <br />
      {/* <label className='label'>Images :</label>
      <input
        type='file'
        className='input-fieldimg'
        onChange={handleImageChange}
      />
      <br />
{image && <img src={image} alt='Uploaded' style={{ width: '500px' }} />}
<br /> */}
<label className='label'>Content :</label>
<input type='text' name="content" value={form.content} className='input-field' onChange={handleChange}/>
<br />

      <label className='label'>CTA :</label>
      <input type='text' name="cta" value={form.cta} className='input-field' onChange={handleChange}/>

      <button className="add-campaign-button" onClick={handleSubmit}>
              Save Data
            </button>
    </div>

  );
}
