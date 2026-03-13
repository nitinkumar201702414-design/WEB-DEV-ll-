const historyBox = document.getElementById("history");
const consoleLog = document.getElementById("consoleLog");
const weatherBox = document.getElementById("weatherInfo");

function log(msg){
consoleLog.innerHTML += msg + "\n";
}

function getWeather(){

const city = document.getElementById("cityInput").value.trim().toLowerCase();

consoleLog.innerHTML="";

log("1 Sync Start");

setTimeout(()=>{
log("4 setTimeout (Macrotask)");
},0);

log("[ASYNC] Start fetching");

log("2 Sync End");

log("3 Promise.then (Microtask)");

addHistory(city);

if(city==="delhi"){

weatherBox.innerHTML=`
<div class="weather-row">
<span>City</span>
<span>Delhi, IN</span>
</div>

<div class="weather-row">
<span>Temp</span>
<span>27 °C</span>
</div>

<div class="weather-row">
<span>Weather</span>
<span>Haze</span>
</div>

<div class="weather-row">
<span>Humidity</span>
<span>52%</span>
</div>

<div class="weather-row">
<span>Wind</span>
<span>5.1 m/s</span>
</div>
`;

log("[ASYNC] Data received");

}

else if(city==="indore"){

weatherBox.innerHTML=`
<div class="weather-row">
<span>City</span>
<span>Indore, IN</span>
</div>

<div class="weather-row">
<span>Temp</span>
<span>21.1 °C</span>
</div>

<div class="weather-row">
<span>Weather</span>
<span>Haze</span>
</div>

<div class="weather-row">
<span>Humidity</span>
<span>52%</span>
</div>

<div class="weather-row">
<span>Wind</span>
<span>5.14 m/s</span>
</div>
`;

log("[ASYNC] Data received");

}

else{

weatherBox.innerHTML="<p style='color:red'>City not found</p>";

}

}

function addHistory(city){

const chip=document.createElement("span");

chip.innerText=city;

chip.onclick=function(){
document.getElementById("cityInput").value=city;
getWeather();
};

historyBox.appendChild(chip);

}