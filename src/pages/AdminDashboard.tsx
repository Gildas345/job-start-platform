
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, Building, FileText, BarChart3, Shield, Eye, Edit, Trash2, CheckCircle, XCircle } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

const AdminDashboard = () => {
  const { user } = useAuth();

  const recentUsers = [
    {
      id: 1,
      name: 'Marie Dupont',
      email: 'marie.dupont@example.com',
      role: 'student',
      registeredDate: '2024-01-20',
      status: 'active'
    },
    {
      id: 2,
      name: 'TechCorp',
      email: 'contact@techcorp.com',
      role: 'company',
      registeredDate: '2024-01-18',
      status: 'pending'
    },
    {
      id: 3,
      name: 'Jean Martin',
      email: 'jean.martin@example.com',
      role: 'student',
      registeredDate: '2024-01-16',
      status: 'active'
    }
  ];

  const pendingOffers = [
    {
      id: 1,
      title: 'Stage Développeur Web',
      company: 'WebAgency',
      submittedDate: '2024-01-19',
      status: 'pending'
    },
    {
      id: 2,
      title: 'Stage Marketing Digital',
      company: 'MarketingPro',
      submittedDate: '2024-01-17',
      status: 'pending'
    }
  ];

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'student':
        return 'bg-blue-100 text-blue-800';
      case 'company':
        return 'bg-green-100 text-green-800';
      case 'admin':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getRoleText = (role: string) => {
    switch (role) {
      case 'student':
        return 'Étudiant';
      case 'company':
        return 'Entreprise';
      case 'admin':
        return 'Admin';
      default:
        return role;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'inactive':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active':
        return 'Actif';
      case 'pending':
        return 'En attente';
      case 'inactive':
        return 'Inactif';
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
              Tableau de Bord Administrateur
            </h1>
            <p className="text-gray-600 mt-2">
              Bienvenue, {user?.firstName}. Gérez la plateforme StageFacile.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <Users className="h-8 w-8 text-primary" />
                  <div className="ml-4">
                    <p className="text-2xl font-bold text-gray-900">1,247</p>
                    <p className="text-gray-600">Utilisateurs totaux</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <Building className="h-8 w-8 text-secondary" />
                  <div className="ml-4">
                    <p className="text-2xl font-bold text-gray-900">89</p>
                    <p className="text-gray-600">Entreprises</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <FileText className="h-8 w-8 text-blue-500" />
                  <div className="ml-4">
                    <p className="text-2xl font-bold text-gray-900">324</p>
                    <p className="text-gray-600">Offres de stage</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <BarChart3 className="h-8 w-8 text-purple-500" />
                  <div className="ml-4">
                    <p className="text-2xl font-bold text-gray-900">856</p>
                    <p className="text-gray-600">Candidatures</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Users */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5" />
                  <span>Utilisateurs Récents</span>
                </CardTitle>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/admin/users">Voir tout</Link>
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentUsers.map((user) => (
                    <div key={user.id} className="p-4 border rounded-lg">
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">{user.name}</h4>
                          <p className="text-gray-600">{user.email}</p>
                          <p className="text-sm text-gray-500">
                            Inscrit le {new Date(user.registeredDate).toLocaleDateString('fr-FR')}
                          </p>
                        </div>
                        <div className="flex flex-col space-y-2">
                          <Badge className={getRoleColor(user.role)}>
                            {getRoleText(user.role)}
                          </Badge>
                          <Badge className={getStatusColor(user.status)}>
                            {getStatusText(user.status)}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4 mr-1" />
                          Voir
                        </Button>
                        <Button size="sm" variant="outline">
                          <Edit className="h-4 w-4 mr-1" />
                          Modifier
                        </Button>
                        {user.status === 'pending' && (
                          <>
                            <Button size="sm" variant="outline">
                              <CheckCircle className="h-4 w-4 mr-1" />
                              Approuver
                            </Button>
                            <Button size="sm" variant="outline">
                              <XCircle className="h-4 w-4 mr-1" />
                              Rejeter
                            </Button>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Pending Offers */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-5 w-5" />
                  <span>Offres en Attente</span>
                </CardTitle>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/admin/offers">Voir tout</Link>
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pendingOffers.map((offer) => (
                    <div key={offer.id} className="p-4 border rounded-lg">
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">{offer.title}</h4>
                          <p className="text-gray-600">{offer.company}</p>
                          <p className="text-sm text-gray-500">
                            Soumise le {new Date(offer.submittedDate).toLocaleDateString('fr-FR')}
                          </p>
                        </div>
                        <Badge className="bg-yellow-100 text-yellow-800">
                          En attente
                        </Badge>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" asChild>
                          <Link to={`/internship/${offer.id}`}>
                            <Eye className="h-4 w-4 mr-1" />
                            Examiner
                          </Link>
                        </Button>
                        <Button size="sm" variant="outline">
                          <CheckCircle className="h-4 w-4 mr-1" />
                          Approuver
                        </Button>
                        <Button size="sm" variant="outline">
                          <XCircle className="h-4 w-4 mr-1" />
                          Rejeter
                        </Button>
                      </div>
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
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <Button variant="outline" className="flex items-center space-x-2" asChild>
                    <Link to="/admin/users">
                      <Users className="h-4 w-4" />
                      <span>Gestion des Utilisateurs</span>
                    </Link>
                  </Button>
                  <Button variant="outline" className="flex items-center space-x-2" asChild>
                    <Link to="/admin/offers">
                      <FileText className="h-4 w-4" />
                      <span>Gestion des Offres</span>
                    </Link>
                  </Button>
                  <Button variant="outline" className="flex items-center space-x-2" asChild>
                    <Link to="/admin/stats">
                      <BarChart3 className="h-4 w-4" />
                      <span>Statistiques</span>
                    </Link>
                  </Button>
                  <Button variant="outline" className="flex items-center space-x-2">
                    <Shield className="h-4 w-4" />
                    <span>Paramètres Système</span>
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

export default AdminDashboard;
