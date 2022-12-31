import React from 'react'
import TimeAgo from 'react-timeago'

function LiveTimeStamp({time}) {
  return (
    <TimeAgo date={time}/>
  )
}

export default LiveTimeStamp