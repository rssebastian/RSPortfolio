import React from 'react';

const HeaderBtn = props => {
    return (
        <a href="#" className="btn btn-white btn-animated">
            {props.children}
        </a>
    );
}

export default HeaderBtn;