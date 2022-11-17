import React, { useState } from "react";
import styled from "styled-components";
import { RiArrowLeftSLine } from "react-icons/ri"; 
import { RiArrowRightSLine } from "react-icons/ri"; 

const PaginationWrapper = styled.div`
    display: flex;
    vertical-align: middle;
    justify-content: center;
    background: transparent;
    border: none;
    a {
        cursor: pointer;
        margin-top: 0px;
        color: black;
        text-decoration: none;
        padding: 5px;
    }
`;

const PaginationInfo = styled.div`
    margin-top: 0px;
    display: flex;
    height: 25px;
    background: linear-gradient(45deg, #EEEEEE 30%, #F9F9F9 90%);
    border: 1px solid #F1F0F0;
    border-radius: 5px;
    p{
        margin-top: 0px;
        line-height: 14px;
        font: 12px "Helvetica Neue", Helvetica, Arial, sans-serif;
        vertical-align: middle;
        padding: 5px;

    }
`;

const PaginationAction = styled.button`
    margin-top: 0px;
    display: flex;
    background: transparent;
    border: none;
    &:hover {
        background: #F7F7F7;
        a {
            color: #FF7B1A;
        }
    }
`;

interface IProps {
    previousLabel?: string;
    nextLabel?: string;
    ofLabel?: string;
    page: number; //current page
    maxPage: number; //total of pages
    onClickPrevious: () => void; //go to previous page
    onClickNext: () => void;//go to next page
    style?: any;
}

/**
 * Pagination
 */
const Pagination: React.FC<IProps> = (props: IProps) => {

    const [isNextHover, setIsNextHover] = useState(false);
    const [isPreviousHover, setIsPreviousHover] = useState(false);

    return (
        <PaginationWrapper style={ props.style ? props.style : {}}>
            {(props.page > 1) &&
                <PaginationAction
                    onClick={() => props.onClickPrevious()}
                    onMouseEnter={() => setIsPreviousHover(true)}
                    onMouseLeave={() => setIsPreviousHover(false)}>
                    <RiArrowLeftSLine size='25' color={isPreviousHover ? '#FF7B1A' : 'black'} />
                    <a id="pegination_previous">
                        {props.previousLabel ? props.previousLabel : ''}</a>
                </PaginationAction>
            }
            <PaginationInfo>
                <p>{props.page}</p><p>{props.ofLabel ? props.ofLabel : 'of'}</p><p>{props.maxPage}</p>
            </PaginationInfo>
            {(props.page < props.maxPage) &&
                <PaginationAction
                    onClick={() => props.onClickNext()}
                    onMouseEnter={() => setIsNextHover(true)}
                    onMouseLeave={() => setIsNextHover(false)}>
                    <a id="pagination_next">{props.nextLabel ? props.nextLabel : ''}
                    </a>
                    <RiArrowRightSLine size='25' color={isNextHover ? '#FF7B1A' : 'black'} />
                </PaginationAction>
            }
        </PaginationWrapper>
    );
};

export default Pagination;