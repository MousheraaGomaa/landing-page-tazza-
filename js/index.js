
var scrollbtn = document.querySelector('.scroll-to-top');
scrollbtn.addEventListener('click',scrollToTop);

window.onscroll = ()=>{
    showScrollBtn();
}

$('.banner .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    items:1,
});
$('.services .owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    margin:20,
    autoplayTimeout:10000,
    responsive:{
        0:{
            items:1
        },
        576:{
            items:2
        },
        768:{
            items:3
        },
        992:{
            items:4
        }
    }
})
$('.partner .owl-carousel').owlCarousel({
    loop:true,
    nav:true,
    dots:false,
    margin:20,
    responsive:{
        0:{
            items:1
        },
        576:{
            items:2
        },
        768:{
            items:3
        },
        992:{
            items:4
        }
    }
})

$('.testimonial .owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    margin:20,
    items:1,
    dots:false
})

function showScrollBtn(){
    if(window.scrollY >= window.innerHeight){
        document.querySelector('.scroll-to-top').classList.add('show');
    }
    else{
        document.querySelector('.scroll-to-top').classList.remove('show')
    }
}
function scrollToTop(){
    window.scrollTo(0,0);
}
