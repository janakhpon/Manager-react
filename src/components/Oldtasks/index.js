import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_TASKS } from "../Queries"
import PDGloadingPage from '../Loading';
import PDGerrorPage from '../Error';
import PageTask from '../Task'





export default function PagePanel(props) {



  const getAllTasks = useQuery(GET_TASKS);
  if (getAllTasks.loading) return <PDGloadingPage />;
  if (getAllTasks.error) return <PDGerrorPage />;
  let data = getAllTasks.data;


  return (
    <>
      {
        data.tasks.map((task, key) => {
          return <PageTask task={task} key={key} />
        })
      }

    </>
  );
}