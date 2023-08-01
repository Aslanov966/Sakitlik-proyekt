import React from 'react';
import "../Css-files/accordion.css"
import  { useState } from 'react';

const Accordion = () => {
  const accordionData = {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
     Id nunc felis ultrices vitae iaculis at eu. Tincidunt pellentesque 
     lobortis enim morbi nulla tortor tristique in. Massa semper quis imperdiet 
     cursus egestas. Nulla eget purus et phasellus vehicula feugiat.`
  };

  const { title, content } = accordionData;
  const [isActive, setIsActive] = useState(false);

  return (
    <React.Fragment>
      <h1>Tez-tez verilən suallar</h1>
      <div className="accordion">
        <div className="accordion-item">
          <div className="accordion-title"onClick={() => setIsActive(!isActive)}>
            <div>{title}</div>
            <div>{isActive ? '-' : '+'}</div>
          </div>
          {isActive && <div className="accordion-item">{content}</div>}
        </div>
      </div>

      <div className="accordion">
        <div className="accordion-item">
          <div className="accordion-title"onClick={() => setIsActive(!isActive)}>
            <div>{title}</div>
            <div>{isActive ? '-' : '+'}</div>
          </div>
          {isActive && <div className="accordion-item">{content}</div>}
        </div>
      </div>
    </React.Fragment>
    
  );
};

export default Accordion;