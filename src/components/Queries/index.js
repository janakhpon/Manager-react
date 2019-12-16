import { gql } from 'apollo-boost';

export const GET_USERS = gql`
{

    users {
    id
    name
    email
    phone
    tasks {
      title
      body
      visibility
      completed
      date
    }
    date
  }
}
`

export const GET_PROFILES = gql`
{
  profiles{
    id
    avatar
    address
    career
    school
    gender
    hobby
    birthdate
    info
    author{
      name
      id
    }
  }
}

`

export const GET_ME = gql`
query User($id : String!){
    users(query: $id){
    id
    name
    email
    phone
    date
  }
}
`


export const GET_RPIVATE_TASKS = gql`
query User($id: String!){
  users(query: $id){
    name
    id
    email
    phone
    tasks{
      id
      title
      body
      completed
      visibility
      date
    }
  }
}
`

export const GET_PUBLIC_TASKS = gql`
{
  publicTasks{
    id
    title
    visibility
    completed
    body
    date
    author{
      id
      phone
      name
      email
    }
  }
}
`

export const GET_TASKS = gql`
{
  tasks{
    id
    title
    body
    visibility
    completed
    date
  }
}
`

export const CREATE_USER = gql`
mutation User($name: String!, $email: String!, $phone: String!, $password: String!){
  createUser(data: {
    name: $name,
    email: $email,
    phone: $phone,
    password: $password
  }){
      name
      email
      phone
      password
      date
  }
}
`

export const USER_LOGIN = gql`
mutation User($email: String!, $password: String!){
  userLogin(data: {
    email: $email,
    password: $password
  }){
    token
    user{
      id
      name
      email
      phone
      password
      tasks{
        title
      }
    }
  } 
}
`

export const UPDATE_USER = gql`
mutation User($id: ID!, $name: String!, $email: String!, $phone: String!, $password: String!){
  updateUser(data: {
    id: $id,
    name: $name,
    email: $email,
    phone: $phone,
    password: $password
  }){
    id
    name
    email
    phone
    password
    tasks{
      id
      title
      body
    }
    date
  }
}
`
export const CREATE_TASK = gql`
 mutation Task($title: String!, $body: String!, $visibility: Boolean!, $author: ID!){
    createTask(data:{
      title: $title,
      body: $body,
      visibility: $visibility,
      author: $author
    }){
      id
      title
      body
      visibility
      completed
      author{
          name
          date
        }
      date
      }
  }
`

export const UPDATE_TASK = gql`
  mutation Task($id: ID!, $title: String!, $body: String!, $completed: Boolean!, $visibility: Boolean!, $author: ID!){
    updateTask(data: {
      id: $id,
      title: $title,
      body: $body,
      completed: $completed,
      visibility: $visibility,
      author: $author
    }){
      id
      title
      body
      completed
      visibility
      author{
        name
        id
      }
      date
    }
  }
`