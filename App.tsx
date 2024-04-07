import { useState } from "react";
import Game from "./src/components/Game";
import SplashScreen from "./src/components/SplashScreen";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [type, setTheTpe] = useState<"Carsten" | "Sarah">("Carsten");
  return (
      <>
      { isLoading ? 
          (<SplashScreen onLoaded={ (type) => {
              setIsLoading(false);
              setTheTpe(type);
            } }></SplashScreen>) : 
          (<Game type={type}/>) 
      }
      </>
  ); 
}
