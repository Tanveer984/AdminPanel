import { useContext} from "react";
import AllRoutes from "./Pages/AllRoutes";
import './theme/dark.scss'
import { ThemeContext } from "./theme/Theme";


function App() {
  const {darkMode} = useContext(ThemeContext)
  
  return (
    <div className={darkMode?'app dark':"app"}>
      <AllRoutes/>
    </div>
  );
}

export default App;
