import React from 'react'

const Card = ({heading,para,color1}) => {
  let styles={color:color1};
  return (
    <div class="card">
        <h2 style={styles}>{heading}</h2>
        <h5>{para}</h5>
        <button class="hi">Hi there!</button>
    </div>
  )
}

export default Card 