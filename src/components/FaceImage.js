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
        {/* Define interactive areas on the face image with coordinates */}
        <area shape="poly" coords="295,496,317,437,285,462,260,529,284,513" alt="Forehead" onClick={() => handleClick('Right Chin')} />
        <area shape="poly" coords="167,386,176,358,189,353,201,358,201,378,208,386,215,410,204,414,200,407,195,414,187,421,186,420,180,414,172,411,171,414,160,418,167,386" alt="Eyes" onClick={() => handleClick('Nose')} />
        <area shape="poly" coords="136,468,142,466,156,456,158,455,174,445,179,445,188,448,192,445,197,445,203,445,217,455,220,456,235,466,240,468,240,469,242,468" alt="Nose" onClick={() => handleClick('Lips')} />
        <area shape="poly" coords="247,373,259,372,304,365,321,353,324,373,270,454,250,440,229,426,235,374" alt="Mouth" onClick={() => handleClick('Right cheek')} />
        <area shape="poly" coords="98,237,132,227,137,222,159,228,180,234,206,234,221,230,236,226,257,223,277,238" alt="Chin" onClick={() => handleClick('Forehead')} />
        <area shape="poly" coords="98,247,132,236,137,231,158,238,180,244,206,243,220,239,235,235,257,232,277,248" alt="Right Forehead" onClick={() => handleClick('Right Forehead')} />
        <area shape="poly" coords="98,254,132,244,137,239,158,245,180,251,205,251,220,247,235,243,257,240,277,255" alt="Right Eye" onClick={() => handleClick('Right Eye')} />
        <area shape="poly" coords="296,334,309,331,320,321,324,317" alt="Right Nose" onClick={() => handleClick('Right Eyes')} />
        <area shape="poly" coords="298,334,309,333,321,327,325,325" alt="Right Mouth" onClick={() => handleClick('Right Mouth')} />
        <area shape="poly" coords="297,336,307,338,319,335,323,333" alt="Right Chin" onClick={() => handleClick('Right Chin')} />
        {/* Add more areas as necessary */}
      </map>
    </div>
  );
};

export default FaceImage;
