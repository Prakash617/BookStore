import React from 'react'

type Props = {
    text:string;
}

const BlackButton = (props: Props) => {
  return (
    <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                    {props.text}
                  </button>
  )
}

export default BlackButton