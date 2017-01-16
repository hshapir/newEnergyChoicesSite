var images = ["images/background_1.jpg", "images/background_2.jpg", "images/background_3.jpg", "images/background_4.jpg", "images/background_5.jpg"];
var x=0;

function swapImage(){
	var img = document.getElementById("carouselImg");
	x++;
	if(x>4){
		x=0;
	}
	img.src=images[x];
}

function startTimer(){
	setInterval(swapImage, 8000);
}