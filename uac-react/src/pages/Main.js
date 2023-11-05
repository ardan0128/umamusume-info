import { Link } from 'react-router-dom';

function Main() {
  return (
    <>
      <div>Main</div>
      <div>
        <Link to={'/umamusume'}>Umamusumes</Link>
      </div>
    </>
  );
}

export default Main;
