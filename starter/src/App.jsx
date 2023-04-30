import { useState } from "react";
import data from "./data";

const App = () => {
  const [people, setPeople] = useState(data);
  console.log(people);
  return (
    <div>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <div key={id}>
            <h3>{name}</h3>
            <p>{age}</p>
            <img
              src={image}
              style={{ width: "200px", height: "200px", objectFit: "cover" }}
            />
          </div>
        );
      })}
    </div>
  );
};
export default App;
