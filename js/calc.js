// JavaScript Document
jQuery(document).ready(function(e) {
	var priceAr = [
		2600,
		390,
		975
	]
	
	jQuery("#slider_your_money").slider({
		min:0,
		max:100,
		value:50,
		step:1,
		range:'min',
      	create: function() {
        	jQuery("#slider_your_money_handle").text(jQuery(this).slider("value"));
			jQuery(".calc_content .your_money_inp").val(jQuery(this).slider("value"));
      	},
      	slide: function( event, ui ) {
        	jQuery("#slider_your_money_handle").text(ui.value);
			jQuery(".calc_content .your_money_inp").val(ui.value);
      	},
		stop: function( event, ui ) {
			calc();
		}
    });
	jQuery("#slider_line2_money").slider({
		min:0,
		max:100,
		value:50,
		step:1,
		range:'min',
      	create: function() {
        	jQuery("#slider_line2_money_handle").text(jQuery(this).slider("value"));
			jQuery(".calc_content .line2_money_inp").val(jQuery(this).slider("value"));
      	},
      	slide: function( event, ui ) {
        	jQuery("#slider_line2_money_handle").text(ui.value);
			jQuery(".calc_content .line2_money_inp").val(ui.value);
      	},
		stop: function( event, ui ) {
			calc();
		}
    });
	jQuery("#slider_line3_money").slider({
		min:0,
		max:100,
		value:50,
		step:1,
		range:'min',
      	create: function() {
        	jQuery("#slider_line3_money_handle").text(jQuery(this).slider("value"));
			jQuery(".calc_content .line3_money_inp").val(jQuery(this).slider("value"));
      	},
      	slide: function( event, ui ) {
        	jQuery("#slider_line3_money_handle").text(ui.value);
			jQuery(".calc_content .line3_money_inp").val(ui.value);
      	},
		stop: function( event, ui ) {
			calc();
		}
    });
	jQuery(".calc_content .pay_type input:first").click();
	jQuery(".calc_content .pay_type input").styler();
	jQuery(".calc_content .pay_type input").change(function(){
		calc();	
	});
	
	function sepNum(n){
		var step = 1;
		var res = "";
		var tmp;
		while(n/step>=1){
			tmp = Math.floor(n/step);
			tmp+="";
			res = tmp.slice(-3)+" "+res;
			step*=1000
		}
		return res;
	}
	
	function calc(){
		var mon_sum = 0, year_sum = 0, m_pr1 = 0, m_pr2 = 0, m_pr3 = 0, y_pr1 = 0, y_pr2 = 0, y_pr3 = 0;
		var type = jQuery(".pay_type [name='pay_inp']:checked").val();
		var n1 = jQuery(".your_money_inp").val();
		var n2 = jQuery(".line2_money_inp").val();
		var n3 = jQuery(".line3_money_inp").val();
		if(type == 0){
			if(n1<100){
				m_pr1 = n1*priceAr[0];
			}else{
				m_pr1 = n1*priceAr[0]*1.5;
			}
			y_pr1 = m_pr1*12;
		}else if(type == 1){
			if(n1<100){
				m_pr1 = n1*priceAr[1];
			}else{
				m_pr1 = n1*priceAr[1]*1.5;
			}
			y_pr1 = m_pr1*12*12;
		}else if(type == 2){
			if(n1<100){
				m_pr1 = n1*priceAr[2];
			}else{
				m_pr1 = n1*priceAr[2]*1.5;
			}
			y_pr1 = (m_pr1+260*11*n1)*12
		}
		m_pr2 = n2*2600*0.3;
		y_pr2 = m_pr2*12;
		m_pr3 = n3*2600*0.3*0.3;
		y_pr3 = m_pr3*12;	
		mon_sum = m_pr1+m_pr2+m_pr3;
		year_sum = y_pr1+y_pr2+y_pr3;
		jQuery(".calc_content .result_bl .month").text(sepNum(mon_sum));
		jQuery(".calc_content .result_bl .year").text(sepNum(year_sum));
	}
	calc();
});