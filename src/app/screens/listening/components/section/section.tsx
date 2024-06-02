import React from 'react';
// import './Section.css';

const Section = ({ sectionNumber, image, onAnswerChange }:any) => {
  const handleChange = (index:any, event:any) => {
    onAnswerChange(sectionNumber, index, event.target.value);
  };

  return (
    <div className="section">
      <div className="section-left">
        <img
          src={image}
          alt={`Section ${sectionNumber}`}
          style={{width: "90%", height:"700px"}}
        />
      </div>
      <div className="section-right">
        {[...Array(10)].map((_, index) => (
          <input
            key={index}
            type="text"
            placeholder={`Answer ${index + 1}`}
            className="answer-input"
            onChange={(event) => handleChange(index, event)}
          />
        ))}
      </div>
    </div>
  );
};

export default Section;
