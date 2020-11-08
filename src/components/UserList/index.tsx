import React from 'react';

import { Container, Role, User, Avatar } from './style';

interface UserProps {
   nickname: string;
   isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
   return (
      <User>
         <Avatar className={isBot ? 'bot' : ''}/>

         <strong>{ nickname }</strong>

         {isBot && <span>Bot</span>}
      </User>
   );
}

const UserList: React.FC = () => {
   return (
      <Container>
         <Role>Disponivel - 1</Role>
         <UserRow nickname="Devs_Onii"/>

         
         <Role>offline - 20</Role>
         <UserRow nickname="nicknameUserBot" isBot/>

         <UserRow nickname="nickName"/>
         <UserRow nickname="nickName"/>
         <UserRow nickname="nickName"/>
         <UserRow nickname="nickName"/>
         <UserRow nickname="nickName"/>
         <UserRow nickname="nickName"/>
         <UserRow nickname="nickName"/>
         <UserRow nickname="nickName"/>
         <UserRow nickname="nickName"/>
         <UserRow nickname="nickName"/>
         <UserRow nickname="nickName"/>
         <UserRow nickname="nickName"/>
         <UserRow nickname="nickName"/>
         <UserRow nickname="nickName"/>
         <UserRow nickname="nickName"/>
         <UserRow nickname="nickName"/>
         <UserRow nickname="nickName"/>
         <UserRow nickname="nickName"/>
         <UserRow nickname="nickName"/>
         <UserRow nickname="nickName"/>
         <UserRow nickname="nickName"/>
         <UserRow nickname="nickName"/>
         <UserRow nickname="nickName"/>
         <UserRow nickname="nickName"/>
         <UserRow nickname="nickName"/>
         <UserRow nickname="nickName"/>
         <UserRow nickname="nickName"/>
         <UserRow nickname="nickName"/>

      </Container>
   );
};

export default UserList;