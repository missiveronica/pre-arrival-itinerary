import { useState } from 'react';
import { data } from './data';

function Slides () {

    const [slide, setSlide] = useState (0);
  const {image} = data[slide];

  const previousSlide = () => {
    setSlide ((slide => {
      slide --;
      if (slide < 0) {
        return data.length -1;
      }
      return slide;
    }))
  }
  const nextSlide = () => {
    setSlide(( slide => {
    slide ++;
    if (slide > data.length -1) {
      slide = 0;
    }
    return slide;
  }))
  }
return (

    <div>
    <h1>Your Pre-Arrival Itinerary: Curation of Experiences Just for You </h1>
<div className='container'>
<img src = {image} width= "400px" height ="300px" alt = "islandPicture"/>
</div>
<div className="btn container">
<button onClick={previousSlide} className='firstButtons'>Previous</button>
<button onClick={nextSlide} className='firstButtons'>Next</button>
</div>
</div>
)
}
export default Slides;
