import { useState } from "react";
import data from "./data";
import Person from "./Person";

const App = () => {
  const [people, setPeople] = useState(data);

  return <Person people={people} />;
};
export default App;
