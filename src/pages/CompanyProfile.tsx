
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Building, MapPin, Phone, Mail, Globe, Users, Edit3, Star } from 'lucide-react';

const CompanyProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    companyName: 'TechCorp Bénin',
    sector: 'Technologie',
    description: '',
    address: 'Cotonou, Bénin',
    phone: '',
    email: 'contact@techcorp.bj',
    website: '',
    employees: '',
    founded: '',
    specialties: ''
  });

  const sectors = ['Technologie', 'Finance', 'Marketing', 'Commerce', 'Education', 'Santé', 'Autre'];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Profil Entreprise
              </h1>
              <p className="text-gray-600 mt-2 text-lg">
                Gérez les informations de votre entreprise
              </p>
            </div>
            <Button 
              onClick={() => setIsEditing(!isEditing)}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            >
              <Edit3 className="h-4 w-4 mr-2" />
              {isEditing ? 'Annuler' : 'Modifier'}
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Company Card */}
            <div className="lg:col-span-1">
              <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
                <CardHeader className="text-center bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-t-lg">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full mx-auto flex items-center justify-center mb-4">
                    <Building className="h-12 w-12 text-white" />
                  </div>
                  <CardTitle className="text-xl">{profile.companyName}</CardTitle>
                  <Badge className="bg-purple-100 text-purple-800 mt-2">{profile.sector}</Badge>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center text-gray-600">
                      <Mail className="h-4 w-4 mr-3" />
                      <span className="text-sm">{profile.email}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Phone className="h-4 w-4 mr-3" />
                      <span className="text-sm">{profile.phone || 'Non renseigné'}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-3" />
                      <span className="text-sm">{profile.address}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Globe className="h-4 w-4 mr-3" />
                      <span className="text-sm">{profile.website || 'Non renseigné'}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Stats Card */}
              <Card className="mt-6 shadow-xl border-0 bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Star className="h-5 w-5 mr-2 text-yellow-500" />
                    Statistiques
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Offres publiées</span>
                      <Badge className="bg-blue-100 text-blue-800">12</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Candidatures reçues</span>
                      <Badge className="bg-green-100 text-green-800">48</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Stagiaires recrutés</span>
                      <Badge className="bg-purple-100 text-purple-800">8</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Profile Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
                <CardHeader className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-t-lg">
                  <CardTitle className="flex items-center">
                    <Building className="h-5 w-5 mr-2" />
                    Informations de l'Entreprise
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    {/* Company Information */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <Building className="h-5 w-5 mr-2 text-purple-600" />
                        Informations Générales
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Nom de l'entreprise</label>
                          <Input
                            value={profile.companyName}
                            onChange={(e) => setProfile({...profile, companyName: e.target.value})}
                            disabled={!isEditing}
                            className="border-gray-200"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Secteur d'activité</label>
                          <Input
                            value={profile.sector}
                            onChange={(e) => setProfile({...profile, sector: e.target.value})}
                            disabled={!isEditing}
                            className="border-gray-200"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                          <Input
                            value={profile.email}
                            disabled
                            className="border-gray-200 bg-gray-50"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone</label>
                          <Input
                            value={profile.phone}
                            onChange={(e) => setProfile({...profile, phone: e.target.value})}
                            disabled={!isEditing}
                            placeholder="+229 XX XX XX XX"
                            className="border-gray-200"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Site web</label>
                          <Input
                            value={profile.website}
                            onChange={(e) => setProfile({...profile, website: e.target.value})}
                            disabled={!isEditing}
                            placeholder="https://www.exemple.bj"
                            className="border-gray-200"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Nombre d'employés</label>
                          <Input
                            value={profile.employees}
                            onChange={(e) => setProfile({...profile, employees: e.target.value})}
                            disabled={!isEditing}
                            placeholder="Ex: 50-100"
                            className="border-gray-200"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Address */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                        Localisation
                      </h3>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Adresse complète</label>
                        <Textarea
                          value={profile.address}
                          onChange={(e) => setProfile({...profile, address: e.target.value})}
                          disabled={!isEditing}
                          placeholder="Adresse complète de l'entreprise"
                          rows={3}
                          className="border-gray-200"
                        />
                      </div>
                    </div>

                    {/* Description */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Présentation</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Description de l'entreprise</label>
                          <Textarea
                            value={profile.description}
                            onChange={(e) => setProfile({...profile, description: e.target.value})}
                            disabled={!isEditing}
                            placeholder="Présentez votre entreprise, sa mission, ses valeurs..."
                            rows={4}
                            className="border-gray-200"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Spécialités</label>
                          <Textarea
                            value={profile.specialties}
                            onChange={(e) => setProfile({...profile, specialties: e.target.value})}
                            disabled={!isEditing}
                            placeholder="Listez vos domaines d'expertise"
                            rows={3}
                            className="border-gray-200"
                          />
                        </div>
                      </div>
                    </div>

                    {isEditing && (
                      <div className="flex space-x-4 pt-6">
                        <Button className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600">
                          Sauvegarder
                        </Button>
                        <Button variant="outline" className="flex-1" onClick={() => setIsEditing(false)}>
                          Annuler
                        </Button>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CompanyProfile;
