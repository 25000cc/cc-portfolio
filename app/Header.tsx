import Link from 'next/link';
import { inter } from './fonts'

const Header = () => {
  return (
    <header className={`${inter.className} bg-white`}>
      <Link href='/'><span className='flex justify-center font-black text-4xl pt-7 text-gray-900'>25000cc</span></Link>
      <div className="flex justify-center space-x-4 mt-4 pb-7 font-bold text-gray-700">
        <h1><Link href="/works">Works</Link></h1>
        <h1><Link href="/blogs">Blogs</Link></h1>
        <h1><Link href="/about">About</Link></h1>
        <h1><Link href="/contact">Contact</Link></h1>
      </div>
    </header>
  );
};

export default Header;