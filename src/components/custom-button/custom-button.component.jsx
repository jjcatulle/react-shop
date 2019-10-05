import React from 'react';

import './custom-button.styles.scss';

const CustomButton=({children, isGoogleSignIn, ...otherPros})=>(
    <button className={isGoogleSignIn? ' google-sign-in custom-button': 'custom-button'} {...otherPros}>
        {children}
    </button>
);

export default CustomButton;