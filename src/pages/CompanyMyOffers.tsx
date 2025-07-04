
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FileText, Search, Filter, Plus, Edit, Trash2, Eye, Clock, CheckCircle, XCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const CompanyMyOffers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const offers = [
    {
      id: 1,
      title: 'Stage Développeur Web Frontend',
      status: 'active',
      applications: 12,
      publishedDate: '2024-01-15',
      deadline: '2024-03-15',
      location: 'Paris',
      type: 'Stage',
      duration: '3 mois'
    },
    {
      id: 2,
      title: 'Stage Marketing Digital',
      status: 'draft',
      applications: 0,
      publishedDate: null,
      deadline: '2024-04-01',
      location: 'Lyon',
      type: 'Stage',
      duration: '4 mois'
    },
    {
      id: 3,
      title: 'Stage Data Analyst',
      status: 'expired',
      applications: 8,
      publishedDate: '2023-12-01',
      deadline: '2024-01-31',
      location: 'Marseille',
      type: 'Stage',
      duration: '6 mois'
    },
    {
      id: 4,
      title: 'Stage UX/UI Designer',
      status: 'active',
      applications: 5,
      publishedDate: '2024-01-20',
      deadline: '2024-03-20',
      location: 'Toulouse',
      type: 'Stage',
      duration: '3 mois'
    }
  ];

  const getStatusColor = (status: string) => {
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

  const getStatusText = (status: string) => {
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

  const getStatusIcon = (status: string) => {
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

  const filteredOffers = offers.filter(offer => {
    const matchesSearch = offer.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || offer.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Mes Offres de Stage
            </h1>
            <p className="text-gray-600 mt-2 text-lg">
              Gérez toutes vos offres de stage publiées
            </p>
          </div>

          {/* Filters and Search */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Rechercher une offre..."
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-full md:w-48">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Filtrer par statut" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tous les statuts</SelectItem>
                    <SelectItem value="active">Actives</SelectItem>
                    <SelectItem value="draft">Brouillons</SelectItem>
                    <SelectItem value="expired">Expirées</SelectItem>
                  </SelectContent>
                </Select>
                <Button asChild>
                  <Link to="/company/post-offer">
                    <Plus className="h-4 w-4 mr-2" />
                    Nouvelle Offre
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Offers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredOffers.map((offer) => (
              <Card key={offer.id} className="hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg text-gray-900 line-clamp-2">
                      {offer.title}
                    </CardTitle>
                    <div className="flex items-center space-x-1">
                      {getStatusIcon(offer.status)}
                      <Badge className={getStatusColor(offer.status)}>
                        {getStatusText(offer.status)}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Candidatures:</span>
                      <span className="font-medium">{offer.applications}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Lieu:</span>
                      <span className="font-medium">{offer.location}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Durée:</span>
                      <span className="font-medium">{offer.duration}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Date limite:</span>
                      <span className="font-medium">
                        {new Date(offer.deadline).toLocaleDateString('fr-FR')}
                      </span>
                    </div>
                    {offer.publishedDate && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Publié le:</span>
                        <span className="font-medium">
                          {new Date(offer.publishedDate).toLocaleDateString('fr-FR')}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="flex space-x-2 mt-6">
                    <Button size="sm" variant="outline" className="flex-1" asChild>
                      <Link to={`/internship/${offer.id}`}>
                        <Eye className="h-4 w-4 mr-1" />
                        Voir
                      </Link>
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Edit className="h-4 w-4 mr-1" />
                      Modifier
                    </Button>
                    <Button size="sm" variant="destructive">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredOffers.length === 0 && (
            <div className="text-center py-12">
              <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Aucune offre trouvée
              </h3>
              <p className="text-gray-600 mb-6">
                {searchTerm || statusFilter !== 'all' 
                  ? 'Aucune offre ne correspond à vos critères de recherche.'
                  : 'Vous n\'avez pas encore publié d\'offres de stage.'
                }
              </p>
              <Button asChild>
                <Link to="/company/post-offer">
                  <Plus className="h-4 w-4 mr-2" />
                  Publier votre première offre
                </Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default CompanyMyOffers;
