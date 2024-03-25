import React from 'react'

const Tweet = () => {
  return (
    <div className=" rounded-lg border border-gray-300 bg-white shadow-md p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <img
            className="w-10 h-10 rounded-full"
            src="https://pbs.twimg.com/profile_images/1518774366208398336/FTKWCNmh_400x400.jpg"
            alt="Avatar"
          />
        </div>
        <div className="ml-4">
          <div className="font-bold text-gray-900">
            {/* reviewer name */}
          </div>
          <div className="text-gray-500 text-sm">
            {/* Review Date */}
          </div>
        </div>
      </div>
      <div className="mt-4 border-t border-gray-300"> 
        <p className='p-4'>
            {/* review content */}
        </p>
      </div>
    </div>
  )
}

export default Tweet
