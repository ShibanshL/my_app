import React from 'react'
import './paginate.css'
function Pagination({postsperpage, totalpost, paginate,cp}) {
    const pagenumber =[]
    console.log(postsperpage)
    for(let i=0; i<=Math.ceil(totalpost/postsperpage); i++){
        pagenumber.push(i)
    }
  return (
    <div className='lower'>
       { pagenumber.map(e=>{
           return(
               <div className='lower_sub'>
                   <a href='#' onClick={()=>{
                       console.log('inside this')
                       console.log(cp)
                       paginate(e)}}>
                       {e}
                   </a>
               </div>
           )
        })}
    </div>
  )
}

export default Pagination