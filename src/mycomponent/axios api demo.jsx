import React, { useEffect }  from 'react'
import {useState} from 'react'
import axios from 'axios'
import react from 'react'

export default function Axiosapidemo() {

    const [data, setdata] = useState()
    useEffect(() => {
        axios.get("http://localhost:5000/posts")
        .then((res) => (setdata(res.data)))
        .catch((err) => console.log(err))
    }, [])
    console.log("component called")
    console.log(data)
    function newrow(element){
            console.log("newrow called");
            return(
            <tr span = "row">
                <th>{element.id}</th>
                <td>{element.title}</td>
                <td>{element.body}</td>
            </tr>)
    }

  return (
        <>
        <h1 style={{textAlign : "center"}}>POSTS</h1>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Title</th>
      <th scope="col">Body</th>

    </tr>
  </thead>
  <tbody>
  {
            data &&
            data.map((element) => (
                console.log(element),
                newrow(element)
            
            ))
        }
  </tbody>
</table>


        </>
  )
}
