function addItem() {

var text = $('#current-text').val();
$('#myList').append('<li>' + text + '</li>');

}

$(function() {

 $('#add').on("click", addItem);

 $.getJSON('http://quip-todos.herokuapp.com/get_todos?email=example@gmail.com', function(data) {
  $.each( data, function( key, val ) {
  $('#myList').append( "<li>" + data[key].text + "</li>" );

  });

  });

});
