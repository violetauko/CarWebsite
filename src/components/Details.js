// import React from "react";
// import './Details.css'
// import { Zoom } from "react-slideshow-image";
// import jeepimg1 from "../images/jeepimg1.png";
// import jeepimg2 from "../images/jeepimg2.png";
// import jeepimg3 from "../images/jeepimg3.png";
// import jeepimg4 from "../images/jeepimg4.png";
// import AllCars from "../pages/AllCars";



// const images = [jeepimg1, jeepimg2, jeepimg3, jeepimg4];

// const zoomOutProperties = {
//     duration: 3000,
//     transitionDuration: 500,
//     infinite: true,
//     indicators: true,
//     scale: 0.4,
//     arrows: true
// };

// const Details = ({description,keyFeatures,name}) => {
//     return (
//         <div className="slide-container">
//             <h1>{name}</h1>
//             <Zoom {...zoomOutProperties}>
//                 {images.map((each, index) => (
//                     <img key={index} style={{ width: "90%", height: "100%", borderRadius: "15px" }} src={each} />
//                 ))}
//             </Zoom>
//             <div className="details">
//                 <div className="details1">
//                 <h2>Description</h2>
//                     <p>{description}</p>
//                 </div>
//                 <div className="details2">
//                     <h2>Key Features</h2>
//                     <p>{keyFeatures}</p>
//                 </div>
//             </div>
//         </div>
//     );
// };



// export default Details

import React from 'react'

const Details = ({ image, name, price, description }) => {
    return (
        <div className="slide-container">
            <h1>{name}</h1>
            <img src={image} alt="car" />
            <div className="details">
              <div className="details1">
                <h2>Description</h2>
                     <p>{description}</p>
                 </div>
            </div>
            </div>
            )
}

            export default Details