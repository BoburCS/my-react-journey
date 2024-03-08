import styled from "styled-components";
import Color from "../../utilities/Color";

const StyledCard = styled.div`
    padding: 20px;
    border-radius: 16px;
    background-color: ${Color.PrimaryBgColor};
    cursor: pointer;
`;

function Card({content, children, ...rest}) {
    return <StyledCard {...rest}>{content || children}</StyledCard>;
}

export default Card;
