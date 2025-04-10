import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from "@cloudinary/url-gen";
import React from 'react';


const ImageTour = ({ publicId }) => {

 const cld = new Cloudinary({
  cloud: {
   cloudName: process.env.REACT_APP_CLOUDINARY_NAME
  }
 });

 const myImage = cld.image(publicId);

 return (
  <div>
   <AdvancedImage cldImg={myImage} style={{
    height: '200px', objectFit: 'cover',
    width: '100%',
    objectFit: 'cover',
    borderTopLeftRadius: '16px',
    borderTopRightRadius: '16px'
   }} />
  </div>
 )
};

export default ImageTour;