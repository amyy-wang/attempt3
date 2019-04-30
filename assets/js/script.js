$(window).load(function () {
 		$('body').sakura();
    });

    
      
$(document).ready(function() {

	$("#lightblue").click(function(){
		$("#bottom").css('background-color', '#62BDD8')
 		$("#photo1").attr('src','assets/images/lightblue1.JPG')
		$("#photo2").attr('src','assets/images/lightblue2.JPG')
		$("#photo3").attr('src','assets/images/lightblue3.JPG')
		$("#photo4").attr('src','assets/images/lightblue4.JPG')
		$("#photoheader1").text('sky');
		$("#photoheader2").text('sea');
		$("#photoheader2").css('color', '#215E70');


	})
	$("#night").click(function(){
		$("#bottom").css('background-color', '#09152C')
		$("#photo1").attr('src','assets/images/night1.JPG')
		$("#photo2").attr('src','assets/images/night2.JPG')
		$("#photo3").attr('src','assets/images/night3.JPG')
		$("#photo4").attr('src','assets/images/night4.JPG')
		$("#photoheader1").text('night');
		$("#photoheader2").text('lights');
		$("#photoheader2").css('color', '#E03284');

	})
	$("#brown").click(function(){
		$("#bottom").css('background-color', '#B17E5F')
		$("#photo1").attr('src','assets/images/brown1.JPG')
		$("#photo2").attr('src','assets/images/brown2.JPG')
		$("#photo3").attr('src','assets/images/brown3.JPG')
		$("#photo4").attr('src','assets/images/brown4.JPG')
		$("#photoheader1").text('urban');
		$("#photoheader2").text('earth');
		$("#photoheader2").css('color', '#69442E');


	})

var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        
    };

});
