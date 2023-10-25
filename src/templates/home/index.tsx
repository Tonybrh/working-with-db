import NavBar from 'src/components/navBar';
import * as H from './style';
import gamerRoom1 from 'public/images/gamerRoom1.jpeg';
import gamerRoom2 from 'public/images/gamerRoom2.jpeg';

const HomePage: React.FC = () => {
    return (
        <H.Container>
            <NavBar />
            <H.HomeImage>
                <H.Slogan>Elevando Seu Jogo, Equipando Sua Vitória.</H.Slogan>
            </H.HomeImage>
            <H.LayoutGrid>
                <H.GridItem>
                    <H.ItemImage src={gamerRoom1} alt="" />
                    Quarto gamer muito top Preço: R$50.00
                </H.GridItem>
                <H.GridItem>
                    <H.ItemImage src={gamerRoom2} alt="" />
                </H.GridItem>
            </H.LayoutGrid>
        </H.Container>
    );
};

export default HomePage;
