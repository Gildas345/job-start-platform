
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollText } from 'lucide-react';

const Terms = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8 text-center">
            <div className="flex items-center justify-center mb-4">
              <ScrollText className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Termes et Conditions
            </h1>
            <p className="text-gray-600 mt-2 text-lg">
              Dernière mise à jour : 1er janvier 2024
            </p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>1. Acceptation des Termes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  En utilisant StageFacile, vous acceptez d'être lié par ces termes et conditions. 
                  Si vous n'acceptez pas ces termes dans leur intégralité, vous ne devez pas utiliser notre service.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Description du Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  StageFacile est une plateforme en ligne qui met en relation les étudiants à la recherche 
                  de stages avec les entreprises proposant des opportunités de stage.
                </p>
                <p className="text-gray-700">
                  Nous fournissons un service de mise en relation mais ne garantissons pas l'obtention 
                  d'un stage ou le recrutement de candidats.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Inscription et Comptes Utilisateurs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Pour utiliser certaines fonctionnalités de StageFacile, vous devez créer un compte utilisateur.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Vous devez fournir des informations exactes et complètes</li>
                    <li>Vous êtes responsable de la confidentialité de vos identifiants</li>
                    <li>Vous devez nous notifier immédiatement de toute utilisation non autorisée</li>
                    <li>Vous devez avoir au moins 16 ans pour créer un compte</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Utilisation Acceptable</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700">Vous vous engagez à ne pas :</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Publier de contenu illégal, offensant ou trompeur</li>
                    <li>Harceler ou intimider d'autres utilisateurs</li>
                    <li>Utiliser la plateforme à des fins commerciales non autorisées</li>
                    <li>Tenter d'accéder illégalement aux systèmes ou données</li>
                    <li>Publier des offres de stage frauduleuses</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Propriété Intellectuelle</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Tous les contenus, marques, logos et éléments de design de StageFacile sont 
                  protégés par les droits de propriété intellectuelle. Vous ne pouvez pas les 
                  utiliser sans autorisation écrite préalable.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Limitation de Responsabilité</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  StageFacile fournit la plateforme "en l'état" sans garantie. Nous ne sommes pas 
                  responsables des dommages directs ou indirects résultant de l'utilisation de notre service.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Modifications des Termes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Nous nous réservons le droit de modifier ces termes à tout moment. 
                  Les modifications prendront effet dès leur publication sur cette page.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. Contact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Pour toute question concernant ces termes et conditions, 
                  contactez-nous à : contact@stagefacile.fr
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Terms;
