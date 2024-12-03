import React from 'react';

const Routes = () => {
  return (
    <div className="bg-gray-100 p-4 my-12 max-w-screen-lg mx-auto rounded-md">
      <h2 className="text-2xl font-bold mb-4 text-center sm:text-left">Routes</h2>
      <p className="text-center sm:text-left">
        All HTTP methods are supported. You can use HTTP or HTTPS for your requests.
      </p>

      <ul className="list-none p-0 m-6 text-lg sm:text-xl max-w-md mx-auto sm:mx-0">
        <li className="flex justify-between items-center mb-2">
          <span className="font-medium">GET</span>
          <a
            href="https://apis-using-nodejs-expressjs.vercel.app/posts"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            /posts
          </a>
        </li>
        <li className="flex justify-between items-center mb-2">
          <span className="font-medium">GET</span>
          <a
            href="https://apis-using-nodejs-expressjs.vercel.app/comments"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            /comments
          </a>
        </li>
        <li className="flex justify-between items-center mb-2">
          <span className="font-medium">GET</span>
          <a
            href="https://apis-using-nodejs-expressjs.vercel.app/albums"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            /albums
          </a>
        </li>
        <li className="flex justify-between items-center mb-2">
          <span className="font-medium">GET</span>
          <a
            href="https://apis-using-nodejs-expressjs.vercel.app/photos"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            /photos
          </a>
        </li>
        <li className="flex justify-between items-center mb-2">
          <span className="font-medium">GET</span>
          <a
            href="https://apis-using-nodejs-expressjs.vercel.app/todos"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            /todos
          </a>
        </li>
        <li className="flex justify-between items-center mb-2">
          <span className="font-medium">GET</span>
          <a
            href="https://apis-using-nodejs-expressjs.vercel.app/users"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            /users
          </a>
        </li>
      </ul>

      <p className="mt-4 text-center sm:text-left">
        Note: resources have relations. For example: posts have many comments, albums have many photos,... see the guide for the full list.
      </p>
    </div>
  );
};

export default Routes;
