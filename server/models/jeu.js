const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JeuSchema = new Schema({
  titre: { type: String },
  style: {type: String},
  description: {type: String},
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  }
});

JeuSchema.pre("save", function (done) {
  var self = this;
  mongoose.models["jeu"].findOne({titre: self.titre}, (err, user) => {
      if(user) {
          done(new Error("Le titre doit être unique"));
      } else {
          done();
      }
  });
});
mongoose.model('jeu', JeuSchema);
