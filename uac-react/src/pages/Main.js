import { Link } from 'react-router-dom';

function Main() {
  return (
    <>
      <div className="w-full flex items-center">
        <div>Main</div>
        <div>
          <Link to={'/umamusume'}>Umamusumes</Link>
        </div>
      </div>
    </>
  );
}

export default Main;
