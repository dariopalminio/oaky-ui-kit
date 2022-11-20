import styled from "styled-components";
import { IColHeader } from "./types";

const TableContainer = styled.div`

    background-color: white;
    width: 100%;

    .table_row {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    }
    
    .table_row:hover {
        background-color: ${props => props.theme.color['hover'].lighter};
    }
    
    .table_row:nth-child(even) {
        background-color: ${props => props.theme.color['neutral'].lighter};
    }
    
    .table_row:nth-child(even):hover {
        background-color: ${props => props.theme.color['hover'].lighter};
    }
    
    .table_header .table_row {
        padding: 10px;
        background-color: ${props => props.theme.color['secondary'].darkened}
    }
    
    .table_header .table_row div {
        display: flex;
        justify-content: center;
        font-weight: 600;
        color: white;
    }
    
    .table_body .table_row {
        padding: 10px;
        cursor: pointer;
    }
    
    .table_body .table_row div {
        display: flex;
        justify-content: center;
    }
`;

interface IProps {
    headers: IColHeader[];
    rows: any; //object where each 'Key' name is same to headers 'prop' value indicated by IColHeader
    onClick?: (row: any) => void;
}

/**
 * TableGridSelector
 * 
 * - The order of the columns depends on the headers array input. 
 * - The title of the columns is given by the 'label' property in each item of headers array. 
 * - The rows are selectable with the onClick method and return the selected row object.
 * 
 * @param props 
 * @returns 
 */
const TableGridSelectable: React.FC<IProps> = (props: IProps) => {

    const selectItem = (row: any) => {
        props.onClick && props.onClick(row);
    }

    const getHeaderCellElements = (): React.ReactNode => {
        return props.headers?.map((element: IColHeader, index: number) => {
            return (
                <div key={index}>
                    {element.label}
                </div>
            )
        })
    }

    const getRowCellElements = (row: any): React.ReactNode => {
        return props.headers.map(
            (element: IColHeader, index: number) => {
                return (
                    <div key={index}>
                        {row[element.prop]}
                    </div>
                )
            }
        )
    }

    return (
        <TableContainer>
            <div className="table_header">
                <div className="table_row">
                    {
                        getHeaderCellElements()
                    }
                </div>
            </div>
            <div className="table_body">
                {
                    props.rows?.map(
                        (row: any, index: number) => {
                            return (
                                <div
                                    key={index}
                                    className="table_row"
                                    onClick={() => selectItem(row)}>
                                    {
                                        getRowCellElements(row)
                                    }
                                </div>
                            )
                        }
                    )

                }
            </div>
        </TableContainer>
    );
};

export default TableGridSelectable;
