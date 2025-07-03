
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Search, Filter, Users, Clock, CheckCircle, XCircle, Eye, Download, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const CompanyReceivedApplications = () => {
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedOffer, setSelectedOffer] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const applications = [
    {
      id: 1,
      studentName: 'Marie Dupont',
      studentLevel: 'Licence 3',
      school: 'IFRI',
      offerTitle: 'Stage Développeur Web',
      appliedDate: '2024-01-20',
      status: 'new',
      rating: 4.5,
      email: 'marie.dupont@email.com',
      phone: '+229 XX XX XX XX'
    },
    {
      id: 2,
      studentName: 'Jean Martin',
      studentLevel: 'Master 1',
      school: 'HECM',
      offerTitle: 'Stage Marketing Digital',
      appliedDate: '2024-01-18',
      status: 'reviewed',
      rating: 4.2,
      email: 'jean.martin@email.com',
      phone: '+229 XX XX XX XX'
    },
    {
      id: 3,
      studentName: 'Sophie Bernard',
      studentLevel: 'Master 2',
      school: 'UATM',
      offerTitle: 'Stage Data Analyst',
      appliedDate: '2024-01-16',
      status: 'accepted',
      rating: 4.8,
      email: 'sophie.bernard@email.com',
      phone: '+229 XX XX XX XX'
    },
    {
      id: 4,
      studentName: 'Ahmed Kone',
      studentLevel: 'Licence 2',
      school: 'ISGG',
      offerTitle: 'Stage Développeur Web',
      appliedDate: '2024-01-15',
      status: 'rejected',
      rating: 3.9,
      email: 'ahmed.kone@email.com',
      phone: '+229 XX XX XX XX'
    },
    {
      id: 5,
      studentName: 'Fatou Diallo',
      studentLevel: 'Terminal',
      school: 'Lycée Technique Coulibaly',
      offerTitle: 'Stage Marketing Digital',
      appliedDate: '2024-01-12',
      status: 'new',
      rating: 4.3,
      email: 'fatou.diallo@email.com',
      phone: '+229 XX XX XX XX'
    }
  ];

  const offers = [
    'Stage Développeur Web',
    'Stage Marketing Digital', 
    'Stage Data Analyst',
    'Stage UX/UI Design'
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'new':
        return <Clock className="h-4 w-4 text-blue-500" />;
      case 'reviewed':
        return <Eye className="h-4 w-4 text-purple-500" />;
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
      case 'new':
        return 'Nouvelle';
      case 'reviewed':
        return 'Examinée';
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
      case 'new':
        return 'bg-blue-100 text-blue-800';
      case 'reviewed':
        return 'bg-purple-100 text-purple-800';
      case 'accepted':
        return 'bg-green-100 text-green-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getLevelColor = (level: string) => {
    if (['Seconde', 'Première', 'Terminal'].includes(level)) {
      return 'bg-blue-100 text-blue-800';
    } else if (['Licence 1', 'Licence 2', 'Licence 3'].includes(level)) {
      return 'bg-purple-100 text-purple-800';
    } else if (['Master 1', 'Master 2'].includes(level)) {
      return 'bg-indigo-100 text-indigo-800';
    }
    return 'bg-gray-100 text-gray-800';
  };

  const filteredApplications = applications.filter(app => {
    const matchesStatus = selectedStatus === 'all' || app.status === selectedStatus;
    const matchesOffer = selectedOffer === 'all' || app.offerTitle === selectedOffer;
    const matchesSearch = app.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         app.school.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesOffer && matchesSearch;
  });

  const statusStats = {
    total: applications.length,
    new: applications.filter(app => app.status === 'new').length,
    reviewed: applications.filter(app => app.status === 'reviewed').length,
    accepted: applications.filter(app => app.status === 'accepted').length,
    rejected: applications.filter(app => app.status === 'rejected').length
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Candidatures Reçues
            </h1>
            <p className="text-gray-600 mt-2 text-lg">
              Gérez les candidatures pour vos offres de stage
            </p>
          </div>

          {/* Status Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
            <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-gray-500">
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900">{statusStats.total}</p>
                  <p className="text-sm text-gray-600 font-medium">Total</p>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-blue-500">
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-600">{statusStats.new}</p>
                  <p className="text-sm text-gray-600 font-medium">Nouvelles</p>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-purple-500">
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-purple-600">{statusStats.reviewed}</p>
                  <p className="text-sm text-gray-600 font-medium">Examinées</p>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-green-500">
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-600">{statusStats.accepted}</p>
                  <p className="text-sm text-gray-600 font-medium">Acceptées</p>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-red-500">
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-red-600">{statusStats.rejected}</p>
                  <p className="text-sm text-gray-600 font-medium">Refusées</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Filters */}
          <Card className="mb-8 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-purple-600" />
                <span>Filtres et Recherche</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Rechercher par nom ou école..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 border-gray-200 focus:border-purple-500"
                  />
                </div>
                <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                  <SelectTrigger className="w-full md:w-48 border-gray-200">
                    <SelectValue placeholder="Statut" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tous les statuts</SelectItem>
                    <SelectItem value="new">Nouvelles</SelectItem>
                    <SelectItem value="reviewed">Examinées</SelectItem>
                    <SelectItem value="accepted">Acceptées</SelectItem>
                    <SelectItem value="rejected">Refusées</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={selectedOffer} onValueChange={setSelectedOffer}>
                  <SelectTrigger className="w-full md:w-64 border-gray-200">
                    <SelectValue placeholder="Offre" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Toutes les offres</SelectItem>
                    {offers.map((offer) => (
                      <SelectItem key={offer} value={offer}>{offer}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Applications Table */}
          <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-t-lg">
              <CardTitle className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-purple-600" />
                <span>Candidatures ({filteredApplications.length})</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50/50">
                      <TableHead className="font-semibold">Candidat</TableHead>
                      <TableHead className="font-semibold">Niveau</TableHead>
                      <TableHead className="font-semibold">École</TableHead>
                      <TableHead className="font-semibold">Offre</TableHead>
                      <TableHead className="font-semibold">Note</TableHead>
                      <TableHead className="font-semibold">Date</TableHead>
                      <TableHead className="font-semibold">Statut</TableHead>
                      <TableHead className="font-semibold">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredApplications.map((application) => (
                      <TableRow key={application.id} className="hover:bg-purple-50/50 transition-colors">
                        <TableCell>
                          <div>
                            <div className="font-medium text-gray-900">{application.studentName}</div>
                            <div className="text-sm text-gray-500">{application.email}</div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className={getLevelColor(application.studentLevel)}>
                            {application.studentLevel}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-gray-600">{application.school}</TableCell>
                        <TableCell className="font-medium">{application.offerTitle}</TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-500 mr-1" />
                            <span className="font-semibold">{application.rating}</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-gray-600">
                          {new Date(application.appliedDate).toLocaleDateString('fr-FR')}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            {getStatusIcon(application.status)}
                            <Badge className={getStatusColor(application.status)}>
                              {getStatusText(application.status)}
                            </Badge>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline" className="hover:bg-purple-50" asChild>
                              <Link to={`/company/application/${application.id}`}>
                                <Eye className="h-4 w-4 mr-1" />
                                Voir
                              </Link>
                            </Button>
                            <Button size="sm" variant="outline" className="hover:bg-blue-50">
                              <Download className="h-4 w-4 mr-1" />
                              CV
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default CompanyReceivedApplications;
