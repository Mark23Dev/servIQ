"use client";
import { useState, useEffect } from "react";
import { useVendor } from "@/app/contexts/VendorContext";
import { Vendor } from "@/app/contexts/VendorContext";

const VendorProfilePage = () => {
  const { vendors, updateVendor } = useVendor();
  const [vendor, setVendor] = useState<Vendor | null>(null);
  const [businessName, setBusinessName] = useState("");
  const [businessDescription, setBusinessDescription] = useState("");
  // const [profilePicture, setProfilePicture] = useState<File | null>(null);
  // const [coverPhoto, setCoverPhoto] = useState<File | null>(null);
  const [contactInfo, setContactInfo] = useState("");

  useEffect(() => {
    // For now, we'll use the first vendor in the context
    if (vendors.length > 0) {
      const currentVendor = vendors[0];
      setVendor(currentVendor);
      setBusinessName(currentVendor.profile.businessName);
      setBusinessDescription(currentVendor.profile.description);
      setContactInfo(currentVendor.profile.contactInfo);
    }
  }, [vendors]);

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!vendor) {
      return;
    }
    const updatedProfile = {
      ...vendor.profile,
      businessName,
      description: businessDescription,
      contactInfo,
    };
    const updatedVendor = {
      ...vendor,
      profile: updatedProfile,
    };
    updateVendor(updatedVendor);
  };

  if (!vendor) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Vendor Profile</h1>
        <form onSubmit={handleProfileUpdate}>
          <div className="mb-4">
            <label htmlFor="businessName" className="block text-gray-700 font-bold mb-2">
              Business Name
            </label>
            <input
              type="text"
              id="businessName"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="businessDescription" className="block text-gray-700 font-bold mb-2">
              Business Description
            </label>
            <textarea
              id="businessDescription"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={businessDescription}
              onChange={(e) => setBusinessDescription(e.target.value)}
              rows={4}
              required
            ></textarea>
          </div>
          {/* <div className="mb-4">
            <label htmlFor="profilePicture" className="block text-gray-700 font-bold mb-2">
              Profile Picture
            </label>
            <input
              type="file"
              id="profilePicture"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              onChange={(e) => setProfilePicture(e.target.files[0])}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="coverPhoto" className="block text-gray-700 font-bold mb-2">
              Cover Photo
            </label>
            <input
              type="file"
              id="coverPhoto"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              onChange={(e) => setCoverPhoto(e.target.files[0])}
            />
          </div> */}
          <div className="mb-6">
            <label htmlFor="contactInfo" className="block text-gray-700 font-bold mb-2">
              Contact Information
            </label>
            <input
              type="text"
              id="contactInfo"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={contactInfo}
              onChange={(e) => setContactInfo(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors duration-300 font-bold text-lg"
          >
            Save Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default VendorProfilePage;