import Image from 'next/image';
import React, { JSX } from 'react';

interface TechnologieProps {
  iconPath: string;
  alt: string;
  className?: string;
}

export default function Technologie({ iconPath, alt, className = '' }: TechnologieProps): JSX.Element {
  const defaultClasses = 'relative w-10 h-10 p-2 glass rounded-full flex items-center justify-center';

  return (
    <div className={`${defaultClasses} ${className}`}>
      <div className="relative w-3/4 h-3/4">
        <Image src={iconPath} alt={alt} fill={true} className="object-contain scale-90 rounded-full" />
      </div>
    </div>
  );
}