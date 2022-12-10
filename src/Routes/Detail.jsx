import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useContextGlobal } from '../Components/utils/global.context'


const Detail = () => {

  const { id } = useParams();

  const { dents, stateTheme } = useContextGlobal();
  
  const [ dent, setDent ] = useState([]);

  useEffect(() => {
    const dentist = dents.find((dent) => {
      return dent.id == id;
    });
    setDent(dentist);
  }, [dents]);
  return (
    <div className = {stateTheme}>
      <h1>Detail Dentist id </h1>
      <table>
       <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {dents.map((dent) => (
            <tr key={dent.id}>
              <td>{dent.name}</td>
              <td>{dent.email}</td>
              <td>{dent.phone}</td>
              <td>{dent.website}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Detail