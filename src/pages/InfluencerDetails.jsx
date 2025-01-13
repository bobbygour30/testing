import React, { useState } from "react";

const InfluencerDetails = () => {
  const [formData, setFormData] = useState({
    name: "",
    about: "",
    category: "",
  });

  const [platforms, setPlatforms] = useState([
    { platform: "", platformLink: "", followers: "" },
  ]);
  const [photo, setPhoto] = useState(null);
  const [preview, setPreview] = useState(null);

  const influencerCategories = [
    "Funny/Comedy", "Entertainment", "Fashion", "Beauty", "Fitness", "Travel",
    "Food", "Lifestyle", "Tech/Gadgets", "Gaming", "DIY/Crafting", "Parenting",
    "Finance", "Motivation", "Education", "Health & Wellness", "Pet/Animal",
    "Music", "Environmental/Sustainability", "Social Activism"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePlatformChange = (index, e) => {
    const { name, value } = e.target;
    const updatedPlatforms = [...platforms];
    updatedPlatforms[index][name] = value;
    setPlatforms(updatedPlatforms);
  };

  const handleAddPlatform = () => {
    setPlatforms([...platforms, { platform: "", platformLink: "", followers: "" }]);
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", formData.name);
    data.append("about", formData.about);
    data.append("category", formData.category);
    data.append("photo", photo);

    platforms.forEach((platform, index) => {
      data.append(`platforms[${index}][platform]`, platform.platform);
      data.append(`platforms[${index}][platformLink]`, platform.platformLink);
      data.append(`platforms[${index}][followers]`, platform.followers);
    });

    try {
      const response = await fetch(`https://hybyconnect.com/api/influencers`, {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        alert("Influencer data submitted successfully!");
        setFormData({ name: "", about: "", category: "" });
        setPhoto(null);
        setPreview(null);
        setPlatforms([{ platform: "", platformLink: "", followers: "" }]);
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

          {/* Category Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
            >
              <option value="">Select Category</option>
              {influencerCategories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Platforms */}
          {platforms.map((platform, index) => (
            <div key={index} className="space-y-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">Platform</label>
                <select
                  name="platform"
                  value={platform.platform}
                  onChange={(e) => handlePlatformChange(index, e)}
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
              <div>
                <label className="block text-sm font-medium text-gray-700">Platform Link</label>
                <input
                  type="url"
                  name="platformLink"
                  value={platform.platformLink}
                  onChange={(e) => handlePlatformChange(index, e)}
                  required
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Followers</label>
                <input
                  type="number"
                  name="followers"
                  value={platform.followers}
                  onChange={(e) => handlePlatformChange(index, e)}
                  required
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
                />
              </div>
            </div>
          ))}

          <button
            type="button"
            onClick={handleAddPlatform}
            className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
          >
            Add Another Platform
          </button>

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
