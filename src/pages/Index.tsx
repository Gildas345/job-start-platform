
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Search, Building, Users, CheckCircle, ArrowRight, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <Layout>
      <HeroSection />

      {/* How it works section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comment ça marche ?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trois étapes simples pour connecter talents et opportunités
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* For Students */}
            <div className="animate-fade-in">
              <div className="flex items-center mb-8">
                <Users className="h-8 w-8 text-secondary mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Pour les Étudiants</h3>
              </div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-4">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Créez votre profil</h4>
                    <p className="text-gray-600">Renseignez vos informations académiques et vos préférences</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-4">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Recherchez et postulez</h4>
                    <p className="text-gray-600">Explorez les offres qui correspondent à votre profil</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-4">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Décrochez votre stage</h4>
                    <p className="text-gray-600">Suivez vos candidatures et commencez votre aventure professionnelle</p>
                  </div>
                </div>
              </div>
            </div>

            {/* For Companies */}
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center mb-8">
                <Building className="h-8 w-8 text-secondary mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Pour les Entreprises</h3>
              </div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white font-bold mr-4">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Créez votre compte entreprise</h4>
                    <p className="text-gray-600">Présentez votre entreprise et vos valeurs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white font-bold mr-4">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Publiez vos offres</h4>
                    <p className="text-gray-600">Décrivez vos besoins et attirez les meilleurs talents</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white font-bold mr-4">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Recrutez vos stagiaires</h4>
                    <p className="text-gray-600">Évaluez les candidatures et formez les talents de demain</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ils nous font confiance
            </h2>
            <p className="text-xl text-gray-600">
              Découvrez les témoignages de nos utilisateurs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="animate-fade-in">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary mb-4" />
                <p className="text-gray-600 mb-4">
                  "Grâce à StageFacile, j'ai trouvé un stage dans l'entreprise de mes rêves en quelques semaines seulement!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-3">
                    M
                  </div>
                  <div>
                    <p className="font-semibold">Marie Dubois</p>
                    <p className="text-sm text-gray-500">Étudiante en Marketing</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-secondary mb-4" />
                <p className="text-gray-600 mb-4">
                  "La plateforme nous permet de recruter des stagiaires de qualité rapidement. Interface très intuitive!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white font-bold mr-3">
                    P
                  </div>
                  <div>
                    <p className="font-semibold">Pierre Martin</p>
                    <p className="text-sm text-gray-500">RH chez TechCorp</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary mb-4" />
                <p className="text-gray-600 mb-4">
                  "Une expérience utilisateur exceptionnelle. StageFacile simplifie vraiment la recherche de stage."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-3">
                    L
                  </div>
                  <div>
                    <p className="font-semibold">Lucas Bernard</p>
                    <p className="text-sm text-gray-500">Étudiant en Informatique</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prêt à commencer votre aventure ?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Rejoignez des milliers d'étudiants et d'entreprises qui font confiance à StageFacile
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8">
              <Link to="/register" className="flex items-center">
                Créer un compte
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 bg-white text-primary hover:bg-gray-50">
              <Link to="/internship-offers">
                Voir les offres
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
