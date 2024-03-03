import styled from "styled-components";
import ColorConstants from "../components/Color";

const MainLayout = styled.div`
    display: flex;
    align-items: flex-start;
    position: relative;
`;

const SidebarButton = styled.button`
    color: ${ColorConstants.White};
    font-size: 16px;
    font-weight: 700;
    padding: 12px 24px;
    border: none;
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
    background-color: ${ColorConstants.Purple};
    cursor: pointer;
    position: absolute;
    top: 85%;
    left: 0;
`;

const ContentLayout = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export { MainLayout, SidebarButton, ContentLayout };