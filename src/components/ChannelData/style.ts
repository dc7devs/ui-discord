import styled from 'styled-components';

export const Container =  styled.div`
   grid-area: CD;

   display: flex;
   flex-direction: column;
   justify-content: space-between;

   background-color: var(--primary);
   
`;

export const Messages =  styled.div`
   padding: 20px 0;

   display: flex;
   flex-direction: column;

   max-height: calc(100vh - 114px);//(100vh - 46px - 68px)
   overflow-y: scroll;

   ::-webkit-scrollbar {
      width: 4px;
   }
   ::-webkit-scrollbar-thumb {
      background-color: var(--tertiary);
      border-radius: 4px;
   }
   ::-webkit-scrollbar-track {
      background-color: var(--secondary);
   }
`;

export const InputWrapper = styled.div`
  width: 100%;

  padding: 0 16px;
   
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

   > span {
      width: 24px;
      height: 24px;
    }
`;

export const Input =  styled.input`
  width: 100%;
  height: 44px;

  padding: 0 10px 0 10px;
  border-radius: 7px;

  color: var(--white);
  background-color: var(--chat-input);
  font-size: 16px;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  &::placeholder {
     font-size: 16px;
     color: var(--gray);
  }
`;