import React from 'react'

const Heading = (props) => {
  return (
    <div className="uppercase text-center my-6 lg:my-4 text-bold tshadow  text-4xl">
        {props.name}
    </div>
  )
}

export default Heading