// JavaScript Document
$(document).ready(function(){
  			$('.menu_head+div').hide();
			$('.menu_head').click(function() {
				$('.menu_head').removeClass("green");
				$(this).next("div").toggle();
				$(this).toggleClass("current green");
			});
		});