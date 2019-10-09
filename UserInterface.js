class UserInterface{
    constructor(){
        this.temp = document.getElementById('temp');
        this.city = document.getElementById('city');
        this.main = document.getElementById('main');
        this.description = document.getElementById('description');
        this.maxTemp = document.getElementById('max');
        this.minTemp = document.getElementById('min');
        this.humidity = document.getElementById('humidity');
        this.changeCity = document.getElementById('popup-city');
        this.changeCountry = document.getElementById('popup-country');
        this.icon = document.getElementById('icon');
    }
    static reg = /^[a-z]{2}$/i;
    static allInputs = document.querySelectorAll('form>input[type="text"]');    
    static popup = document.querySelector('.popup');
    static container = document.querySelector('.container-box');
    static changeWeatherbtn = document.getElementById('change');
    static changeWeatherPopup = document.getElementById('popup-change');
    
    static displayPopUp(){
        UserInterface.clearInputFields();
        UserInterface.popup.style.display = 'block';
        UserInterface.popup.style.animation = 'moveFromTop 2s 1';
        UserInterface.container.classList.add('blur');
        UserInterface.removeChangeUIEvent();
        UserInterface.changeWeatherPopup.setAttribute('disabled','');
        setTimeout(()=>UserInterface.popup.style.removeProperty('animation'),2000);
    }

    static removeChangeUIEvent(){
        UserInterface.changeWeatherbtn.removeEventListener('click',UserInterface.displayPopUp);
   }

    static addchangeUIEvent(){
        UserInterface.changeWeatherbtn.addEventListener('click',UserInterface.displayPopUp);
    }
    
    static clearInputFields(){
        UserInterface.allInputs.forEach(el=>el.value='');
    }

     static checkInputs(){
         UserInterface.allInputs.forEach(el=>{
             if(el.value !== '' && UserInterface.reg.test(UserInterface.allInputs[1].value) ){
                 UserInterface.changeWeatherPopup.removeAttribute('disabled');
             }
         });
     }

     display(weather){
        this.icon.src = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
        this.temp.innerHTML = `${weather.main.temp} <sup>o</sup>C`;
        this.city.innerHTML = `${weather.name},${weather.sys.country}`;
        this.main.innerHTML = `${weather.weather[0].main}`;
        this.description.innerHTML = `${weather.weather[0].description}`;
        this.maxTemp.innerHTML = `Max: ${weather.main.temp_max} <sup>o</sup>C`;
        this.minTemp.innerHTML = `Min: ${weather.main.temp_min} <sup>o</sup>C`;
        this.humidity.innerHTML = `Humidity: ${weather.main.humidity}%`;
    }

}