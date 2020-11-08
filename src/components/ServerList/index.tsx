import React from 'react';

import ServerButton from '../ServerButton';

import { Container, Separator } from './style';

const ServerList: React.FC = () => {
   return (
      <Container>
         <ServerButton isHome />

         <Separator />

         <ServerButton hasNotifications />
         <ServerButton mentions={3} />
         <ServerButton />
         <ServerButton />
         <ServerButton hasNotifications mentions={53}/>
         <ServerButton />
         <ServerButton mentions={73}/>
         <ServerButton />
         <ServerButton />
         <ServerButton />
         <ServerButton />
         <ServerButton />
         <ServerButton />
         <ServerButton />
         <ServerButton />
         <ServerButton />
         
         <ServerButton />{/*Especial */}
         <ServerButton />{/*Especial */}

         <Separator />

         <ServerButton />{/*Especial */}

      </Container>
   )
};
export default ServerList;