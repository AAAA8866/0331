$('#link').on('change',function(){
    let linkSite = $(this).val();
    if (!linkSite) return;
    window.open(linkSite)    
})

// $('.asideBanner .itm05').on('click',function(){
//     $('html, body').animate({scrollTop: '0'}, 450);
// })

// $(window).on('scroll', function(){
//     var scr=$(window).stop().scrollTop();
//     $('.asideBanner').css({top:350+scr});
// })