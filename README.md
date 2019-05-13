# Lab 5

## Redux CRUD Platform: Server

The backend API for a blog-posting webapp by Shreyas Agnihotri

## Deployed App

http://shreyas-redux-blog.surge.sh/

## Heroku Server

https://cs52-redux-blog.herokuapp.com/

## Description

This is an *express* + *mongoDB* CRUD API server for the blog-posting front-end developed in Lab 4. The database is deployed in Heroku and offers the ability to:
* Get all posts
* Create a new post
* Get a specific post by ID
* Update a specific post by ID
* Delete a specific post by ID

It also offers authentication, requiring users to sign in with an email and password in order to make or edit posts. This is all implemented from scratch (including password hashing and storing the user object).

## What Worked and Didn't Work

I was surprised by how easy it was to get the backend up and running using *mongoose* functionality on top of *mongoDB*. Building a custom `Post` model schema allowed me to access functionality to save, fetch, and update content within the database with limited effort. At first it was difficult to figure out how all the pieces work together (when to call `mongod &`, when to work in the `mongo` command line, etc.) but development overall still only took a couple of hours.

For the authentication, it took me some time to understand how the different cryptographical elements (salting, hashing, JWT, comparing a plain-text and hashed password) all play together to make password-authentication possible. Eventually though, this was easy to implement in practice by using the `bcryptjs` library. At first, I wasn't able to get it to work because I was generating the salt and hasing asynchronously, resulting in the user password being stored prior to the hashed password being generated. I realized this issue, though, and switched to a synchronous operation that required the hashed password to be computed first.

## Extra Credit

I modified my `Post` component to have access to the global `authenticated` property in state, so that it doesn't offer the user the ability to edit or delete a post if they are not logged in. These options reappear once the user is signed in.
