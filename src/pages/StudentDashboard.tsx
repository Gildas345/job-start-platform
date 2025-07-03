
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { User, BookOpen, FileText, Star, Clock, CheckCircle, XCircle, GraduationCap } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

const StudentDashboard = () => {
  const { user } = useAuth();

  const applications = [
    {
      id: 1,
      company: 'TechCorp',
      position: 'Stage Développeur Web',
      status: 'pending',
      appliedDate: '2024-01-15'
    },
    {
      id: 2,
      company: 'DesignStudio',
      position: 'Stage UX/UI Designer',
      status: 'accepted',
      appliedDate: '2024-01-10'
    },
    {
      id: 3,
      company: 'DataSoft',
      position: 'Stage Data Analyst',
      status: 'rejected',
      appliedDate: '2024-01-05'
    }
  ];

  const recommendedOffers = [
    {
      id: 1,
      title: 'Stage Développeur Frontend',
      company: 'WebAgency',
      location: 'Paris',
      type: 'Stage'
    },
    {
      id: 2,
      title: 'Stage Marketing Digital',
      company: 'MarketingPro',
      location: 'Lyon',
      type: 'Stage'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="h-4 w-4 text-yellow-500" />;
      case 'accepted':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'rejected':
        return <XCircle className="h-4 w-4 text-red-500" />;
      default:
        return null;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending':
        return 'En attente';
      case 'accepted':
        return 'Acceptée';
      case 'rejected':
        return 'Refusée';
      default:
        return status;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'accepted':
        return 'bg-green-100 text-green-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Bonjour, {user?.firstName} !
            </h1>
            <p className="text-gray-600 mt-2 text-lg">
              Voici un aperçu de votre activité sur StageFacile
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <FileText className="h-8 w-8 text-primary" />
                  </div>
                  <div className="ml-4">
                    <p className="text-3xl font-bold text-gray-900">3</p>
                    <p className="text-gray-600 font-medium">Candidatures</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-yellow-500">
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="p-3 bg-yellow-100 rounded-full">
                    <Clock className="h-8 w-8 text-yellow-500" />
                  </div>
                  <div className="ml-4">
                    <p className="text-3xl font-bold text-gray-900">1</p>
                    <p className="text-gray-600 font-medium">En attente</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-green-500">
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="p-3 bg-green-100 rounded-full">
                    <CheckCircle className="h-8 w-8 text-green-500" />
                  </div>
                  <div className="ml-4">
                    <p className="text-3xl font-bold text-gray-900">1</p>
                    <p className="text-gray-600 font-medium">Acceptée</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-secondary">
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="p-3 bg-secondary/10 rounded-full">
                    <Star className="h-8 w-8 text-secondary" />
                  </div>
                  <div className="ml-4">
                    <p className="text-3xl font-bold text-gray-900">5</p>
                    <p className="text-gray-600 font-medium">Recommandées</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Applications */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-5 w-5" />
                  <span>Mes Candidatures</span>
                </CardTitle>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/student/applications">Voir tout</Link>
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {applications.map((application) => (
                    <div key={application.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{application.position}</h4>
                        <p className="text-gray-600">{application.company}</p>
                        <p className="text-sm text-gray-500">
                          Candidature envoyée le {new Date(application.appliedDate).toLocaleDateString('fr-FR')}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(application.status)}
                        <Badge className={getStatusColor(application.status)}>
                          {getStatusText(application.status)}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recommended Offers */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center space-x-2">
                  <Star className="h-5 w-5" />
                  <span>Offres Recommandées</span>
                </CardTitle>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/student/recommended-offers">Voir tout</Link>
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recommendedOffers.map((offer) => (
                    <div key={offer.id} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">{offer.title}</h4>
                          <p className="text-gray-600">{offer.company}</p>
                          <p className="text-sm text-gray-500">{offer.location}</p>
                        </div>
                        <Badge variant="secondary">{offer.type}</Badge>
                      </div>
                      <Button size="sm" className="mt-3" asChild>
                        <Link to={`/internship/${offer.id}`}>Voir l'offre</Link>
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="mt-8">
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Actions Rapides
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <Button variant="outline" className="flex items-center space-x-2 h-12 hover:bg-primary hover:text-white transition-all duration-300" asChild>
                    <Link to="/student/profile">
                      <User className="h-5 w-5" />
                      <span>Mon Profil</span>
                    </Link>
                  </Button>
                  <Button variant="outline" className="flex items-center space-x-2 h-12 hover:bg-primary hover:text-white transition-all duration-300" asChild>
                    <Link to="/internship-offers">
                      <BookOpen className="h-5 w-5" />
                      <span>Rechercher des Stages</span>
                    </Link>
                  </Button>
                  <Button variant="outline" className="flex items-center space-x-2 h-12 hover:bg-primary hover:text-white transition-all duration-300" asChild>
                    <Link to="/student/applications">
                      <FileText className="h-5 w-5" />
                      <span>Mes Candidatures</span>
                    </Link>
                  </Button>
                  <Button variant="outline" className="flex items-center space-x-2 h-12 hover:bg-secondary hover:text-white transition-all duration-300" asChild>
                    <Link to="/student/applications">
                      <GraduationCap className="h-5 w-5" />
                      <span>Niveaux d'Études</span>
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default StudentDashboard;
