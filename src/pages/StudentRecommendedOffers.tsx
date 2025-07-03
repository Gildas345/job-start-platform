
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Star, MapPin, Clock, Building, Users, Search, Filter, Heart, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const StudentRecommendedOffers = () => {
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedDomain, setSelectedDomain] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const offers = [
    {
      id: 1,
      title: 'Stage Développeur Web Frontend',
      company: 'TechCorp Bénin',
      location: 'Cotonou',
      domain: 'Informatique',
      duration: '3 mois',
      level: 'Licence 3',
      matchScore: 95,
      description: 'Développement d\'interfaces utilisateur modernes avec React et TypeScript.',
      requirements: ['React', 'JavaScript', 'CSS'],
      postedDate: '2024-01-20',
      deadline: '2024-02-15',
      salary: '75 000 FCFA'
    },
    {
      id: 2,
      title: 'Stage Marketing Digital',
      company: 'MarketingPro',
      location: 'Porto-Novo',
      domain: 'Marketing',
      duration: '4 mois',
      level: 'Master 1',
      matchScore: 88,
      description: 'Gestion des campagnes publicitaires digitales et analyse des performances.',
      requirements: ['Google Ads', 'Analytics', 'Créativité'],
      postedDate: '2024-01-18',
      deadline: '2024-02-20',
      salary: '60 000 FCFA'
    },
    {
      id: 3,
      title: 'Stage Data Analyst',
      company: 'DataSoft Solutions',
      location: 'Cotonou',
      domain: 'Data Science',
      duration: '6 mois',
      level: 'Master 2',
      matchScore: 92,
      description: 'Analyse de données massives et création de tableaux de bord interactifs.',
      requirements: ['Python', 'SQL', 'Power BI'],
      postedDate: '2024-01-15',
      deadline: '2024-02-10',
      salary: '90 000 FCFA'
    },
    {
      id: 4,
      title: 'Stage UX/UI Design',
      company: 'DesignStudio',
      location: 'Cotonou',
      domain: 'Design',
      duration: '3 mois',
      level: 'Licence 2',
      matchScore: 85,
      description: 'Conception d\'interfaces utilisateur et amélioration de l\'expérience client.',
      requirements: ['Figma', 'Adobe XD', 'Design Thinking'],
      postedDate: '2024-01-12',
      deadline: '2024-02-05',
      salary: '50 000 FCFA'
    }
  ];

  const getMatchColor = (score: number) => {
    if (score >= 90) return 'bg-green-500';
    if (score >= 80) return 'bg-blue-500';
    if (score >= 70) return 'bg-yellow-500';
    return 'bg-gray-500';
  };

  const filteredOffers = offers.filter(offer => {
    const matchesLocation = selectedLocation === 'all' || offer.location === selectedLocation;
    const matchesDomain = selectedDomain === 'all' || offer.domain === selectedDomain;
    const matchesSearch = offer.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         offer.company.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesLocation && matchesDomain && matchesSearch;
  });

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Offres Recommandées
            </h1>
            <p className="text-gray-600 mt-2 text-lg flex items-center">
              <Star className="h-5 w-5 text-yellow-500 mr-2" />
              Stages sélectionnés spécialement pour votre profil
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="shadow-lg border-l-4 border-l-purple-500">
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="p-3 bg-purple-100 rounded-full">
                    <Star className="h-8 w-8 text-purple-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-3xl font-bold text-gray-900">{offers.length}</p>
                    <p className="text-gray-600 font-medium">Recommandations</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-lg border-l-4 border-l-green-500">
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="p-3 bg-green-100 rounded-full">
                    <Users className="h-8 w-8 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-3xl font-bold text-gray-900">
                      {Math.round(offers.reduce((acc, offer) => acc + offer.matchScore, 0) / offers.length)}%
                    </p>
                    <p className="text-gray-600 font-medium">Compatibilité moyenne</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-lg border-l-4 border-l-blue-500">
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <Building className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-3xl font-bold text-gray-900">
                      {new Set(offers.map(offer => offer.company)).size}
                    </p>
                    <p className="text-gray-600 font-medium">Entreprises</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-lg border-l-4 border-l-yellow-500">
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="p-3 bg-yellow-100 rounded-full">
                    <Clock className="h-8 w-8 text-yellow-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-3xl font-bold text-gray-900">5</p>
                    <p className="text-gray-600 font-medium">Nouvelles cette semaine</p>
                  </div>
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
                    placeholder="Rechercher par titre ou entreprise..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 border-gray-200 focus:border-purple-500"
                  />
                </div>
                <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                  <SelectTrigger className="w-full md:w-48 border-gray-200">
                    <SelectValue placeholder="Lieu" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tous les lieux</SelectItem>
                    <SelectItem value="Cotonou">Cotonou</SelectItem>
                    <SelectItem value="Porto-Novo">Porto-Novo</SelectItem>
                    <SelectItem value="Parakou">Parakou</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={selectedDomain} onValueChange={setSelectedDomain}>
                  <SelectTrigger className="w-full md:w-48 border-gray-200">
                    <SelectValue placeholder="Domaine" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tous les domaines</SelectItem>
                    <SelectItem value="Informatique">Informatique</SelectItem>
                    <SelectItem value="Marketing">Marketing</SelectItem>
                    <SelectItem value="Finance">Finance</SelectItem>
                    <SelectItem value="Design">Design</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Offers Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredOffers.map((offer) => (
              <Card key={offer.id} className="shadow-xl border-0 bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 group">
                <CardHeader className="bg-gradient-to-r from-purple-500/5 to-blue-500/5">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl text-gray-900 group-hover:text-purple-600 transition-colors">
                        {offer.title}
                      </CardTitle>
                      <div className="flex items-center mt-2 text-gray-600">
                        <Building className="h-4 w-4 mr-1" />
                        <span className="font-medium">{offer.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className={`w-3 h-3 rounded-full ${getMatchColor(offer.matchScore)}`}></div>
                      <span className="text-sm font-semibold text-gray-700">{offer.matchScore}% match</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <p className="text-gray-600 text-sm leading-relaxed">{offer.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {offer.requirements.map((req) => (
                        <Badge key={req} variant="secondary" className="bg-purple-50 text-purple-700 border-purple-200">
                          {req}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{offer.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{offer.duration}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Users className="h-4 w-4 mr-2" />
                        <span>{offer.level}</span>
                      </div>
                      <div className="flex items-center text-green-600 font-semibold">
                        <span>{offer.salary}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="text-xs text-gray-500">
                        Posté le {new Date(offer.postedDate).toLocaleDateString('fr-FR')}
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" className="hover:bg-purple-50">
                          <Heart className="h-4 w-4 mr-1" />
                          Sauvegarder
                        </Button>
                        <Button size="sm" className="bg-gradient-to-r from-purple-600 to-blue-600" asChild>
                          <Link to={`/internship/${offer.id}`}>
                            <ExternalLink className="h-4 w-4 mr-1" />
                            Voir l'offre
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default StudentRecommendedOffers;
