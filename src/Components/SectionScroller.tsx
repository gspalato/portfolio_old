import React, { useState } from 'react';

import PageScroller from 'react-page-scroller';


// Main component
interface ISectionScrollerProps {

};

export const SectionScroller: React.FC<ISectionScrollerProps> = props => {
    const [currentPage, setCurrentPage] = useState(0);

    const handlePageChange = (n: number) => {
        setCurrentPage(n);
    };
    
    const handleBeforePageChange = (n: number) => {
        
    };
    
    /*
    const getPagesNumbers = () => {
        const pageNumbers = [];
    
        for (let i = 1; i <= 5; i++) {
            pageNumbers.push(
                <Pager.Item key={i} eventKey={i - 1} onSelect={handlePageChange}>
                    {i}
                </Pager.Item>,
            );
        }
    
        return [...pageNumbers];
    };
    */

    return (
        <PageScroller
            animationTimer={500}
            customPageNumber={currentPage}
            onBeforePageScroll={handleBeforePageChange}
            pageOnChange={handlePageChange}
        >
            {props.children}
        </PageScroller>
    );
};