import React from 'react';
import { useDispatch } from 'react-redux';
import { openPopup } from '../redux/popupSlice';
import faceSvg from '../assets/image.svg'

const FaceImage = () => {
  const dispatch = useDispatch();

  const handleClick = (sectionName) => {
    dispatch(openPopup(sectionName));
  };

  return (
    <div>
      <img src={faceSvg} alt="Face" useMap="#face-map" />
      <map name="face-map">
        <area shape="rect" coords="34,44,270,350" alt="Forehead" onClick={() => handleClick('Forehead')} />
        <area shape="rect" coords="34,351,270,466" alt="Eyes" onClick={() => handleClick('Eyes')} />
        <area shape="rect" coords="34,467,270,579" alt="Nose" onClick={() => handleClick('Nose')} />
        <area shape="rect" coords="34,580,270,735" alt="Mouth" onClick={() => handleClick('Mouth')} />
       
      </map>
    </div>
  );
};

export default FaceImage;
