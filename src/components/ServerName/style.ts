import styled from 'styled-components';
import { ExpandMore } from 'styled-icons/material';

export const Container = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;

   padding:  12px 16px 12px 17px;
   background-color: var(--secondary);

   box-shadow: rgba(0, 0, 0, 0.4) 0px 1px 0px 0px;
   z-index: 2;
`;

export const Title = styled.h1`
   font-size: 17px;
   font-weight: bold;

   color: var(--white);
`;

export const ExpandIcon = styled(ExpandMore)`
   width: 28px;
   height: 28px;

   color: var(--white);
   cursor: pointer;
`;