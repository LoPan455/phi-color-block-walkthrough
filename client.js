$(document).ready(function(){
  console.log('jQuery is ready to go!'); //log to say we're ready
  var colorArray = ['AliceBlue','AntiqueWhite','Aqua','Aquamarine']; //create a sample array of colors to populate
  var newColorBlock = $('<div>');  //Now I want to put something on the DOM, start by adding a div
  newColorBlock.css('background-color','red'); //hardcode the color for now.  using <variable>.css was not understood.This is one of the first places I got tripped up
  newColorBlock.addClass('colorBlock'); //Add a class to the empty div - it gives height and width
  $('#colorBlockContainer').append(newColorBlock); //Add the div to the DOM

  //adding a new blocks..you could copy/pasta lines 4-7 all day long, but doesn't
  //a loop sound like a better idea?

  for (var i = 0; i < colorArray.length; i++) {
    var newColorBlock = $('<div>');  //Now I want to put something on the DOM, start by adding a div
    newColorBlock.css('background-color',colorArray[i]); //we are setting the background-color  property to the string at the corresponding index.
    newColorBlock.addClass('colorBlock'); //Add a class to the empty div - it gives height and width
    $('#colorBlockContainer').append(newColorBlock); //Add the div to the DOM
  }




});
