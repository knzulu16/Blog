$(document).ready(function(){
var postButton=$("#postButton").val();
$("#postButton").click(function(){
  var blogerPerson=$("#blogerPerson").val();
  console.log(blogerPerson);
  var datePosted=$("#blogDate").val();
  console.log(datePosted);
  var displayComments=$("#postComments").val();
  console.log(displayComments);
  var blogerDetails = {
    name:blogerPerson,
    dateAdded:datePosted,
    comment:displayComments
  }
  console.log(blogerDetails);
  $.ajax({
    url:"http://localhost:5002/api/blog",
    type:"POST",
    data:blogerDetails,
    success:function(result){
    }
  })
  console.log(result);

})

$('.button-collapse').sideNav();


});
