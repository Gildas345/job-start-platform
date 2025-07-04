
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield } from 'lucide-react';

const Privacy = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8 text-center">
            <div className="flex items-center justify-center mb-4">
              <Shield className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Politique de Confidentialité
            </h1>
            <p className="text-gray-600 mt-2 text-lg">
              Dernière mise à jour : 1er janvier 2024
            </p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>1. Collecte des Informations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Nous collectons les informations que vous nous fournissez directement, notamment :
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Informations d'inscription (nom, email, mot de passe)</li>
                    <li>Informations de profil (formation, expérience, compétences)</li>
                    <li>CV et lettres de motivation</li>
                    <li>Informations sur les entreprises (secteur, taille, localisation)</li>
                    <li>Communications avec notre support</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Utilisation des Informations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700">Nous utilisons vos informations pour :</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Fournir et améliorer nos services</li>
                    <li>Mettre en relation étudiants et entreprises</li>
                    <li>Personnaliser votre expérience</li>
                    <li>Envoyer des notifications importantes</li>
                    <li>Analyser l'utilisation de la plateforme</li>
                    <li>Prévenir la fraude et assurer la sécurité</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Partage des Informations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Nous ne vendons pas vos données personnelles. Nous pouvons partager vos informations dans les cas suivants :
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Avec les entreprises lorsque vous postulez à leurs offres</li>
                    <li>Avec votre consentement explicite</li>
                    <li>Pour respecter nos obligations légales</li>
                    <li>Avec nos prestataires de services (hébergement, email)</li>
                    <li>En cas de fusion ou acquisition</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Sécurité des Données</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Nous mettons en place des mesures de sécurité appropriées pour protéger vos données :
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Chiffrement des données en transit et au repos</li>
                    <li>Accès restreint aux données personnelles</li>
                    <li>Surveillance continue des systèmes</li>
                    <li>Audits de sécurité réguliers</li>
                    <li>Formation du personnel sur la protection des données</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Vos Droits</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Conformément au RGPD, vous disposez des droits suivants :
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Droit d'accès à vos données personnelles</li>
                    <li>Droit de rectification des données inexactes</li>
                    <li>Droit à l'effacement ("droit à l'oubli")</li>
                    <li>Droit à la limitation du traitement</li>
                    <li>Droit à la portabilité des données</li>
                    <li>Droit d'opposition au traitement</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Cookies et Technologies Similaires</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Nous utilisons des cookies pour améliorer votre expérience sur notre site. 
                  Vous pouvez gérer vos préférences de cookies dans les paramètres de votre navigateur.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Conservation des Données</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Nous conservons vos données personnelles aussi longtemps que nécessaire pour 
                  fournir nos services ou selon les exigences légales. Les comptes inactifs 
                  depuis plus de 3 ans peuvent être supprimés.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. Contact</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-gray-700">
                  <p className="mb-2">
                    Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits :
                  </p>
                  <p className="font-medium">Email : privacy@stagefacile.fr</p>
                  <p className="font-medium">Adresse : 123 Rue de la Confidentialité, 75001 Paris</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Privacy;
