
$(function() {

 // tooltip demo
    $('.tooltip-top').tooltip({
      selector: "a[rel=tooltip]"
    })

// nav toggle
	// var tabs = document.getElementsByClassName("nav-tab");
	// $('.nav-tab').click(function(e){
	// 	console.log(tabs);
	// 	e.preventDefault();
	// 	var el = $(this);
	// 	if ($('.nav-tab').hasClass('active')) {
	// 		var tab = $(this.firstChild.className);
	// 		console.log(tab);
	// 		$('.nav-tab').removeClass('active');
	// 		$(tab).css('display', 'none');
	// 	}
 //    	if (!el.hasClass('active')) {
 //    		console.log(el);
 //      		el.addClass('active');
	// 		el.css('display', 'block');
	//     }
	// });

	// $('a.about-tab').click(function(e){
	// 	e.preventDefault();
	// 	$('#about').css('display', 'block');
	// 	$('#home').css('display', 'none');
	// 	$('.nav-home').removeClass('active');
	// 	$('.nav-about').addClass('active');
	// });

});
