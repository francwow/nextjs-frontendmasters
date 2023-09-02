'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/docs', label: 'Docs' },
  { href: '/blog', label: 'Blog' },
  { href: '/todos', label: 'Todos' },
];

const Header = () => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <header>
      <nav>
        <ul className="flex justify-center items-center my-2 p-2">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                style={{}}
                className={
                  pathname === link.href
                    ? 'selected h-link p-2 m-3 bg-white text-black rounded-sm font-bold'
                    : 'h-link p-2 m-3 bg-white text-black rounded-sm font-bold'
                }
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
