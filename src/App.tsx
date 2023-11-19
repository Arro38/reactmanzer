import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import MyProfilePage from "./pages/user/MyProfilePage";
import MyMealsPage from "./pages/user/MyMealsPage";
function App() {
  return (
    <BrowserRouter>
      <div className=" flex flex-col h-screen justify-between">
        <Header />
        <div className="mb-auto px-4 py-6 lg:px-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="profile" element={<MyProfilePage />} />
            <Route path="meals" element={<MyMealsPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
