import React from 'react'

function LabelString({label}) {
  return (
    <div>
    {label && <h3 className="capitalize mx-10 mt-2 text-2xl underline decoration-2 decoration-blue-400 underline-offset-4 font-medium dark:text-white">search results for:{label}</h3>}
    </div>
  )
}

export default LabelString