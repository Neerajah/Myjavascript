jQuery(".toggle-hide-show").click(function(){
    jQuery(this).toggleClass("fa-eye fa-eye-slash");
    input = jQuery(this).parent().find("input");
    if (input.attr("type") == "password") {
        input.attr("type", "text");
    } else {
        input.attr("type", "password");
    }
});