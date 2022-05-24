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
//fetch('https://api.openweathermap.org/data/2.5/forecast?q='+cityName+'&exclude=daily&appid=50bf1553654ba1e936bafd8eb4c33b7f')
//let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey;
//fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey)
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
    //  console.log(data.list[0].dt_txt);
    //  document.getElementById("minTemp").innerHTML = "Min:"+ Number( data.list[3].main.temp-data.list[0].main.temp_min)+"°";
    //  document.getElementById("humidity").innerHTML = "Humidity:"+ Number( data.list[3].main.humidity);
    //  document.getElementById("date").innerHTML = data.list[0].dt_txt;
    //  document.getElementById("pressure").innerHTML =  data.list[0].main.pressure;

    //forecastTempEl.innerHTML = "Temp: " + k2f(response.data.list[forecastIndex].main.temp) + " &#176F";

    // for (i = 0; i < 5; i++) {
    
    //     // const index = i * 8 + 4;
    //     const index = i * 8 + 4;
    //     const date = new Date(data.list[index].dt * 1000);

    //     const day = date.getDate();
        // document.getElementById("day1min").innerHTML = "Temperature: " + tempFormatter(data.list[index].main.temp) + " &#176F";
        // document.getElementById("day1Max").innerHTML = day;
        document.getElementById("day1Max").innerHTML = "Temperature: " + tempFormatter(data.list[0 * 8 + 4].main.temp_max) + " &#176F";
        document.getElementById("day1").innerHTML = (new Date(data.list[0 * 8 + 4].dt * 1000)).getDate();//day;

        document.getElementById("day2Max").innerHTML = "Temperature: " + tempFormatter(data.list[1 * 8 + 4].main.temp_max) + " &#176F";
        document.getElementById("day2").innerHTML = (new Date(data.list[1 * 8 + 4].dt * 1000)).getDate();

        document.getElementById("day3Max").innerHTML = "Temperature: " + tempFormatter(data.list[2 * 8 + 4].main.temp_max) + " &#176F";
        document.getElementById("day3").innerHTML = (new Date(data.list[2 * 8 + 4].dt * 1000)).getDate();


        document.getElementById("day4Max").innerHTML = "Temperature: " + tempFormatter(data.list[3 * 8 + 4].main.temp_max) + " &#176F";
        document.getElementById("day4").innerHTML = (new Date(data.list[3 * 8 + 4].dt * 1000)).getDate();


        document.getElementById("day5Max").innerHTML = "Temperature: " + tempFormatter(data.list[4 * 8 + 4].main.temp_max) + " &#176F";
        document.getElementById("day5").innerHTML = (new Date(data.list[4 * 8 + 4].dt * 1000)).getDate();


    // document.getElementById("day2min").innerHTML = "Min:"+ tempFormatter( data.list[6].main.temp-data.list[0].main.temp_min)+"°";
    // document.getElementById("day2Max").innerHTML = "Max:"+ tempFormatter( data.list[6].main.temp-data.list[0].main.temp_max)+"°";
    // document.getElementById("day2Max").innerHTML = data.list[9].dt_txt;

    // document.getElementById("day3min").innerHTML = "Min:"+ tempFormatter( data.list[9].main.temp-data.list[0].main.temp_min)+"°";
    // document.getElementById("day3Max").innerHTML = "Max:"+ tempFormatter( data.list[9].main.temp-data.list[0].main.temp_max)+"°";
    // document.getElementById("day3Max").innerHTML = data.list[17].dt_txt;

    // document.getElementById("day4min").innerHTML = "Min:"+ tempFormatter( data.list[12].main.temp-data.list[0].main.temp_min)+"°";
    // document.getElementById("day4Max").innerHTML = "Max:"+ tempFormatter( data.list[12].main.temp-data.list[0].main.temp_max)+"°";
    // document.getElementById("day4Max").innerHTML =  data.list[25].dt_txt;

    // document.getElementById("day5min").innerHTML = "Min:"+ tempFormatter( data.list[15].main.temp-data.list[0].main.temp_min)+"°";
    // document.getElementById("day5Max").innerHTML = data.list[32].dt_txt;
            //  }


    // document.getElementById("day1min").innerHTML = "Min:"+ tempFormatter( data.list[3].main.temp-data.list[0].main.temp_min)+"°";
    // document.getElementById("day1Max").innerHTML = "Max:"+ tempFormatter( data.list[3].main.temp-data.list[0].main.temp_max)+"°";
    // document.getElementById("day1Max").innerHTML = data.list[0].dt_txt;

    // document.getElementById("day2min").innerHTML = "Min:"+ tempFormatter( data.list[6].main.temp-data.list[0].main.temp_min)+"°";
    // document.getElementById("day2Max").innerHTML = "Max:"+ tempFormatter( data.list[6].main.temp-data.list[0].main.temp_max)+"°";
    // document.getElementById("day2Max").innerHTML = data.list[9].dt_txt;

    // document.getElementById("day3min").innerHTML = "Min:"+ tempFormatter( data.list[9].main.temp-data.list[0].main.temp_min)+"°";
    // document.getElementById("day3Max").innerHTML = "Max:"+ tempFormatter( data.list[9].main.temp-data.list[0].main.temp_max)+"°";
    // document.getElementById("day3Max").innerHTML = data.list[17].dt_txt;

    // document.getElementById("day4min").innerHTML = "Min:"+ tempFormatter( data.list[12].main.temp-data.list[0].main.temp_min)+"°";
    // document.getElementById("day4Max").innerHTML = "Max:"+ tempFormatter( data.list[12].main.temp-data.list[0].main.temp_max)+"°";
    // document.getElementById("day4Max").innerHTML =  data.list[25].dt_txt;

    // document.getElementById("day5min").innerHTML = "Min:"+ tempFormatter( data.list[15].main.temp-data.list[0].main.temp_min)+"°";
    // document.getElementById("day5Max").innerHTML = data.list[32].dt_txt;
    });
}
