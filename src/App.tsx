import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import MyProfilePage from "./pages/user/MyProfilePage";
import MyMealsPage from "./pages/user/MyMealsPage";
import MealFormPage from "./pages/user/MealFormPage";

import { useSelector } from "react-redux";
import { RootState, store, thunkDispatch } from "./redux/store";
import Loading from "./components/common/Loading";
import { useEffect } from "react";
import { fetchUserData, logoutUser } from "./services/auth";
import { Toaster } from "./components/ui/toaster";
import { useToast } from "./components/ui/use-toast";
import UpdateResetPasswordPage from "./pages/auth/UpdateResetPasswordPage";

import {
  ToastMessage,
  resetToast,
  setErrorMessage,
  setSuccessMessage,
} from "./redux/features/toastSlice";
import { fetchAllSectors } from "./services/api";

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
  const passwordReset = useSelector(
    (state: RootState) => state.users.passwordReset
  );
  const sendResetPasswordEmail = useSelector(
    (state: RootState) => state.users.sendResetPasswordEmail
  );
  const dispatch = thunkDispatch;

  const { toast } = useToast();

  useEffect(() => {
    dispatch(fetchAllSectors());
  }, []);

  useEffect(() => {
    if (token) {
      dispatch(fetchUserData(token));
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
      dispatch(logoutUser(token));
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

  useEffect(() => {
    if (passwordReset) {
      store.dispatch(
        setSuccessMessage({
          title: "Mot de passe modifié",
          message:
            "Vous pouvez maintenant vous connecter avec votre nouveau mot de passe",
        })
      );
    } else if (passwordReset === false) {
      store.dispatch(
        setErrorMessage({
          title: "Erreur",
          message: "Le lien de réinitialisation n'est plus valide",
        })
      );
    }
  }, [passwordReset]);

  useEffect(() => {
    if (sendResetPasswordEmail) {
      store.dispatch(
        setSuccessMessage({
          title: "Email envoyé",
          message:
            "Vous allez recevoir un email pour réinitialiser votre mot de passe",
        })
      );
    } else if (sendResetPasswordEmail === false) {
      store.dispatch(
        setErrorMessage({
          title: "Erreur",
          message: "L'email n'a pas pu être envoyé",
        })
      );
    }
  }, [sendResetPasswordEmail]);

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
