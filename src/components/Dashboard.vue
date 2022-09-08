<template>
    <main id="weather" class="col-md-9 container">


        <header class="weather-title text-center">
            <h1>weather now</h1>
            <p class="current-date">{{ date }}</p>
            <h5>Today's Overview</h5>
        </header>


        <section class="mb-3 text-center" id="main-content">

            <div class="row m-0 p-0 d-flex align-items-end justify-content-center">
                <div class="card main col-md-4 d-flex flex-row justify-content-center align-items-center">
                    <div class=" main-card card-body">

                        <div class=" place">
                            <h5 class="card-title m-0">
                                <font-awesome-icon icon="location-dot" />{{ weatherData.name }}
                            </h5>
                        </div>
                        <div class=" p-0 temperature-container">
                            <p class="temperature m-0">{{temp(weatherData['main'].temp)}}°C</p>
                            <p>{{weatherData.weather[0].main}}</p>
                            <p class=""> Feels like {{temp(weatherData['main'].temp)}}°C</p>
                        </div>
                    </div>
                    <img class="main-img"
                        :src="'https://openweathermap.org/img/wn/'+weatherData.weather[0].icon+'@2x.png'"
                        alt="Card image cap">
                </div>




                <section id="overview" class="col-md-8">

                    <div class="row d-flex justify-content-center">

                        <div id="windspeed" class="col-md-6 m-1 card">
                            <div class="card-body">
                                <div class="w-25 d-flex justify-content-center">
                                    <i class="ti ti-pressure"></i>
                                </div>

                                <div class="w-75 d-flex justify-content-center align-items-center">
                                    <h5 class="card-title">Wind speed</h5>
                                </div>

                                <div class="d-flex justify-content-center wind-speed w-25">
                                    <p class="card-text ms-2">{{weatherData.wind.speed}}<span
                                            class="ml-1">m/s<span></span></span></p>
                                </div>
                            </div>
                        </div>


                        <div id="Humidity" class="card col m-1 ">
                            <div class="card-body ">
                                <div class=" w-25 rain d-flex justify-content-center">
                                    <i class="ti ti-rain-chance"></i>
                                </div>

                                <div class="w-75 d-flex justify-content-center align-items-center">
                                    <h5 class="card-title">Humidity</h5>
                                </div>

                                <div class="d-flex justify-content-center w-25 humidity">
                                    <p class="card-text ms-2">{{weatherData.main.humidity}}%</p>
                                </div>
                            </div>
                        </div>


                        <div id="pressure" class="card col-md-6 m-1">
                            <div class="card-body">
                                <div class=" d-flex justify-content-center">
                                    <i class="ti ti-wind-speed"></i>
                                </div>

                                <div class="w-50 d-flex justify-content-center align-items-center">
                                    <h5 class="card-title">Pressure</h5>
                                </div>



                                <div class="d-flex justify-content-center w-25 pressure">
                                    <p class="card-text ms-2">{{weatherData['main'].pressure}} <span
                                            class="ms-1">hPa<span></span></span></p>
                                </div>

                            </div>
                        </div>

                    </div>
                </section>
            </div>
            <section id="upcoming-days" class="mt-5">
                <h5>Upcoming days</h5>
                <div class="row">
                    <div v-for="(item, i) in forecastWeatherData" :key="i" class="col my-1">
                        <div class="card">
                            <div class="card-body">

                                <div class="d-flex justify-content-center align-items-center">
                                    <img :src="'https://openweathermap.org/img/wn/'+item.weather[0].icon+'@2x.png'"
                                        alt="moderate rain">
                                    <div class="card-head">
                                        <h5 class="card-title d-flex align-items-center text-center">{{
                                        formatDate(item.dt_txt) }}</h5>
                                    </div>

                                </div>
                                <div>
                                    <div class="d-flex flex-column align-items-center">
                                        <div class="info-box">
                                            <p><b>pressure</b> - {{ item.main.pressure }}mb</p>
                                        </div>
                                        <div class="info-box">
                                            <p> <b>wind</b> - {{ item.wind.speed }} m/s</p>
                                            <p></p>
                                        </div>
                                        <div class="info-box">
                                            <p> <b>Humidity</b> - {{ item.main.humidity }}% </p>
                                        </div>
                                        <div class="info-box">
                                            <p> <b>High</b> - {{ temp(item.main.temp_max) }}°C </p>
                                        </div>
                                        <div class="info-box">
                                            <p> <b>low</b> - {{ temp(item.main.temp_min) }}°C</p>
                                        </div>

                                    </div>
                                    <div>
                                        <p class="card-temperature">{{ temp(item.main.temp) }}°C</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </section>



    </main>
</template>
<script>
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
    name: 'DashBoard',
    props: ['weatherData', 'forecastWeatherData'],
    computed: {
        date() {
            return moment().format('dddd MMMM Do ')
        },

    },
    methods: {
        temp(el) {
            return ((el - 273.15)).toFixed(2);
        },
        formatDate(date) {
            return moment(new Date(date)).format('dddd MMMM Do ')
        }
    },
    components: {
        FontAwesomeIcon
    }
}
</script>
<style>
main {
    overflow-y: scroll;
}

.card {
    background-color: #BDE8F5 !important;
}
</style>