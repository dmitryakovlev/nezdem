import * as React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

import Title from './Title';

type Props = {
  link?: string;
  title?: string;
  className?: string;
  style?: React.CSSProperties | undefined;
  children?: React.ReactNode;
};

const Card = ({ link, title, className, style, children }: Props) => {
  const commonClasses =
    'relative flex h-auto sm:h-80 w-full flex-col overflow-hidden rounded-3xl bg-zinc-200 dark:bg-zinc-950 px-7 py-5 transition duration-300';

  const classes = cn(
    commonClasses,
    link && 'cursor-pointer hover:-translate-y-1',
    className,
  );

  const CardContent = () => (
    <>
      {title && (
        <Title order={2} className="pb-6">
          {title}
        </Title>
      )}
      {children}
    </>
  );

  return link ? (
    <Link href={link} style={style} className={classes}>
      <CardContent />
    </Link>
  ) : (
    <div style={style} className={classes}>
      <CardContent />
    </div>
  );
};

export default Card;
