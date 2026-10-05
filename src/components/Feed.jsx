import Posts from "../Layouts/Posts";
import Story from "../Layouts/Story";

function Feed() {
  return (
    <div>
      <div className="mb-20">
        <Story />
      </div>
      <Posts />
    </div>
  );
}

export default Feed;
