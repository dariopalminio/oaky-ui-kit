
import styled, { useTheme } from "styled-components";

const TableWrapper = styled.div`
    display: block;
    width: 100%;
    grid-template-columns: 1fr 5fr;
    background: #eeeeee;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`;

const LabelRow = styled.div`
    background: #eeeeee;
    width: 20%;
`;

const ValueRow = styled.div`
    background: white;
    width: 80%;
    padding: 2px;
`;

const Row = styled.div`
    display: flex;
`;

interface Props {
    style?: any;
    rowDictionary: Array<{ label: string, value: string }>;
}

/**
 * Paper for container
 * Stateless components, extensible Style and controlled component
 */
const SingleAttrTable: React.FC<Props> = ({ rowDictionary, style }) => {
    const theme: any = useTheme();
//${props => props.theme.color['neutral'].lighter}
    return (
        <TableWrapper>
            {rowDictionary.map((item, index) => {
                if ((index % 2) === 0)
                    return (
                        <Row key={index}> <LabelRow>{item.label}</LabelRow><ValueRow>{item.value}</ValueRow></Row>
                    );
                else
                    return (
                        <Row key={index}>
                            <LabelRow style={{ background: theme.color['neutral'].base }}>
                                {item.label}
                            </LabelRow>
                            <ValueRow style={{ background: theme.color['neutral'].lighter }}>
                                {item.value}
                            </ValueRow>
                        </Row>
                    );
            })}

        </TableWrapper>

    );
};

export default SingleAttrTable;