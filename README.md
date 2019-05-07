# Lab 5

## Redux CRUD Platform: Server

The backend API for a blog-posting webapp by Shreyas Agnihotri

## Heroku Server

https://cs52-redux-blog.herokuapp.com/

## Description

This is an *express* + *mongoDB* CRUD API server for the blog-posting front-end developed in Lab 4. The database is deployed in Heroku and offers the ability to:
* Get all posts
* Create a new post
* Get a specific post by ID
* Update a specific post by ID
* Delete a specific post by ID

## What Worked and Didn't Work

I was surprised by how easy it was to get the backend up and running using *mongoose* functionality on top of *mongoDB*. Building a custom Post model schema allowed me to access functionality to save, fetch, and update content within the database with limited effort. At first, it was difficult to figure out how all the pieces work together (when to call `mongod &`, when to work in the `mongo` command line, etc.) but development overall still only took a couple of hours.
