import React from "react";
import styled from "styled-components";

const CircularIconButton = styled.button`
    background-color: transparent;
    border: none;
    border-radius: 50%;
    color: ${props => props.theme.color['dark'].base};
    width: 34px;
    height: 34px;
    padding-top: 4px;
    padding-left: 5px;
    font-size: 16px;
    cursor: pointer;
    &:hover {
        background-color: #BFE0FC;
        -webkit-transition: all 1s ease;
        -moz-transition: all 1s ease;
        -o-transition: all 1s ease;
        -ms-transition: all 1s ease;
        transition: all 1s ease;
    }
`;

interface Props {
    children: React.ReactNode;
    onClick: (event: React.MouseEvent<HTMLElement>) => void;
    hide?: boolean;
    style?: any;
}

/**
 *       {!isSuccess && (
        <LoginForm onSubmit={(email: string, password: string) => handleLoginSubmit(email, password)}
          style={{ width: "300px", margin: "34px auto auto auto" }} />
      )}
 * Customized IconButton
 * Stateless components and controlled component
 */
const IconButton: React.FC<Props> = ({ children, onClick, hide, style }) => {

    const shows = (): boolean => {
        return hide? false : true;
    }

    return (<>
        {shows() && (
            <CircularIconButton
                onClick={(e) => onClick(e)}
                {...(style &&
                    (style = { style })
                )}
            >
                {children}
            </CircularIconButton>
        )}
    </>
    );
};

export default IconButton;