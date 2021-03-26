import React from 'react';
import { styled } from '../stitches.config';

// Styles
export const BackgroundContainer = styled('div', {
    background: 'transparent',
    height: '100vh',
    position: 'fixed',
    width: '100%',
    zIndex: 1,
});
export const ContentContainer = styled('div', {
    background: 'transparent',
    height: 'min(100%, fit-content)',
    position: 'absolute',
    width: '100%',
    zIndex: 5,
});
export const OverlayContainer = styled('div', {
    background: 'transparent',
    height: 'min(100%, fit-to-content)',
    position: 'fixed',
    width: '100%',
    zIndex: 10,
});


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