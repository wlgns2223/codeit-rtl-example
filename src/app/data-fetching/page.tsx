"use client";
import { NextPage } from "next";
import { Post, Todo, useJSONPlaceholder } from "./useJSONPlaceholder";

export const DataFetchingComponent: NextPage = () => {
  const { data: posts } = useJSONPlaceholder<Post>("posts/1");
  const { data: todos } = useJSONPlaceholder<Todo>("todos/1");

  if (posts === undefined || todos === undefined) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-center items-center flex-col ">
      <h1>{"Data fetching"}</h1>
      <h2 className="mt-40">{"Post"}</h2>
      <ul>
        {posts &&
          Object.entries(posts).map(([key, value]) => (
            <li key={key}>{`${key}: ${value}`}</li>
          ))}
      </ul>

      <h2 className="mt-40">{"Todo"}</h2>
      <ul>
        {todos &&
          Object.entries(todos).map(([key, value]) => (
            <li key={key}>{`${key}: ${value}`}</li>
          ))}
      </ul>
    </div>
  );
};

export default DataFetchingComponent;
