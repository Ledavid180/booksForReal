/*Sticky Nav */

let navbar = $(".navbar");/*Store navabar div inside this navbar variable*/

/*Call event on window*/ 
$(window).scroll/*scroll event*/(function() {
   /* console.log(window.innerHeight   *When scroll, shows inner-height page is inside of console*  );
    console.log*I want to get the position of section-2, so I call jquery object*($('.section-2').offset().top *And get the top position*);*/
    /*Store the value found from above code into this variable*/ /*grab property of offset and it is top*/
    let oTop = $(".section-2").offset().top - window.innerHeight;
    if($(window).scrollTop() > oTop){
        navbar.addClass("sticky");
    
    } else {
        navbar.removeClass("sticky");
    }
});

/*Counter Animation */

let nCount = function(selector){
    $(selector).each(function(){

        $(this).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: "swing",
            step: function(value){
                $(this).text(Math.ceil(value));
            }
        }
    );
    });
};

let a = 0;
$(window).scroll(function(){
    let oTop = $(".numbers").offset().top - window.innerHeight;
    if (a==0 && $(window).scrollTop() >= oTop){
        a++;
        nCount('.rect > h1');
    }
})