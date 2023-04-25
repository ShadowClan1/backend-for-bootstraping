import { useSelector } from "react-redux";
import Tile from "./components/Tile";
import PopUp from "./components/PopUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Success from "./components/Success";
import Failed from "./components/Failed";

function App() {

const popUp = useSelector(state=>state.popup)


  return (
<BrowserRouter>
    <>

<div className="w-screen h-screen bg-slate-300 relative">
{popUp.visible && <PopUp/>}
<Routes>
<Route path="/" element={<Home/>} />
<Route path='/success' element={<Success/>}/>
<Route path='/failed' element={<Failed/>}/>






</Routes>
</div>

    </>
 </BrowserRouter>
  );
}

export default App;
