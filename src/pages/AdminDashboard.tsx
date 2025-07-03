
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Users, Building2, FileText, TrendingUp, Calendar, Star, Shield, Settings } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';

const AdminDashboard = () => {
  const stats = {
    totalUsers: 1247,
    totalCompanies: 89,
    totalOffers: 156,
    totalApplications: 892,
    newUsersThisMonth: 34,
    newCompaniesThisMonth: 7,
    activeOffers: 98,
    successRate: 73
  };

  const applicationsByMonth = [
    { month: 'Jan', applications: 45, offers: 12 },
    { month: 'Fév', applications: 52, offers: 15 },
    { month: 'Mar', applications: 78, offers: 18 },
    { month: 'Avr', applications: 89, offers: 22 },
    { month: 'Mai', applications: 95, offers: 28 },
    { month: 'Juin', applications: 112, offers: 31 }
  ];

  const levelDistribution = [
    { name: 'Licence', value: 45, color: '#8B5CF6' },
    { name: 'Master', value: 35, color: '#3B82F6' },
    { name: 'Lycée', value: 15, color: '#10B981' },
    { name: 'Doctorat', value: 5, color: '#F59E0B' }
  ];

  const recentActivities = [
    { type: 'user', message: 'Nouveau étudiant inscrit: Marie Dupont', time: '5 min' },
    { type: 'company', message: 'TechCorp a publié une nouvelle offre', time: '12 min' },
    { type: 'application', message: '5 nouvelles candidatures reçues', time: '25 min' },
    { type: 'offer', message: 'Offre Marketing Digital expirée', time: '1h' }
  ];

  const chartConfig = {
    applications: {
      label: "Candidatures",
      color: "#8B5CF6",
    },
    offers: {
      label: "Offres",
      color: "#3B82F6",
    },
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                Dashboard Administrateur
              </h1>
              <p className="text-gray-600 mt-2 text-lg flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                Vue d'ensemble de la plateforme StageFacile
              </p>
            </div>
            <Button className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700">
              <Settings className="h-4 w-4 mr-2" />
              Paramètres
            </Button>
          </div>

          {/* Main Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 border-l-4 border-l-violet-500">
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="p-3 bg-violet-100 rounded-full">
                    <Users className="h-8 w-8 text-violet-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-3xl font-bold text-gray-900">{stats.totalUsers.toLocaleString()}</p>
                    <p className="text-gray-600 font-medium">Utilisateurs</p>
                    <Badge className="mt-1 bg-green-100 text-green-800">+{stats.newUsersThisMonth} ce mois</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 border-l-4 border-l-blue-500">
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <Building2 className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-3xl font-bold text-gray-900">{stats.totalCompanies}</p>
                    <p className="text-gray-600 font-medium">Entreprises</p>
                    <Badge className="mt-1 bg-green-100 text-green-800">+{stats.newCompaniesThisMonth} ce mois</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 border-l-4 border-l-green-500">
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="p-3 bg-green-100 rounded-full">
                    <FileText className="h-8 w-8 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-3xl font-bold text-gray-900">{stats.totalOffers}</p>
                    <p className="text-gray-600 font-medium">Offres</p>
                    <Badge className="mt-1 bg-blue-100 text-blue-800">{stats.activeOffers} actives</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 border-l-4 border-l-yellow-500">
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="p-3 bg-yellow-100 rounded-full">
                    <TrendingUp className="h-8 w-8 text-yellow-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-3xl font-bold text-gray-900">{stats.totalApplications}</p>
                    <p className="text-gray-600 font-medium">Candidatures</p>
                    <Badge className="mt-1 bg-green-100 text-green-800">{stats.successRate}% succès</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Applications Chart */}
            <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-violet-600" />
                  Évolution Mensuelle
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig} className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={applicationsByMonth}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar dataKey="applications" fill="#8B5CF6" name="Candidatures" />
                      <Bar dataKey="offers" fill="#3B82F6" name="Offres" />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>

            {/* Level Distribution */}
            <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Star className="h-5 w-5 mr-2 text-yellow-500" />
                  Répartition par Niveau
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={levelDistribution}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        dataKey="value"
                        label={({ name, value }) => `${name}: ${value}%`}
                      >
                        {levelDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <ChartTooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recent Activities */}
            <Card className="lg:col-span-2 shadow-xl border-0 bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-blue-600" />
                  Activités Récentes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                      <div className={`p-2 rounded-full mr-4 ${
                        activity.type === 'user' ? 'bg-violet-100' :
                        activity.type === 'company' ? 'bg-blue-100' :
                        activity.type === 'application' ? 'bg-green-100' : 'bg-yellow-100'
                      }`}>
                        {activity.type === 'user' && <Users className="h-4 w-4 text-violet-600" />}
                        {activity.type === 'company' && <Building2 className="h-4 w-4 text-blue-600" />}
                        {activity.type === 'application' && <FileText className="h-4 w-4 text-green-600" />}
                        {activity.type === 'offer' && <TrendingUp className="h-4 w-4 text-yellow-600" />}
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-900">{activity.message}</p>
                        <p className="text-sm text-gray-500">Il y a {activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Actions Rapides</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start hover:bg-violet-50">
                    <Users className="h-4 w-4 mr-2" />
                    Gérer les Utilisateurs
                  </Button>
                  <Button variant="outline" className="w-full justify-start hover:bg-blue-50">
                    <Building2 className="h-4 w-4 mr-2" />
                    Gérer les Entreprises
                  </Button>
                  <Button variant="outline" className="w-full justify-start hover:bg-green-50">
                    <FileText className="h-4 w-4 mr-2" />
                    Modérer les Offres
                  </Button>
                  <Button variant="outline" className="w-full justify-start hover:bg-yellow-50">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    Voir les Statistiques
                  </Button>
                  <Button variant="outline" className="w-full justify-start hover:bg-gray-50">
                    <Settings className="h-4 w-4 mr-2" />
                    Paramètres Système
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
