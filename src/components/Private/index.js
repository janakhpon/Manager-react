import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_RPIVATE_TASKS} from "../Queries"
import PageLoading from '../Loading';
import PageError from '../Error';
import PagePrivateTask from '../PrivateTask'





export default function PagePrivateTasks(props) {
  
    const id = localStorage.getItem('id')
    const getAllTasks = useQuery(GET_RPIVATE_TASKS, {
      variables: { id },
    });

    if (getAllTasks.loading) return <PageLoading />;
    if (getAllTasks.error) return <PageError />;
    
    const data = getAllTasks.data;
  
  


  return (
    <>
      {
        data.users[0].tasks.map((task, key) => {
          return <PagePrivateTask task={task} key={key} />
        })
      }

    </>
  );
}