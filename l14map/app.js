const getmap = document.querySelector('.map-container');

var getsmallcolor = document.getElementById('small-color'),
	getmediumcolor = document.getElementById('medium-color');
	getlargecolor = document.getElementById('large-color');

var circleidx =0;

getmap.addEventListener('click',function(e){
	circleidx++;

	// console.log('i am working');
	// console.log(e.target);

	if(e.target.classList.contains('map-container')){

	const cx = e.clientX;
	const cy = e.clientY;
	// console.log(cx,cy);

	const mapleft = e.target.offsetLeft;
	const maptop = e.target.offsetTop;
	// console.log(mapleft,maptop);

	const curx = cx - mapleft;
	const cury = cy - maptop;
	// console.log(curx,cury);

	const circle = document.createElement('span');
	circle.id = circleidx;
	circle.classList.add('circle');
	console.log(circle);

	circle.style.left = `${curx}px`;
	circle.style.top = cury+"px";

	// circle.style.setProperty('--smallcolor','darkblue');
	// circle.style.setProperty('--mediumcolor','steelblue');
	// circle.style.setProperty('--largecolor','skyblue');

	// console.log(getsamllcolor.value);

	console.log(getsmallcolor.selectedIndex);

	if(getsmallcolor.selectedIndex > 0 && getmediumcolor.selectedIndex > 0 && getlargecolor.selectedIndex > 0){
		circle.style.setProperty('--small-color',getsmallcolor.value);
	circle.style.setProperty('--medium-color',getmediumcolor.value);
	circle.style.setProperty('--large-color',getlargecolor.value);
	}

	// e.target.appendChild(circle);
	this.appendChild(circle);

	}

	removepointer(e);
	

});

function removepointer(e){

	// console.log(e.target);
	// console.log(e.target.id);

	if(e.target.id > 0){
		e.target.remove();
	}

}