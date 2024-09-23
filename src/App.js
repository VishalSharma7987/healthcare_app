import React, { useState } from 'react';
import './App.css';
import ServiceForm from './Component/ServiceForm';
import ServiceList from './Component/ServiceList';


const App = () => {
  const [services, setServices] = useState([]);
  const [editService, setEditService] = useState(null);

  const addService = (newService) => {
    if (editService) {
      setServices(services.map(s => s.id === newService.id ? newService : s));
      setEditService(null);
    } else {
      setServices([...services, { ...newService, id: Date.now() }]);
    }
  };

  const deleteService = (id) => {
    setServices(services.filter(service => service.id !== id));
  };

  const handleEdit = (service) => {
    setEditService(service);
  };

  return (
    <div className="app-container">
      <h1>Healthcare Services</h1>
      <ServiceForm onAddService={addService} editService={editService} />
      <ServiceList services={services} onDeleteService={deleteService} onEditService={handleEdit} />
    
    </div>
  );
};

export default App;
