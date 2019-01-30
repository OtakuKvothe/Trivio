var heading= $("#heading"),
	desc1= $("#desc1"),
	btdn= $("bt_dn"),
	btup= $("bt_up"),
	para= $("#para"),
	stbtn= $("startbtn"),
	box1= $("#box1"),
	box2= $("#box2");

	$(document).on('click', '.bt_up',
		function slideUp() {
	var t1=TweenLite.to(box2, .5, {top: "100", opacity:"0", ease: Power1.easeOut});
	TweenLite.set(box1, {bottom: "70", opacity:"1", ease: Power1.easeOut})
	document.getElementById("box2").style.display="none";
	document.getElementById("box1").style.display="inherit";
	console.log(document.getElementById("box2"));
	var t2=TweenLite.from(box1, 1, {bottom: "100", opacity:"0", ease: Power1.easeOut});
	document.getElementById("box2").style.display="inherit";
}
);
	$(document).on('click', '.bt_dn',
		function slideDown() {
	var t1=TweenLite.to(box1, .5, {bottom: "100", opacity:"0", ease: Power1.easeOut});
	document.getElementById("box2").style.display="inherit";
	document.getElementById("box1").style.display="none";
	console.log(document.getElementById("box2"));
	var t2=TweenLite.from(box2, 1, {top: "100", opacity: "0", ease: Power1.easeOut});
	document.getElementById("box1").style.display="inherit";
	console.log(1);
}
);

function slideDown() {
	var t1=TweenLite.to(box1, .5, {bottom: "100", opacity:"0", ease: Power1.easeOut});
	document.getElementById("box2").style.display="inherit";
	document.getElementById("box1").style.display="none";
	console.log(document.getElementById("box2"));
	var t2=TweenLite.from(box2, 1, {top: "100", opacity: "0", ease: Power1.easeOut});
	document.getElementById("box1").style.display="inherit";
	console.log(1);
}

function slideUp() {
	var t1=TweenLite.to(box2, .5, {top: "100", opacity:"0", ease: Power1.easeOut});
	TweenLite.set(box1, {bottom: "70", opacity:"1", ease: Power1.easeOut})
	document.getElementById("box2").style.display="none";
	document.getElementById("box1").style.display="inherit";
	console.log(document.getElementById("box2"));
	var t2=TweenLite.from(box1, 1, {bottom: "100", opacity:"0", ease: Power1.easeOut});
	document.getElementById("box2").style.display="inherit";
}