import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex justify-center space-x-4">
      <h1><Link href="/works">Works</Link></h1>
      <h1><Link href="/blogs">Blogs</Link></h1>
      <h1><Link href="/about">About</Link></h1>
      <h1><Link href="/contact">Contact</Link></h1>
    </header>
  );
};

export default Header;