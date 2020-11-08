import styled from 'styled-components';
import { Mic, Headset, Settings } from 'styled-icons/material';

export const Container = styled.div`
   grid-area: UI;
   
   display: flex;
   align-items: center;
   justify-content: space-between;

   padding: 8px;
   background-color: var(--quaternary);
   box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
`;

export const Profile = styled.div`
   display: flex;
   align-items: center;
`;

export const Avatar = styled.div`
   width: 32px;
   height: 32px;
   border-radius: 50%;

   background-color: var(--gray);
`;

export const UserDate = styled.div`
   margin-left: 8px;

   dispay: flex.
   flex-direction: column;

   > strong {
      color: var(--white);
      font-size: 14px;
      display: block;
   }

   > span {
      color: var(--gray);
      font-size: 13px;
   }
`;

export const Icons = styled.div`
   display: flex;
   align-items: center;

   > svg:not(:first-child) {
      margin-left: 10px;
   }
`;

export const MicIcon = styled(Mic)`
   width: 22px;
   height: 22px;

   color: var(--white);
   opacity: 0.7;
   cursor: pointer;

   transition: opacity 0.2;

   &:hover {
      opacity: 1;
   }
`;

export const HeadphoneIcon = styled(Headset)`
   width: 22px;
   height: 22px;

   color: var(--white);
   opacity: 0.7;
   cursor: pointer;

   transition: opacity 0.2;

   &:hover {
      opacity: 1;
   }
`;

export const SettingsIcon = styled(Settings)`
   width: 22px;
   height: 22px;

   color: var(--white);
   opacity: 0.7;
   cursor: pointer;

   transition: opacity 0.2;

   &:hover {
      opacity: 1;
   }
`;
