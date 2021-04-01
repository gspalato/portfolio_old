import React from 'react';
import styled from 'styled-components';

// Styles
export const BackgroundContainer = styled.div`
    background: transparent;
    height: 100vh;
    position: fixed;
    width: 100%;
    z-index: 0;
`;
export const ContentContainer = styled.div`
    background: transparent;
    height: min(100%, fit-content);
    position: absolute;
    width: 100%;
    z-index: 5,
`;
export const OverlayContainer = styled.div`
    background: transparent;
    height: min(100%, fit-content);
    position: fixed;
    width: 100%;
    z-index: 10,
`;


// Component
interface IPageProps {

};

export const Page: React.FC<IPageProps> = props => (
    <React.Fragment>
        <BackgroundContainer>
            
        </BackgroundContainer>
        <ContentContainer>
            {props.children}
        </ContentContainer>
        <OverlayContainer>
            
        </OverlayContainer>
    </React.Fragment>
);