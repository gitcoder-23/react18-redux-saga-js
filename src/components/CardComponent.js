import React from 'react';

const CardComponent = (props) => {
  console.log('props->', props);
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.userData.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          {props.userData.company.name}
        </h6>
        <p className="card-text">{props.userData.company.catchPhrase}</p>
      </div>
    </div>
  );
};

export default CardComponent;
