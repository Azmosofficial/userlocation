
// location-users
let country_name=document.getElementById('c-name')
let country_icon=document.getElementById('flag_c')
let timeZone=document.getElementById('time_zone')
let isp=document.getElementById('isp')

let myLocationReqeust = new XMLHttpRequest();
myLocationReqeust.onreadystatechange = function () {
   
    if (this.readyState === 4 && this.status === 200) {
        let myObject = JSON.parse(this.responseText)
         let flag= `https://countryflagsapi.com/svg/${myObject.countryCode}`
        country_name.innerHTML = myObject.country;
        timeZone.innerHTML = myObject.timezone;
        isp.innerHTML = myObject.isp;
        country_icon.src = flag;
    }
}
myLocationReqeust.open('GET', 'http://ip-api.com/json', true);
myLocationReqeust.send()