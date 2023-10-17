import SideBar from "./components/SideBar.jsx";
import Db from "./components/Db.jsx";
import Header from "./components/Header.jsx";
import {useState} from "react"
import Filterd from "./components/tools/Filterd.jsx";

const App = () => {
   const [isChecked,setIsChecked] = useState(false)

  const data = Db()
  return (
    <div className="app-container" >
     <Header />
     <Filterd isChecked={isChecked} setIsChecked={setIsChecked} />
      <SideBar isChecked={isChecked} data={data}/>
    </div>
  );
};

export default App;