import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser';
import LinkButton from './LinkButton';

function Home() {
  const username = useSelector((state) => state.user.userName);

  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="mb-8 text-xl font-semibold md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      {username === '' ? (
        <CreateUser />
      ) : (
        <>
          <LinkButton to={'/menu'}>Continue ordering, {username}</LinkButton>
        </>
      )}
    </div>
  );
}

export default Home;
