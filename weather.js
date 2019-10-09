class Weather{
    constructor(city,country){
        this.key = '1327ed7ebf438fb3383fab358299c5d5';
        this.city = city;
        this.country = country;
    }
    async getWeather(){
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&units=metric&APPID=${this.key}`);
        const weather = await response.json();
        return weather;
    }
    // getWeather(){
    //     return new Promise((resolve,reject)=>{
    //       fetch(
    //       `http://api.openweathermap.org/data/2.5/weather?q=${this.city},${
    //         this.country
    //       }&units=metric&APPID=${this.key}`
    //     )
    //         .then(result=>result.json())
    //         .then(data=>resolve(data))
    //         .catch(err=>reject(err))
    //     })
    //   }
    changeWeather(city,country){
        this.city = city;
        this.country = country;
    }
}