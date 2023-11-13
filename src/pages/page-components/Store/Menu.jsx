import {Container, MenuTitle, MenuItem, Bar, MenuDetail} from "../../style-components/Store/Store-Menu";

const StoreMenu = () => {
    return (
        <Container>
            <MenuTitle>메뉴</MenuTitle>
            <Bar/>
            <MenuItem>
                <MenuDetail>다락 오므라이스</MenuDetail>
                <MenuDetail>15,000</MenuDetail>
            </MenuItem>
            <Bar/>
            <MenuItem>
                <MenuDetail>매콤 크림파스타</MenuDetail>
                <MenuDetail>17,000</MenuDetail>
            </MenuItem>
            <Bar/>
            <MenuItem>
                <MenuDetail>가츠산도</MenuDetail>
                <MenuDetail>12,000</MenuDetail>
            </MenuItem>
            <Bar/>
            <MenuItem>
                <MenuDetail>게살 매콤리조또</MenuDetail>
                <MenuDetail>17,000</MenuDetail>
            </MenuItem>
            <Bar/>
        </Container>
    );
};

export default StoreMenu;