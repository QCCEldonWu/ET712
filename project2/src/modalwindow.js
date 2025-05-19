import React from 'react';

export default function Modalwindow({ title, image, description, onClose }) {
  return (
    <div className="modalwindow{" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button onClick={onClose}>X</button>
        <h1>{title}</h1>
        <img src={image} alt="" width={500}/>
        <p>This Set Includes:   

    1-D4  

    1-D6

    1-D8

    2-D10 (00-90 and 0-9)

    1-D12

    1-D20
</p>
      </div>
    </div>
  );
}