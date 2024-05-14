import { useState } from 'react';
import { data } from './data';
import { info } from './info';
import './App.css';

function App() {

  const [slide, setSlide] = useState (0);
  const {image} = data [slide];
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

  const [experiences, setExperiences] = useState (info);
  const [showMore, setShowMore] = useState(false);
  const [showText, setShowText] = useState(false);
  const removeItem = (id) => {
    let newExperiences = experiences.filter(
      experience => experience.id !== id);
      setExperiences(newExperiences)
  }
  const showTextClick = (element) => {
    element.showMore = !element.showMore;
    setShowText (!showText)
  }

  return (<div>
    <h1>Your Pre-Arrival Itinerary: Curation of Experiences Just for You </h1>
<div className='container'>
<img src = {image} width= "400px" height ="300px" alt = "islandPicture"/>
</div>
<div className="btn container">
<button onClick={previousSlide} className='firstButtons'>Previous</button>
<button onClick={nextSlide} className='firstButtons'>Next</button>
</div>

<h2>Select Your Special Moments with Us </h2>
<div>
  {experiences.map(( element => {
    const {id, moment, description, photo, showMore} = element;
    return (<div key = {id}>
      <div className='container'>
        <h3>{id} - {moment} </h3>
      </div>
      <div className='container'>
        <img src={photo} alt="experience" width="300px"/>
      </div>
      <div className='container'>
        <p>{showMore ? description: description.substring(0,120) + "..."}
        <button className='more' onClick={() => 
        showTextClick(element)}>{showMore ? "Show less": "Show more"}</button>
        </p>
      </div>
<div className='container'>
  <button className='deleteOne' onClick={() =>
  removeItem(id)}>Remove this Experience</button>

</div>
    </div>

    )
  }

  ))}
  <div className='container'>
  <button className ='deleteAll' onClick={() =>
  setExperiences([])}>Clear Intinerary</button>
  </div>

</div>





  </div>
   
  );
}

export default App;
