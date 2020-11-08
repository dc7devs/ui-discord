import React from 'react';

import { Container,
   HashtagIcon,
   Title,
   Separator,
   Description,
   SilencenotificationIcon,
   MessagefixedIcon,
   HidemenberlistIcon,
   SearchBar,
   SearchIcon,
   InboxIcon,
   HelpIcon

 } from './style';

const InfoChannel: React.FC = () => {
   return (
      <Container>
         <div>
            <HashtagIcon />

            <Title>chat-geral</Title>

            <Separator />

            <Description>Canal aberto para conversas</Description>
         </div>

         {/* Inplementações que acho que faltaram */}
         <div>
            <SilencenotificationIcon />
            <MessagefixedIcon />
            <HidemenberlistIcon/>
                          
            <SearchBar>
               <input type="text" placeholder="Buscar"/>
               <SearchIcon />
            </SearchBar>
            <InboxIcon />
            <HelpIcon />
         </div>

      </Container>
   );
};

export default InfoChannel;