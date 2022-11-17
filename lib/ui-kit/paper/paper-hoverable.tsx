import styled from "styled-components";


const FrameHoverable = styled.div`
  width: 100%;
  padding: 1rem;
  background: #fff;
  cursor: pointer;
  margin: 4px 4px 4px 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius:3px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
  &:hover {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
  @media (max-width: 1232px) {
      width: 360px;
  }
  @media (max-width: 1115px) {
      width: 330px;
  }
  @media (max-width: 1028px) {
      width: 300px;
  }
  @media (max-width: 950px) {
      width: 400px;
  }
  @media (max-width: 830px) {
      width: 330px;
  }
  @media (max-width: 700px) {
      width: 290px;
  }
  @media (max-width: 630px) {
      width: 90%;
  }
  @media (max-width: 500px) {
      width: 90%;
  }
  @media (max-width: 400px) {
      width: 100%;
  }
`;


interface IProps {
    children: React.ReactNode;
    width: string;
    style?: any;
}

/**
 * Paper Hoverable is a frame that highlights when the mouse hovers over it
 */
const PaperHoverable: React.FC<IProps> = (props: IProps) => {


    return (
        <FrameHoverable style={props.style ? {...props.style, width: props.width} : {width: props.width}}>
            {props.children}
        </FrameHoverable>
    );
};

export default PaperHoverable;