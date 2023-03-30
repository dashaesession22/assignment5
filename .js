// Attach an event listener to all time block elements
$(".time-block").on("click", function() {
    // Get the text content of the time block
    var text = $(this).find(".description").text().trim();
  
    // Create an input element and set its value to the current text content
    var input = $("<textarea>").val(text);
  
    // Replace the time block's text content with the input element
    $(this).find(".description").html(input);
  
    // Focus on the input element
    input.trigger("focus");
  });
// Attach an event listener to all save button elements
$(".saveBtn").on("click", function() {
    // Get the parent time block element
    var timeBlock = $(this).closest(".time-block");
  
    // Get the hour of the time block
    var hour = timeBlock.attr("data-hour");
  
    // Get the text content of the description element inside the time block
    var text = timeBlock.find(".description").val().trim();
  
    // Save the text content in local storage using the hour as the key
    localStorage.setItem(hour, text);
  });
// Loop through all time block elements
$(".time-block").each(function() {
    // Get the hour of the time block
    var hour = $(this).attr("data-hour");
  
    // Get the saved text content from local storage using the hour as the key
    var text = localStorage.getItem(hour);
  
    // If there is saved text content, display it in the description element
    if (text !== null) {
      $(this).find(".description").val(text);
    }
  });
      