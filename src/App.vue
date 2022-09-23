<template>
  <div class="container-fluid d-flex flex-row">
    <NavBar @country="apiCall" ></NavBar>
    <dashBoard :weatherData="weatherData" :forecastWeatherData="forecastWeatherData"></dashBoard>
  </div>
</template>

<script>

import NavBar from "./components/Navbar.vue"
import DashBoard from "./components/Dashboard.vue"

export default {
  name: "App",
  data() {
    return {
      longitude: 0,
      latitude: 0,
      paramType: "", 
      weatherData: {},
      forecastWeatherData: [],
    };
  },
  created() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getPosition);
    }
    else {
      alert("Geolocation is not supported by this browser.");
    }
  },
  methods: {
    async firstApiCall(typeOfParam) {
      this.paramType = typeOfParam;
       let url = `https://api.openweathermap.org/data/2.5/weather?lat=${this.latitude}&lon=${this.longitude}&appid=b3d233c09be1dd283fac50c81f1249cd`;
       let req = new XMLHttpRequest;
       req.open("GET", url, true);
       req.send();
       req.onload = () =>{
         this.weatherData = JSON.parse(req.responseText);
       }
       let url2 = `https://api.openweathermap.org/data/2.5/forecast?lat=${this.latitude}&lon=${this.longitude}&appid=b3d233c09be1dd283fac50c81f1249cd`;
       let req2 = new XMLHttpRequest;
       req2.open("GET", url2, true);
       req2.send();
       req2.onload = () =>{
        let json = JSON.parse(req2.responseText);
         this.forecastWeatherData = [...json.list.splice(0,1), ...json.list.splice(8, 1), ...json.list.splice(16, 1), ...json.list.splice(24, 1), ...json.list.splice(32, 1), ...json.list.splice(39, 1)] ;
       }
    },
    getPosition(pos) {
      let typeOfParam = "coords";
      this.latitude = pos.coords.latitude;
      this.longitude = pos.coords.longitude;
      this.firstApiCall(typeOfParam);
    },
    async apiCall(value) {
      this.paramType = 'country';
       let url = `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=b3d233c09be1dd283fac50c81f1249cd`;
       let req = new XMLHttpRequest;
       req.open("GET", url, true);
       req.send();
       req.onload = () =>{
         this.weatherData = JSON.parse(req.responseText);
       }
       let url2 = `https://api.openweathermap.org/data/2.5/forecast?q=${value}&appid=b3d233c09be1dd283fac50c81f1249cd`;
       let req2 = new XMLHttpRequest;
       req2.open("GET", url2, true);
       req2.send();
       req2.onload = () =>{
        let json = JSON.parse(req2.responseText);
         this.forecastWeatherData = [...json.list.splice(0,1), ...json.list.splice(8, 1), ...json.list.splice(16, 1), ...json.list.splice(24, 1), ...json.list.splice(32, 1), ...json.list.splice(39, 1)];
       }
    }
  },
  components: {
    NavBar,
    DashBoard,
  }
}
</script>

<style scoped>
  .container-fluid{
    padding: 0px;
    margin: 0px !important;
    height: 100vh;
    background-color: #C5EDF9;
    color: #001F50;
  }
</style>
