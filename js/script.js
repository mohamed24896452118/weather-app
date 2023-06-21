$(document).scroll(function(){
    if ($(window).scrollTop() > 50){
        $('header').css('background-color','tomato')
        $('header').removeClass('p-3')
        $('header').addClass('p-1')
    }else{
        $('header').css('background-color','transparent')
        $('header').removeClass('p-1')
        $('header').addClass('p-3')
    }
})
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:2,
            dots:false,
        },
        600:{
            items:3,
            dots:false,
        },
        1000:{
            items:6
        }
    }
})  
$(document).ready(function(){
    setTimeout(function(){
        $('.CartIcon').css({'left':"20px",'transform':'rotate(360deg)'})
    },2000)
    setTimeout(function(){
        $('.CartIcon span').css({"transform":'scale(1)','opacity':"1"})
    },2800)
})
$('.CartIcon').click(function(){
    $('.cartbox .row ').hide()
    $('.cartbox ').toggle(500)
  setTimeout(function(){
      $('.cartbox .row').show(200)
  },500)
})
let Products=[]
$(".addTo").click(function(){
    let title=$(this).siblings(".card-title").html()
    let price=$(this).siblings("p").find("ins").html()
    let img=$(this).attr("https://via.placeholder.com/35")
    let Product={title:title,price:price,img:img}
Products.push(Product)
console.log(Products)
    $.each(Products,function(index , Pro){
        $(".cartbox .container-fluid").append(
            '<div class="row py-1">'
             + '<div class="col-2">'
              +  '<img src="' + "https://via.placeholder.com/35 " + '">'
             + '</div>'
            +'<div class="col-4">'
               +Product.title
              +'</div>'
             + '<div class="col-2">'
              +'1 x'
             +'</div>'
             + '<div class="col-2">'
             +Product.price
              +'</div>'
              +'<div class="col-2">'
              +Product.price
              +'</div>'
            +'</div>'
                )
    
        })
        $.each(Products,function(index , value){
            $(".cartbox .container-fluid").append(value.title)
        });
    })
                