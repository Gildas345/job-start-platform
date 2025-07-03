
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Clock, Users, DollarSign, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const CompanyPostOffer = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    requirements: '',
    benefits: '',
    location: '',
    duration: '',
    startDate: '',
    endDate: '',
    positions: '',
    salary: '',
    studyLevel: '',
    field: ''
  });

  const studyLevels = [
    'Seconde', 'Première', 'Terminal', 'Licence 1', 'Licence 2', 'Licence 3', 
    'Master 1', 'Master 2', 'Doctorat', 'Autre'
  ];

  const fields = [
    'Génie Civil', 'Génie Informatique', 'Finance Comptabilité', 'Marketing',
    'Développement Web', 'Intelligence Artificielle', 'Réseaux', 'Autre'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Offre publiée avec succès !",
      description: "Votre offre de stage est maintenant visible par les étudiants.",
    });
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Publier une Offre de Stage
            </h1>
            <p className="text-gray-600 mt-2 text-lg">
              Créez une offre attractive pour recruter les meilleurs talents
            </p>
          </div>

          <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-t-lg">
              <CardTitle className="flex items-center space-x-2 text-2xl">
                <Send className="h-6 w-6 text-purple-600" />
                <span>Détails de l'Offre</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Titre du poste *
                    </label>
                    <Input
                      value={formData.title}
                      onChange={(e) => setFormData({...formData, title: e.target.value})}
                      placeholder="Ex: Stage Développeur Web Frontend"
                      className="border-gray-200 focus:border-purple-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Niveau d'études requis *
                    </label>
                    <Select value={formData.studyLevel} onValueChange={(value) => setFormData({...formData, studyLevel: value})}>
                      <SelectTrigger className="border-gray-200 focus:border-purple-500">
                        <SelectValue placeholder="Sélectionner le niveau" />
                      </SelectTrigger>
                      <SelectContent>
                        {studyLevels.map((level) => (
                          <SelectItem key={level} value={level}>{level}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Domaine d'études *
                    </label>
                    <Select value={formData.field} onValueChange={(value) => setFormData({...formData, field: value})}>
                      <SelectTrigger className="border-gray-200 focus:border-purple-500">
                        <SelectValue placeholder="Sélectionner le domaine" />
                      </SelectTrigger>
                      <SelectContent>
                        {fields.map((field) => (
                          <SelectItem key={field} value={field}>{field}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      Lieu du stage *
                    </label>
                    <Input
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                      placeholder="Ex: Cotonou, Bénin"
                      className="border-gray-200 focus:border-purple-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      Durée du stage
                    </label>
                    <Input
                      value={formData.duration}
                      onChange={(e) => setFormData({...formData, duration: e.target.value})}
                      placeholder="Ex: 3 mois"
                      className="border-gray-200 focus:border-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      Date de début
                    </label>
                    <Input
                      type="date"
                      value={formData.startDate}
                      onChange={(e) => setFormData({...formData, startDate: e.target.value})}
                      className="border-gray-200 focus:border-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      Date de fin
                    </label>
                    <Input
                      type="date"
                      value={formData.endDate}
                      onChange={(e) => setFormData({...formData, endDate: e.target.value})}
                      className="border-gray-200 focus:border-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      Nombre de postes
                    </label>
                    <Input
                      type="number"
                      value={formData.positions}
                      onChange={(e) => setFormData({...formData, positions: e.target.value})}
                      placeholder="Ex: 2"
                      className="border-gray-200 focus:border-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                      <DollarSign className="h-4 w-4 mr-1" />
                      Rémunération (optionnel)
                    </label>
                    <Input
                      value={formData.salary}
                      onChange={(e) => setFormData({...formData, salary: e.target.value})}
                      placeholder="Ex: 50 000 FCFA/mois"
                      className="border-gray-200 focus:border-purple-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Description du poste *
                  </label>
                  <Textarea
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    placeholder="Décrivez les missions principales, l'environnement de travail..."
                    rows={4}
                    className="border-gray-200 focus:border-purple-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Compétences requises
                  </label>
                  <Textarea
                    value={formData.requirements}
                    onChange={(e) => setFormData({...formData, requirements: e.target.value})}
                    placeholder="Listez les compétences techniques et soft skills attendues..."
                    rows={3}
                    className="border-gray-200 focus:border-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Avantages offerts
                  </label>
                  <Textarea
                    value={formData.benefits}
                    onChange={(e) => setFormData({...formData, benefits: e.target.value})}
                    placeholder="Formation, encadrement, possibilité d'embauche..."
                    rows={3}
                    className="border-gray-200 focus:border-purple-500"
                  />
                </div>

                <div className="flex space-x-4 pt-6">
                  <Button type="submit" className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3">
                    <Send className="h-5 w-5 mr-2" />
                    Publier l'Offre
                  </Button>
                  <Button type="button" variant="outline" className="flex-1 border-gray-300">
                    Sauvegarder en Brouillon
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default CompanyPostOffer;
