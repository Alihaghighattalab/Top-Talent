import React from 'react'
import ListItems from './ListItems'

export default function List(props) {
  const trItems = props.value.map((item,index)=>{
    return <ListItems key={index} url={item.html_url} star={item.stargazers_count} name={item.name} language={item.language}/>
  })
  return (
    <div className='container w-100 mr-2 ml-2 ml-2'>
    <table className="table table-striped">
        <thead className="bg-light">
            <tr>
                <th>Name</th>
                <th>star</th>
                <th>Language</th>
                <th>URL</th>
            </tr>
        </thead>
        <tbody>
            {trItems}
        </tbody>
    </table>
</div>
  )
}
