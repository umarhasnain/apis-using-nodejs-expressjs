import React from 'react';

const JsonPlaceholderInfo = () => {
  return (
    <div className="bg-gray-100 p-4 max-w-screen-lg mx-auto rounded-md">
      <h2 className="text-2xl font-bold mb-4 text-center sm:text-left">When to use</h2>
      <p className="text-center sm:text-left">
        JSONPlaceholder is a free online REST API that you can use whenever you need some fake data. It can be in a README on GitHub, for a demo on CodeSandbox, in code examples on Stack Overflow, ...or simply to test things locally.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-center sm:text-left">Resources</h2>
      <p className="text-center sm:text-left">
        JSONPlaceholder comes with a set of 6 common resources:
      </p>

      <ul className="list-none p-0 m-6 text-lg sm:text-xl max-w-md mx-auto sm:mx-0">
        <li className="flex justify-between items-center mb-2">
          <a
            href="https://apis-using-nodejs-expressjs.vercel.app/posts"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            /posts
          </a>
          <span className="text-gray-600">100 posts</span>
        </li>
        <li className="flex justify-between items-center mb-2">
          <a
            href="https://apis-using-nodejs-expressjs.vercel.app/comments"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            /comments
          </a>
          <span className="text-gray-600">500 comments</span>
        </li>
        <li className="flex justify-between items-center mb-2">
          <a
            href="https://apis-using-nodejs-expressjs.vercel.app/albums"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            /albums
          </a>
          <span className="text-gray-600">100 albums</span>
        </li>
        <li className="flex justify-between items-center mb-2">
          <a
            href="https://apis-using-nodejs-expressjs.vercel.app/photos"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            /photos
          </a>
          <span className="text-gray-600">5000 photos</span>
        </li>
        <li className="flex justify-between items-center mb-2">
          <a
            href="https://apis-using-nodejs-expressjs.vercel.app/todos"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            /todos
          </a>
          <span className="text-gray-600">200 todos</span>
        </li>
        <li className="flex justify-between items-center mb-2">
          <a
            href="https://apis-using-nodejs-expressjs.vercel.app/users"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            /users
          </a>
          <span className="text-gray-600">10 users</span>
        </li>
      </ul>

      <p className="mt-4 text-center sm:text-left">
        Note: resources have relations. For example: posts have many comments, albums have many photos,... see the guide for the full list.
      </p>
    </div>
  );
};

export default JsonPlaceholderInfo;
