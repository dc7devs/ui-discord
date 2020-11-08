import React from 'react';

import Logo from '../../assets/Discord.svg';

import { Button } from './style';

export interface Props {
   selected?: boolean;
   isHome?: boolean;
   hasNotifications?: boolean;
   mentions?: number;
}

const ServerButtom: React.FC<Props> = ({
   selected,
   isHome,
   hasNotifications,
   mentions
}) => {
   return (
      <Button
         isHome={isHome}
         hasNotifications={hasNotifications}
         mentions={mentions}
         className={selected ? 'active' : ''}
      >
         {isHome && <img src={Logo} alt="Discord"/>}
      </Button>
   )
};

export default ServerButtom;