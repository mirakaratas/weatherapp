import React, { useState, useEffect } from 'react';
import './App.css';
import WeatherCard from './WeatherCard';

const API_KEY = '2778476e453847efbf063702241908'; 
const BASE_URL = 'https://api.weatherapi.com/v1/forecast.json';

function App() {
  const [selectedCity, setSelectedCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (selectedCity) {
      const fetchWeather = async () => {
        setLoading(true);
        setError(null);
        try {
          const response = await fetch(`${BASE_URL}?key=${API_KEY}&q=${selectedCity}&days=7&aqi=yes&alerts=yes`);
          if (!response.ok) {
            throw new Error('Şehir bulunamadı');
          }
          const data = await response.json();
          setWeatherData(data);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

      fetchWeather();
    }
  }, [selectedCity]);

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  return (
    <div className="app">
      <select className="city" name="city" id="select" value={selectedCity} onChange={handleCityChange}>
        <option value="">Şehir seçiniz</option>
        <option value="Adana">Adana</option>
        <option value="Adıyaman">Adıyaman</option>
        <option value="Afyonkarahisar">Afyonkarahisar</option>
        <option value="Ağrı">Ağrı</option>
        <option value="Aksaray">Aksaray</option>
        <option value="Amasya">Amasya</option>
        <option value="Ankara">Ankara</option>
        <option value="Antalya">Antalya</option>
        <option value="Ardahan">Ardahan</option>
        <option value="Artvin">Artvin</option>
        <option value="Aydın">Aydın</option>
        <option value="Balıkesir">Balıkesir</option>
        <option value="Bartın">Bartın</option>
        <option value="Batman">Batman</option>
        <option value="Bayburt">Bayburt</option>
        <option value="Bilecik">Bilecik</option>
        <option value="Bingöl">Bingöl</option>
        <option value="Bitlis">Bitlis</option>
        <option value="Bolu">Bolu</option>
        <option value="Burdur">Burdur</option>
        <option value="Bursa">Bursa</option>
        <option value="Çanakkale">Çanakkale</option>
        <option value="Çankırı">Çankırı</option>
        <option value="Çorum">Çorum</option>
        <option value="Denizli">Denizli</option>
        <option value="Diyarbakır">Diyarbakır</option>
        <option value="Düzce">Düzce</option>
        <option value="Edirne">Edirne</option>
        <option value="Elazığ">Elazığ</option>
        <option value="Erzincan">Erzincan</option>
        <option value="Erzurum">Erzurum</option>
        <option value="Eskişehir">Eskişehir</option>
        <option value="Gaziantep">Gaziantep</option>
        <option value="Giresun">Giresun</option>
        <option value="Gümüşhane">Gümüşhane</option>
        <option value="Hakkari">Hakkari</option>
        <option value="Hatay">Hatay</option>
        <option value="Iğdır">Iğdır</option>
        <option value="Isparta">Isparta</option>
        <option value="İstanbul">İstanbul</option>
        <option value="İzmir">İzmir</option>
        <option value="Kahramanmaraş">Kahramanmaraş</option>
        <option value="Karabük">Karabük</option>
        <option value="Karaman">Karaman</option>
        <option value="Kars">Kars</option>
        <option value="Kastamonu">Kastamonu</option>
        <option value="Kayseri">Kayseri</option>
        <option value="Kırıkkale">Kırıkkale</option>
        <option value="Kırklareli">Kırklareli</option>
        <option value="Kırşehir">Kırşehir</option>
        <option value="Kilis">Kilis</option>
        <option value="Kocaeli">Kocaeli</option>
        <option value="Konya">Konya</option>
        <option value="Kütahya">Kütahya</option>
        <option value="Malatya">Malatya</option>
        <option value="Manisa">Manisa</option>
        <option value="Mardin">Mardin</option>
        <option value="Mersin">Mersin</option>
        <option value="Muğla">Muğla</option>
        <option value="Muş">Muş</option>
        <option value="Nevşehir">Nevşehir</option>
        <option value="Niğde">Niğde</option>
        <option value="Ordu">Ordu</option>
        <option value="Osmaniye">Osmaniye</option>
        <option value="Rize">Rize</option>
        <option value="Sakarya">Sakarya</option>
        <option value="Samsun">Samsun</option>
        <option value="Siirt">Siirt</option>
        <option value="Sinop">Sinop</option>
        <option value="Sivas">Sivas</option>
        <option value="Şanlıurfa">Şanlıurfa</option>
        <option value="Şırnak">Şırnak</option>
        <option value="Tekirdağ">Tekirdağ</option>
        <option value="Tokat">Tokat</option>
        <option value="Trabzon">Trabzon</option>
        <option value="Tunceli">Tunceli</option>
        <option value="Uşak">Uşak</option>
        <option value="Van">Van</option>
        <option value="Yalova">Yalova</option>
        <option value="Yozgat">Yozgat</option>
        <option value="Zonguldak">Zonguldak</option>
      
      </select>

      {loading && <p>Yükleniyor...</p>}
      {error && <p>Hata: {error}</p>}
      {weatherData && (
        <div className="container">
          <div className="main-card">
            <div className="card-container">
              {weatherData.forecast.forecastday.map(day => (
                <WeatherCard
                  key={day.date}
                  date={new Date(day.date).toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short' })}
                  highTemp={day.day.maxtemp_c}
                  lowTemp={day.day.mintemp_c}
                  condition={day.day.condition.text}
                  icon={getIconKey(day.day.condition.text)} 
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const getIconKey = (condition) => {
    if (condition.includes('Clear') || condition.includes('Sunny')) return 'sunny';
    if (condition.includes('Cloud') || condition.includes('Partly Cloudy')) return 'cloudy';
    if (condition.includes('Rain') || condition.includes('Drizzle') || condition.includes('Shower') || condition.includes('Patchy rain nearby')) return 'rainy';
    if (condition.includes('Snow')) return 'snowy';
    if (condition.includes('Fog')) return 'foggy'; 
    return 'sunny'; 
};

export default App;
