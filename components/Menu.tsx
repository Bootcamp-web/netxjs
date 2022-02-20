import React from 'react';
import Link from 'next/link';
import { useCounter } from '../lib/Counter';



const Menu = () => {
  const [{count}]= useCounter();
 
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/projects">Projects</Link>
      </li>
      <li>
        <Link href="/about">About me</Link>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
      <li>
        Current Counter:
          {` `}
          {count}
      </li>
    </ul>
  );
};

export default Menu;