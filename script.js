var historyObj = { city: [] };

function onLoad() {
  if(localStorage.getItem('history')) {
    historyObj = JSON.parse(localStorage.getItem('history'));
    console.log("onLoad",historyObj);

    historyObj.city.forEach((e) => {
        // const searchedElement = document.createElement("h4");
        const searchedElement = document.createElement("button");
        searchedElement.textContent = e;
        document.getElementById("myDIV").appendChild(searchedElement);
      });
  }
}

function addHistory(dataToSave) {
  historyObj.city=[];
  historyObj.city.push(dataToSave);
  localStorage.setItem('history',JSON.stringify(historyObj));
}

$("#GetInfo").click(function()
{
    var cityName=document.getElementById("cityInput").value
    addHistory(cityName)
    FetchWeatherData(cityName)
    onLoad()
});
const apiKey="50bf1553654ba1e936bafd8eb4c33b7f";
function tempFormatter(temperature) {

  return Math.floor((temperature - 273.15) * 1.8 + 32);

}
function FetchWeatherData(cityName)
{
fetch('https://api.openweathermap.org/data/2.5/forecast?q='+cityName+'&exclude=daily&appid='+ apiKey)
.then(response => response.json())

.then (data =>
    {
        var str=data.list[0].dt_txt;
var datePart=str.split(" ");

      console.log(data.list[0].dt_txt);
      document.getElementById("maxTemp").innerHTML = tempFormatter( data.list[3].main.temp)+"&#176F";
      document.getElementById("humidity").innerHTML = "Humidity:"+ Number( data.list[3].main.humidity);
      document.getElementById("date").innerHTML = datePart[0];//data.list[0].dt_txt;
      document.getElementById("pressure").innerHTML = "Pressure:"+ data.list[0].main.pressure;
    
        document.getElementById("day1Max").innerHTML =  + tempFormatter(data.list[0 * 8 + 4].main.temp_max) + " &#176F";
        document.getElementById("day1").innerHTML = (new Date(data.list[0 * 8 + 4].dt * 1000)).getDate();//day;

        document.getElementById("day2Max").innerHTML =  + tempFormatter(data.list[1 * 8 + 4].main.temp_max) + " &#176F";
        document.getElementById("day2").innerHTML = (new Date(data.list[1 * 8 + 4].dt * 1000)).getDate();

        document.getElementById("day3Max").innerHTML =  + tempFormatter(data.list[2 * 8 + 4].main.temp_max) + " &#176F";
        document.getElementById("day3").innerHTML = (new Date(data.list[2 * 8 + 4].dt * 1000)).getDate();


        document.getElementById("day4Max").innerHTML = + tempFormatter(data.list[3 * 8 + 4].main.temp_max) + " &#176F";
        document.getElementById("day4").innerHTML = (new Date(data.list[3 * 8 + 4].dt * 1000)).getDate();


        document.getElementById("day5Max").innerHTML = + tempFormatter(data.list[4 * 8 + 4].main.temp_max) + " &#176F";
        document.getElementById("day5").innerHTML = (new Date(data.list[4 * 8 + 4].dt * 1000)).getDate();

    });
}
