import React from 'react'

function Hello({name1, color1}) {
let styles={color:color1};
  return (
    <div style={styles}>Hello, {name1} </div>
  )
}

export default Hello