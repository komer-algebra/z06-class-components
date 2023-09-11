import Paragraph from './paragraph'
import List from './list'

const Main = () =>{
  return (
    <>
      <h1>Z6 - class components</h1>
      <Paragraph ime='Mislav'/>
      <List itemCount={7}/>
    </>
  );
}

export default Main;
