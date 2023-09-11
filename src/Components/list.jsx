import generateName from 'sillyname';

const List = (props) => {
  const items = [];
  for (let i = 0; i < props.itemCount; i++) items.push(<li key=""> {generateName()} </li>);
  return (
    <ol>
      {items}
    </ol>
  )
}

export default List;
