import Post from '../models/post_model';

export const createPost = (req, res) => {
  const post = new Post();
  // All our fields are available in req.body, so let’s set them on the new Post object. You know how to do this.
  post.title = req.body.title;
  post.tags = req.body.tags;
  post.contents = req.body.contents;
  post.cover_url = req.body.cover_url;

  post.save()
    .then((result) => {
      res.json({ message: 'Post created!' });
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};

export const getPosts = (req, res) => {
  Post.find()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};

export const getPost = (req, res) => {
  Post.findById(req.params.id)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};

export const deletePost = (req, res) => {
  Post.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};

export const updatePost = (req, res) => {
  Post.findByIdAndUpdate(req.params.id, req.body)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};
