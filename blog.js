module.exports = function(blogWriter) {
  const post = function(req, res){
    var storeModel = blogWriter.BlogPost;
    var name=req.body.name;
    var date=req.body.date;
    var comment=req.body.comment;
     // console.log("m found",req.body);
        storeModel.create({
          name:name,
          dateAdded:date,
          comment:comment
        },function(err,store){
          if(err){
            console.log(err);
          }
          else{
            res.json({results:store})
          }

        })
        }


const getAllComments=function(req,res){
  var storeModel = blogWriter.BlogPost;
storeModel.find({},function(err,retriev){
  if(err){
    console.log(err);
  }
  else{
    res.json({
      retriev
    })
  }
})

}

  return {
    post,
    getAllComments
  }
}
