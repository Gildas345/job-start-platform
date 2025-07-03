
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { User, GraduationCap, MapPin, Phone, Mail, Star, Calendar, FileText, MessageSquare, CheckCircle, XCircle, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const CompanyApplicationDetails = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [status, setStatus] = useState('new');
  const [notes, setNotes] = useState('');

  // Mock data - in real app, fetch based on ID
  const application = {
    id: 1,
    studentName: 'Marie Dupont',
    studentLevel: 'Licence 3',
    school: 'IFRI',
    field: 'Génie Informatique',
    offerTitle: 'Stage Développeur Web Frontend',
    appliedDate: '2024-01-20',
    status: 'new',
    rating: 4.5,
    email: 'marie.dupont@email.com',
    phone: '+229 XX XX XX XX',
    address: 'Cotonou, Bénin',
    bio: 'Étudiante passionnée par le développement web frontend, avec une forte motivation pour apprendre et contribuer à des projets innovants.',
    skills: ['React', 'JavaScript', 'TypeScript', 'CSS3', 'HTML5', 'Git'],
    languages: ['Français (natif)', 'Anglais (intermédiaire)', 'Espagnol (débutant)'],
    experience: [
      {
        title: 'Projet Personnel - Site E-commerce',
        duration: '3 mois',
        description: 'Développement d\'une application e-commerce complète avec React et Node.js'
      },
      {
        title: 'Stage - Agence Web Locale',
        duration: '2 mois',
        description: 'Assistance au développement de sites vitrines pour des PME locales'
      }
    ],
    motivationLetter: 'Je suis très intéressée par cette opportunité de stage dans votre entreprise car elle correspond parfaitement à mes aspirations professionnelles. Votre réputation dans le domaine du développement web et votre engagement envers l\'innovation me motivent particulièrement...'
  };

  const handleStatusChange = (newStatus: string) => {
    setStatus(newStatus);
    toast({
      title: "Statut mis à jour",
      description: `La candidature a été marquée comme ${getStatusText(newStatus).toLowerCase()}.`,
    });
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

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Candidature de {application.studentName}
            </h1>
            <p className="text-gray-600 mt-2 text-lg">
              {application.offerTitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Student Profile */}
            <div className="lg:col-span-1">
              <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
                <CardHeader className="text-center bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-t-lg">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full mx-auto flex items-center justify-center mb-4">
                    <User className="h-12 w-12 text-white" />
                  </div>
                  <CardTitle className="text-xl">{application.studentName}</CardTitle>
                  <Badge className="bg-purple-100 text-purple-800 mt-2">{application.studentLevel}</Badge>
                  <div className="flex items-center justify-center mt-2">
                    <Star className="h-4 w-4 text-yellow-500 mr-1" />
                    <span className="font-semibold">{application.rating}/5</span>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center text-gray-600">
                      <GraduationCap className="h-4 w-4 mr-3" />
                      <div>
                        <div className="font-medium">{application.school}</div>
                        <div className="text-sm">{application.field}</div>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Mail className="h-4 w-4 mr-3" />
                      <span className="text-sm">{application.email}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Phone className="h-4 w-4 mr-3" />
                      <span className="text-sm">{application.phone}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-3" />
                      <span className="text-sm">{application.address}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-3" />
                      <span className="text-sm">
                        Candidature du {new Date(application.appliedDate).toLocaleDateString('fr-FR')}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Status Update */}
              <Card className="mt-6 shadow-xl border-0 bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="h-5 w-5 mr-2" />
                    Statut de la Candidature
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Badge className={getStatusColor(status)}>
                      {getStatusText(status)}
                    </Badge>
                    <div className="flex flex-col space-y-2">
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="hover:bg-purple-50"
                        onClick={() => handleStatusChange('reviewed')}
                      >
                        <Clock className="h-4 w-4 mr-2" />
                        Marquer comme Examinée
                      </Button>
                      <Button 
                        size="sm" 
                        className="bg-green-600 hover:bg-green-700"
                        onClick={() => handleStatusChange('accepted')}
                      >
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Accepter
                      </Button>
                      <Button 
                        size="sm" 
                        variant="destructive"
                        onClick={() => handleStatusChange('rejected')}
                      >
                        <XCircle className="h-4 w-4 mr-2" />
                        Refuser
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Bio */}
              <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <User className="h-5 w-5 mr-2 text-purple-600" />
                    À Propos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">{application.bio}</p>
                </CardContent>
              </Card>

              {/* Skills */}
              <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Star className="h-5 w-5 mr-2 text-yellow-500" />
                    Compétences
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {application.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-purple-100 text-purple-800">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Languages */}
              <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Langues</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {application.languages.map((lang) => (
                      <div key={lang} className="text-gray-700">{lang}</div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Experience */}
              <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="h-5 w-5 mr-2 text-blue-600" />
                    Expérience
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {application.experience.map((exp, index) => (
                      <div key={index} className="border-l-4 border-purple-200 pl-4">
                        <h4 className="font-semibold text-gray-900">{exp.title}</h4>
                        <p className="text-sm text-gray-600 mb-2">{exp.duration}</p>
                        <p className="text-gray-700">{exp.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Motivation Letter */}
              <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MessageSquare className="h-5 w-5 mr-2 text-green-600" />
                    Lettre de Motivation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">{application.motivationLetter}</p>
                </CardContent>
              </Card>

              {/* Notes */}
              <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Notes Internes</CardTitle>
                </CardHeader>
                <CardContent>
                  <Textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Ajoutez vos notes sur cette candidature..."
                    rows={4}
                    className="border-gray-200"
                  />
                  <Button className="mt-4 bg-gradient-to-r from-purple-600 to-blue-600">
                    Sauvegarder les Notes
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CompanyApplicationDetails;
