import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

function MentionsLegales() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Mentions légales</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Mentions légales</AlertDialogTitle>
          <AlertDialogDescription>
            <h2>Éditeur du site :</h2>
            <p>Monsieur Etienne Vaytilingom</p>

            <h2>Adresse :</h2>
            <p>48 Rue Elisa, 97438 Sainte-Marie</p>

            <h2>Adresse e-mail de contact :</h2>
            <p>
              <a href="mailto:contact@formaterz.fr">contact@formaterz.fr</a>
            </p>

            <h2>Numéro SIREN :</h2>
            <p>882 880 511</p>

            <h2>Numéro SIRET (siège social) :</h2>
            <p>882 880 511 00028</p>

            <h2>Directeur de la publication :</h2>
            <p>Monsieur Etienne Vaytilingom</p>

            <h2>Hébergeur du site :</h2>
            <p>Hostinger</p>

            <h2>Version limitée :</h2>
            <p>
              Ce site est une version limitée. Pour accéder à davantage de
              fonctionnalités, veuillez faire évoluer votre offre.
            </p>

            <h2>Pour toute question ou réclamation, veuillez contacter :</h2>
            <p>
              <a href="mailto:contact@formaterz.fr">contact@formaterz.fr</a>
            </p>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction>Ok</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default MentionsLegales;
