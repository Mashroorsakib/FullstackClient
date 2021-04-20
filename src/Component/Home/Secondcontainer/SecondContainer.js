import React from 'react';
import first from '../../images/download (1).png'
import second from '../../images/download (2).png'
import third from '../../images/download.png'

const SecondContainer = () => {
    return (
        <div>
            <div id="carouselExampleControls" className="carousel slide mt-5" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img style={{width:"200px",height:'400px'}} className="d-block w-100 " src={first} alt="First slide"/>
    </div>
                        <div className="carousel-item">
                            <img  style={{width:"200px",height:'400px'}} className="d-block w-100 " src={second} alt="Second slide"/>
    </div>
                            <div className="carousel-item">
                                <img  style={{width:"200px",height:'400px'}} className="d-block w-100" src={third} alt="Third slide"/>
    </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
    );
};

export default SecondContainer;