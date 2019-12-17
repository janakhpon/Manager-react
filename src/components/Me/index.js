import React from 'react'
import {GET_PROFILE} from '../Queries'
import { useQuery } from '@apollo/react-hooks'
import PageMePositive from '../MePositive'
import PageMeNegative from '../MeNegative'
import PageLoading from '../Loading'
import PageError from '../Error'


export default function PageMe() {
    const author = localStorage.getItem('id')
    const getProfile = useQuery(GET_PROFILE, {
      variables: { author },
    });

    if (getProfile.loading) return <PageLoading />;
    if (getProfile.error) return <PageError />;
    
    const data = getProfile.data;
    console.log(data)

    return (
        <>
        {
            data? (
                <PageMePositive data={data} />
            ):
            (
                <PageMeNegative />

            )
        }
        </>
    );
}