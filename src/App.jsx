import SideBar from "./components/SideBar.jsx";
import Db from "./components/Db.jsx";
import Header from "./components/Header.jsx";

const App = () => {

  const data = Db()
  return (
    <div className="app-container" >
     <Header />
      <SideBar data={data}/>
    </div>
  );
};

export default App;