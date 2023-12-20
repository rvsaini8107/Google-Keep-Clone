import React from 'react'
import LeftNav from './SubMain/LeftNav'
import RightDiv from './SubMain/RightDiv'

const Main = ({search}) => {
  return (
    <div className='main-div'>
      <LeftNav/>
      <RightDiv search={search}/>
    </div>
  )
}

export default Main
