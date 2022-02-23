import React from 'react'
import './paginate.css'
function Pagination(postsperpage, totalpost) {
    const pagenumber =[]

    for(let i=0; i<=Math.ceil(totalpost/postsperpage); i++){
        pagenumber.push(i)
    }
  return (
    <div className='lower'>
       { pagenumber.map(i=>{
           return(
               <div className='lower_sub'>
                   <a href='#'>
                       {i}
                   </a>
               </div>
           )
        })}
    </div>
  )
}

export default Pagination