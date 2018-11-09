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
        