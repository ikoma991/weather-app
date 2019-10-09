//Initializing

const LS = new LocalStorage;
const UI = new UserInterface;

const currLocation = LS.getItems();
const currWeather = new Weather(currLocation.city,currLocation.country);
//Event listeners

UserInterface.addchangeUIEvent();

UserInterface.changeWeatherPopup.addEventListener('click',changeWeather);

UserInterface.allInputs.forEach(el=>el.addEventListener('keyup',UserInterface.checkInputs));

document.addEventListener('DOMContentLoaded',fetchedWeather);

function changeWeather(e){
    const city = UI.changeCity.value;
    const country = UI.changeCountry.value;

    LS.store(city,country);

    currWeather.changeWeather(city,country);

    fetchedWeather();
    UserInterface.popup.style.animation = 'moveToTop 2s 1';
    setTimeout(()=>UserInterface.container.classList.remove('blur'),800);
    setTimeout(()=>{
        UserInterface.popup.style.removeProperty('animation');
        UserInterface.popup.style.display = 'none';
        UserInterface.addchangeUIEvent();
    }
    ,2000)

    e.preventDefault();
}

//fetching and displaying data
function fetchedWeather(){
    currWeather.getWeather()
    .then(data=>UI.display(data))
    .catch(err=>err);
}
