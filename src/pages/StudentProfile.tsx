
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { User, GraduationCap, MapPin, Phone, Mail, FileText, Star, Edit3 } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

const StudentProfile = () => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
    phone: '',
    address: '',
    studyLevel: '',
    school: '',
    field: '',
    skills: '',
    bio: '',
    languages: []
  });

  const studyLevels = [
    'Seconde', 'Première', 'Terminal', 'Licence 1', 'Licence 2', 'Licence 3', 
    'Master 1', 'Master 2', 'Doctorat', 'Autre'
  ];

  const skillsList = ['JavaScript', 'Python', 'React', 'Node.js', 'Design', 'Marketing', 'Comptabilité', 'Gestion'];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Mon Profil
              </h1>
              <p className="text-gray-600 mt-2 text-lg">
                Gérez vos informations personnelles et académiques
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
            {/* Profile Card */}
            <div className="lg:col-span-1">
              <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
                <CardHeader className="text-center bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-t-lg">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full mx-auto flex items-center justify-center mb-4">
                    <User className="h-12 w-12 text-white" />
                  </div>
                  <CardTitle className="text-xl">{profile.firstName} {profile.lastName}</CardTitle>
                  <p className="text-gray-600">{profile.studyLevel}</p>
                  <div className="flex items-center justify-center text-gray-500 mt-2">
                    <GraduationCap className="h-4 w-4 mr-1" />
                    <span className="text-sm">{profile.school}</span>
                  </div>
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
                      <span className="text-sm">{profile.address || 'Non renseigné'}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Skills Card */}
              <Card className="mt-6 shadow-xl border-0 bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Star className="h-5 w-5 mr-2 text-yellow-500" />
                    Compétences
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillsList.slice(0, 6).map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-purple-100 text-purple-800">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Profile Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
                <CardHeader className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-t-lg">
                  <CardTitle className="flex items-center">
                    <FileText className="h-5 w-5 mr-2" />
                    Informations Détaillées
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    {/* Personal Information */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <User className="h-5 w-5 mr-2 text-purple-600" />
                        Informations Personnelles
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Prénom</label>
                          <Input
                            value={profile.firstName}
                            onChange={(e) => setProfile({...profile, firstName: e.target.value})}
                            disabled={!isEditing}
                            className="border-gray-200"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Nom</label>
                          <Input
                            value={profile.lastName}
                            onChange={(e) => setProfile({...profile, lastName: e.target.value})}
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
                      </div>
                    </div>

                    {/* Academic Information */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <GraduationCap className="h-5 w-5 mr-2 text-blue-600" />
                        Informations Académiques
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Niveau d'études</label>
                          <Select value={profile.studyLevel} onValueChange={(value) => setProfile({...profile, studyLevel: value})} disabled={!isEditing}>
                            <SelectTrigger className="border-gray-200">
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
                          <label className="block text-sm font-medium text-gray-700 mb-2">École/Université</label>
                          <Input
                            value={profile.school}
                            onChange={(e) => setProfile({...profile, school: e.target.value})}
                            disabled={!isEditing}
                            placeholder="Ex: IFRI"
                            className="border-gray-200"
                          />
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-gray-700 mb-2">Domaine d'études</label>
                          <Input
                            value={profile.field}
                            onChange={(e) => setProfile({...profile, field: e.target.value})}
                            disabled={!isEditing}
                            placeholder="Ex: Génie Informatique"
                            className="border-gray-200"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Bio and Skills */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">À Propos</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Biographie</label>
                          <Textarea
                            value={profile.bio}
                            onChange={(e) => setProfile({...profile, bio: e.target.value})}
                            disabled={!isEditing}
                            placeholder="Parlez de vous, vos objectifs, vos passions..."
                            rows={4}
                            className="border-gray-200"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Compétences</label>
                          <Textarea
                            value={profile.skills}
                            onChange={(e) => setProfile({...profile, skills: e.target.value})}
                            disabled={!isEditing}
                            placeholder="Listez vos compétences séparées par des virgules"
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

export default StudentProfile;
