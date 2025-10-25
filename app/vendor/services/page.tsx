"use client";
import { useState, useEffect } from "react";
import { useVendor, Vendor } from "@/app/contexts/VendorContext";

const VendorServicesPage = () => {
  const { vendors, addService } = useVendor();
  const [vendor, setVendor] = useState<Vendor | null>(null);
  const [serviceName, setServiceName] = useState("");
  const [serviceDescription, setServiceDescription] = useState("");
  const [servicePrice, setServicePrice] = useState("");
  const [serviceCategory, setServiceCategory] = useState("");

  useEffect(() => {
    // For now, we'll use the first vendor in the context
    if (vendors.length > 0) {
      setVendor(vendors[0]);
    }
  }, [vendors]);

    const handleAddService = (e: React.FormEvent) => {
    e.preventDefault();
    if (!vendor) return;
    const newService = {
      id: Date.now(), // Simple ID generation
      name: serviceName,
      description: serviceDescription,
      price: parseFloat(servicePrice),
      category: serviceCategory,
      image: "",
    };
    addService(vendor.id, newService);
    // Clear form fields
    setServiceName("");
    setServiceDescription("");
    setServicePrice("");
    setServiceCategory("");
  };

  if (!vendor) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md mb-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Add a New Service</h1>
        <form onSubmit={handleAddService}>
          <div className="mb-4">
            <label htmlFor="serviceName" className="block text-gray-700 font-bold mb-2">
              Service Name
            </label>
            <input
              type="text"
              id="serviceName"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={serviceName}
              onChange={(e) => setServiceName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="serviceDescription" className="block text-gray-700 font-bold mb-2">
              Service Description
            </label>
            <textarea
              id="serviceDescription"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={serviceDescription}
              onChange={(e) => setServiceDescription(e.target.value)}
              rows={4}
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="servicePrice" className="block text-gray-700 font-bold mb-2">
              Service Price
            </label>
            <input
              type="text"
              id="servicePrice"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={servicePrice}
              onChange={(e) => setServicePrice(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="serviceCategory" className="block text-gray-700 font-bold mb-2">
              Service Category
            </label>
            <input
              type="text"
              id="serviceCategory"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={serviceCategory}
              onChange={(e) => setServiceCategory(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors duration-300 font-bold text-lg"
          >
            Add Service
          </button>
        </form>
      </div>

      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Your Services</h1>
        {
          vendor.services.length === 0 ? (
            <p className="text-gray-500">You haven&apos;t added any services yet.</p>
          ) : (
            <ul>
              {vendor.services.map((service) => (
                <li key={service.id} className="mb-4 p-4 border border-gray-200 rounded-lg">
                  <h3 className="text-xl font-bold">{service.name}</h3>
                  <p className="text-gray-600">{service.description}</p>
                  <p className="text-gray-800 font-bold mt-2">${service.price}</p>
                  <p className="text-sm text-gray-500 mt-1">Category: {service.category}</p>
                </li>
              ))}
            </ul>
          )
        }
      </div>
    </div>
  );
};

export default VendorServicesPage;
