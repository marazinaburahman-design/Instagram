import Feed from "./components/Feed";
import Sidenav from "./components/Sidenav";
import Suggestion from "./components/Suggestion";

function App() {
  return (
    <>
      <div className="flex">
        <div className="w-[20%] e-200 shrink-0"><Sidenav/></div>
        <div className="flex-1"><Feed/></div>
        <div className="w-[30%]  shrink-0"><Suggestion/></div>
      </div>
    </>
  );
}

export default App;
