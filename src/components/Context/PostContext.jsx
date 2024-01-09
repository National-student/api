import { createContext, useEffect, useState } from "react";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {

    const [post, setPost] = useState([])

  useEffect(() => {
    (async function () {
      const responce = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );

      try {
        if (responce.ok) {
          const data = await responce.json();
          setPost(data)
        }
      } catch (error) {
        alert(error);
      }
    })();
  }, []);

  return <PostContext.Provider value={{post}}>{children}</PostContext.Provider>;
};
