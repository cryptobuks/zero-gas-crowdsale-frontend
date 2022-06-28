import { useCallback } from 'react';
import cn from 'clsx';

import { CrossIcon } from '@/assets/img';
import { Button, Typography } from '@/components';
import { anchorLinks } from '@/router';

import s from './styles.module.scss';

interface LinkItemProps {
  to: string;
  label: string;
}

export const LinkItem = ({ to, label }: LinkItemProps) => {
  return (
    <Button className={s.linkWrapper} to={to} variant="text">
      <Typography weight={900} type="body2" fontFamily="DrukCyr Wide" className={s.linkLabel}>
        {label}
      </Typography>
    </Button>
  );
};

interface LinksListProps {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
}

export const LinksList = ({ isOpen, setIsOpen }: LinksListProps) => {
  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  return (
    <section className={cn(s.listWrapper, { [s.open]: isOpen })}>
      <div className={s.listContent}>
        <div className={s.listClose}>
          <Button onClick={handleClose} variant="text">
            <CrossIcon />
          </Button>
        </div>
        <div className={s.listLinks}>
          {anchorLinks.map((link) => (
            <LinkItem key={link.to} {...link} />
          ))}
        </div>
      </div>
    </section>
  );
};
