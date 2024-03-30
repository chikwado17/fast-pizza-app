import { Link } from 'react-router-dom';

const LinkButton = ({ children, to }) => {
  return (
    <Link
      to={to}
      className="text-sm text-blue-500 hover:text-blue-600 hover:underline"
    >
      {children}
    </Link>
  );
};

export default LinkButton;
