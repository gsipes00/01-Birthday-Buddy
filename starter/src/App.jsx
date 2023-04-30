import { useState } from "react";
import data from "./data";

import List from "./List";

const App = () => {
  const [people, setPeople] = useState(data);

  // clear list function
  const clearList = () => {
    setPeople([]);
  };

  return (
    <>
      <h1>{people.length} Birthdays</h1>
      <List people={people} />
      <button className='btn' onClick={clearList} style={{ margin: "2rem" }}>
        click me
      </button>
      ;
    </>
  );
};
export default App;
