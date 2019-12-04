import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_USERS } from "../Queries";


function App() {
  const getAllUsers = useQuery(GET_USERS);
  if (getAllUsers.loading) return "loading ...";
  if (getAllUsers.error) return <React.Fragment>Error :(</React.Fragment>;
  let data = getAllUsers.data;
  return (
    <div className="container">

      <pre>
        {JSON.stringify(getAllUsers.data, null, 2)}
      </pre>

      {

        data.users.map((user, key) => {
          return (
            <p key={key}>{user.name}</p>
          );
        })
      }
    </div>
  )
}

export default App;
