import { Router } from 'express';
import * as PostController from './controllers/post_controller';
import * as UserController from './controllers/user_controller';
import { requireAuth, requireSignin } from './services/passport';

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'Welcome to my CS52 blog api!' });
});

// your routes will go here
router.route('/posts')
  .post(requireAuth, PostController.createPost)
  .get(PostController.getPosts);

router.route('/posts/:id')
  .get(PostController.getPost)
  .put(requireAuth, PostController.updatePost)
  .delete(requireAuth, PostController.deletePost);

// router.post('/signin', requireSignin, UserController.signin);
router.post('/signin', requireSignin, UserController.signin);
router.post('/signup', UserController.signup);


export default router;
