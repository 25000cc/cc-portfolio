'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const Header = () => {
  const pathname = usePathname();

  const navigation = [
    { name: 'Works', href: '/' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  const getColor = (name: string, href: string) => {
    const blue = 'text-sky-600 underline'
    const black = 'text-black'
    if (name == 'Works') {
      let worksFlag = true
      for (let i = 1; i < navigation.length; i++) {
        if (pathname.startsWith(navigation[i].href)) {
          worksFlag = false
        }
      }
      if (worksFlag) {
        return blue
      } else {
        return black
      }
    } else {
      if (pathname.startsWith(href)) {
        return blue
      } else {
        return black
      }
    }
  }

  return (
    <header className='bg-white'>
      <span className='text-gray-900 flex justify-center font-black text-3xl pt-3 lg:mt-4'><Link href='/'>25000cc</Link></span>
      <div className="text-gray-700 flex justify-center space-x-4 mt-4 pb-6 lg:pb-5 font-bold">
        {navigation.map((item) => (
          <Link key={item.name} href={item.href} className={
            getColor(item.name, item.href)
          }><h1 className='text-lg hover:text-sky-600'>{item.name}</h1></Link>
        ))}
      </div>
    </header>
  );
};

export default Header;