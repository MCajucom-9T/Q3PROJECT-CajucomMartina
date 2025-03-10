function journey() {
	var station = document.getElementById("station").value;
	var destination = document.getElementById("destination").value;
	var stationstraveled = Math.abs(station - destination)

	if (!station || !destination || station===destination) {
        document.getElementById('price-display').innerHTML = "Please select an appropriate journey!";
        return;
    }

	let price;

    if (stationstraveled >= 1 && stationstraveled <= 2) {
        price = 13;
    } else if (stationstraveled >= 3 && stationstraveled <= 4) {
        price = 16;
    } else if (stationstraveled >= 5 && stationstraveled <= 7) {
        price = 20;
    } else if (stationstraveled >= 8 && stationstraveled <= 10) {
        price = 24;
    } else {
        price = 28;
    }

    document.getElementById('price-display').innerHTML = '₱' + price;
}

function journeydisc() {
	var station = document.getElementById("station").value;
	var destination = document.getElementById("destination").value;
	var stationstraveled = Math.abs(station - destination)

	if (!station || !destination || station===destination) {
        document.getElementById('price-display').innerHTML = "Please select an appropriate journey!";
        return;
    }

	let price;

    if (stationstraveled >= 1 && stationstraveled <= 2) {
        price = 13;
    } else if (stationstraveled >= 3 && stationstraveled <= 4) {
        price = 16;
    } else if (stationstraveled >= 5 && stationstraveled <= 7) {
        price = 20;
    } else if (stationstraveled >= 8 && stationstraveled <= 10) {
        price = 24;
    } else {
        price = 28;
    }

    let discountedPrice = price * 0.8; // Apply 20% discount
    document.getElementById('price-display').innerHTML = '₱' + discountedPrice.toFixed(2);
}

function mouseOver(){
	Reg.style.background = "#727C96";
	Reg.style.color = "white";
}

function mouseOut(){
    Reg.style.background    = "#848A9B";
    Reg.style.color = "white";
}

function mouseOver2(){
	Disc.style.background = "#727C96";
	Disc.style.color = "white";
}

function mouseOut2(){
    Disc.style.background    = "#848A9B";
    Disc.style.color = "white";
}