import React, { ReactNode } from "react";
import styled from "styled-components";


export const LiSelectOption = styled.li`
  background-color: #ffffff;
  padding: 6px 20px;
  border-bottom: 1px solid #e4e4e4;
  cursor: pointer;
  list-style-type: none;
  &:hover {
    color: ${props => props.theme.color['text'].darkened};
    background: ${props => props.theme.color['hover'].lighter};
  }
`;

const Opts: React.FC<{
  children: ReactNode | ReactNode[];
  value: string;
  changeSelectedOption: (valueSelected: string) => void;
}> = ({ children, value, changeSelectedOption }) => {

  return (
    <LiSelectOption onClick={() => changeSelectedOption(value)}>
      {children}
    </LiSelectOption>
  );
};

export default Opts;