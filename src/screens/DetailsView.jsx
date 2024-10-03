import React from 'react';
import './style/DetailsView.css'
function DetailsView({ breed, onGoBack }) {
  return (
    <div className="details-view">
      <div className="bgimage"></div>
      <div className='imp'>
        <button onClick={onGoBack} className='btn'>Go Back</button>
        <h1>{breed.name}</h1>
        <img src={breed.image.url} alt={breed.name} className='image' />
        <div className="details">
          <p><strong>Weight:</strong> {breed.weight.imperial} lbs ({breed.weight.metric} kg)</p>
          <p><strong>Height:</strong> {breed.height.imperial} inches ({breed.height.metric} cm)</p>
          <p><strong>Life Span:</strong> {breed.life_span}</p>
          <p><strong>Bred For:</strong> {breed.bred_for}</p>
          <p><strong>Breed Group:</strong> {breed.breed_group}</p>
        </div>
      </div>
    </div>
  );
}

export default DetailsView;
