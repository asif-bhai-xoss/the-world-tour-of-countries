//global variables
const countriesDiv = document.getElementById("countries");
let flag = 0;

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
    if(flag==0){
        countries.forEach(country => allCountries(country));  
    }
    else if(flag==1){
        console.log(countries);
        countries.forEach(country => {
            if(country.continents[0].includes("Asia")){
                allCountries(country);
            }
        });
    }
    else if(flag==2){
        console.log(countries);
        countries.forEach(country => {
            if(country.continents[0].includes("Europe")){
                allCountries(country);
            }
        });
    }
    else if(flag==3){
        console.log(countries);
        countries.forEach(country => {
            if(country.continents[0].includes("Africa")){
                allCountries(country);
            }
        });
    }
    else if(flag==4){
        console.log(countries);
        countries.forEach(country => {
            if(country.continents[0].includes("America")){
                allCountries(country);
            }
        });
    }
    else if(flag==5){
        console.log(countries);
        countries.forEach(country => {
            if(country.continents[0].includes("Oceania")){
                allCountries(country);
            }
        });
    }
    else if(flag==6){
        console.log(countries);
        countries.forEach(country => {
            if(country.continents[0].includes("Antarctica")){
                allCountries(country);
            }
        });
    }
}

//if 'world icon' and homepage is clicked
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

//If asia is clicked then
const home = () => {
    flag = 0;
    countriesDiv.textContent = "";
    loadCountries(flag);
}
//If asia is clicked then
const asia = () => {
    flag = 1;
    countriesDiv.textContent = "";
    loadCountries(flag);
    
}
//If europe is clicked then
const europe = () => {
    flag = 2;
    countriesDiv.textContent = "";
    loadCountries(flag);
}
//If africa is clicked then
const africa = () => {
    flag = 3;
    countriesDiv.textContent = "";
    loadCountries(flag);
}
//If usa is clicked then
const usa = () => {
    flag = 4;
    countriesDiv.textContent = "";
    loadCountries(flag);
}
//If oceania is clicked then
const oceania = () => {
    flag = 5;
    countriesDiv.textContent = "";
    loadCountries(flag);
}
//If antarctica is clicked then
const antarctica = () => {
    flag = 6;
    countriesDiv.textContent = "";
    loadCountries(flag);
}