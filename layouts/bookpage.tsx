import React from 'react';

const Bookpage = React.forwardRef((props, ref) => {
    return (
        <div className="demoPage" ref={ref}>
            /* ref required */
            <p>{props.children}</p>
            <p>Page number: {props.number}</p>
        </div>
    );
});