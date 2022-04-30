import React from "react";
import "./App.css";
import ThreadsList from "./components/ThreadsList";
import { nanoid } from "nanoid";

function App() {
  const [likes, setLikes] = React.useState(23);
  const [threads, setThreads] = React.useState([
    {
      id: nanoid(),
      username: "Mehul Verma",
      karma: 12.1,
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis hic cumque reprehenderit magni maiores consequatur commodi eaque nostrum asperiores voluptas. Minus aspernatur odio nobis maxime veniam. Natus ratione veniam possimus",
      likes: likes,
      dislikes: 2,
      reply: [
        {
          id: nanoid(),
          username: "Mehul Verma",
          karma: 12.1,
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis hic cumque reprehenderit magni maiores consequatur commodi eaque nostrum asperiores voluptas. Minus aspernatur odio nobis maxime veniam. Natus ratione veniam possimus",
          likes: likes,

          dislikes: 2,
        },
        {
          id: nanoid(),
          username: "Mehul Verma",
          karma: 12.1,
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis hic cumque reprehenderit magni maiores consequatur commodi eaque nostrum asperiores voluptas. Minus aspernatur odio nobis maxime veniam. Natus ratione veniam possimus",
          likes: likes,

          dislikes: 2,
        },
      ],
    },
    {
      id: nanoid(),
      username: "unkown ",
      karma: 12.1,
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis hic cumque reprehenderit magni maiores consequatur commodi eaque nostrum asperiores voluptas. Minus aspernatur odio nobis maxime veniam. Natus ratione veniam possimus",
      likes: likes,

      dislikes: 2,
    },
    {
      id: nanoid(),
      username: "Anon",
      karma: 12.1,
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis hic cumque reprehenderit magni maiores consequatur commodi eaque nostrum asperiores voluptas. Minus aspernatur odio nobis maxime veniam. Natus ratione veniam possimus",
      likes: likes,

      dislikes: 2.0,
    },
  ]);

  // function handleLike() {
  //   setThreads((prevThread) => ({
  //     ...prevThread,
  //     likes: 10,
  //   }));
  //   // console.log("Clicked!!");
  // }
  function handleLike(id) {
    console.log("Clicked!");
    console.log(id);
    // setThreads((prevThread) => {
    //   return prevThread.map((thread) => {
    //     return thread.id === id ? { ...thread, likes: 122 } : thread;
    //   });
    // });
    // console.log(threads);
  }

  return (
    <>
      <h1> Heading</h1>
      <ThreadsList threads={threads} clickHandler={handleLike} />
    </>
  );
}

export default App;
