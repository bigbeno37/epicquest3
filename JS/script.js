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
    navbar_height = 50;

    // Creates dictionary-like access to colours
    palette = {};
    palette["navbar"] = '#9EBF6D';
    palette["content1"] = '#D8F1D3';
    palette["content2"] = '#BBE2BC';
    palette["footer"] = '#E4F1C3';

    // Purely convenience array that contains all major content classes
    list_of_classes = [".what-is-it", ".features", ".commands", ".how-to-use", ".contributing", ".license", ".footer"];
}

/* Giving some CSS to the classes */

function setupAttributes(){
    // Setup navbar properties
    $(".nav").css("background-color", palette["navbar"]);
    $(".navbar").css("width", global_element_width);
    $(".logo img").css("max-height", navbar_height);

    // Setup content attributes
    $(".content").css("top", navbar_height);

    // For every class in list_of_classes, set the width to global_element_width
    // As well as this, center every class
    for(var i = 0; i < list_of_classes.length; i++){
        setupElementProperties(".content " + list_of_classes[i] + " div");
    }

    for(var i = 0; i < list_of_classes.length; i++){
        setElementBackground(".content " + list_of_classes[i], i);
    }
}

$(document).ready(function(){
    setupValues();
    setupAttributes();
});