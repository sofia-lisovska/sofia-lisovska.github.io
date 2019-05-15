jQuery(function($) {
    $(".tab-container").on("click", ".tab-control", function(e) {
        e.preventDefault();
        var link = $(this),
            id = this.hash;
      
        if( id && !$(link).parent().hasClass("active") ) {
            $(".tab-container .active").stop().removeClass("active");
            $(".tab-content .active").stop().hide().removeClass("active");
            link.parent().addClass("active");
            $("li.active .main").addClass("active");
            $(id).fadeIn(300).addClass("active");
        }
    });
});