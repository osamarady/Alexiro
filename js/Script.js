/*global $, console, alert*/
$(document).ready(function () {
	"use strict";
	$("nav").hide();
	$(".loader").delay(3000).fadeOut();
	$("nav").delay(3000).fadeIn();
});
/*== Start Header Navbar ==*/
$(document).on("scroll", function () {
	"use strict";
	/*= display navbar in movment =*/
	var x = $(document).scrollTop(),
		ScrollOffset = $("nav").offset();
	if (x > 800) {
		$("nav").addClass("navbar-fixed-top nav-control");
		$("nav section").addClass("container");
	} else {
		$("nav").removeClass("navbar-fixed-top container nav-control");
	}
	/*= display border of li =*/
	if (ScrollOffset.top >= 1000) {
		$("#about").addClass("active-li").siblings().removeClass("active-li");
		if (ScrollOffset.top >= 1466) {
			$("#portfolio").addClass("active-li").siblings().removeClass("active-li");
			if (ScrollOffset.top >= 2202) {
				$("#client").addClass("active-li").siblings().removeClass("active-li");
				if (ScrollOffset.top >= 2553) {
					$("#service").addClass("active-li").siblings().removeClass("active-li");
					if (ScrollOffset.top >= 3383) {
						$("#contact").addClass("active-li").siblings().removeClass("active-li");
					}
				}
			}
		}
	} else {
		$("#home").addClass("active-li").siblings().removeClass("active-li");
	}
});
/*= doing scroll at menu click =*/
$("nav ul li").on("click", function () {
	"use strict";
	var id = $(this).attr("id"),
	    scrollheight =  $("#" + id + "-m").offset();
	$("html, body").animate({
		scrollTop: Number(scrollheight.top) - 50
	}, 1000);
});
/*= sup menu =*/
$(".sup-menu").on("click", function () {
	"use strict";
	$(".menu").slideToggle();
	$("nav ul li").on("click", function () {
		$(".menu").slideUp();
	});
});
/*== End Header Navbar ==*/

/*== Start Portfolio Selection ==*/
$("#prt-mu ul li").on("click", function () {
	"use strict";
	$(this).addClass("port-activ").siblings().removeClass("port-activ");
	var id = $(this).attr("id");
	$("." + id + "-1").siblings().hide();
	$("." + id + "-1").fadeIn(1000);
});
/*== End Portfolio Selection ==*/

/*== Start Testimonial ==*/
$(".pointers ul li").on("click", function () {
	"use strict";
	$(this).addClass("pntr-actv").siblings().removeClass("pntr-actv");
	var id = $(this).attr("id");
	$("#" + id + "-p").siblings().removeClass("pointer-active");
	$("#" + id + "-p").addClass("pointer-active");
});
/*- Auto Flip Slide -*/
$(document).ready(function () {
	"use strict";
	setInterval(function () {
		if (!$("#test-ial div:last").hasClass("pointer-active")) {
			$(".pointer-active").next().addClass("pointer-active").siblings().removeClass("pointer-active");
			$(".pntr-actv").siblings().removeClass("pntr-actv");
			$(".pntr-actv").next().addClass("pntr-actv").siblings().removeClass("pntr-actv");
			
		} else if ($("#test-ial div:last").hasClass("pointer-active")) {
			$("#test-ial div:first").addClass("pointer-active").siblings().removeClass("pointer-active");
			$(".pointers ul li:first").addClass("pntr-actv").siblings().removeClass("pntr-actv");
		}
	}, 3000);
});
/*== End Testimonial ==*/

/*== Start ScrollUp Button ==*/
$(document).on("scroll", function () {
	"use strict";
	var ScrollHeight = $(document).scrollTop();
	if (ScrollHeight > 1000) {
		$(".ScrollUp").fadeIn(1000);
	} else {
		$(".ScrollUp").fadeOut(1000);
	}
});
$(".ScrollUp").on("click", function () {
	"use strict";
	$("html, body").animate({
		scrollTop: 0
	}, 1000);
});
/*== End ScrollUp Button ==*/