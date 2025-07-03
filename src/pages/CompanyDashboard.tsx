
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Building, Plus, FileText, Users, Eye, Edit, Trash2, Clock, CheckCircle, XCircle } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

const CompanyDashboard = () => {
  const { user } = useAuth();

  const offers = [
    {
      id: 1,
      title: 'Stage Développeur Web',
      status: 'active',
      applications: 12,
      publishedDate: '2024-01-15',
      deadline: '2024-03-15'
    },
    {
      id: 2,
      title: 'Stage Marketing Digital',
      status: 'draft',
      applications: 0,
      publishedDate: null,
      deadline: '2024-04-01'
    },
    {
      id: 3,
      title: 'Stage Data Analyst',
      status: 'expired',
      applications: 8,
      publishedDate: '2023-12-01',
      deadline: '2024-01-31'
    }
  ];

  const recentApplications = [
    {
      id: 1,
      studentName: 'Marie Dupont',
      offerTitle: 'Stage Développeur Web',
      appliedDate: '2024-01-20',
      status: 'new'
    },
    {
      id: 2,
      studentName: 'Jean Martin',
      offerTitle: 'Stage Développeur Web',
      appliedDate: '2024-01-18',
      status: 'reviewed'
    },
    {
      id: 3,
      studentName: 'Sophie Bernard',
      offerTitle: 'Stage Data Analyst',
      appliedDate: '2024-01-16',
      status: 'new'
    }
  ];

  const getOfferStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'draft':
        return 'bg-yellow-100 text-yellow-800';
      case 'expired':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getOfferStatusText = (status: string) => {
    switch (status) {
      case 'active':
        return 'Active';
      case 'draft':
        return 'Brouillon';
      case 'expired':
        return 'Expirée';
      default:
        return status;
    }
  };

  const getOfferStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'draft':
        return <Clock className="h-4 w-4 text-yellow-500" />;
      case 'expired':
        return <XCircle className="h-4 w-4 text-red-500" />;
      default:
        return null;
    }
  };

  const getApplicationStatusColor = (status: string) => {
    switch (status) {
      case 'new':
        return 'bg-blue-100 text-blue-800';
      case 'reviewed':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getApplicationStatusText = (status: string) => {
    switch (status) {
      case 'new':
        return 'Nouvelle';
      case 'reviewed':
        return 'Examinée';
      default:
        return status;
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Bonjour, {user?.companyName || user?.firstName} !
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
                    <p className="text-gray-600 font-medium">Offres publiées</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-secondary">
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="p-3 bg-secondary/10 rounded-full">
                    <Users className="h-8 w-8 text-secondary" />
                  </div>
                  <div className="ml-4">
                    <p className="text-3xl font-bold text-gray-900">20</p>
                    <p className="text-gray-600 font-medium">Candidatures</p>
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
                    <p className="text-gray-600 font-medium">Offres actives</p>
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
                    <p className="text-3xl font-bold text-gray-900">3</p>
                    <p className="text-gray-600 font-medium">Nouvelles candidatures</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* My Offers */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-5 w-5" />
                  <span>Mes Offres</span>
                </CardTitle>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/company/my-offers">Voir tout</Link>
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {offers.map((offer) => (
                    <div key={offer.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{offer.title}</h4>
                        <p className="text-gray-600">{offer.applications} candidature{offer.applications !== 1 ? 's' : ''}</p>
                        <p className="text-sm text-gray-500">
                          {offer.publishedDate ? `Publié le ${new Date(offer.publishedDate).toLocaleDateString('fr-FR')}` : 'Brouillon'}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        {getOfferStatusIcon(offer.status)}
                        <Badge className={getOfferStatusColor(offer.status)}>
                          {getOfferStatusText(offer.status)}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Applications */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5" />
                  <span>Candidatures Récentes</span>
                </CardTitle>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/company/received-applications">Voir tout</Link>
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentApplications.map((application) => (
                    <div key={application.id} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">{application.studentName}</h4>
                          <p className="text-gray-600">{application.offerTitle}</p>
                          <p className="text-sm text-gray-500">
                            Candidature reçue le {new Date(application.appliedDate).toLocaleDateString('fr-FR')}
                          </p>
                        </div>
                        <Badge className={getApplicationStatusColor(application.status)}>
                          {getApplicationStatusText(application.status)}
                        </Badge>
                      </div>
                      <Button size="sm" className="mt-3" asChild>
                        <Link to={`/company/application/${application.id}`}>Examiner</Link>
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
                    <Link to="/company/profile">
                      <Building className="h-5 w-5" />
                      <span>Mon Profil</span>
                    </Link>
                  </Button>
                  <Button variant="outline" className="flex items-center space-x-2 h-12 hover:bg-primary hover:text-white transition-all duration-300" asChild>
                    <Link to="/company/post-offer">
                      <Plus className="h-5 w-5" />
                      <span>Publier une Offre</span>
                    </Link>
                  </Button>
                  <Button variant="outline" className="flex items-center space-x-2 h-12 hover:bg-primary hover:text-white transition-all duration-300" asChild>
                    <Link to="/company/received-applications">
                      <Users className="h-5 w-5" />
                      <span>Candidatures Reçues</span>
                    </Link>
                  </Button>
                  <Button variant="outline" className="flex items-center space-x-2 h-12 hover:bg-secondary hover:text-white transition-all duration-300" asChild>
                    <Link to="/internship-offers">
                      <Eye className="h-5 w-5" />
                      <span>Voir les Offres</span>
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

export default CompanyDashboard;
