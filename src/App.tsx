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
import { fetchUserData, logoutUser } from "./services/auth";
import { Toaster } from "./components/ui/toaster";
import { useToast } from "./components/ui/use-toast";
import UpdateResetPasswordPage from "./pages/auth/UpdateResetPasswordPage";
import { stat } from "fs";
import { ToastMessage, resetToast } from "./redux/features/toastSlice";

function App() {
  const loading = useSelector((state: RootState) => state.users.loading);
  const token = useSelector((state: RootState) => state.users.token);
  const isLogged = useSelector((state: RootState) => state.users.isLogged);
  const errorMessage: ToastMessage = useSelector(
    (state: RootState) => state.toasts.error
  );
  const successMessage: ToastMessage = useSelector(
    (state: RootState) => state.toasts.success
  );
  const { toast } = useToast();

  useEffect(() => {
    if (token) {
      store.dispatch(fetchUserData(token));
    }
  }, [token]);

  useEffect(() => {
    if (isLogged !== null)
      toast({
        title: isLogged ? "Connexion réussie" : "Connexion échouée",
        description: isLogged
          ? "Vous êtes maintenant connecté"
          : "Veuillez vérifier vos identifiants",
        variant: isLogged ? "default" : "destructive",
        duration: 3000,
      });
    if (!isLogged && token) {
      store.dispatch(logoutUser(token));
    }
  }, [isLogged]);

  useEffect(() => {
    if (errorMessage.message) {
      toast({
        title: errorMessage.title,
        description: errorMessage.message,
        variant: "destructive",
        duration: 2000,
      });
      setTimeout(() => {
        store.dispatch(resetToast());
      }, 2000);
    }
  }, [errorMessage]);

  useEffect(() => {
    if (successMessage.message) {
      toast({
        title: successMessage.title,
        description: successMessage.message,
        variant: "default",
        duration: 2000,
      });
      setTimeout(() => {
        store.dispatch(resetToast());
      }, 2000);
    }
  }, [successMessage]);

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
              <Route
                path="reset-password/*"
                element={<UpdateResetPasswordPage />}
              />
            </Routes>
          )}
        </div>
        <Toaster />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
