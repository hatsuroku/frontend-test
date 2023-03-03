import styled from 'styled-components';
import GameDescItem from './component/GameDescItem';

const Frame = styled.div`
    margin: 48px;
    height: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 24px;
`;

const MainFrame = () => <Frame>
    <GameDescItem></GameDescItem>
    <GameDescItem></GameDescItem>
    <GameDescItem></GameDescItem>
    <GameDescItem></GameDescItem>
</Frame>

export default MainFrame;