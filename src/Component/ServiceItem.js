import React from 'react';

const ServiceItem = ({ service, onDeleteService, onEditService }) => {
  return (
    <div className="service-item">
      <h3>{service.name}</h3>
      <p>{service.description}</p>
      <p>Price: ${service.price}</p>
      <div className="service-actions">
        <button onClick={() => onEditService(service)}>Edit</button>
        <button onClick={() => onDeleteService(service.id)}>Delete</button>
      </div>
    </div>
  );
};

export default ServiceItem;
