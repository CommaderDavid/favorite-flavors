$(document).ready(function() {
  var flavors = ['Vanilla', 'Strawberry', 'Carmal', 'Rocky Road', "Recess 'n Pieces"]
  flavors.forEach(function(flavor) {
    $('ul#show').prepend("<li>" + flavor + "</li>");
  });
});
