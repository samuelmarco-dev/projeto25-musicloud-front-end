import { Container, Header, Content, WallpaperImage } from "./styled";

function Home() {
    return (
        <Container>
            <Header>
                <h1>Musicloud</h1>
            </Header>
            <Content>
                <div>
                    <p>Escutar muda vidas, muda o mundo, muda tudo</p>
                    <button type="submit">Comece por aqui</button>
                </div>
                <WallpaperImage />
            </Content>
        </Container>
    );
}

export default Home;
