
import React, { useState, useRef, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { MapPin } from 'lucide-react';

interface AddressAutocompleteProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

const beninAddresses = [
  // Cotonou
  'Cotonou, Quartier Akpakpa',
  'Cotonou, Quartier Cadjehoun',
  'Cotonou, Quartier Ganhi',
  'Cotonou, Quartier Godomey',
  'Cotonou, Quartier Jéricho',
  'Cotonou, Quartier Tokoin',
  'Cotonou, Quartier Vossa',
  'Cotonou, Centre-ville',
  'Cotonou, Fidjrossè',
  'Cotonou, Dantokpa',
  
  // Porto-Novo
  'Porto-Novo, Centre-ville',
  'Porto-Novo, Quartier Fonds',
  'Porto-Novo, Quartier Houéyiho',
  'Porto-Novo, Quartier Tokpota',
  'Porto-Novo, Quartier Davié',
  
  // Parakou
  'Parakou, Centre-ville',
  'Parakou, Quartier Guéma',
  'Parakou, Quartier Bamè',
  'Parakou, Quartier Tchaourou',
  
  // Bohicon
  'Bohicon, Centre-ville',
  'Bohicon, Quartier Gnidjazoun',
  'Bohicon, Quartier Avakpa',
  
  // Abomey
  'Abomey, Centre-ville',
  'Abomey, Quartier Djègbé',
  'Abomey, Quartier Goho',
  
  // Kandi
  'Kandi, Centre-ville',
  'Kandi, Quartier Kassakou',
  
  // Natitingou
  'Natitingou, Centre-ville',
  'Natitingou, Quartier Kotapounga',
  
  // Lokossa
  'Lokossa, Centre-ville',
  'Lokossa, Quartier Houin',
  
  // Ouidah
  'Ouidah, Centre-ville',
  'Ouidah, Quartier Pahou',
  'Ouidah, Quartier Savi',
  
  // Djougou
  'Djougou, Centre-ville',
  'Djougou, Quartier Kolokondé',
  
  // Allada
  'Allada, Centre-ville',
  'Allada, Quartier Attogon',
  
  // Pobè
  'Pobè, Centre-ville',
  'Pobè, Quartier Issaba',
  
  // Savalou
  'Savalou, Centre-ville',
  'Savalou, Quartier Gobé',
  
  // Dassa-Zoumè
  'Dassa-Zoumè, Centre-ville',
  'Dassa-Zoumè, Quartier Paouignan',
  
  // Bassila
  'Bassila, Centre-ville',
  'Bassila, Quartier Manigri',
  
  // Tanguiéta
  'Tanguiéta, Centre-ville',
  'Tanguiéta, Quartier Tanongou',
  
  // Grand-Popo
  'Grand-Popo, Centre-ville',
  'Grand-Popo, Quartier Agoué',
  
  // Comè
  'Comè, Centre-ville',
  'Comè, Quartier Ouèdèmè-Pedah',
];

const AddressAutocomplete: React.FC<AddressAutocompleteProps> = ({
  value,
  onChange,
  placeholder = "Commencez à taper votre adresse...",
  className
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filteredAddresses, setFilteredAddresses] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (value.length > 0) {
      const filtered = beninAddresses.filter(address =>
        address.toLowerCase().includes(value.toLowerCase())
      ).slice(0, 8); // Limite à 8 résultats
      setFilteredAddresses(filtered);
      setIsOpen(filtered.length > 0 && value !== '');
    } else {
      setFilteredAddresses([]);
      setIsOpen(false);
    }
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (address: string) => {
    onChange(address);
    setIsOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div ref={containerRef} className="relative">
      <div className="relative">
        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <Input
          value={value}
          onChange={handleInputChange}
          placeholder={placeholder}
          className={`pl-10 ${className}`}
          onFocus={() => {
            if (filteredAddresses.length > 0) {
              setIsOpen(true);
            }
          }}
        />
      </div>
      
      {isOpen && filteredAddresses.length > 0 && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-auto">
          {filteredAddresses.map((address, index) => (
            <button
              key={index}
              type="button"
              className="w-full px-4 py-2 text-left hover:bg-gray-100 focus:bg-gray-100 focus:outline-none border-b border-gray-100 last:border-b-0"
              onClick={() => handleSelect(address)}
            >
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-gray-400" />
                <span className="text-sm">{address}</span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default AddressAutocomplete;
