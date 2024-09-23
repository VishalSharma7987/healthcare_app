import React from 'react';
import ServiceItem from './ServiceItem';

const ServiceList = ({ services, onDeleteService, onEditService }) => {
  return (
    <div className="service-list">
      {services.length > 0 ? (
        services.map(service => (
          <ServiceItem
            key={service.id}
            service={service}
            onDeleteService={onDeleteService}
            onEditService={onEditService}
          />
        ))
      ) : (
        <p>No services added yet.</p>
      )}
    </div>
  );
};

export default ServiceList;
