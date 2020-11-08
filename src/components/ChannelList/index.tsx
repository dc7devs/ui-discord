import React from 'react';

import ChannelButton from '../ChannelButton';

import { Container, Category, AddCategoryIcon } from './style';

const ChannelList: React.FC = () => {
  return ( <Container>
      <Category>
        <span>Canais de texto</span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName="chat-livre" />
      <ChannelButton channelName="trabalho" />
      <ChannelButton channelName="lolzinho" />
      <ChannelButton channelName="csgo" />
      <ChannelButton channelName="+18" />
    </Container>
  );
};

export default ChannelList;