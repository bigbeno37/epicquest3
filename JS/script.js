// Website developed and designed by bigbeno37 (https://github.com/bigbeno37)
// Created for showcasing Randy Schouten's EpicQuest Bukkit plugin
// Website licensed under the MIT license

/* Convenience Functions */

function setupElementProperties(element){
    $(element).css({"width": global_element_width, "margin": "0 auto", "padding": "5"});
}

function setElementBackground(element, iterator){
    if(iterator % 2 == 0){
        $(element).css("background-color", palette["content2"]);
    }else{
        $(element).css("background-color", palette["content1"]);
    }
}

/* Variables and the setters */

var global_element_width;
var palette;
var navbar_height;
var list_of_classes;

function setupValues(){
    // Setup base width
    global_element_width = 900;

    // Setup the height of the navbar
    navbar_height = 60;

    // Creates dictionary-like access to colours
    palette = {};
    palette["navbar"] = '#9EBF6D';
    palette["jumbotron"] = 'url("Resources/congruent_pentagon.png")';
    palette["content1"] = '#FFFFFF';
    palette["content2"] = '#f2f2f2';
    palette["footer"] = '#E4F1C3';

    // Purely convenience array that contains all major content classes
    list_of_classes = [".what-is-it", ".features", ".commands", ".how-to-use", ".contributing", ".license", ".footer"];
}

/* Giving some CSS to the classes */

function setupAttributes(){
    // Setup navbar properties
    $(".nav").css({"background-color": palette["navbar"], "max-height": navbar_height});
    $(".navbar").css("width", global_element_width);

    // Setup content attributes
    $(".content").css("top", navbar_height);

    // For every class in list_of_classes, set the width to global_element_width
    // As well as this, center every class
    for(var i = 0; i < list_of_classes.length; i++) {
        setupElementProperties(".content " + list_of_classes[i] + " div");
        setElementBackground(".content " + list_of_classes[i], i);
    }

    // Manually set colour of class
    $(".content .what-is-it").css("background-image", palette["jumbotron"]);
}

$(document).ready(function(){
    setupValues();
    setupAttributes();
});

/* To be added into code at later date
   Code came from old personal project of mine

----------------------------------------------

var homeIsBeingHovered = false;

$(".menu a").hover(
    function(){

        console.log("We are hovering!");

        if($(".currentlySelected").is(":hover")){
            $(this).animate({
                backgroundColor: "#d84d36"
            }, 100);

            homeIsBeingHovered = true;
        }else{
            $(this).animate({
                backgroundColor: "#d84d36"
            }, 100);

            $(".currentlySelected").animate({
                backgroundColor: "#F0563D"
            }, 100);

            homeIsBeingHovered = false;
        }
    }, function(){

        console.log("We aren't hovering!");

        if(homeIsBeingHovered){
            $(".currentlySelected").animate({
                backgroundColor: "#d84d36"
            }, 100);
        }else{
            if(!$(".menu").is(":hover")){
                $(".currentlySelected").animate({
                    backgroundColor: "#d84d36"
                }, 100);
            }

            $(this).animate({
                backgroundColor: "#F0563D"
            }, 100);
        }
    }
);*/