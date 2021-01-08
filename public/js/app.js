
const APIKEY = "fb8e75e16671d7a84261bd936f3e4f45";


let apiCall = function(city){

    let url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric&lang=fr`;    
fetch(url).then((response) =>
 response.json().then((data) => {
     console.log(data);
document.querySelector('#city').innerHTML = data.name;
document.querySelector('#temp').innerHTML =  "<i class='fas fa-thermometer-half'></i> "+ data.main.temp+ "°";
document.querySelector('#humidity').innerHTML ="<i class='fas fa-tint'></i> "+ data.main.humidity +'%';
document.querySelector('#wind').innerHTML = "<i class='fas fa-wind'></i> " + data.wind.speed + ' km/h';
document.querySelector('#img').innerHTML = '<img style="font-size:.5rem" src="img/icons/'+data.weather[0].icon+".png"+'" alt="img">';
document.querySelector('#phrase').innerHTML = data.weather[0].description;
})
)
.catch((err) => console.log('Erreur : ' + err));
};


document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault();
let ville = document.querySelector('#inputCity').value;


apiCall(ville);
});


