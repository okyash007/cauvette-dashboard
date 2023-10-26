import React from 'react'

const PieChat = ({percent}) => {

const value = (percent/ 15)*100

  return (
    <div role="progressbar" aria-valuenow={67} aria-valuemin={0} aria-valuemax={100} style={{"--value": value}} />
  )
}

export default PieChat