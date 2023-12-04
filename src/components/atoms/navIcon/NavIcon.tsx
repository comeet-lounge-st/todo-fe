'only server';
import getLink from '@/libs/route/getLink';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export type NavIconProps = {
  src: string;
  label: string;
  alt: string;
  className?: string;
  href: string;
};

const NavIcon = ({ src, label, alt, className = '', href }: NavIconProps) => {
  return (
    // <Link href={getLink(href)}>
    <div className="flex cursor-pointer flex-col items-center justify-center">
      <div className="mb-2 flex-1">
        <Image src={src} alt={alt} className={className} />
      </div>
      <div className="flex-1 text-xs">{label}</div>
    </div>
    // </Link>
  );
};

export default NavIcon;