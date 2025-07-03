
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, MapPin, Briefcase, Clock, Building2, Calendar } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';

const InternshipOffers = () => {
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get('q') || '');
  const [location, setLocation] = useState(searchParams.get('location') || '');
  const [field, setField] = useState(searchParams.get('field') || '');
  const [sortBy, setSortBy] = useState('recent');

  // Mock data for internship offers
  const mockOffers = [
    {
      id: '1',
      title: 'Stage Développeur Web Full-Stack',
      company: 'TechCorp',
      location: 'Paris',
      type: 'Stage de 6 mois',
      field: 'Informatique',
      publishedDate: '2024-01-15',
      description: 'Rejoignez notre équipe de développement pour créer des applications web innovantes...',
      requirements: ['Bac+3 en informatique', 'Connaissance React/Node.js'],
      contractType: 'Stage conventionné'
    },
    {
      id: '2',
      title: 'Stage Marketing Digital',
      company: 'DigitalBoost',
      location: 'Lyon',
      type: 'Stage de 4 mois',
      field: 'Marketing',
      publishedDate: '2024-01-14',
      description: 'Participez à nos campagnes marketing digital et analytics...',
      requirements: ['Bac+2 en marketing', 'Maîtrise des réseaux sociaux'],
      contractType: 'Stage gratifié'
    },
    {
      id: '3',
      title: 'Stage Comptabilité et Finance',
      company: 'FinanceExpert',
      location: 'Marseille',
      type: 'Stage de 3 mois',
      field: 'Finance',
      publishedDate: '2024-01-13',
      description: 'Assistez notre équipe comptable dans la gestion financière...',
      requirements: ['Bac+2 en comptabilité', 'Connaissance Excel'],
      contractType: 'Stage conventionné'
    },
    {
      id: '4',
      title: 'Stage Design UX/UI',
      company: 'CreativeStudio',
      location: 'Toulouse',
      type: 'Stage de 5 mois',
      field: 'Design',
      publishedDate: '2024-01-12',
      description: 'Concevez des interfaces utilisateur innovantes et intuitives...',
      requirements: ['Formation en design', 'Maîtrise Figma/Adobe'],
      contractType: 'Stage gratifié'
    },
    {
      id: '5',
      title: 'Stage Communication et Relations Publiques',
      company: 'ComPro Agency',
      location: 'Nantes',
      type: 'Stage de 4 mois',
      field: 'Communication',
      publishedDate: '2024-01-11',
      description: 'Développez notre stratégie de communication externe...',
      requirements: ['Bac+3 en communication', 'Excellent relationnel'],
      contractType: 'Stage conventionné'
    },
    {
      id: '6',
      title: 'Stage Ingénieur Logiciel',
      company: 'InnovTech',
      location: 'Bordeaux',
      type: 'Stage de 6 mois',
      field: 'Informatique',
      publishedDate: '2024-01-10',
      description: 'Travaillez sur des projets de développement logiciel d\'envergure...',
      requirements: ['École d\'ingénieur', 'Connaissance Java/Python'],
      contractType: 'Stage gratifié'
    }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const filteredOffers = mockOffers.filter(offer => {
    const matchesSearch = !searchTerm || 
      offer.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      offer.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      offer.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesLocation = !location || 
      offer.location.toLowerCase().includes(location.toLowerCase());
    
    const matchesField = !field || 
      offer.field.toLowerCase().includes(field.toLowerCase());
    
    return matchesSearch && matchesLocation && matchesField;
  });

  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen">
        {/* Search Header */}
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Offres de Stage</h1>
            
            {/* Search Filters */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Rechercher..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Localisation"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="relative">
                <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Domaine"
                  value={field}
                  onChange={(e) => setField(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue placeholder="Trier par" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">Plus récent</SelectItem>
                  <SelectItem value="alphabetical">Alphabétique</SelectItem>
                  <SelectItem value="location">Localisation</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="text-gray-600">
              {filteredOffers.length} offre{filteredOffers.length > 1 ? 's' : ''} trouvée{filteredOffers.length > 1 ? 's' : ''}
            </div>
          </div>
        </div>

        {/* Offers List */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid gap-6">
            {filteredOffers.map((offer) => (
              <Card key={offer.id} className="hover:shadow-lg transition-shadow animate-fade-in">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <Link 
                            to={`/internship/${offer.id}`}
                            className="text-xl font-semibold text-gray-900 hover:text-primary transition-colors"
                          >
                            {offer.title}
                          </Link>
                          <div className="flex items-center text-gray-600 mt-2">
                            <Building2 className="h-4 w-4 mr-1" />
                            <span className="font-medium">{offer.company}</span>
                            <MapPin className="h-4 w-4 ml-4 mr-1" />
                            <span>{offer.location}</span>
                          </div>
                        </div>
                        <Badge variant="secondary" className="ml-4">
                          {offer.field}
                        </Badge>
                      </div>
                      
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {offer.description}
                      </p>
                      
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {offer.type}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          Publié le {formatDate(offer.publishedDate)}
                        </div>
                        <Badge variant="outline">
                          {offer.contractType}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="mt-4 md:mt-0 md:ml-6">
                      <Button asChild>
                        <Link to={`/internship/${offer.id}`}>
                          Voir les détails
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredOffers.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-500 text-lg mb-4">
                Aucune offre ne correspond à vos critères de recherche
              </div>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm('');
                  setLocation('');
                  setField('');
                }}
              >
                Réinitialiser les filtres
              </Button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default InternshipOffers;
