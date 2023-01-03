////API INFOS
const APIKEY = 'votre API';
// manipulation du DOM

//appel api avec ville en paramètre

let appelapi = function(city){
	let url = 
`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metricl&appid=votre API&lang=fr`;

fetch(url)
  .then((response) => 
  response.json().then((data) => {
  console.log(data);
  document.querySelector('#city').innerHTML = data.name;
  document.querySelector('#temp').innerHTML =   
  "<i class='fa-solid fa-temperature-three-quarters'></i>" + data.main.temp + '°';
  document.querySelector('#humidity').innerHTML = 
  "<i class='fa-brands fa-drupal'></i>" + data.main.humidity + '%';
  document.querySelector('#wind').innerHTML =
  "<i class='fa-solid fa-wind'></i>" + data.wind.speed + 'km/h'; 

})
)
.catch((err)=> console.log('Erreur : ' + err ));
}
//ecouteur d'événement soumission du formulaire
document.querySelector('form').addEventListener('submit' , function (e){
	e.preventDefault();
	let ville = document.querySelector('#inputCity').value;

	appelapi(ville);
});

//appel par défaut au chargement de la page

appelapi ('Douala');
