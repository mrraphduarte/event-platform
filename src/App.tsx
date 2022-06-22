import { gql, useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import { client } from './lib/apollo'

  const GET_LESSONS_QUERY = gql`
    query {
      lessons {
        id
        title
      }
    }
  `

  interface Lesson {
    id: string;
    title: string;
  }

function App() {
  // FORMA OPCIONAL
  // useEffect(() =>{
  //   client.query({
  //     query: GET_LESSONS_QUERY
  //   }).then(response =>{
  //     console.log(response.data)
  //   })
  // }, [])

  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY)

  return (
    <ul>
      {
        data?.lessons.map(lesson =>{
          return <li key={lesson.id}>
            { lesson.title }
          </li>
        })
      }    
    </ul>

  )
}

export default App
