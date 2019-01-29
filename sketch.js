// Hussein Fardous
// hf2334
// COMS W4995_006
// A0

function setup() {
    createCanvas(800, 600); // Make an HTML Canvas Element of Width x Height Pixels
}

var prev_hour_mapping, prev_minute_mapping, prev_second_mapping = -1;
var prev_hour_color, prev_minute_color, prev_second_color;

function draw() {

    // Preliminary Drawing State
    background(102, 178, 255); // RGB
    stroke(0); // Grayscale
    strokeWeight(5);

    // "Hour" Circle
    var time_hour = hour();
    let hour_mapping = map(time_hour, 0, 23, 0, width); // Re-maps the Current Hour from Range 0 -> 23 to Range 0 -> Width of Screen
    push(); // Start a New Drawing State
    translate(hour_mapping, 0);
    if (hour_mapping != prev_hour_mapping) { 
        prev_hour_color = color(Math.round(random(255)), Math.round(random(255)), Math.round(random(255))); // RGB
        prev_hour_mapping = hour_mapping;
    }
    fill(prev_hour_color);
    circle(25, 125, 125);
    pop(); // Restore Original Drawing State

    // "Minute" Circle
    var time_minute = minute();
    let minute_mapping = map(time_minute, 0, 59, 0, width); // Re-maps the Current Minute from Range 0 -> 59 to Range 0 -> Width of Screen
    push(); // Start a New Drawing State
    translate(minute_mapping, 0);
    if (minute_mapping != prev_minute_mapping) { 
        prev_minute_color = color(Math.round(random(255)), Math.round(random(255)), Math.round(random(255))); // RGB
        prev_minute_mapping = minute_mapping;
    }
    fill(prev_minute_color);
    circle(10, 350, 100);
    pop(); // Restore Original Drawing State
    
    // "Second" Circle
    var time_second = second();
    let second_mapping = map(time_second, 0, 59, 0, width); // Re-maps the Current Second from Range 0 -> 59 to Range 0 -> Width of Screen
    push(); // Start a New Drawing State
    translate(second_mapping, 0);
    if (second_mapping != prev_second_mapping) {
        prev_second_color = color(Math.round(random(255)), Math.round(random(255)), Math.round(random(255))); // RGB
        prev_second_mapping = second_mapping;
    }
    fill(prev_second_color);
    circle(10, 525, 75);
    pop(); // Restore Original Drawing State
}
