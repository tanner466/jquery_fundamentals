// SOLUTIONS GO BELOW EACH EXERCISE

// STEP 0: Document Needs to be ready first!
// Ensure that all the code you'll write below only execute when the document is ready
// Hint: you can use .ready on the document object
$(document).on('ready', function() {


// STEP 1: Change Background

// Change the background color of '#step-1' by script.
// Hint: you can use .css
$('#step-1').css('background-color', 'red');


// STEP 2: Change Parent

// Change the text in the span, a child of "#step-2"
// Hint: you can use .text
$('#step-2').children('.child').text("Hello");


// STEP 3: Create Clone

// Create a clone of the span in "#step-3" and position it under the original one.
// Hint: you can use .clone and .insertAfter
var theClone = $('#step-3').clone();
theClone.insertAfter($('#step-3'));


// STEP 4: Use Filter

// Change background color of the second ".target"
// Hint: you can use .eq and .css
$('#step-4').children('.target-4').eq(1).css('background-color', 'orange');


// STEP 5: Disable Buttons

// Disable the button
// Hint: you will have to select the button and can use .attr
$('#step-5').children('button').attr('disabled', true);


// STEP 6: Uncheck CheckBoxes

// Uncheck all checkboxes using jQuery
// Hint: you will have to select the input and can use .removeAttr
$('#step-6').children('label').children('input').removeAttr("checked");


// STEP 7: Change Parent

// Move "#child-7" from "#step-7a" to "#step-7b"
// Hint: you can use .appendTo
var child7 = $('#step-7a').children('#child-7');
child7.appendTo($('#step-7b'));


// STEP 8: Change Size

// Double the size of "#step-8"
// Hint: you can use .css, .width and .height
var currentWidth = $('#step-8').width();
//var currentHeight = $('#step-8').height();
$('#step-8').css('width', currentWidth * 2);
//step-8').css('height', currentHeight * 2);

// Could double the height as well. Only double one to double size.



// STEP 9: Empty Elements

// Remove all children and text of "#step-9"
// Hint: you can use .empty
$('#step-9').children().empty();

// could call .empty directly on step-9, would get rid of everything, this makes the children empty


// STEP 10: Delay

// Show Alert with 1 second delay (Use "setTimeout")
// Hint: you can use setTimeout and alert (these aren't jQuery functions!)
setTimeout(function() { alert("1 second delay") }, 1000);

// STEP 11: Count

// Show the number of children in an alert
// Hint: you can use .children, .length and alert or you could use .find, .size and alert. the alert should show 5
alert($("#step-11").children(".child").length + " children");

// STEP 12: Animate

// Make "#step-12" double size with animation
// Hint: you can use .animate, .width, and .height
var currentWidth = $("#step-12").width();
//var currentHeight = $("#step-12").height();
$("#step-12").animate({
  width: currentWidth * 2,
  //height: currentHeight * 2
});


// STEP 13: All But One

// Remove all children of "#step-13" other than any h4 tags
// Hint: you can use .children, .not and .remove
$("#step-13").children().not("h4").remove();


// STEP 14: Without Children

// Remove all 'div's from "#step-14" which have no child elements.
// Hint: you can use .not and .remove. Look closely at what options you can pass .not
$("#step-14").children(":empty").remove();
// I couldn't figure it out with .not, this way works.

});
