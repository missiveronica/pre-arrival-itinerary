import { useState } from 'react';
import { info } from './info';

function Rest () {
    const [experiences, setExperiences] = useState (info);
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
  return (
    <div>
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


export default Rest;