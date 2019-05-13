import mongoose, { Schema } from 'mongoose';
import bcryptjs from 'bcryptjs';

// create a UserSchema with a title field
const UserSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: { type: String },
}, {
  toJSON: {
    virtuals: true,
  },
});

UserSchema.pre('save', function beforeUserSave(next) {
  // this is a reference to our model
  // the function runs in some other context so DO NOT bind it
  const user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();

  const salt = bcryptjs.genSaltSync(10);
  const hash = bcryptjs.hashSync(user.password, salt);
  user.password = hash;

  // when done run the **next** callback with no arguments
  // call next with an error if you encounter one
  return next();
});

//  note use of named function rather than arrow notation
//  this arrow notation is lexically scoped and prevents binding scope, which mongoose relies on
UserSchema.methods.comparePassword = function comparePassword(candidatePassword, callback) {
  const user = this;

  // return callback(null, comparisonResult) for success
  // or callback(error) in the error case
  bcryptjs.compare(candidatePassword, user.password, (err, comparisonResult) => {
    if (err) return callback(err);
    return callback(null, comparisonResult);
  });
};

// create PostModel class from schema
const UserModel = mongoose.model('User', UserSchema);

export default UserModel;
