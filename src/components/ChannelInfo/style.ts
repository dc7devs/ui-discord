import styled from 'styled-components';
import { Hashtag } from 'styled-icons/heroicons-outline';

import { Notifications } from '@styled-icons/zondicons';
import { Pushpin } from '@styled-icons/remix-fill';
import { Users } from '@styled-icons/heroicons-solid';
import { Search } from '@styled-icons/boxicons-regular';
import { Inbox } from '@styled-icons/material-sharp';
import { HelpCircle } from '@styled-icons/boxicons-solid';

export const Container = styled.div`
   grid-area: CI;

   display: flex;
   align-items: center;
   justify-content: space-between;

   padding: 0 17px;
   background-color: var(--primary);

   box-shadow: rgba(0, 0, 0, 0.4) 0px 1px 0px 0px;
   z-index: 2;

   > div {
      display: flex;
      align-items: center;
   }
   
`;

export const HashtagIcon = styled(Hashtag)`
   width: 24px;
   height: 24px;

   color: var(--symbol);
`;

export const Title = styled.h1`
   margin-left: 9px;

   font-size: 16px;
   font-weight: bold;

   color: var(--white);
`;

export const Separator = styled.div`
   height: 24px;
   width: 1px;

   background-color: var(--white);
   opacity: 0.2;

   margin: 0 13px;
`;

export const Description = styled.span`
   font-size: 15px;
   color: var(--gray);
`;

export const SilencenotificationIcon = styled(Notifications)`
   width: 22px;
   height: 22px;
   margin-right: 16px;

   color: var(--white);
   opacity: 0.7;
   cursor: pointer;

   transition: opacity 0.2;

   &:hover {
      opacity: 1;
   }
`;

export const MessagefixedIcon = styled(Pushpin)`
   width: 23px;
   height: 23px;
   margin-right: 16px;

   color: var(--white);
   opacity: 0.7;
   cursor: pointer;

   transition: opacity 0.2;

   &:hover {
      opacity: 1;
   }
`;

export const HidemenberlistIcon = styled(Users)`
   width: 23px;
   height: 23px;
   margin-right: 16px;

   color: var(--white);
   opacity: 0.7;
   cursor: pointer;

   transition: opacity 0.2;

   &:hover {
      opacity: 1;
   }
`;

export const SearchBar = styled.div`
   position: relative;
   width: auto;
   height: 22px;
   margin-right: 18px;

   display: flex;
   align-items: center;
   justify-content: flex-end;

   > input {
      width: 146px;
      height: 100%;

      border-radius: 3px;
      background-color: var(--tertiary);
      color: var(--white);
      padding: 7px;
   }
   & input:focus {
      width: 260px;
   }
`;

export const SearchIcon = styled(Search)`
   position: absolute;
   width: 14px;
   height: 14px;
   color: var(--gray);

   margin-right: 4px;
`;

export const InboxIcon = styled(Inbox)`
   width: 23px;
   height: 23px;
   margin-right: 16px;

   color: var(--white);
   opacity: 0.7;
   cursor: pointer;

   transition: opacity 0.2;

   &:hover {
      opacity: 1;
   }
`;

export const HelpIcon = styled(HelpCircle)`
   width: 23px;
   height: 23px;

   color: var(--white);
   opacity: 0.7;
   cursor: pointer;

   transition: opacity 0.2;

   &:hover {
      opacity: 1;
   }
`;
