const loadCountries = () => {
    const url = 'https://restcountries.com/v3.1/all';
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountries(data))
};



const displayCountries = countries => {
    console.log(countries);
    console.log(Object.keys(countries[80].languages));
    const countriesDiv = document.getElementById("countries");
    countries.forEach(country => {
        const {name, capital, area, population, languages, currencies, continents} = country;
        const countryDiv = document.createElement('div');
        countryDiv.classList.add("countryDiv");
        countryDiv.innerHTML = `
        <h3> Name: ${name.common}</h3>
        <h4> Capital: ${capital[0]}</h4>
        <hr />
        <h5> Area: ${area} sqr km</h5>
        <h5> Population: ${population}</h5>
        <h5> Language: ${Object.keys(languages)}</h5>
        <h5> Currencies: ${Object.keys(currencies)}</h5>
        <h5> Region: ${continents[0]}</h5>
        `;
        countriesDiv.appendChild(countryDiv);
    });
    
}