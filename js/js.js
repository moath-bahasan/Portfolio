// على القائمة عند التمرير أكثر من 200 بكسل noTransparrent تطبيق صنف جديد 
$(window).scroll(function(){
    
    if($(this).scrollTop()>=200){
        $("#navBar").addClass("noTransparrent");
     }
    else{
        $("#navBar").removeClass("noTransparrent");
     }
});

$(document).ready(function(){
    $("a.scroll").on('click', function(event) {
 
        var hash = this.hash;
 
        $('html, body').animate({ scrollTop: $(hash).offset().top - 90 }, 800, function(){});
    
    });

    $('.circle').circleProgress({
        stratAngle: -Math.PI / 2,
        fill: "#0575e6"
    }).on('circle-animation-progress', function(event, porgress, stepValue) {
        $(this).find('span').html(Math.round(stepValue * 100) + '%');
    });

    // emailForm على النموذج validate تطبيق التابع
    $(function () {
        $("#commentForm").validate();
    });

});