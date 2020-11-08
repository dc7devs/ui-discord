import React from 'react';


import { 
   Container,
   Profile,
   Avatar,
   UserDate,
   Icons,
   MicIcon,
   HeadphoneIcon,
   SettingsIcon } from './style';

export interface Props {
   situation?: boolean;
}
const UserInfo: React.FC = () => {
   return (
      <Container>
         <Profile>
            <Avatar />
            <UserDate>
               <strong>Devs_Onii</strong>
               <span>#7498</span>
            </UserDate>
         </Profile>

         <Icons>
            <MicIcon />
            <HeadphoneIcon />
            <SettingsIcon />
         </Icons>

      </Container>
   );
};

export default UserInfo;