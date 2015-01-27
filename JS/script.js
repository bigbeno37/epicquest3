// Website developed and designed by bigbeno37 (https://github.com/bigbeno37)
// Created for showcasing Randy Schouten's EpicQuest Bukkit plugin
// Website licensed under the MIT license

var global_element_width;
var palette;
var navbar_height;
var list_of_classes;

function setElementWidthAndSetToMiddle(element){
    $(element).css({"width": global_element_width, "margin": "0 auto"});
}

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
    list_of_classes = [".What-is-it", ".Features", ".Commands", ".How-to-use", ".Contributing", ".License"];
}

function setupAttributes(){
    // Setup navbar properties
    $(".nav").css("background-color", palette["navbar"]);
    $(".navbar").css("width", global_element_width);
    $(".logo img").css("max-height", navbar_height);

    // Setup content constraints
    $(".content").css("top", navbar_height);

    // For every class in list_of_classes, set the width to global_element_width
    // As well as this, center every class
    for(var i = 0; i < list_of_classes.length; i++){
        setElementWidthAndSetToMiddle(list_of_classes[i] + " div");
    }

    setElementWidthAndSetToMiddle(".License");
}

$(document).ready(function(){
    setupValues();
    setupAttributes();
});