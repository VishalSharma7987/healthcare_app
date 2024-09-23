import React, { useState, useEffect } from 'react';

const ServiceForm = ({ onAddService, editService }) => {
  const [service, setService] = useState({ name: '', description: '', price: '' });

  useEffect(() => {
    if (editService) {
      setService(editService);
    }
  }, [editService]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setService({ ...service, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (service.name && service.description && service.price) {
      onAddService(service);
      setService({ name: '', description: '', price: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="service-form">
      <input
        type="text"
        name="name"
        placeholder="Service Name"
        value={service.name}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Service Description"
        value={service.description}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="price"
        placeholder="Service Price"
        value={service.price}
        onChange={handleChange}
        required
      />
      <button type="submit">{editService ? 'Update Service' : 'Add Service'}</button>
    </form>
  );
};

export default ServiceForm;
