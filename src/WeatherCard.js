import React from 'react';
import './WeatherCard.css';

const ICONS = {
  sunny: 'https://www.mgm.gov.tr/Images_Sys/hadiseler/a.svg',
  cloudy: 'https://www.mgm.gov.tr/Images_Sys/hadiseler/pb.svg',
  rainy: 'https://www.mgm.gov.tr/Images_Sys/hadiseler/y.svg',
  snowy: 'https://www.mgm.gov.tr/Images_Sys/hadiseler/k.svg',
  foggy: 'https://www.example.com/icons/fog.svg',
};

const getConditionDescription = (condition) => {
  if (condition.includes('Patchy rain nearby')) return 'Patchy rain nearby';
  if (condition.includes('Clear') || condition.includes('Sunny')) return 'Sunny';
  if (condition.includes('Cloud') || condition.includes('Partly Cloudy')) return 'Cloudy';
  if (condition.includes('Rain') || condition.includes('Drizzle') || condition.includes('Shower')) return 'Rainy';
  if (condition.includes('Snow')) return 'Snowy';
  if (condition.includes('Fog')) return 'Foggy'; 
  return 'Unknown Weather'; 
};

const WeatherCard = ({ date, highTemp, lowTemp, condition, icon }) => {
  const iconUrl = ICONS[icon] || ICONS.sunny; 
  const conditionDescription = getConditionDescription(condition); 

  return (
    <div className="card">
      <h3>{date}</h3>
      <img src={iconUrl} alt={conditionDescription} className="weather-icon" />
      <div className="temperature-container">
        <p className="high-temp"> {highTemp}°</p>
        <p className="low-temp">{lowTemp}°</p>
      </div>
      <p>{conditionDescription}</p>
    </div>
  );
};

export default WeatherCard;





