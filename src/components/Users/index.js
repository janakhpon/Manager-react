import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_PROFILES} from "../Queries"
import PageLoading from '../Loading';
import PageError from '../Error';
import PageUser from '../User'





export default function PageUsers(props) {
  
    const id = localStorage.getItem('id')
    const getProfiles = useQuery(GET_PROFILES, {
      variables: { id },
    });

    if (getProfiles.loading) return <PageLoading />;
    if (getProfiles.error) return <PageError />;
    
    const data = getProfiles.data;
    console.log(data)
  
  


  return (
    <>
      {
        data.profiles.map((profile, key) => {
          return <PageUser profile={profile} key={key} />
        })
      }

    </>
  );
}