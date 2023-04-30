import { useState } from "react";
import data from "./data";
import Person from "./Person";

const App = () => {
  const [people, setPeople] = useState(data);

  // clear list function
  const clearList = () => {
    setPeople([]);
  };

  return (
    <>
      <Person people={people} />
      <button className='btn' onClick={clearList} style={{ margin: "2rem" }}>
        click me
      </button>
      ;
    </>
  );
};
export default App;
