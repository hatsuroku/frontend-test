import styled from 'styled-components';
import Badge from '../widget/Badge';

const Cover = styled.img`
    width: 362px;
    height: 170px;
    object-fit: cover;
`;

const Frame = styled.div`
    display: flex;
    column-gap: 10px;
    height: 170px;
    overflow: hidden;
`;

const Desc = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 6px;
`

const Title = styled.div`
    font-size: 24px;
    font-weight: 700;
`;

const InfoList = styled.div`
    color: #718096;
    display: flex;
    column-gap: 15px;
    font-size: 14px;
`;

const VerticalCenterText = styled.div`
    display: flex;
    align-items: center;
`;

const LikeFrame = styled.div`
    cursor: pointer;
    border: 1px solid #E2E8F0;
    border-radius: 6px;
    font-weight: 600;
    font-size: 12px;
    padding: 3px 6px;
`;

const BadgeList = styled.div`
    display: flex;
    column-gap: 8px;
    justify-content: start;
`;

const DescText = styled.div`
    font-size: 16px;
    line-height: 24px;
    text-overflow: ellipsis;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
`;

const GameDescItem = () => <Frame>
    <Cover src='/gamecover.png' />
    <Desc>
        <Title>形骸骑士</Title>
        <InfoList>
            <VerticalCenterText>情报更新日：2022/06/15 04:15</VerticalCenterText>
            <VerticalCenterText>🔥 578</VerticalCenterText>
            <LikeFrame>❤ 123</LikeFrame>
        </InfoList>
        <BadgeList>
            <Badge>type:action</Badge>
            <Badge>type:adventure</Badge>
            <Badge>type:roguelike</Badge>
            <Badge>species:tiger</Badge>
            <Badge>species:wolf</Badge>
        </BadgeList>
        <DescText>
            神秘的瘟疫，突然降临在古老的塞勒菲斯，当白虎双子深陷其中，他们将如何选择？平台动作Roguelite游戏《Kelipot》到来！丰富的剧情、逐帧绘制的动画以及手绘2D风格的场景，探寻其中并找到疯狂世界之下阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴
        </DescText>
    </Desc>
    
</Frame>;

export default GameDescItem;