import styled, {css} from 'styled-components';

const headerBlockLastChild = css`
    &:last-child {
        width: 8%;
    }
`;
  
export const HeaderBlockStyles = styled.div`
    text-transform: capitalize;
    width: 23%;
    ${headerBlockLastChild} 
`;

export const CheckoutPageContainer = styled.div`
    width: 55%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 0;
`;

export const CheckoutHeader = styled.div`
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;
`;

export const TotalStyles = styled.div`
    margin-top: 30px;
    margin-left: auto;
    font-size: 36px;
`;

export const StripeButton = styled.div`
    margin-left: auto;
    margin-top: 50px;
`;

const checkActiveAsSoon = props => {
    if(props.isActive) {
        return 'green';
    }

    return 'salmon';
}

export const TextWarning = styled.div`
    color: ${checkActiveAsSoon};
    font-size: 18px;
    font-weight: 800;
`;