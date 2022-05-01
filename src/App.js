import React from "react";
import "./App.css";
// import ThreadsList from "./components/ThreadsList";
import { nanoid } from "nanoid";
import Nav from "./components/Nav";
import Thread from "./components/Thread";
import AddThread from "./components/AddThread";

function App() {
  const [threads, setThreads] = React.useState([
    {
      id: nanoid(),
      username: "Mehul Verma",
      karma: 12.1,
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis hic cumque reprehenderit magni maiores consequatur commodi eaque nostrum asperiores voluptas. Minus aspernatur odio nobis maxime veniam. Natus ratione veniam possimus",
      likes: 12,
      dislikes: 2,
      comments: [
        {
          id: nanoid(),
          commentUsername: "Mehul Verma",
          commentKarma: 12.1,
          commentText:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis hic cumque reprehenderit magni maiores consequatur commodi eaque nostrum asperiores voluptas. Minus aspernatur odio nobis maxime veniam. Natus ratione veniam possimus",
          commentLikes: 12,
          commentDislikes: 2,
        },
        {
          id: nanoid(),
          commentUsername: "Mehul Verma",
          commentKarma: 12.1,
          commentText:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis hic cumque reprehenderit magni maiores consequatur commodi eaque nostrum asperiores voluptas. Minus aspernatur odio nobis maxime veniam. Natus ratione veniam possimus",
          commentLikes: 12,
          commentDislikes: 2,
        },
      ],
    },
    {
      id: nanoid(),
      username: "unkown ",
      karma: 12.1,
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis hic cumque reprehenderit magni maiores consequatur commodi eaque nostrum asperiores voluptas. Minus aspernatur odio nobis maxime veniam. Natus ratione veniam possimus",
      likes: 12,
      dislikes: 2,
      comment: [],
    },
    {
      id: nanoid(),
      username: "Anon",
      karma: 12.1,
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis hic cumque reprehenderit magni maiores consequatur commodi eaque nostrum asperiores voluptas. Minus aspernatur odio nobis maxime veniam. Natus ratione veniam possimus",
      likes: 12.0,
      dislikes: 2.0,
      comments: [
        {
          id: nanoid(),
          commentUsername: "Mehul Verma",
          commentKarma: 12.1,
          commentText:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis hic cumque reprehenderit magni maiores consequatur commodi eaque nostrum asperiores voluptas. Minus aspernatur odio nobis maxime veniam. Natus ratione veniam possimus",
          commentLikes: 12,
          commentDislikes: 2,
        },
        {
          id: nanoid(),
          commentUsername: "Mehul Verma",
          commentKarma: 12.1,
          commentText:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis hic cumque reprehenderit magni maiores consequatur commodi eaque nostrum asperiores voluptas. Minus aspernatur odio nobis maxime veniam. Natus ratione veniam possimus",
          commentLikes: 12,
          commentDislikes: 2,
        },
      ],
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
    setThreads((prevThread) => {
      return prevThread.map((thread) => {
        return thread.id === id
          ? { ...thread, likes: thread.likes + 1 }
          : thread;
      });
    });
    console.log(threads);
  }

  function handleDislike(id) {
    console.log("Clicked!");
    console.log(id);
    setThreads((prevThread) => {
      return prevThread.map((thread) => {
        return thread.id === id
          ? { ...thread, likes: thread.likes - 1 }
          : thread;
      });
    });
    console.log(threads);
  }

  function handleAddThread(text) {
    const newThread = {
      id: nanoid(),
      username: "Anon",
      karma: 12.1,
      text: text,
      likes: 12.0,
      dislikes: 2.0,
    };
    const newThreads = [...threads, newThread];
    setThreads(newThreads);
  }

  // function handleAddComment(text, id) {
  //   const newComment = {
  //     id: nanoid(),
  //     commentUsername: "Mehul Verma",
  //     commentKarma: 12.1,
  //     commentText: text,
  //     commentLikes: 12,
  //     commentDislikes: 2,
  //   };

  //   setThreads((prevThread) => {
  //     return prevThread.map((thread) => {
  //       return thread.id === id ? { ...thread, newComment } : thread;
  //     });
  //   });

  //   // const newComments = [...threads, newComment];
  //   // setThreads(newComments);
  // }

  function handleAddCommentSam(id, text) {
    const newComment = {
      id: nanoid(),
      commentUsername: "Mehul Verma",
      commentKarma: 12.1,
      commentText: text,
      commentLikes: 12,
      commentDislikes: 2,
    };
    const newComments = threads[id].comments.concat(newComment);
    const newThread = { ...threads[id], comments: newComments };
    const newThreads = { ...threads, newThread };
    setThreads(newThreads);
  }

  return (
    <div className="app">
      <Nav />
      {/* <ThreadsList threads={threads} handleLike={handleLike} /> */}
      <div className="thread--list">
        {threads.map((thread) => (
          <div className="thread">
            <Thread
              key={thread.id}
              id={thread.id}
              username={thread.username}
              karma={thread.karma}
              text={thread.text}
              likes={thread.likes}
              dislikes={thread.dislikes}
              handleLike={() => handleLike(thread.id)}
              handleDislike={() => handleDislike(thread.id)}
              comments={thread.comments}
              handleAddComment={handleAddCommentSam()}
            />
          </div>
        ))}
      </div>
      <AddThread handleAddThread={handleAddThread} />
    </div>
  );
}

export default App;
