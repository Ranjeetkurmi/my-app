import React, { useState, useEffect } from 'react';

export default function CountryList() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => setCountries(data))
      .catch(error => console.error('Error fetching countries:', error));
  }, []);

  return (
    <div>
      <h1>List of Countries</h1>
      <ul>
        {countries.map(country => (
          <li key={country.name.common}>{country.name.common}</li>
        ))}
      </ul>
    </div>
  );
}

