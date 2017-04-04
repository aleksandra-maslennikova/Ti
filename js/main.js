$(document).ready(function(){
$(".knob").knob({
	"width":55,
	"height":55,
	"angleoffset":0,
	"thickness":0.18,
	"displayInput":false,
	"bgColor": "transparent",
	"skin":"tron",
	"rotation":"anticlockwise",
	"readOnly":true
});

	$({animatedVal: 0}).animate({animatedVal: 20}, {
		duration: 2000,
		easing: "swing",
		step: function() {
			$(".knob1").val(Math.ceil(this.animatedVal)).trigger("change");
		}
	});

$(".knob2").knob();
	$({animatedVal: 0}).animate({animatedVal: 40}, {
		duration: 2000,
		easing: "swing",
		step: function() {
			$(".knob2").val(Math.ceil(this.animatedVal)).trigger("change");
		}
	});

$(".knob3").knob();
	$({animatedVal: 0}).animate({animatedVal: 60}, {
		duration: 2000,
		easing: "swing",
		step: function() {
			$(".knob3").val(Math.ceil(this.animatedVal)).trigger("change");
		}
	});

$(".knob4").knob();
	$({animatedVal: 0}).animate({animatedVal: 80}, {
		duration: 2000,
		easing: "swing",
		step: function() {
			$(".knob4").val(Math.ceil(this.animatedVal)).trigger("change");
		}
	});

$(".knob5").knob();
	$({animatedVal: 0}).animate({animatedVal: 100}, {
		duration: 2000,
		easing: "swing",
		step: function() {
			$(".knob5").val(Math.ceil(this.animatedVal)).trigger("change");
		}
	});



});