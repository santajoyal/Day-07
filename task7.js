//1)asia - regions

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.send();
xhr.responseType ="json";
xhr.onload = function displayResult(){
    const region= xhr.response;
    var result = region.filter((element)=>{
     return element.region === "Asia";
    
    })
    console.log(result);
};
 

//2)population using filter

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.send();
xhr.responseType ="json";
xhr.onload = function displayResult(){
    const countries= xhr.response;
    var result = countries.filter((element)=>{
     return element.population<=200000;
    
    })
    console.log(result);
};


//3)for each

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.send();
xhr.responseType ="json";
xhr.onload = function displayResult(){
    const countries= xhr.response;
    countries.forEach((element) => {
        console.log(element.name,element.capital,element.flags);
        });
    };


//4) population using reduce function

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.send();
xhr.responseType ="json";
xhr.onload = function displayResult(){
    const countries= xhr.response;
    var population = countries.reduce((accu,curr)=>{
        return accu+curr.population;
    })
    console.log(population);
    };

    
//5)print usd

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.send();
xhr.responseType ="json";
xhr.onload = function displayResult(){
    const countries= xhr.response;
    console.log(countries);
    var result = countries.filter((element)=>{
    return element.currencies ==="USD" 
    
    })
    console.log(result);
};
