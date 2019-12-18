import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_RPIVATE_TASKS} from "../Queries"
import PageLoading from '../Loading';
import PageError from '../Error';
import PagePrivateTask from '../PrivateTask'
import PageNoTask from '../Notask'





export default function PagePrivateTasks(props) {
  
    const id = localStorage.getItem('id')
    const getAllTasks = useQuery(GET_RPIVATE_TASKS, {
      variables: { id },
    });

    if (getAllTasks.loading) return <PageLoading />;
    if (getAllTasks.error) return <PageError />;

    if (getAllTasks.data.users[0].tasks.length === 0) return <PageNoTask />;
    
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