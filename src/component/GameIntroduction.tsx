import styled from 'styled-components';

const Frame = styled.div`
    height: 190px;
    width: 240px;

    display: flex;
    flex-direction: column;
    row-gap: 4px;
`;

const Cover = styled.img`
    display: block;
    width: 100%;
    height: 112px;
    object-fit: cover;
`;

const Title = styled.div`
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
`;

const DescText = styled.div`
    font-size: 14px;
    line-height: 20px;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`;

const GameIntroduction = () => <Frame>
    <Cover src='/MercuryAbbey.png' />
    <Title>水银疗养院</Title>
    <DescText>被大雾封锁的宅邸，炼金术师和仙子的诅咒重现，危机在黑暗中蔓延。在《水银疗养院》中展开不可思议的故事，和叔侄二人组一起，来一场悬疑小说式的奇异旅程。</DescText>
</Frame>;

export default GameIntroduction;
