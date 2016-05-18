var db = require('./models')

module.exports = {
    // plates controller
    platesController: {
      all: function(req, res){
        db.plates.find({}, function(err, plates){
          if(err) console.log("err from db: ", err)
          res.json(plates)
        })
        // console.log("from my controller:",plates)
        // res.json(plates)
      },//end of my all method
      create: function(req,res){
        var plate = new db.plates(req.body)
        
        plate.save(function(err, plate){
          if(err) console.log("err from db: ", err)
          res.json(plate)
        })
        
      },
      
      update: function(req, res){
        db.plates.findOneAndUpdate({_id: req.params.id}, req.body, {new : true}, 
        function(err, plate){
          if(err) console.log("err udpate db: ", err)
          res.json(plate)
        })
      },
      
      delete: function(req, res){
        db.plates.findOneAndRemove({_id: req.params.id}, 
        function(err, plate){
          if(err) console.log("err delete db: ", err)
          var plates = db.plates.find({}, function(err, plates){
          if(err) console.log("err from db: ", err)
          res.json(plates)})
        })
      }
      
    }//end of my plates controller
}
