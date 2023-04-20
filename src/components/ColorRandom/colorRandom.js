import { useState } from "react";

const useColorRandom = () => {

  const [colorRand, setColorRandom] = useState("")
  const setColor = () => {
     (setColorRandom(Math.random().toString(16).slice(-6)))
  }
  console.log(setColor);
  return {colorRand, setColor}

}

export default useColorRandom