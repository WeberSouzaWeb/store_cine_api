import Baseboard from "components/Baseboard";
import Container from "components/Container";
import Header from "components/Header";
import FavoritesProvider from "context/Favorites";
import { Outlet } from "react-router-dom";

function BasePage() {
    return (
        <main>
            <Header />
            <FavoritesProvider>
                <Container>
                    <Outlet />
                </Container>
            </FavoritesProvider>
            <Baseboard />
        </main>
    )
}

export default BasePage;