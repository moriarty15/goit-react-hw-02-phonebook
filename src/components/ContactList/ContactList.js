const HandleCreateList = ({ f }) => {
  return (
    <ul>
      {f.map(({ id, name, number }) => {
        return (
          <li key={id}>
            {name}: {number}
          </li>
        );
      })}
    </ul>
  );
};
export default HandleCreateList;
