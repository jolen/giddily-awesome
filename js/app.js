$(window).on("scroll", function() {
    if ($(window).scrollTop() > $(".page__splash-screen").height() - $(".page__nav-bar").height()) {
        $(".page__nav-bar").removeClass("page__nav-bar--transparent");
    } else {
       $(".page__nav-bar").addClass("page__nav-bar--transparent");
    }
})


$(window).resize(maintainVideoAspectRatio);
$(document).ready(maintainVideoAspectRatio);

function maintainVideoAspectRatio() {
    var winHeight = $(window).height();
    var winWidth = $(window).width();

    if (winWidth / winHeight > 1.778) {
        $(".page__splash-screen").removeClass("portrait");
        $(".page__splash-screen").addClass("landscape");
    } else {
        $(".page__splash-screen").removeClass("landscape");
        $(".page__splash-screen").addClass("portrait");
    }	
}

$(document).foundation();