//global variables
const countriesDiv = document.getElementById("countries");
let flag = "home";
const search = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");


// Load rest countries api
const loadCountries = () => {
    const url = 'https://restcountries.com/v3.1/all';
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountries(flag, data))
};

loadCountries();

//load all countries api 
const displayCountries = (flag, countries) => {
    if(flag=="home"){
        countries.forEach(country => allCountries(country));  
    }
    else if(flag==search.value){
        countries.forEach(country => {
            if(country.name.common.toLowerCase().includes(flag.toLowerCase())){
                allCountries(country);
            }
        });
    }
    else {
        countries.forEach(country => {
            if(country.continents[0].includes(flag)){
                allCountries(country);
            }
        });
    }
}




//display desire countries
const allCountries = country => {
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
}

//If home is clicked then
const home = () => {
    flag = "home";
    countriesDiv.textContent = "";
    loadCountries(flag);
}
//If asia is clicked then
const asia = () => {
    flag = "Asia";
    countriesDiv.textContent = "";
    loadCountries(flag);
    
}
//If europe is clicked then
const europe = () => {
    flag = "Europe";
    countriesDiv.textContent = "";
    loadCountries(flag);
}
//If africa is clicked then
const africa = () => {
    flag = "Africa";
    countriesDiv.textContent = "";
    loadCountries(flag);
}
//If usa is clicked then
const usa = () => {
    flag = "America";
    countriesDiv.textContent = "";
    loadCountries(flag);
}
//If oceania is clicked then
const oceania = () => {
    flag = "Oceania";
    countriesDiv.textContent = "";
    loadCountries(flag);
}
//If antarctica is clicked then
const antarctica = () => {
    flag = "Antarctica";
    countriesDiv.textContent = "";
    loadCountries(flag);
}

const searchCountry = () => {
    flag = search.value;
    countriesDiv.textContent = "";
    loadCountries(flag);
}