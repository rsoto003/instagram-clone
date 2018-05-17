let express = require("express");
let graphqlHTTP = require("express-graphql");
let { buildSchema } = require("graphql");
let cors = require("cors");

/* - - - graphql schemas - - - */

let schema = buildSchema(`
    type User {
        id: String!
        nickname: String!
        avatar: String!
    }
    type Post {
        id: String!
        user: User!
        caption: String!
        image: String!
    }
    type Query{
        user(id: String) : User!
        post(user_id: String, post_id: String) : Post!
        posts(user_id: String) : [Post]
    }
`)