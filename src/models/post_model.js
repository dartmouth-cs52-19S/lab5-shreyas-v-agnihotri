import mongoose, { Schema } from 'mongoose';

// create a PostSchema with a title field
const PostSchema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  title: String,
  tags: String,
  content: String,
  cover_url: String,
}, {
  toJSON: {
    virtuals: true,
  },
});

// create PostModel class from schema
const PostModel = mongoose.model('Post', PostSchema);

// Commented so it compiles --------------------
export default PostModel;
