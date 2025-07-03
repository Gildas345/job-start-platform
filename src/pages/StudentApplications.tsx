
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Search, Filter, Clock, CheckCircle, XCircle, Eye, FileText } from 'lucide-react';

const StudentApplications = () => {
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const studyLevels = [
    'Seconde', 'Première', 'Terminal', 'Licence 1', 'Licence 2', 'Licence 3', 
    'Master 1', 'Master 2', 'Doctorat', 'Autre'
  ];

  const applications = [
    {
      id: 1,
      studentName: 'Marie Dupont',
      studentLevel: 'Licence 3',
      company: 'TechCorp',
      position: 'Stage Développeur Web',
      status: 'pending',
      appliedDate: '2024-01-15',
      school: 'IFRI'
    },
    {
      id: 2,
      studentName: 'Jean Martin',
      studentLevel: 'Master 1',
      company: 'DesignStudio',
      position: 'Stage UX/UI Designer',
      status: 'accepted',
      appliedDate: '2024-01-10',
      school: 'HECM'
    },
    {
      id: 3,
      studentName: 'Sophie Bernard',
      studentLevel: 'Licence 2',
      company: 'DataSoft',
      position: 'Stage Data Analyst',
      status: 'rejected',
      appliedDate: '2024-01-05',
      school: 'UATM'
    },
    {
      id: 4,
      studentName: 'Ahmed Kone',
      studentLevel: 'Terminal',
      company: 'WebAgency',
      position: 'Stage Développeur Frontend',
      status: 'pending',
      appliedDate: '2024-01-20',
      school: 'Lycée Technique Coulibaly'
    },
    {
      id: 5,
      studentName: 'Fatou Diallo',
      studentLevel: 'Master 2',
      company: 'InnovateTech',
      position: 'Stage Chef de Projet',
      status: 'accepted',
      appliedDate: '2024-01-18',
      school: 'ISGG'
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

  const getLevelColor = (level: string) => {
    if (['Seconde', 'Première', 'Terminal'].includes(level)) {
      return 'bg-blue-100 text-blue-800';
    } else if (['Licence 1', 'Licence 2', 'Licence 3'].includes(level)) {
      return 'bg-purple-100 text-purple-800';
    } else if (['Master 1', 'Master 2'].includes(level)) {
      return 'bg-indigo-100 text-indigo-800';
    } else if (level === 'Doctorat') {
      return 'bg-pink-100 text-pink-800';
    }
    return 'bg-gray-100 text-gray-800';
  };

  const filteredApplications = applications.filter(app => {
    const matchesLevel = selectedLevel === 'all' || app.studentLevel === selectedLevel;
    const matchesSearch = app.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         app.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         app.position.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesLevel && matchesSearch;
  });

  const levelStats = studyLevels.reduce((acc, level) => {
    acc[level] = applications.filter(app => app.studentLevel === level).length;
    return acc;
  }, {} as Record<string, number>);

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Candidatures par Niveau d'Études
            </h1>
            <p className="text-gray-600 mt-2 text-lg">
              Suivez les candidatures des étudiants selon leur niveau académique
            </p>
          </div>

          {/* Level Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
            {studyLevels.map((level) => (
              <Card key={level} className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
                <CardContent className="p-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary">{levelStats[level] || 0}</p>
                    <p className="text-sm text-gray-600 font-medium">{level}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Filters */}
          <Card className="mb-8 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-primary" />
                <span>Filtres et Recherche</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Rechercher par nom, entreprise ou poste..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 border-gray-200 focus:border-primary"
                  />
                </div>
                <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                  <SelectTrigger className="w-full md:w-64 border-gray-200 focus:border-primary">
                    <SelectValue placeholder="Filtrer par niveau" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tous les niveaux</SelectItem>
                    {studyLevels.map((level) => (
                      <SelectItem key={level} value={level}>
                        {level}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Applications Table */}
          <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-t-lg">
              <CardTitle className="flex items-center space-x-2">
                <FileText className="h-5 w-5 text-primary" />
                <span>Candidatures ({filteredApplications.length})</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50/50">
                      <TableHead className="font-semibold">Étudiant</TableHead>
                      <TableHead className="font-semibold">Niveau</TableHead>
                      <TableHead className="font-semibold">École</TableHead>
                      <TableHead className="font-semibold">Entreprise</TableHead>
                      <TableHead className="font-semibold">Poste</TableHead>
                      <TableHead className="font-semibold">Date</TableHead>
                      <TableHead className="font-semibold">Statut</TableHead>
                      <TableHead className="font-semibold">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredApplications.map((application) => (
                      <TableRow key={application.id} className="hover:bg-primary/5 transition-colors">
                        <TableCell className="font-medium">{application.studentName}</TableCell>
                        <TableCell>
                          <Badge className={getLevelColor(application.studentLevel)}>
                            {application.studentLevel}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-gray-600">{application.school}</TableCell>
                        <TableCell className="font-medium">{application.company}</TableCell>
                        <TableCell>{application.position}</TableCell>
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
                          <Button size="sm" variant="outline" className="hover:bg-primary hover:text-white">
                            <Eye className="h-4 w-4 mr-1" />
                            Voir
                          </Button>
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

export default StudentApplications;
