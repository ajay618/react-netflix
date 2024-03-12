import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import Banner from "./Components/Banner/Banner";
import "./App.css"
import { originals , actions , comdey , horror , romance , documentaries} from "./urls"
import RowPost from "./Components/RowPost/RowPost";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner/>
      <RowPost url ={ originals }  title='NetFlix Originals' />
      <RowPost  url = { actions } title='Action' isSmall/>
      <RowPost  url = { horror } title='Horror' isSmall/>
      <RowPost  url = { romance } title='Romance' isSmall/>
      <RowPost  url = { comdey } title='Comdey' isSmall/>
      <RowPost  url = { documentaries } title='Documentaries' isSmall/>
    </div>
  );
}

export default App;
