import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import MyProfilePage from "./pages/user/MyProfilePage";
import MyMealsPage from "./pages/user/MyMealsPage";
import MealFormPage from "./pages/user/MealFormPage";

import { useSelector } from "react-redux";
import { RootState, store } from "./redux/store";
import Loading from "./components/common/Loading";
import { useEffect } from "react";
import { fetchUserData } from "./services/auth";

function App() {
  const loading = useSelector((state: RootState) => state.users.loading);
  const token = useSelector((state: RootState) => state.users.token);

  useEffect(() => {
    const getUserData = async () => {
      if (token) {
        store.dispatch(fetchUserData(token));
      }
    };
    getUserData();
  }, [token]);
  return (
    <BrowserRouter>
      <div className=" flex flex-col h-screen justify-between  bg-primary-foreground">
        <Header />
        <div className="mb-auto px-4 py-6 lg:px-8">
          {loading ? (
            <Loading />
          ) : (
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="profile" element={<MyProfilePage />} />
              <Route path="meals" element={<MyMealsPage />} />
              <Route path="meals/create" element={<MealFormPage />} />
              <Route path="meals/:id" element={<MealFormPage />} />
            </Routes>
          )}
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
