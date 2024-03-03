import styled from "styled-components";
import Flex from "../Flex";

const SidebarContainer = styled.aside`
    color: #fff;
    width: ${({ visibility }) => visibility ? "300px" : "0"};
    height: 100vh;
    background-color: #0f172a;
    border-right: ${({ visibility }) => visibility ? "1px solid #020617" : "0"};
    overflow: hidden;
`;

function Sidebar(props) {
	return (
        <SidebarContainer visibility={props.visibility}>
            <Flex padding={"20px 50px"} align={"center"} justify={"space-between"}>
                <div>
                    <h1>KANBAN</h1>
                </div>
            </Flex>
            <Flex>
                <div><h5>ALL BOARDS</h5></div>

            </Flex>
        </SidebarContainer>
    );
}

export default Sidebar;
