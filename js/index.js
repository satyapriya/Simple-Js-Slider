var imgCount = document.getElementById('image-slider').children.length;
var allElement = document.getElementById('image-slider').children;
var counter = 0;
function prev(){
	if(counter > 0 && counter <= imgCount){
		counter= counter-1;
		allElement[counter].className = "";
	}
}
function next(){
	if(counter >= 0 && counter < imgCount){
		for(var i=0; i<= imgCount; i++){
			allElement[counter].className = "";
		}
		allElement[counter].className = allElement[counter].className + ' display';
		counter+=1;
	}
}
