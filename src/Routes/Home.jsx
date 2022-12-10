import React from 'react'
import Card from '../Components/Card'
import { useEffect, useState} from 'react'
import axios from 'axios'
import { useContextGlobal } from '../Components/utils/global.context'


const Home = () => {
    const { dents, setDents, stateTheme} = useContextGlobal();

    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then (res => {
            setDents(res.data);
        })
    }, [])
  return (
    <main className={stateTheme}>
      <h1>Home</h1>
      <div className='card-grid'>
        {dents.map((item => (
          <React.Fragment key ={item.id}>
            <Card
              key={item.id}
              id={item.id}
              name={item.name}
              username={item.username}
              />
              </React.Fragment>
        )))}
        
         
      </div>
    </main>
  );
};

export default Home