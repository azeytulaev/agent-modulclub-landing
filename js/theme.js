// JavaScript Document
jQuery(document).ready(function(e) {
	jQuery("#nav").onePageNav();
	
	jQuery(".main_menu .mob_menu").click(function(e) {
		if(jQuery(".main_menu").hasClass("open")){
			jQuery(".main_menu").removeClass("open");
			jQuery(".main_menu .menu").stop().fadeTo(200,0).hide(0);
		}else{
			jQuery(".main_menu").addClass("open");
			jQuery(".main_menu .menu").stop().show(0).fadeTo(200,1);
		}
    })
	jQuery(".main_menu .menu a").click(function(e) {
		if(jQuery("#site").width()<768){
			if(jQuery(".main_menu").hasClass("open")){
				jQuery(".main_menu").removeClass("open");
				jQuery(".main_menu .menu").stop().fadeTo(200,0).hide(0);
			}
		}
    });
	
	if(jQuery("#site").width()>991){
		jQuery(".top_parallax").parallax();
		jQuery(".quest_parallax").parallax();
	}
	
	jQuery(".prop_content .title a").click(function(){
		var ind = jQuery(this).data('index');
		jQuery(".prop_content .title .act").removeClass("act");
		jQuery(this).addClass("act");
		jQuery(".prop_content .prop_tab>.vis").removeClass("vis");
		jQuery(".prop_content .prop_tab>li").eq(ind).addClass("vis");
	});
	
	jQuery('.info_bal').each(function(index, element) {
        jQuery(this).balloon({
			contents:jQuery(this).data("text"),
			classname: 'ballon_wrapper',
			position: "right",
			tipSize: 20,
			showDuration: 100,
			hideDuration: 100,
			css: {
			  minWidth: "20px",
			  padding: "18px 15px 20px 30px",
			  borderRadius: "4px",
			  border: "solid 1px #EDEDED",
			  boxShadow: "0px 0px 16px rgba(0,0,0,0.05)",
			  color: "#292929",
			  backgroundColor: "#fff",
			  opacity: "1",
			  zIndex: "50",
			  textAlign: "left"
			} 
		});
    });
	
	jQuery(".comment_slider").slick({
		arrows:true,
		prevArrow:"<a class='slick-prev'></a>",
		nextArrow:"<a class='slick-next'></a>",
		dots:false,
		speed:300,
		fade:true
	});
	
	jQuery(".award_slider").slick({
		arrows:true,
		prevArrow:"<a class='slick-prev'></a>",
		nextArrow:"<a class='slick-next'></a>",
		dots:true,
		speed:300,
		slidesToShow:2,
		slidesToMove:1,
		responsive: [
			{
				breakpoint:640,
			  	settings: {
					slidesToShow: 1,
			  	}
			}
  		]
	});
	
	jQuery(".team_slider").slick({
		arrows:true,
		prevArrow:"<a class='slick-prev'></a>",
		nextArrow:"<a class='slick-next'></a>",
		dots:false,
		speed:300,
		slidesToShow:4,
		slidesToMove:1,
		responsive: [
			{
				breakpoint:1200,
			  	settings: {
					slidesToShow: 3,
			  	}
			},
			{
				breakpoint:992,
			  	settings: {
					slidesToShow: 2,
			  	}
			},
			{
				breakpoint:640,
			  	settings: {
					slidesToShow: 1,
			  	}
			}
  		]
	});
	
	jQuery(".register_form .code .name a").click(function(e) {
        jQuery(this).parents(".code").find(".hide_field").slideDown(200);
    });
	
	jQuery(".scroll_to").click(function(e) {
        var obj = jQuery(this).attr("href");
		jQuery("html, body").animate({"scrollTop":jQuery(obj).offset().top},1200);
		return false;
    });
	
	jQuery(".popup_open").click(function(){
		var h = jQuery("#site").height();
		var obj = ".popup_wrapper>."+jQuery(this).attr("href");
		jQuery(".popup_bg").css({"display":"block","height":h}).animate({opacity:1},200);
		jQuery(obj).css({"display":"block"});
		var ih = jQuery(window).innerHeight();
		var wh = jQuery(obj).outerHeight();
		var wt = (ih-wh)/2;
		var st = jQuery(document).scrollTop();
		if(wt<40){wt=40};
		wt = wt+st;
		jQuery(obj).css({"top":wt}).animate({opacity:1},200);
		return false;
	});
	jQuery(".popup_close").click(function(){
		jQuery(this).parents("li").animate({opacity:0},200).hide(0);
		jQuery(".popup_bg").animate({opacity:0},200).hide(0);
	});
	jQuery(".popup_bg").click(function(){
		jQuery(".popup_wrapper>li").animate({opacity:0},200).hide(0);
		jQuery(".popup_bg").animate({opacity:0},200).hide(0);
	});
	
	jQuery("input[type='text'],input[type='email'],input[type='tel'],input[type='password'], textarea").focusin(function(e) {
       jQuery(this).addClass("clean"); 
    });
	jQuery("input[type='text'],input[type='email'],input[type='tel'],input[type='password'], textarea").focusout(function(e) {
       jQuery(this).removeClass("clean"); 
    });
	jQuery("input[type='tel']").mask("+7 (NNN) NNN NN NN",{placeholder:'X'});
	jQuery("input[name='code']").mask("NNNNNNN",{placeholder:'X'});
	
	jQuery("#popup_call_form").validate({
		rules: {
			tel: "required",
		}
	});
	jQuery("#popup_web_form").validate({
		rules: {
			tel: "required",
			email:{
				required: true,
      			email: true
			}
		}
	});
	jQuery("#register_form").validate({
		rules: {
			f_name: "required",
			s_name: "required",
			email:{
				required: true,
      			email: true
			},
			tel: "required"
		}
	});
	jQuery("#faq_form").validate({
		rules: {
			tel: "required"
		}
	});
	
	function form_send(form) {
		if(form.valid()){
 	  		var msg   = form.serialize();
        	jQuery.ajax({
          		type: 'POST',
          		url: 'include/mail.php',
          		data: msg,
          		success: function(data) {
					jQuery(".popup_wrapper>li").animate({opacity:0},0).hide(0);
					var h = jQuery("#site").height();
					var obj = ".popup_wrapper>.popup_thanks";
					jQuery(".popup_bg").css({"display":"block","height":h}).animate({opacity:1},200);
					jQuery(obj).css({"display":"block"});
					var ih = jQuery(window).innerHeight();
					var wh = jQuery(obj).outerHeight();
					var wt = (ih-wh)/2;
					var st = jQuery(document).scrollTop();
					if(wt<30){wt=30};
					wt = wt+st;
					jQuery(obj).css({"top":wt}).animate({opacity:1},200);
          		},
          		error:  function(xhr, str){
	    			alert('Возникла ошибка: ' + xhr.responseCode);
          		}
        	});
		}
	}
	jQuery("[type='submit']").click(function(){
		form_send(jQuery(this).parents("form"));
		return false;
	});
	
	/*
	
	jQuery("[data-fancybox]").fancybox({
		buttons:[
			'close'
		],	
		loop: true
	});
	
	
	
	
	
	
	
	jQuery(window).mousemove(function(e){
		var posY  = e.clientY;
		var posX  = e.clientX;
		var winW = jQuery(window).width();
		var winH = jQuery(window).height();
		var max_smX = 10;
		var max_smY = 10;
		var smX = (winW-posX)/winW*max_smX;
		var smY = (winH-posY)/winH*max_smY;
		smX += "%";
		smY += "%";
		jQuery(".sect_order .order_wrap .order_img").css({"transform":"translate("+smX+","+smY+")"});
		
	});
	
	/*function head_fix(){
		if(jQuery(window).scrollTop()>50){
			jQuery("#head").addClass("fixed");	
		}else{
			jQuery("#head").removeClass("fixed");	
		}	
	}
	head_fix();
	jQuery(window).scroll(function(){
		head_fix();	
	});*/
	
});