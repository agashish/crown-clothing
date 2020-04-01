import React from 'react';

import {SpinnerContainer, SpinnerOverlay} from './with-spinner.styles';

// #### OPTION-1
const WithSpinner = WrappedComponent => {
    const Spinner = ({isLoading, ...otherProps}) => {                                                                                                                                                                   
        return isLoading ? (
            <SpinnerOverlay> 
                <SpinnerContainer />
            </SpinnerOverlay>
        )
        : <WrappedComponent {...otherProps} />;    
    }
return Spinner;    
}

const WithSpinnerNext = WrappedComponent => ({isLoading, ...otherProps}) => {
    return isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
    ) : 
    <WrappedComponent {...otherProps} />    
}

export default WithSpinner;