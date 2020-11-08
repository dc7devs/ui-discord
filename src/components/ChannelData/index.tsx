import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import {  Container, Messages, InputWrapper, Input} from './style';

const ChannelData: React.FC = () => {
   const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>
   
   useEffect(() => {
      const div = messagesRef.current;

      if (div) {
         div.scrollTop = div.scrollHeight;
      }

   }, [messagesRef]);

   return (
      <Container>
         <Messages ref={messagesRef}>
            <ChannelMessage
               author="NickName"
               date="29/10/2020"
               content="Menssagem aqui"
            />
            <ChannelMessage
               author="NickName"
               date="29/10/2020"
               content="Menssagem aqui"
            />
            <ChannelMessage
               author="NickName"
               date="29/10/2020"
               content="Menssagem aqui"
            />
            <ChannelMessage
               author="NickName"
               date="29/10/2020"
               content="Menssagem aqui"
            />
            <ChannelMessage
               author="NickName"
               date="29/10/2020"
               content="Menssagem aqui"
            />
            <ChannelMessage
               author="NickName"
               date="29/10/2020"
               content="Menssagem aqui"
            />
            <ChannelMessage
               author="NickName"
               date="29/10/2020"
               content="Menssagem aqui"
            />
            <ChannelMessage
               author="NickName"
               date="29/10/2020"
               content="Menssagem aqui"
            />
            <ChannelMessage
               author="NickName"
               date="29/10/2020"
               content="Menssagem aqui"
            />
            <ChannelMessage
               author="NickName"
               date="29/10/2020"
               content="Menssagem aqui"
            />
            <ChannelMessage
               author="NickName"
               date="29/10/2020"
               content="Menssagem aqui"
            />
            <ChannelMessage
               author="NickName"
               date="29/10/2020"
               content="Menssagem aqui"
            />
            <ChannelMessage
               author="NickName"
               date="29/10/2020"
               content="Menssagem aqui"
            />
            <ChannelMessage
               author="NickName"
               date="29/10/2020"
               content="Menssagem aqui"
            />
            <ChannelMessage
               author="Devs_Onii"
               date="29/10/2020"
               content="Alguém para jogar Among Us?"
            />
            <ChannelMessage
               author="NickName"
               date="29/10/2020"
               content="Menssagem aqui"
            />
            <ChannelMessage
               author="NickName"
               date="29/10/2020"
               content="Menssagem aqui"
            />
            

            <ChannelMessage
               author="nicknameUserBot"
               date="29/10/2020"
               content={
                  <>
                     <Mention>@Devs_onii</Mention>, Favor levar a conversa do 'Lol' para o chat #lolzinho
                  </>
               }
               hasMention
               isBot
            />
         </Messages>

         <InputWrapper>
            <Input type="text" placeholder="Conversar em #chat-livre"/>         

            <span />
         </InputWrapper>
      </Container>
   );
};

export default ChannelData;