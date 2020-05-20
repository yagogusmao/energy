import React from 'react';
import { Container } from './styles/Style'
const HomePageView = props => {
    const { message } = props;
    return (
        <Container>
            <p>{message}</p>
           
        </Container>
    )
}
export default HomePageView;