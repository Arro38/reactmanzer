import Title from "@/components/common/Title";

function PolitiquePage() {
  return (
    <div className="container mx-auto my-8 p-8 bg-white rounded shadow">
      <Title
        title="Politique de confidentialité"
        subtitle="Mis à jour le 28 novembre 2023"
      />
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">1. Informations Générales</h2>
        <p>
          <p>Etienne VAYTILINGOM</p>
          <p> 97438 Sainte Marie, Réunion</p>
          <p>
            <a href="mailto:formation.etienne.re@gmail.com">
              formation.etienne.re@gmail.com
            </a>
          </p>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">
          2. Données Personnelles Collectées
        </h2>
        <p>Nous collectons les informations suivantes :</p>
        <ul className="list-disc pl-6">
          <li>Nom</li>
          <li>Adresse e-mail</li>
          <li>Photo de repas</li>
          <li>Secteur</li>
          <li>Adresse</li>
          <li>Numéro de téléphone</li>
        </ul>
        <p>
          Ces données sont collectées via un formulaire d'inscription. Elles
          sont utilisées pour le bon fonctionnement du site et sont mises à
          disposition du public pour fournir des informations sur l'emplacement
          des repas et la manière de contacter l'utilisateur.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">3. Stockage des Données</h2>
        <p>Les données sont stockées de la manière suivante :</p>
        <ul className="list-disc pl-6">
          <li>
            Utilisation de Redux Toolkit et Redux Persist dans le localStorage
          </li>
          <li>Base de données MySQL</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">4. Partage d'Informations</h2>
        <p>
          Les informations sont partagées publiquement pour assurer le bon
          fonctionnement du site.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">
          5. Cookies et Technologies de Suivi
        </h2>
        <p>
          Nous utilisons le stockage local (localStorage) et une base de données
          pour garantir la fonctionnalité du site. Aucun cookie tiers n'est
          utilisé.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">6. Profil Utilisateur</h2>
        <p>
          Les utilisateurs peuvent créer un compte, se connecter, accéder à une
          page de profil, et modifier toutes leurs données.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">7. Communication</h2>
        <p>
          Nous pouvons contacter les utilisateurs par e-mail pour des
          informations importantes. Cependant, cela se produit rarement.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">8. Consentement aux Cookies</h2>
        <p>
          Nous utilisons Tarteaucitron.js pour la gestion des cookies, avec une
          configuration adaptée à la législation française.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Conformité Juridique</h2>
        <p>
          Nous sommes conformes aux lois sur la protection des données,
          utilisant le framework PHP Laravel et étant hébergés par Hostinger, un
          hébergeur reconnu à Chypre.
        </p>
      </section>
    </div>
  );
}

export default PolitiquePage;
