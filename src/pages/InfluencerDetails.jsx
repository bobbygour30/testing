import React, { useState } from "react";

const InfluencerDetails = () => {
  const [formData, setFormData] = useState({
    name: "",
    platform: "",
    platformLink: "",
    followers: "",
    about: "", 
  });

  const [photo, setPhoto] = useState(null); // For storing the uploaded photo
  const [preview, setPreview] = useState(null); // For image preview

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(file);
      setPreview(URL.createObjectURL(file)); // Generate a preview URL
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", formData.name);
    data.append("platform", formData.platform);
    data.append("platformLink", formData.platformLink);
    data.append("followers", formData.followers);
    data.append("about", formData.about); 
    data.append("photo", photo); 

    try {
      const response = await fetch("https://your-backend-endpoint.com/api/influencers", {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        alert("Influencer data submitted successfully!");
        setFormData({ name: "", platform: "", platformLink: "", followers: "", about: "" });
        setPhoto(null);
        setPreview(null);
      } else {
        alert("Failed to submit influencer data.");
      }
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#F7FF80] via-white to-[#F7FF80] flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-gradient-to-r from-[#F7FF80] via-white to-[#F7FF80] rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Influencer Submission Form
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Photo Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              required
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
            />
            {preview && (
              <img
                src={preview}
                alt="Preview"
                className="mt-4 w-full h-40 object-cover rounded-lg border"
              />
            )}
          </div>

          {/* Platform */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Platform</label>
            <select
              name="platform"
              value={formData.platform}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
            >
              <option value="">Select Platform</option>
              <option value="Instagram">Instagram</option>
              <option value="YouTube">YouTube</option>
              <option value="TikTok">TikTok</option>
              <option value="Twitter">Twitter</option>
              <option value="Facebook">Facebook</option>
            </select>
          </div>

          {/* Platform Link */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Platform Link</label>
            <input
              type="url"
              name="platformLink"
              value={formData.platformLink}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Followers */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Followers</label>
            <input
              type="number"
              name="followers"
              value={formData.followers}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
            />
          </div>

          {/* About */}
          <div>
            <label className="block text-sm font-medium text-gray-700">About</label>
            <textarea
              name="about"
              value={formData.about}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
              rows="4"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default InfluencerDetails;
