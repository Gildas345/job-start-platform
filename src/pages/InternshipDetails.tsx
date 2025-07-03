
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  MapPin, 
  Building2, 
  Clock, 
  Calendar, 
  Euro, 
  Users, 
  GraduationCap,
  CheckCircle,
  ArrowLeft,
  Heart,
  Share2
} from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

const InternshipDetails = () => {
  const { id } = useParams();
  const { user } = useAuth();

  // Mock data - in real app this would come from API
  const internship = {
    id: id,
    title: 'Stage Développeur Web Full-Stack',
    company: 'TechCorp',
    companyLogo: '/placeholder.svg',
    location: 'Paris 15ème',
    type: 'Stage de 6 mois',
    field: 'Informatique',
    publishedDate: '2024-01-15',
    applicationDeadline: '2024-02-28',
    contractType: 'Stage conventionné',
    compensation: '600€/mois',
    teamSize: '15 personnes',
    description: `
Rejoignez notre équipe de développement dynamique et participez à la création d'applications web innovantes qui transforment l'expérience utilisateur.

En tant que stagiaire développeur full-stack, vous aurez l'opportunité de travailler sur des projets réels et d'apprendre auprès de développeurs expérimentés. Vous contribuerez au développement de nouvelles fonctionnalités et à l'amélioration continue de nos produits.

Cette expérience vous permettra de développer vos compétences techniques tout en découvrant les enjeux du développement logiciel en entreprise.
    `,
    missions: [
      'Développement de nouvelles fonctionnalités front-end et back-end',
      'Participation aux code reviews et à l\'amélioration continue',
      'Collaboration avec l\'équipe design pour l\'intégration UI/UX',
      'Tests unitaires et débogage',
      'Documentation technique des développements'
    ],
    requirements: [
      'Bac+3 en informatique ou formation équivalente',
      'Connaissance de React.js et Node.js',
      'Bases en HTML, CSS, JavaScript',
      'Familiarité avec Git',
      'Curiosité et envie d\'apprendre',
      'Bon esprit d\'équipe'
    ],
    benefits: [
      'Formation encadrée par un mentor expérimenté',
      'Accès aux dernières technologies',
      'Télétravail partiel possible',
      'Tickets restaurant',
      'Environnement de travail moderne',
      'Possibilité d\'embauche à l\'issue du stage'
    ],
    companyInfo: {
      name: 'TechCorp',
      sector: 'Technologies de l\'information',
      size: '50-100 employés',
      website: 'https://techcorp.fr',
      description: 'TechCorp est une startup innovante spécialisée dans le développement de solutions digitales pour les entreprises. Nous accompagnons nos clients dans leur transformation numérique avec des équipes passionnées et des technologies de pointe.'
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const handleApply = () => {
    // In real app, this would handle the application process
    console.log('Application submitted for internship:', id);
  };

  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link 
              to="/internship-offers" 
              className="flex items-center text-primary hover:text-primary/80 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour aux offres
            </Link>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Header */}
              <Card className="animate-fade-in">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                        {internship.title}
                      </h1>
                      <div className="flex items-center text-gray-600 mb-4">
                        <Building2 className="h-5 w-5 mr-2" />
                        <span className="font-medium">{internship.company}</span>
                        <MapPin className="h-5 w-5 ml-4 mr-2" />
                        <span>{internship.location}</span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {internship.type}
                    </div>
                    <div className="flex items-center">
                      <Euro className="h-4 w-4 mr-1" />
                      {internship.compensation}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      Publié le {formatDate(internship.publishedDate)}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {internship.teamSize}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">{internship.field}</Badge>
                    <Badge variant="outline">{internship.contractType}</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Description */}
              <Card className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <CardHeader>
                  <CardTitle>Description du poste</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose prose-gray max-w-none">
                    {internship.description.trim().split('\n\n').map((paragraph, index) => (
                      <p key={index} className="mb-4 text-gray-700">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Missions */}
              <Card className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <CardHeader>
                  <CardTitle>Missions principales</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {internship.missions.map((mission, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{mission}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Requirements */}
              <Card className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <CardHeader>
                  <CardTitle>Profil recherché</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {internship.requirements.map((requirement, index) => (
                      <li key={index} className="flex items-start">
                        <GraduationCap className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Benefits */}
              <Card className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <CardHeader>
                  <CardTitle>Avantages</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {internship.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Apply Button */}
              <Card className="animate-scale-in">
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-2">
                      Date limite de candidature
                    </p>
                    <p className="font-semibold text-lg">
                      {formatDate(internship.applicationDeadline)}
                    </p>
                  </div>
                  {user && user.role === 'student' ? (
                    <Button 
                      onClick={handleApply} 
                      className="w-full mb-3"
                      size="lg"
                    >
                      Postuler maintenant
                    </Button>
                  ) : !user ? (
                    <div>
                      <Button asChild className="w-full mb-3" size="lg">
                        <Link to="/login">Se connecter pour postuler</Link>
                      </Button>
                      <p className="text-xs text-gray-500">
                        Vous devez être connecté en tant qu'étudiant pour postuler
                      </p>
                    </div>
                  ) : (
                    <div>
                      <Button disabled className="w-full mb-3" size="lg">
                        Réservé aux étudiants
                      </Button>
                      <p className="text-xs text-gray-500">
                        Cette offre est uniquement accessible aux étudiants
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Company Info */}
              <Card className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <CardHeader>
                  <CardTitle>À propos de l'entreprise</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                      <Building2 className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg">{internship.companyInfo.name}</h3>
                    <p className="text-gray-600 text-sm">{internship.companyInfo.sector}</p>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Taille:</span>
                      <span className="font-medium">{internship.companyInfo.size}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Site web:</span>
                      <a 
                        href={internship.companyInfo.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Visiter
                      </a>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 text-sm">
                    {internship.companyInfo.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default InternshipDetails;
