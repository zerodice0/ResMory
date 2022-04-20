import { ReactNode } from "react";
import styled from "styled-components";

const Flex = styled.div<{ direction: string }>`
  display: flex;
  flex-direction: ${props => props.direction};
  align-items: center;
  justify-content: center;
`;

export const Column = ({ children, ...props }: { children: ReactNode }) => {
  return (
    <Flex direction="column" {...props}>
      {children}
    </Flex>
  );
};

export const Row = ({ children, ...props }: { children: ReactNode }) => {
  return (
    <Flex direction="row" {...props}>
      {children}
    </Flex>
  );
};
