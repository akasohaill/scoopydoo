import React, { useEffect, useState } from 'react';
import DetailsView from './DetailsView'; // Import your details view component

function ListView() {
  const [dogs, setDogs] = useState([]); // This stores the fetched data
  const [loading, setLoading] = useState(true);
  const [selectedBreed, setSelectedBreed] = useState(null); // Track selected breed

  useEffect(() => {
    const headers = new Headers({
      "Content-Type": "application/json",
      "x-api-key": "api-key" // Replace with your actual Dog API key
    });

    const requestOptions = {
      method: 'GET',
      headers: headers,
      redirect: 'follow'
    };

    // Fetch breed data
    fetch("https://api.thedogapi.com/v1/breeds?limit=10&page=0", requestOptions)
      .then(response => response.json())
      .then(result => {
        setDogs(result); // Store the result in the `dogs` state
        setLoading(false); // Stop loading
      })
      .catch(error => {
        console.log('error', error);
        setLoading(false); // Stop loading if there's an error
      });
  }, []);

  // Handle breed selection
  const handleBreedClick = (breed) => {
    setSelectedBreed(breed); // Set the clicked breed to show its details
  };

  // Handle going back to the list
  const handleGoBack = () => {
    setSelectedBreed(null); // Clear selected breed to go back to list
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="list-view">
      <h1> Dogs Breed</h1>
      {/* Conditionally render the list or the details */}
      {selectedBreed ? (
        <DetailsView breed={selectedBreed} onGoBack={handleGoBack} />
      ) : (
        <div className='dog-grid'>
          {dogs.map((breed) => (
            <div key={breed.id} onClick={() => handleBreedClick(breed)} className='dog-card'>
              <img src={breed.image?.url} alt={breed.name} className='dog-image' />
              <h2>{breed.name}</h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ListView;
