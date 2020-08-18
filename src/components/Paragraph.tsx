import React, { FunctionComponent, useState } from 'react'

const Paragraph: FunctionComponent<{initial?: string}> = ({ initial = ''}) => {
  
  let [pArr, setPArr] = useState('hello')

  // const par1 = () => {
  //   setPArr = initial[0] 
  // }
  
  return (
    <div>
      <h2>{ pArr }</h2>
    </div>
  )
  }

  export default Paragraph

  
  
