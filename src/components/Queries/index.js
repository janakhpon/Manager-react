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
  createUser(name: $name, email: $email, phone: $phone, password: $password){
    id
  }
}
`
export const CREATE_TASK = gql`
 mutation Task($title: String!, $body: String!, $visibility: Boolean!, $author: ID!){
    createTask(title: $title, body: $body, visibility: $visibility, author: $author){
      id
      date
    }
  }

`