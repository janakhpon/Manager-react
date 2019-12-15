import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_PUBLIC_TASKS } from "../Queries"
import PagePublicTask from '../PublicTask'
import PageLoading from '../Loading';
import PageError from '../Error';





const PagePublicTasks = () => {

    const getpublictask = useQuery(GET_PUBLIC_TASKS);
    if (getpublictask.loading) return <PageLoading />;
    if (getpublictask.error) return <PageError />;
    let data = getpublictask.data;



    return (
        <>
            {
                data.publicTasks.map((task, key) => {
                    return <PagePublicTask task={task} key={key} />
                })
            }

        </>
    );
}

export default PagePublicTasks;