import React, { FunctionComponent, useState } from 'react'

const Paragraph: FunctionComponent<{initial?: string}> = ({ initial = ''}) => {
  
  let [pArr, setPArr] = useState('hello')

  // const par1 = () => {
  //   setPArr = initial[0] 
  // }
  
  return (
    <div>
      <h2>The flower's roots absorb water and nutrients from the soil. Click on the roots for a closer look.</h2>
    </div>
  )
  }

  export default Paragraph

  
  
