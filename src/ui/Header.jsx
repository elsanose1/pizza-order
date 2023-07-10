import { Link } from 'react-router-dom';
import SerachOrder from '../features/order/SerachOrder';
import Username from '../features/user/Username';

const Header = () => {
  return (
    <header className=" flex items-center justify-between border-b border-stone-200 bg-yellow-400 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className=" tracking-widest">
        Fast React Pizza Co.
      </Link>
      <SerachOrder />
      <Username />
    </header>
  );
};

export default Header;
