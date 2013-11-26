var x=0;
var y=0;
var radius=sphere.style.height
if (window.DeviceMotionEvent != undefined) {
	window.ondevicemotion = function(e)
	{
		vector_x = e.accelerationIncludingGravity.x;
	    vector_y = e.accelerationIncludingGravity.y; 
	}
	function move()
	{
		x=x+vector_x;
		y=y+vector_y;
	}
	setTimeout(function()
	{
		testWalls();
		move();
		sphere.style.top = y + "px";
		sphere.style.left = x + "px";
	});

	function testWalls()
	{
		if (x<0)
		{
			x=radius;
			vector_x=vector_x*-1;
		}
		else if (x>document.documentElement.clientWidth-radius)
		{
			x=radius;
			vector_x=vector_x*-1;
		}
		else if (y>document.documentElement.clientWidth-radius)
		{
			y=radius;
			vector_y=vector_y*-1;
		}
		else if (y<0)
		{
			y=radius;
			vector_y=vector_y*-1;
		}
	}
}