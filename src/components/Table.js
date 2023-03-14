import React from 'react'
import { Link } from 'react-router-dom'




function Table({data, props}) {
    
  return (
    <div id="table">
        <table>
            <tr>
                <th>Style</th>
                <th className="ml-0">Color</th>
                <th className="ml-0">Title</th>
            </tr>
            {data.map(item=> (
                <tr key={item._id}>
                    <Link to={`/products`}>
                        <td className="pr-5">{item.style}</td>
                        <td className="pr-5">{item.color}</td>
                        <td className="pr-5">{item.title}</td>
                    </Link>
                </tr>
            ))}
            <tr>
                
            </tr>
        </table>
      
    </div>
  )
}


export default Table

