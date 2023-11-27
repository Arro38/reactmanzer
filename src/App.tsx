import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
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
import { fetchAllSectors, getMyMeals } from "./services/api";
import {
  setIsLogged,
  setIsLoggedToast,
  setIsUpdated,
  setPasswordReset,
  setSendResetPasswordEmail,
} from "./redux/features/userSlice";
import { stat } from "fs";

function App() {
  const loading = useSelector((state: RootState) => state.users.loading);
  const token = useSelector((state: RootState) => state.users.token);
  const isLogged = useSelector((state: RootState) => state.users.isLogged);
  const isLoggedToast = useSelector(
    (state: RootState) => state.users.isLoggedToast
  );
  const isUpdated = useSelector((state: RootState) => state.users.isUpdated);
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
      dispatch(getMyMeals(token));
    }
  }, [token]);

  useEffect(() => {
    if (isLoggedToast) {
      dispatch(
        setSuccessMessage({
          title: "Connexion réussie",
          message: "Vous êtes maintenant connecté",
        })
      );
    } else if (isLoggedToast === false) {
      dispatch(
        setErrorMessage({
          title: "Erreur",
          message: "Veuillez vérifier vos identifiants",
        })
      );
    }
    dispatch(setIsLoggedToast(null));
    if (!isLogged && token) {
      dispatch(logoutUser(token));
    }
  }, [isLoggedToast]);

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
      dispatch(
        setSuccessMessage({
          title: "Mot de passe modifié",
          message: "Mot de passe modifié avec succès",
        })
      );
    } else if (passwordReset === false) {
      dispatch(
        setErrorMessage({
          title: "Erreur",
          message: "Le mot de passe n'a pas pu être modifié",
        })
      );
    }
    dispatch(setPasswordReset(null));
  }, [passwordReset]);

  useEffect(() => {
    if (sendResetPasswordEmail) {
      dispatch(
        setSuccessMessage({
          title: "Email envoyé",
          message:
            "Vous allez recevoir un email pour réinitialiser votre mot de passe",
        })
      );
    } else if (sendResetPasswordEmail === false) {
      dispatch(
        setErrorMessage({
          title: "Erreur",
          message: "L'email n'a pas pu être envoyé",
        })
      );
    }
    dispatch(setSendResetPasswordEmail(null));
  }, [sendResetPasswordEmail]);

  useEffect(() => {
    if (isUpdated) {
      dispatch(
        setSuccessMessage({
          title: "Profil mis à jour",
          message: "Votre profil a été mis à jour avec succès",
        })
      );
    } else if (isUpdated === false) {
      dispatch(
        setErrorMessage({
          title: "Erreur",
          message: "Votre profil n'a pas pu être mis à jour",
        })
      );
    }
    dispatch(setIsUpdated(null));
  }, [isUpdated]);

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
              {isLogged && (
                <>
                  <Route path="profile" element={<MyProfilePage />} />
                  <Route path="meals" element={<MyMealsPage />} />
                  <Route path="meals/create" element={<MealFormPage />} />
                  <Route path="meals/:id" element={<MealFormPage />} />
                  <Route
                    path="reset-password/*"
                    element={<UpdateResetPasswordPage />}
                  />
                </>
              )}
              {/* Redirect to homepage if not logged */}
              {!isLogged && (
                <Route
                  path="*"
                  element={
                    <div className="flex justify-center items-center h-screen">
                      <h1 className="text-2xl font-medium text-center">
                        Veuillez vous connecter pour accéder à cette page
                      </h1>
                    </div>
                  }
                />
              )}
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
