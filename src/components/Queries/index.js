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
      public
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
    title
    body
    public
    completed
    date
  }
}
`