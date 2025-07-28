import AllRoutes from "./routes/Allroutes"
import { useTheme } from "./context/ThemeContext";
import { useEffect } from "react";

const App = () => {
  const { theme } = useTheme();

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <div>
      <AllRoutes/>
    </div>
  )
}

export default App
