import WordleContext from "../contexts/WordleContext";
import { useContext } from "react";

const useWordle = () => {
  return useContext(WordleContext);
};

export default useWordle;