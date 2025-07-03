
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Building, Plus, FileText, Users, Eye, Edit, Trash2 } from 'lucide-react';
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
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Tableau de Bord Entreprise
            </h1>
            <p className="text-gray-600 mt-2">
              Bienvenue, {user?.companyName || user?.firstName}
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <FileText className="h-8 w-8 text-primary" />
                  <div className="ml-4">
                    <p className="text-2xl font-bold text-gray-900">3</p>
                    <p className="text-gray-600">Offres publiées</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <Users className="h-8 w-8 text-secondary" />
                  <div className="ml-4">
                    <p className="text-2xl font-bold text-gray-900">20</p>
                    <p className="text-gray-600">Candidatures</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <Eye className="h-8 w-8 text-blue-500" />
                  <div className="ml-4">
                    <p className="text-2xl font-bold text-gray-900">1</p>
                    <p className="text-gray-600">Offres actives</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <Building className="h-8 w-8 text-purple-500" />
                  <div className="ml-4">
                    <p className="text-2xl font-bold text-gray-900">3</p>
                    <p className="text-gray-600">Nouvelles candidatures</p>
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
                <div className="flex space-x-2">
                  <Button size="sm" asChild>
                    <Link to="/company/post-offer">
                      <Plus className="h-4 w-4 mr-2" />
                      Nouvelle offre
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/company/my-offers">Voir tout</Link>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {offers.map((offer) => (
                    <div key={offer.id} className="p-4 border rounded-lg">
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">{offer.title}</h4>
                          <p className="text-sm text-gray-500">
                            {offer.applications} candidature{offer.applications !== 1 ? 's' : ''}
                          </p>
                          {offer.publishedDate && (
                            <p className="text-sm text-gray-500">
                              Publié le {new Date(offer.publishedDate).toLocaleDateString('fr-FR')}
                            </p>
                          )}
                        </div>
                        <Badge className={getOfferStatusColor(offer.status)}>
                          {getOfferStatusText(offer.status)}
                        </Badge>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" asChild>
                          <Link to={`/internship/${offer.id}`}>
                            <Eye className="h-4 w-4 mr-1" />
                            Voir
                          </Link>
                        </Button>
                        <Button size="sm" variant="outline">
                          <Edit className="h-4 w-4 mr-1" />
                          Modifier
                        </Button>
                        <Button size="sm" variant="outline">
                          <Trash2 className="h-4 w-4 mr-1" />
                          Supprimer
                        </Button>
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
                    <div key={application.id} className="p-4 border rounded-lg">
                      <div className="flex justify-between items-start mb-3">
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
                      <Button size="sm" asChild>
                        <Link to={`/company/application/${application.id}`}>
                          Examiner la candidature
                        </Link>
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Actions Rapides</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button variant="outline" className="flex items-center space-x-2" asChild>
                    <Link to="/company/profile">
                      <Building className="h-4 w-4" />
                      <span>Mon Profil Entreprise</span>
                    </Link>
                  </Button>
                  <Button variant="outline" className="flex items-center space-x-2" asChild>
                    <Link to="/company/post-offer">
                      <Plus className="h-4 w-4" />
                      <span>Publier une Offre</span>
                    </Link>
                  </Button>
                  <Button variant="outline" className="flex items-center space-x-2" asChild>
                    <Link to="/company/received-applications">
                      <Users className="h-4 w-4" />
                      <span>Candidatures Reçues</span>
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
