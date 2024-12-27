import React from 'react'

function Card({username = 'User Name', post="not assigend"}) {
  return (
    <div>
      <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
          <img className="w-24 h-24 rounded-full mx-auto" src="https://cdn.pixabay.com/photo/2024/01/26/14/36/elon-8534074_1280.png" alt="" width="384" height="512"/>
          <div className="pt-6 text-center space-y-4">
            <blockquote>
              <p className="text-lg font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga magnam eum ipsam qui voluptatum. Minima, ullam voluptatem tempora fugiat veritatis rerum aspernatur suscipit? Quo odio nesciunt ipsam corporis commodi hic.
              </p>
            </blockquote>
            <figcaption className="font-medium">
              <div className="text-sky-500 dark:text-sky-400">
                {username}
              </div>
              <div className="text-slate-700 dark:text-slate-500">
                {post}
              </div>
            </figcaption>
          </div>
      </figure>
    </div>
  )
}

export default Card