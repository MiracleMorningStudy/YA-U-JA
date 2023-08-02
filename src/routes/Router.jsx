import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Layout from "../components/common/Layout/Layout";
import Home from "../pages/Home/Home";
import Vote from "../pages/Vote/Vote";
import Memo from "../pages/Memo/Memo";
import Error from "../pages/Error/Error";

const Router = () => {
    const Navigate = useNavigate();git 

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Navigate to="/Home" />} />
                    <Route path="Home" element={<Home />} />
                    <Route path="Vote" element={<Vote />} />
                    <Route path="Memo" element={<Memo />} />
                </Route>

                <Route path="/*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
