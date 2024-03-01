import styled from "styled-components";

const MainLayout = styled.div`
    display: flex;
    align-items: flex-start;
    position: relative;
`;

const SidebarButton = styled.button`
    position: absolute;
    top: 85%;
    left: 0;
    transform: translateY(-85%);
`;

const ContentLayout = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export { MainLayout, SidebarButton, ContentLayout };