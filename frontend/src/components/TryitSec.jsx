import React from 'react';

const CodeBlock = () => {
  return (
    <div className="bg-gray-100 p-4 my-12 max-w-screen-lg mx-auto rounded-md">
      <h2 className="text-lg font-bold mb-2 text-center sm:text-left">Try it</h2>
      <div className="bg-gray-200 p-4 rounded-md">
        <pre className="text-sm font-mono break-words whitespace-pre-wrap">
          {`fetch('https://apis-using-nodejs-expressjs.vercel.app/posts')
  .then(response => response.json())
  .then(json => console.log(json))`}
        </pre>
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 w-full sm:w-auto">
        Run script
      </button>
      <div className="bg-gray-200 p-4 rounded-md mt-4">
        <pre className="text-sm font-mono break-words whitespace-pre-wrap">
          {`{
  "status": 200,
  "message": "Succuess",
  "data": [
    {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },`}
        </pre>
      </div>
      <p className="text-green-500 mt-4 text-center sm:text-left">
       Format to call API 😊
      </p>
    </div>
  );
};

export default CodeBlock;
