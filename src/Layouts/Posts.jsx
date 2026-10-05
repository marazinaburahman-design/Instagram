import { useEffect, useState } from "react";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState("Loading....");

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPosts(data);
        setLoading("");
      })
      .catch((err)=>{
        console.log("error occuired....");
      })
  }, []);

  if(loading){
    return <h1>Loading....</h1>
  }

  return (
    <div className="flex flex-col gap-y-10 mt-10 items-center">
      {posts.map((post) => {
        return (
          <div key={post.id}>
                <h2 className="font-bold">😃Abdullah</h2>
                <img src={post.image} className="w-[400px] h-[200px]" alt="" />
                🤍✔👏
                <h5>{post.caption}</h5>
                <p className="text-xs font-medium text-gray-400">{post.likes}  Likes</p>
                <p className="text-xs font-medium text-gray-400">{post.comments}  comments</p>
          </div>
        );
      })}
    </div>
  );
}

export default Posts;
