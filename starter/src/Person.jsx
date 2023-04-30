const Person = ({ name, age, image }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{age}</p>
      <img
        src={image}
        style={{ width: "200px", height: "200px", objectFit: "cover" }}
      />
    </div>
  );
};

export default Person;
