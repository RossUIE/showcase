function openNav() {
    document.getElementById("mySidenav").style.width = "80%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

$(window).scroll(function(){
  $(".down").css("opacity", 1 - $(window).scrollTop() / 250); 
//250 is fade pixels
});


$('.contactMap')
	.click(function(){
			$(this).find('iframe').addClass('clicked')})
	.mouseleave(function(){
			$(this).find('iframe').removeClass('clicked')});

			$(function () {
				var
					$clouds = $('#clouds'),
					$sun = $('#sun'),
					$moon = $('#moon'),
					$car = $('#car'),
					$sky = $('.sky'),
					$day = $('#day'),
					$open = $('#open'),
					$close = $('#close'),
					$R = $('#R'),
					$slash = $('#slash'),
					$bigCircle = $('#bigCircle'),
					$smallCircle = $('#smallCircle');
		
				//     timelines
				tlClouds = new TimelineMax({ repeat: -1 }),
					tlSun = new TimelineMax({ repeat: -1 }),
					daytl = new TimelineMax({ repeat: -1 }),
					tlMoon = new TimelineMax({ repeat: -1 }),
					tlCar = new TimelineMax({ repeat: -1 }),
					logotl = new TimelineMax(),
		
		
		
		
					tlClouds.set($clouds, { x: 1900 });
				tlClouds.to($clouds, 50, { x: -1500, ease: Power0.easeNone });
		
		
				// daytl.to($sky, 10, { opacity:0 } );
		
				tlSun.set($day, { y: 900 });
				// daytl.to($sky, 5, { opacity: 1, backgroundColor: "#79C5E5" });
				// daytl.to($sky, 25, { opacity: 1, backgroundColor: "#011A47" });
		
		
				tlSun.to($day, 30, { transformOrigin: '50% 50%', ease: Power0.easeOut, rotation: 360 });
		
				tlMoon.to($moon, 40, { transformOrigin: '50% 50%', rotation: 360, ease: Power0.easeOut });
		
				tlCar.set($car, { x: -400 });
		
				tlCar.to($car, 10, { x: 2400, ease: Power0.easeOut, delay: 2 });
		
		
				logotl.from($open, 0.2, { opacity: 0 }, 0.2);
				logotl.from($R, 0.2, { opacity: 0 }, 0.4);
				logotl.from($slash, 0.2, { opacity: 0 }, 0.6);
				logotl.from($close, 0.2, { opacity: 0 }, 0.8);
				logotl.to($bigCircle, 5, { rotation: 360, ease: Linear.easeNone, transformOrigin: "50% 50%", repeat: -1 }, "rotate");
				logotl.to($smallCircle, 5, { rotation: 360, ease: Linear.easeNone, transformOrigin: "50% 50%", repeat: -1 }, "rotate");
			});
        