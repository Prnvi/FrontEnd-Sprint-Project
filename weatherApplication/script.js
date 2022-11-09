
let locationNameJs = document.getElementById('location-name')
let title = document.getElementById('city-title')



const getWeather = (city)=>{
fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=fa4318722f4461a30a49371428e6beea`)
.then(response => response.json())
.then((data)=>{
    /**  console.log(data)
    console.log(data[0].lat)
    console.log(data[0].lon)
    console.log(data[0].name) */
    title.innerHTML = data[0].name
    // console.log(title)
    fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${data[0].lat}&lon=${data[0].lon}&appid=fa4318722f4461a30a49371428e6beea`)
    .then(response => response.json())
    .then((data)=>{
        // console.log(data.list)
        for(i = 0; i<5; i++){
            document.getElementById("day" + (i+1) + "Min").innerHTML = "Min: " + Number(data.list[i].main.temp_min - 273.15).toFixed(1)+ "°C";
            //Number(1.3450001).toFixed(2); // 1.35
        }
        for(i = 0; i<5; i++){
            document.getElementById("day" + (i+1) + "Max").innerHTML = "Max: " + Number(data.list[i].main.temp_max - 273.15).toFixed(1) + "°C";
        }
        for(i = 0; i<5; i++){
            document.getElementById("day" + (i+1)).innerHTML =  (Number(data.list[i].main.temp - 273.15).toFixed(1)) + "°C";
        }
        for(i = 0; i<5; i++){
            document.getElementById("img" + (i+1)).src = "http://openweathermap.org/img/wn/"+
            data.list[i].weather[0].icon
            +".png";
        }
        
        for(i = 0; i<5; i++){
            document.getElementById("des"+(i+1)).innerHTML = data.list[i].weather[0].description;
        }

        for(i = 0; i<5; i++){
            // console.log(data.list[i].dt_txt)
            let dat =new Date(data.list[i].dt_txt).getDate()
            let a = data.list[i+1].dt_txt;
            console.log(a)
            console.log(dat +"abcd")
            // document.getElementById("date"+(i+1)).innerHTML=(data.list[i].dt_txt)
            // console.log(data.list[i].dt_txt)
            // let a = data.list[i].dt_txt;
            // console.log(a)
            
            if(!dat == data.list[i].dt_txt){
                console.log(dat)
            }else i++;
            
            
            let mon = new Date(data.list[i].dt_txt).getMonth()+1
            // console.log(mon)
            // document.getElementById("date"+(i+1)).innerHTML = 
        }
    })
}) 
}

locationNameJs.addEventListener('submit',(event) =>{
event.preventDefault();
 let inputData = Object.fromEntries(new FormData(locationNameJs));
 console.log(inputData)
getWeather(inputData.city)

})


