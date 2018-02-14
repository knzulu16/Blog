$(document).ready(function(){
  console.log("THIS IS HAPPENING");
  var commentTemplate = document.getElementById('template').innerHTML;
  var template = Handlebars.compile(commentTemplate);

  $.ajax({
     url: 'http://localhost:5002/api/blog',
     type: 'GET',
     success: function(data){
       $("#display").html(template({
        comment: data.retriev
        }));
       console.log("I'm i getting the data",data);
      }
    });


    $(".like-button").on("click", function(e){
        var $counter = $(this).find(".count");
        var count = $counter.text() | 0; //corose current count to an int
        $counter.text(count + 1);//set new count
    });

$("#radiobuttons textarea:comment").click(function() {
 $("#getReply").val($(this).val());
});
   });
