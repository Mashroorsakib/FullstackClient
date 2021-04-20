import React from 'react';

const Showreview = ({data}) => {
    console.log(data)
    return (
        <div className="card card-container" style={{width: '18rem'}}>
        <div className="card-body">
          <h5 className="card-title">Customer Review</h5>
          <p className="card-text">{data.Clientname}</p>
          <p className="card-text">{data.Clientreview}</p>
        </div>
      </div>     
    );
};

export default Showreview;