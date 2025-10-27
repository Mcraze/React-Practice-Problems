import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./site_specific/Header";
import Footer from "./site_specific/Footer";
import MainSection from "./site_specific/MainSection";
import { problemsList } from "./problems";

const App = () => {
    return (
        <Router>
            <Header />
            <main className="grow p-4 flex flex-col">
                <div className="max-w-7xl w-full m-auto">
                    <Routes>
                        <Route path="/" element={<MainSection />} />
                        {problemsList.map((problem) => (
                            <Route key={problem.id} path={problem.path} element={<problem.component />} />
                        ))}
                    </Routes>
                </div>
            </main>
            <Footer />
        </Router>
    );
};

export default App;