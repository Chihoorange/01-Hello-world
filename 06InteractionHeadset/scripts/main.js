
var rotationSpeed = 0.001;
var myOtherBox = document.getElementById('myOtherBox');

function spin(){
	myOtherBox.object3D.rotation.x += rotationSpeed;
	myOtherBox.object3D.rotation.y += rotationSpeed;
	myOtherBox.object3D.rotation.z += rotationSpeed/2;
	console.log(myOtherBox.object3D.rotation);
}
setInterval(spin, 10);


myOtherBox.addEventListener('mouseenter', function(){
	rotationSpeed = 0.01;
	console.log('entered');
});

myOtherBox.addEventListener('mouseleave', function(){
	rotationSpeed = 0.001;
	shrink();
	console.log('left');
});

myOtherBox.addEventListener('click', function(){ // uses a fuse
	grow();
	console.log('grew');
});


/*
 * click-events can use a fuse (default on mobile). So the event only fires, if the cursor is on the object for a specified time. 
 */

// var growspeed = 1.5;

function grow(){
	myOtherBox.object3D.scale.x = 2;
	myOtherBox.object3D.scale.y = 2;
	myOtherBox.object3D.scale.z = 2;
	//console.log(myOtherBox.object3D.scale);
}

function shrink(){
	myOtherBox.object3D.scale.x = 1;
	myOtherBox.object3D.scale.y = 1;
	myOtherBox.object3D.scale.z = 1;
	//console.log(myOtherBox.object3D.scale);
}

