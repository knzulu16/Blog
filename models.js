var mongoose = require("mongoose");
var Schema=mongoose.Schema;
mongoose.connection.on("error", function(err){
  console.log(err);
});
// mongoose.connect('mongoURL',{
//   useMongoClient:true
// }),function(err) {
//   if (err) {
//     console.log('error connection');
//   } else {
//     console.log('database connection success');
//   }
// };

module.exports=function(blogWriter){
mongoose.Promise=global.Promise;
mongoose.connect(blogWriter);
var BlogPost=exports.SaveComment=mongoose.model('SaveComment',{
    name:String,
      date:Date,
  comment:String
})

  return{
    BlogPost
  }

}
