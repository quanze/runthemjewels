$('#start').click(function(){
	audio.play();
	carMove1();

	console.log("submited");
});


	
function carMove1 (){
	$('#car').animate({left : '720px'},1000,carMove2);
}

var carMove2 = function(){
	$('.car').addClass ("rotate90");
	$('#car').animate({top : '400px'},1000,carMove3);
}

var carMove3 = function(){
	$('.car').removeClass ("rotate90");
	$('.car').addClass ("flip180");
	$('#car').animate({left: '220px'},1000,carMove4);
}

var carMove4 = function(){
	$('.car').removeClass ("flip180");
	$('.car').addClass ("rotate90");
	$('#car').animate({top: '510px'},1000,carMove5);
}

var carMove5 = function(){
	$('.car').removeClass ("rotate90");
	$('#car').animate({left : '430px'},1000,audioPause())
}

var audioPause = function(){
	audio.pause();
}