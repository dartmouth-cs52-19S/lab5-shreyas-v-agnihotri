/* eslint-disable consistent-return */

import jwt from 'jwt-simple';
import dotenv from 'dotenv';
import User from '../models/user_model';

dotenv.config({ silent: true });

export const signin = (req, res, next) => {
  return res.send({ token: tokenForUser(req.user) });
};

export const signup = (req, res, next) => {
  const { email } = req.body;
  const { password } = req.body;

  if (!email || !password) {
    return res.status(422).send('You must provide email and password');
  }

  console.log('asdfadsf');
  // 🚀 TODO:
  // here you should do a mongo query to find if a user already exists with this email.
  // if user exists then return an error. If not, use the User model to create a new user.
  // Save the new User object
  // this is similar to how you created a Post
  // and then return a token same as you did in in signin

  User.findOne({ email }, (error, result) => {
    console.log('did it');
    if (error) {
      return res.status(500).json({ error });
    }
    if (result == null) {
      const user = new User();
      user.email = email;
      user.password = password;
      user.save()
        .then((saveResult) => {
          return res.send({ token: tokenForUser(user) });
        })
        .catch((err) => {
          return res.status(500).json({ err });
        });
    } else {
      return res.status(422).send('An account already exists with that email');
    }
  });

  // User.findOne({ email })
  //   .then((result) => {
  //     console.log('searched for user');
  //     if (result == null) {
  //       const user = new User();
  //       user.email = email;
  //       user.password = password;
  //       user.save()
  //         .then((saveResult) => {
  //           return res.send({ token: tokenForUser(user) });
  //         })
  //         .catch((error) => {
  //           return res.status(500).json({ error });
  //         });
  //     } else {
  //       return res.status(422).send('An account already exists with that email');
  //     }
  //   })
  //   .catch((error) => {
  //     console.log('error');
  //     return res.status(500).json({ error });
  //   });
};

// encodes a new token for a user object
function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, process.env.AUTH_SECRET);
}
