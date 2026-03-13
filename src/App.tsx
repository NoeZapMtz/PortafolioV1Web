import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutComp from "./Components/LayoutComp/LayoutComp.tsx";
import { ExperiencePage } from "./Pages/ExperiencePage/ExperiencePage.tsx";

function App() {
    return (
        <BrowserRouter>

            <Routes>

                <Route path="/" element={<LayoutComp />}>

                    <Route index element={<ExperiencePage />} />

                </Route>

            </Routes>

        </BrowserRouter>
    );
}

export default App;