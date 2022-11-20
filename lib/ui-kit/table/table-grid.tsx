import styled from "styled-components";
import { IColHeader } from "./types";

interface ITableGridProps {
    readonly length: string;
    readonly gridTemplateRows: string; //repeat(3, 1fr)
};

const TableGridContainer = styled.div<ITableGridProps>`

width: 100%;

.container{
    background-color: #fff;
    border: 1px solid #eee;
    color: #222;
    display: grid;
    font-size: 14px;
    grid-gap: 0;
    grid-template-columns: 100px 1fr;
    grid-template-rows: auto;
    margin: 10px auto;
    width: 100%;
  
    li{
        list-style: none;
    }
  }
  
  .table-body{
    background: white;
    display: grid;
    grid-template-columns: repeat(${props => props.length}, 1fr);
    overflow-x: scroll;
    width: calc(100vw - 100px);
  }
  
  .table-row{
    display: grid;
    grid-template-rows:${props => props.gridTemplateRows};
    grid-gap: 0;
  
    &-title{
        background-color: ${props => props.theme.color['secondary'].darkened};
        color: #fff;
        font-size: .85em;
        font-weight: 800;
  
        .item-cell{
            height: 40px;
            padding: 4px 8px;
        }
    }
  
    &:nth-child(2n){
        background-color: ${props => props.theme.color['neutral'].lighter};
    }
  }
  
  .item-cell {
    align-items: center;
    border: 1px solid #eee;
    display: flex;
    padding: 8px;
  }
  
  @media screen and (min-width: 760px){
    .container{
        grid-template-columns: auto;
        grid-template-rows: 40px auto;
    }
    
    .table-body{
        grid-template-columns: auto;
        overflow: visible;
        width: 100%;
    }
    
    .table-row{
        &-title{
        .item-cell{
        height: 30px;
        }
        }
    }
  
    .table-row{
        grid-template-columns: ${props => props.gridTemplateRows};
        grid-template-rows: auto;
    }
  
    .item-cell{
  
    &:nth-child(1){
        justify-content: center;
    }
  
    &:nth-child(5), &:nth-child(n+7){
        justify-content: flex-end;
    }
    }
  }
`;

interface IProps {
    headers: IColHeader[];
    rows: any; //object where each 'Key' name is same to headers 'prop' value indicated by IColHeader
    frames?: string;
}

/**
 * TableGrid
 * 
 * - The order of the columns depends on the headers array input. 
 * - The title of the columns is given by the 'label' property in each item of headers array. 
 * - frames: is optative and one example is '1fr 1fr 2fr 1fr'.
 * 
 */
const TableGrid: React.FC<IProps> = (props: IProps) => {



    const getHeaderCellElements = (): React.ReactNode => {
        return props.headers?.map((element: IColHeader, index: number) => {
            return (
                <li className="item-cell" key={index}>
                    {element.label}
                </li>
            )
        })
    }

    const getRowCellElements = (row: any): React.ReactNode => {
        return props.headers.map(
            (element: IColHeader, index: number) => {
                return (
                    <li className="item-cell" key={index}>
                        {row[element.prop]}
                    </li>
                )
            }
        )
    }

    const getGridTemplateRows = () => {
        if (props.frames) return props.frames;
        return `repeat(${props.headers.length}, 1fr)`;
    }

    return (
        <TableGridContainer
            length={props.rows.length}
            gridTemplateRows={getGridTemplateRows()}>
            <div className="container">
                <div className="table-head">
                    <div className="table-row table-row-title">
                        {
                            getHeaderCellElements()
                        }
                    </div>
                </div>

                <div className="table-body">
                    {
                        props.rows?.map(
                            (row: any, index: number) => {
                                return (
                                    <div
                                        key={index}
                                        className="table-row">
                                        {
                                            getRowCellElements(row)
                                        }
                                    </div>
                                )
                            }
                        )
                    }
                </div>
            </div>
        </TableGridContainer>
    );
};

export default TableGrid;