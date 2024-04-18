import React, { useState } from 'react';
import '../feature.css';

export default function Feature1() {
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setImage(imageUrl);
  };

  return (
    <div className='feature-container'>
      <label className='label'>Subject :</label>
      <input type='text' className='input-field' />
      <br />
      <label className='label'>Preheader :</label>
      <input type='text' className='input-field' />
      <br />
      <label className='label'>Images :</label>
      <input
        type='file'
        className='input-fieldimg'
        onChange={handleImageChange}
      />
      <br />
{image && <img src={image} alt='Uploaded' style={{ width: '500px' }} />}
<br />
<label className='label'>Content :</label>
<input type='text' className='input-field' />
<br />

      <label className='label'>CTA :</label>
      <input type='text' className='input-field' />
    </div>
  );
}
