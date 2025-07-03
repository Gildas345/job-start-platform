
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Eye, EyeOff, Mail, Lock, User, Phone, MapPin, Calendar, Building, GraduationCap, ChevronLeft, ChevronRight } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';

const Register = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    // Step 0: Role selection
    role: '',
    // Step 1: Auth info
    email: '',
    password: '',
    confirmPassword: '',
    // Step 2: Personal info
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    birthDate: '',
    // Step 3: Role-specific info
    // Student
    establishment: '',
    studyLevel: '',
    studyField: '',
    graduationYear: '',
    // Company
    companyName: '',
    sector: '',
    companyAddress: '',
    siret: '',
    companyDescription: '',
    // Step 4: Terms
    acceptTerms: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const { register } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateStep = () => {
    switch (currentStep) {
      case 0:
        return formData.role !== '';
      case 1:
        return formData.email && formData.password && formData.confirmPassword && 
               formData.password === formData.confirmPassword;
      case 2:
        return formData.firstName && formData.lastName && formData.phone;
      case 3:
        if (formData.role === 'student') {
          return formData.establishment && formData.studyLevel && formData.studyField;
        } else {
          return formData.companyName && formData.sector && formData.siret;
        }
      case 4:
        return formData.acceptTerms;
      default:
        return true;
    }
  };

  const nextStep = () => {
    if (validateStep() && currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep()) return;

    setIsLoading(true);
    try {
      const success = await register(formData);
      if (success) {
        toast({
          title: "Inscription réussie !",
          description: "Bienvenue sur StageFacile.",
        });
        navigate('/');
      }
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'inscription.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const steps = [
    'Choix du profil',
    'Authentification',
    'Informations personnelles',
    'Informations spécifiques',
    'Conditions générales'
  ];

  return (
    <Layout showFooter={false}>
      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto animate-fade-in">
          {/* Header */}
          <div className="text-center mb-8">
            <Link to="/" className="flex items-center justify-center space-x-2 mb-8">
              <img 
                src="/lovable-uploads/d9d28b0f-659d-438d-baec-b0ba2361cae3.png" 
                alt="StageFacile" 
                className="h-12 w-auto"
              />
            </Link>
            <h2 className="text-3xl font-bold text-gray-900">Inscription</h2>
            <p className="mt-2 text-gray-600">Créez votre compte StageFacile</p>
          </div>

          {/* Progress indicator */}
          <div className="mb-8">
            <div className="flex justify-between items-center">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    index <= currentStep ? 'bg-primary text-white' : 'bg-gray-200 text-gray-400'
                  }`}>
                    {index + 1}
                  </div>
                  <p className="text-xs mt-1 text-center max-w-20">{step}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 bg-gray-200 rounded-full h-2">
              <div 
                className="bg-primary h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              />
            </div>
          </div>

          <Card className="animate-scale-in">
            <CardHeader>
              <CardTitle className="text-center">{steps[currentStep]}</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Step 0: Role Selection */}
                {currentStep === 0 && (
                  <div className="space-y-4">
                    <p className="text-center text-gray-600 mb-6">Choisissez votre profil</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <button
                        type="button"
                        onClick={() => handleInputChange('role', 'student')}
                        className={`p-6 rounded-lg border-2 transition-all ${
                          formData.role === 'student' 
                            ? 'border-primary bg-primary/5' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <GraduationCap className="h-12 w-12 mx-auto mb-4 text-primary" />
                        <h3 className="font-semibold text-lg">Lycéen/Étudiant</h3>
                        <p className="text-gray-600 text-sm mt-2">Je cherche un stage</p>
                      </button>
                      <button
                        type="button"
                        onClick={() => handleInputChange('role', 'company')}
                        className={`p-6 rounded-lg border-2 transition-all ${
                          formData.role === 'company' 
                            ? 'border-primary bg-primary/5' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <Building className="h-12 w-12 mx-auto mb-4 text-primary" />
                        <h3 className="font-semibold text-lg">Entreprise</h3>
                        <p className="text-gray-600 text-sm mt-2">Je propose des stages</p>
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 1: Authentication */}
                {currentStep === 1 && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Adresse email
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                        <Input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="votre.email@exemple.com"
                          className="pl-10"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Mot de passe
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                        <Input
                          type={showPassword ? 'text' : 'password'}
                          required
                          value={formData.password}
                          onChange={(e) => handleInputChange('password', e.target.value)}
                          placeholder="Votre mot de passe"
                          className="pl-10 pr-10"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                        </button>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Confirmer le mot de passe
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                        <Input
                          type={showConfirmPassword ? 'text' : 'password'}
                          required
                          value={formData.confirmPassword}
                          onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                          placeholder="Confirmez votre mot de passe"
                          className="pl-10 pr-10"
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                        </button>
                      </div>
                      {formData.password && formData.confirmPassword && formData.password !== formData.confirmPassword && (
                        <p className="text-red-500 text-sm mt-1">Les mots de passe ne correspondent pas</p>
                      )}
                    </div>
                  </div>
                )}

                {/* Step 2: Personal Information */}
                {currentStep === 2 && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Prénom *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                          <Input
                            required
                            value={formData.firstName}
                            onChange={(e) => handleInputChange('firstName', e.target.value)}
                            placeholder="Votre prénom"
                            className="pl-10"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nom *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                          <Input
                            required
                            value={formData.lastName}
                            onChange={(e) => handleInputChange('lastName', e.target.value)}
                            placeholder="Votre nom"
                            className="pl-10"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Téléphone *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                        <Input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="Votre numéro de téléphone"
                          className="pl-10"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Adresse
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                        <Input
                          value={formData.address}
                          onChange={(e) => handleInputChange('address', e.target.value)}
                          placeholder="Votre adresse"
                          className="pl-10"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Date de naissance
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                        <Input
                          type="date"
                          value={formData.birthDate}
                          onChange={(e) => handleInputChange('birthDate', e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Role-specific Information */}
                {currentStep === 3 && formData.role === 'student' && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Informations scolaires</h3>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Établissement *
                      </label>
                      <Select value={formData.establishment} onValueChange={(value) => handleInputChange('establishment', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez votre établissement" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="universite-paris">Université de Paris</SelectItem>
                          <SelectItem value="universite-lyon">Université de Lyon</SelectItem>
                          <SelectItem value="universite-marseille">Université de Marseille</SelectItem>
                          <SelectItem value="sciences-po">Sciences Po</SelectItem>
                          <SelectItem value="epitech">Epitech</SelectItem>
                          <SelectItem value="autre">Autre</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Niveau d'études *
                      </label>
                      <Select value={formData.studyLevel} onValueChange={(value) => handleInputChange('studyLevel', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez votre niveau" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="bac">Bac</SelectItem>
                          <SelectItem value="bac+1">Bac+1</SelectItem>
                          <SelectItem value="bac+2">Bac+2</SelectItem>
                          <SelectItem value="bac+3">Bac+3</SelectItem>
                          <SelectItem value="bac+4">Bac+4</SelectItem>
                          <SelectItem value="bac+5">Bac+5</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Filière d'études *
                      </label>
                      <Select value={formData.studyField} onValueChange={(value) => handleInputChange('studyField', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez votre filière" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="informatique">Informatique</SelectItem>
                          <SelectItem value="marketing">Marketing</SelectItem>
                          <SelectItem value="commerce">Commerce</SelectItem>
                          <SelectItem value="ingenierie">Ingénierie</SelectItem>
                          <SelectItem value="droit">Droit</SelectItem>
                          <SelectItem value="medecine">Médecine</SelectItem>
                          <SelectItem value="autre">Autre</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Année de diplôme souhaitée
                      </label>
                      <Select value={formData.graduationYear} onValueChange={(value) => handleInputChange('graduationYear', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez l'année" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="2024">2024</SelectItem>
                          <SelectItem value="2025">2025</SelectItem>
                          <SelectItem value="2026">2026</SelectItem>
                          <SelectItem value="2027">2027</SelectItem>
                          <SelectItem value="2028">2028</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}

                {currentStep === 3 && formData.role === 'company' && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Informations entreprise</h3>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nom de l'entreprise *
                      </label>
                      <Input
                        required
                        value={formData.companyName}
                        onChange={(e) => handleInputChange('companyName', e.target.value)}
                        placeholder="Nom de votre entreprise"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Secteur d'activité *
                      </label>
                      <Select value={formData.sector} onValueChange={(value) => handleInputChange('sector', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez votre secteur" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="informatique">Informatique</SelectItem>
                          <SelectItem value="finance">Finance</SelectItem>
                          <SelectItem value="sante">Santé</SelectItem>
                          <SelectItem value="education">Éducation</SelectItem>
                          <SelectItem value="industrie">Industrie</SelectItem>
                          <SelectItem value="commerce">Commerce</SelectItem>
                          <SelectItem value="autre">Autre</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Adresse de l'entreprise
                      </label>
                      <Input
                        value={formData.companyAddress}
                        onChange={(e) => handleInputChange('companyAddress', e.target.value)}
                        placeholder="Adresse de votre entreprise"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Numéro SIRET/RCS *
                      </label>
                      <Input
                        required
                        value={formData.siret}
                        onChange={(e) => handleInputChange('siret', e.target.value)}
                        placeholder="Numéro SIRET ou RCS"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Description de l'entreprise
                      </label>
                      <Textarea
                        value={formData.companyDescription}
                        onChange={(e) => handleInputChange('companyDescription', e.target.value)}
                        placeholder="Décrivez votre entreprise"
                        rows={4}
                      />
                    </div>
                  </div>
                )}

                {/* Step 4: Terms and Conditions */}
                {currentStep === 4 && (
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="terms"
                        checked={formData.acceptTerms}
                        onCheckedChange={(checked) => handleInputChange('acceptTerms', checked)}
                      />
                      <label htmlFor="terms" className="text-sm text-gray-700">
                        J'accepte les{' '}
                        <Link to="/terms" className="text-primary hover:underline">
                          termes et conditions
                        </Link>{' '}
                        et la{' '}
                        <Link to="/privacy" className="text-primary hover:underline">
                          politique de confidentialité
                        </Link>{' '}
                        de StageFacile.
                      </label>
                    </div>
                  </div>
                )}

                {/* Navigation buttons */}
                <div className="flex justify-between pt-6">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={prevStep}
                    disabled={currentStep === 0}
                    className="flex items-center space-x-2"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    <span>Précédent</span>
                  </Button>

                  {currentStep < 4 ? (
                    <Button
                      type="button"
                      onClick={nextStep}
                      disabled={!validateStep()}
                      className="flex items-center space-x-2"
                    >
                      <span>Suivant</span>
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      disabled={!validateStep() || isLoading}
                      className="flex items-center space-x-2"
                    >
                      {isLoading ? 'Inscription...' : "S'inscrire"}
                    </Button>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Login link */}
          <div className="text-center mt-8">
            <p className="text-gray-600">
              Déjà un compte ?{' '}
              <Link 
                to="/login" 
                className="font-medium text-primary hover:text-primary/80 transition-colors"
              >
                Se connecter
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
