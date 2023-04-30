const Person = ({ name, age, image }) => {
  return (
    <article className='person'>
      <h3>{name}</h3>
      <p>{age}</p>
      <img
        src={image}
        style={{ width: "200px", height: "200px", objectFit: "cover" }}
      />
    </article>
  );
};

export default Person;
