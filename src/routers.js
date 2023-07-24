
import BasePage from "pages/BasePage";
import Inicial from "pages/Inicial";
import Favorites from "pages/Inicial/Favorites";
import Player from "pages/Player";
import Unfound from "pages/Unfound";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BasePage />}>
                    <Route index element={<Inicial />} />
                    <Route path="favorites" element={<Favorites />}/>
                    <Route path=":id" element={<Player />}/>
                    <Route path="*" element={<Unfound />}/>
                </Route>
            </Routes>

        </BrowserRouter>
    )
}

export default AppRoutes;