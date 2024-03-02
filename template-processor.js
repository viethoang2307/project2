// template-processor.js

// Template Processor class
function TemplateProcessor(template) {
  this.template = template;
}

// fillIn method for Template Processor
TemplateProcessor.prototype.fillIn = function (dictionary) {
  // Regular expression to match properties in the template
  var regex = /{{(.*?)}}/g;

  // Replace matched properties with corresponding values from the dictionary
  var filledTemplate = this.template.replace(regex, function (match, property) {
    // If property is not defined in the dictionary, replace with an empty string
    return dictionary[property] || "";
  });

  return filledTemplate;
};
// var template = "My favorite month is {{month}} but not the day {{day}} or the year {{year}}";
// var dateTemplate = new TemplateProcessor(template);

// var dictionary = {month: "July", day: "1", year: "2016"};
// var str = dateTemplate.fillIn(dictionary);

// console.log(str === "My favorite month is July but not the day 1 or the year 2016");

// // Case: property doesn't exist in dictionary
// var dictionary2 = {day: "1", year: "2016"};
// var str = dateTemplate.fillIn(dictionary2);

// console.log(str === "My favorite month is but not the day 1 or the year 2016");
