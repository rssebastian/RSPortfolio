import React from 'react';

const HeaderBtn = props => {
    return (
        <a href="#" class="btn btn-white">
            {props.children}
        </a>
    );
}

export default HeaderBtn;