import React, { useState } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
    `;
const Wrapper = styled.section`
    padding: 2em;
    background-color: papayawhip;
    margin-bottom: 20px;
    position: relative;  
    overflow: hidden;  
    `;
const Button = styled.button`
    color: palevioletred;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    `;
const TomatoButton = styled.button`
    color: tomato;
    border: 2px solid tomato;
    padding: 5px 10px;
    position: absolute;
    top: 0;
    left: -90px;
    bottom: 0;
    transform: rotate(90deg);
    `;
const LinkButton = styled.a`
    background-color: orange;
`;
const Horizontal = styled.hr`
    background: indianred;
    width: 100%;
    height: 5px;
`;
const StyledComponent = () => {
    const [count, setCount] = useState(0);

    const increase = () => {

        setCount(count + 1);
        console.log("count")
    }
    const decrease = () => {
        setCount(count - 1);
    }

    const Link = ({ className, children }) => (
        <a href="#/" className={className}>
            {children}</a>
    );
    const StyledLink = styled(Link)`
    color: orange;
    font-weight: bold;
    `;
    return (
        <div>
            <Wrapper>
                <Title>
                    Hello world
                </Title>
            </Wrapper>
            <Wrapper>
                <Link> unstyled, boring link</Link>
                <StyledLink>Styled, exciting link</StyledLink>
                <p>{count}</p>
                <button onClick={increase}>button</button>
                <Button onclick={increase}>Normal Button</Button>
                <Button onclick={decrease}>Normal Button</Button>
                <TomatoButton >Tomato button</TomatoButton>
                <Horizontal />
                <LinkButton>this is link button</LinkButton>
            </Wrapper>
        </div>
    );
};

export default StyledComponent;