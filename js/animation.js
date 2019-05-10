$(document).ready(function()
{
    $(".img-wrapper").find("img").css("transition", "transform 500ms ease-in-out");

    $(".img-wrapper").hover(    
        // Handler for mouseenter
        function()
        {
            $(this).find("img").css("transform", "scale(1.2)");
        },
        // Handler for mouseleave
        function()
        {
            $(this).find("img").css("transform", "scale(1)");
        }
    );
});