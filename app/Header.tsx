'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const Header = () => {
  const pathname = usePathname();

  const navigation = [
    {name: 'Works', href: '/works'},
    {name: 'Blogs', href: '/blogs'},
    {name: 'About', href: '/about'},
    {name: 'Contact', href: '/contact'},
  ]

  return (
    <header className='bg-white'>
      <Link href='/'><span className='flex justify-center font-black text-4xl pt-7 text-gray-900'>25000cc</span></Link>
      <div className="text-gray-700 flex justify-center space-x-4 mt-4 pb-7 font-bold">
        {navigation.map((item) => (
          <Link key={item.name} href={item.href} className={
            pathname.startsWith(item.href) ? 'text-sky-600' : 'text-black'
          }><h1 className='text-xl'>{item.name}</h1></Link>
        ))}
      </div>
    </header>
  );
};

export default Header;