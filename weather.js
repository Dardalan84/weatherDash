// Declaring the variables
let lon;
let lat;
let weatherstate;
let temperature = document.querySelector(".temp");
let summary = document.querySelector(".summary");
let loc = document.querySelector(".location");
let icon = document.querySelector(".icon");
const kelvin = 273;

window.addEventListener("load", () => {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition((position) => {
			console.log(position);
			lon = position.coords.longitude;
			lat = position.coords.latitude;

			// API ID

			const myapi = "4a08bcd60775da857731e1985ce3d497";

			// API URL

			const mykey =
				`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${myapi}`;

			// Calling the API
			fetch(mykey)
				.then((response) => {
					return response.json();
				})
				.then((data) => {
					console.log(data);
					temperature.textContent =
						Math.floor(data.main.temp) + "°F";
					summary.textContent = "The Weather is " + data.weather[0].description;
					loc.textContent = data.name + ", " + data.sys.country;

					if (data.weather[0].id >= 801 && data.weather[0].id <= 802) {

						weatherstate = 'partlyCloudy';

					}

					if (data.weather[0].id >= 803 && data.weather[0].id <= 804) {

						weatherstate = 'cloudy';

					}

					if (data.weather[0].id >= 500 && data.weather[0].id <= 599) {

						weatherstate = 'rain';
					}

					if (data.weather[0].id >= 600 && data.weather[0].id <= 699) {

						weatherstate = 'snow';
					}
					

				
			

					if (weatherstate == 'partlyCloudy') {
						smallCloud();

					}

					if (weatherstate == 'cloudy') {
						smallCloud();
						bigCloud();
					}

					if (weatherstate == 'rain'){
						smallCloud();
						bigCloud();
						rain();
					}

					if (weatherstate == 'snow') {
						smallCloud();
						bigCloud();
						snow();
					}
				

					function smallCloud() {

						var c1 = document.createElement("div");
						var c2 = document.createElement("div");
						var c3 = document.createElement("div");
						var c4 = document.createElement("div");
						var c5 = document.createElement("div");
						var c6 = document.createElement("div");
						var c7 = document.createElement("div");
						var c8 = document.createElement("div");
						var c9 = document.createElement("div");
						c1.setAttribute("class", "c1");
						c2.setAttribute("class", "c2");
						c3.setAttribute("class", "c3");
						c4.setAttribute("class", "c4");
						c5.setAttribute("class", "c5");
						c6.setAttribute("class", "c6");
						c7.setAttribute("class", "c7");
						c8.setAttribute("class", "c8");
						c9.setAttribute("class", "c9")
						var cloud = document.querySelector('.cloudbox');
						cloud.appendChild(c1);
						cloud.appendChild(c2);
						cloud.appendChild(c3);
						cloud.appendChild(c4);
						cloud.appendChild(c5);
						cloud.appendChild(c6);
						cloud.appendChild(c7);
						cloud.appendChild(c8);
						cloud.appendChild(c9);
					}




					function bigCloud() {
						var bc1 = document.createElement("div");
						var bc2 = document.createElement("div");
						var bc3 = document.createElement("div");
						var bc4b = document.createElement("div");
						var bc4 = document.createElement("div");
						var mask = document.createElement('div');
						var bc5 = document.createElement("div");
						var bc5b = document.createElement("div");
						var bc6 = document.createElement("div");

						bc1.setAttribute("class", "bc1");
						bc2.setAttribute("class", "bc2");
						bc3.setAttribute("class", "bc3");
						bc4b.setAttribute("class", "bc4b");
						bc4.setAttribute("class", "bc4");
						bc5.setAttribute("class", "bc5");
						bc5b.setAttribute("class", "bc5b");
						bc6.setAttribute("class", "bc6");
						mask.setAttribute("class", "mask");
						var bigcloud = document.querySelector('.bigCloudBox');
						// var body = document.body;
						bigcloud.appendChild(bc1);
						bigcloud.appendChild(bc2);
						bigcloud.appendChild(bc3);
						bigcloud.appendChild(bc4b);
						bigcloud.appendChild(bc4);

						bigcloud.appendChild(bc5);
						bigcloud.appendChild(bc5b);
						bigcloud.appendChild(bc6);
						document.body.appendChild(mask);
					}



					function rain() {
						var darkclouds = document.querySelector('.bigCloudBox')
						darkclouds.style.top = '0';
						darkclouds.style.zIndex = 100;
						var rainmask = document.createElement('div');
						rainmask.setAttribute("class", "rainmask");
						document.body.appendChild(rainmask);
					}

					function snow() {
						var darkclouds = document.querySelector('.bigCloudBox')
						darkclouds.style.top = '0';
						darkclouds.style.zIndex = 100;
						var snowmask = document.createElement('div');
						snowmask.setAttribute("class", "snowmask");
						document.body.appendChild(snowmask);
					}


					
				});
		});
	}

	

});



function showTime() {
	var date = new Date();
	var h = date.getHours(); // 0 - 23
	var m = date.getMinutes(); // 0 - 59
	var s = date.getSeconds(); // 0 - 59
	var session = "AM";
	var timestate;

	if (h == 0) {
		h = 12;
	}

	if (h > 12) {
		h = h - 12;
		session = "PM";

	}


	h = (h < 10) ? "0" + h : h;
	m = (m < 10) ? "0" + m : m;
	s = (s < 10) ? "0" + s : s;

	var time = h + ":" + m + ":" + s + " " + session;
	document.getElementById("MyClockDisplay").innerText = time;
	document.getElementById("MyClockDisplay").textContent = time;

	setTimeout(showTime, 1000);

	/*sunrise*/
	if (date.getHours() >= 06 && date.getHours() <= 8) {
		timestate = 0;

	}

	if (timestate == 0) {
		showSunrise();
	}

	function showSunrise() {
		document.body.style.backgroundImage = 'linear-gradient(340deg,#fc6a71,darkblue)';
		document.querySelector('.sun').style.bottom = '-570px';
		document.querySelector('.sun').style.left = '500px';

		document.querySelector('.sun').style.background = '#FA1E0E';
	}

	/* day scene */
	if (date.getHours() >= 9 && date.getHours() <= 18) {
		timestate = 1;

	}

	if (timestate == 1) {
		showDay();
	}

	function showDay() {
		document.body.style.background = 'rgb(135,206,235)';


		const sun = document.querySelector('.sun');
		sun.style.background = 'yellow';
		sun.style.bottom = '-200px';
		document.querySelector('.ground').style.background = 'rgb(15, 180, 40)';
	}
	/*sunset*/

	if (date.getHours() >= 19 && date.getHours() <= 20) {
		timestate = 2;

	}

	if (timestate == 2) {
		showSunset();
	}

	function showSunset() {
		//document.body.style.background = 'rgb(255, 177, 135)';
		document.body.style.backgroundImage = 'linear-gradient(200deg,darkblue,orange 80%)';

		document.querySelector('.sun').style.bottom = '-420px';
		document.querySelector('.sun').style.left = '-250px';
		document.querySelector('.sun').style.background = '#e01e10';
		document.querySelector('.ground').style.background = 'rgb(15, 80, 40)';

	}

	/*night scene*/
	if (date.getHours() >= 21 || date.getHours() <= 05) {
		timestate = 3;


	}

	if (timestate == 3) {
		showNight();
	}

	function showNight() {
		document.body.style.background = 'rgb(12, 28, 122)';
		const moon = document.querySelector('.sun');
		moon.style.background = 'rgb(230,230,230)';
		moon.style.bottom = '-200px';
		moon.style.left = '300px';
		moon.style.height= '160px';
		moon.style.width = '160px';
		document.querySelector('.weatherbox').style.color = 'whitesmoke';
		document.querySelector('.clock').style.color = 'whitesmoke';

		document.querySelector('.ground').style.background = 'rgb(10, 40, 25)';
		document.querySelector('.mount1').style.background = 'rgb(9, 49, 13)';
		document.querySelector('.mount3').style.background = 'rgb(9, 49, 13)';

	}

	time.addEventListener("change", changeTime());
	function changeTime() {
		const time = document.querySelector(".timeMenu").value
		
		if(time=='sunrise'){
			showSunrise()
		}
		if(time=='day'){
			showDay()
		}
		if(time=='sunset'){
			showSunset()
		}
		if(time=='night'){
			showNight()
		}
	}


	
}

showTime();
