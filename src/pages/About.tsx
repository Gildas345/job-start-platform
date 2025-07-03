
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Target, Eye, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const teamMembers = [
    {
      name: 'Marie Dubois',
      role: 'CEO & Fondatrice',
      description: 'Passionnée par l\'éducation et l\'emploi des jeunes',
      image: '/placeholder.svg'
    },
    {
      name: 'Pierre Martin',
      role: 'CTO',
      description: 'Expert en développement web et intelligence artificielle',
      image: '/placeholder.svg'
    },
    {
      name: 'Sophie Bernard',
      role: 'Directrice Marketing',
      description: 'Spécialiste en marketing digital et acquisition',
      image: '/placeholder.svg'
    },
    {
      name: 'Thomas Laurent',
      role: 'Responsable Partenariats',
      description: 'Développement des relations entreprises et écoles',
      image: '/placeholder.svg'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'Nous nous efforçons de fournir la meilleure expérience possible à nos utilisateurs.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Nous croyons en la force des partenariats entre étudiants et entreprises.'
    },
    {
      icon: Eye,
      title: 'Transparence',
      description: 'Nous prônons la clarté et l\'honnêteté dans toutes nos interactions.'
    },
    {
      icon: Award,
      title: 'Innovation',
      description: 'Nous utilisons les technologies les plus récentes pour améliorer l\'expérience utilisateur.'
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Étudiants inscrits' },
    { number: '500+', label: 'Entreprises partenaires' },
    { number: '5,000+', label: 'Stages réalisés' },
    { number: '95%', label: 'Taux de satisfaction' }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
            À propos de <span className="text-primary">StageFacile</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Notre mission est de simplifier la rencontre entre les talents de demain et les entreprises d'aujourd'hui. 
            Nous créons des ponts entre l'éducation et le monde professionnel.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Notre Histoire</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  StageFacile est né en 2023 d'un constat simple : il était trop difficile pour les étudiants 
                  de trouver des stages de qualité, et pour les entreprises de recruter les bons profils.
                </p>
                <p>
                  Notre équipe, composée d'anciens étudiants et de professionnels RH, a décidé de créer 
                  une solution qui bénéficie à tous. Nous avons développé une plateforme intuitive qui 
                  met en relation étudiants et entreprises de manière efficace.
                </p>
                <p>
                  Aujourd'hui, StageFacile est devenue la référence pour la recherche de stages en France, 
                  avec des milliers d'étudiants et d'entreprises qui nous font confiance chaque jour.
                </p>
              </div>
            </div>
            <div className="animate-scale-in">
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-8 text-center">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index}>
                      <div className="text-2xl font-bold text-primary mb-1">{stat.number}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="animate-fade-in">
              <CardContent className="p-8 text-center">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Notre Mission</h3>
                <p className="text-gray-700">
                  Démocratiser l'accès aux stages de qualité en créant une plateforme transparente, 
                  équitable et efficace qui permet à chaque étudiant de trouver l'opportunité 
                  professionnelle qui lui correspond.
                </p>
              </CardContent>
            </Card>

            <Card className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8 text-center">
                <Eye className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Notre Vision</h3>
                <p className="text-gray-700">
                  Devenir la plateforme de référence en Europe pour la mise en relation entre 
                  étudiants et entreprises, en révolutionnant la façon dont se font les premiers 
                  pas dans le monde professionnel.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos Valeurs</h2>
            <p className="text-xl text-gray-600">
              Les principes qui guident notre action au quotidien
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Notre Équipe</h2>
            <p className="text-xl text-gray-600">
              Rencontrez les personnes qui rendent StageFacile possible
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card 
                key={index} 
                className="text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Rejoignez l'aventure StageFacile
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Que vous soyez étudiant ou entreprise, découvrez comment nous pouvons vous aider
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8">
              <Link to="/register" className="flex items-center">
                Créer un compte
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 bg-white text-primary hover:bg-gray-50">
              <Link to="/contact">
                Nous contacter
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
