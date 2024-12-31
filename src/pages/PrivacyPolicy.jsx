import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-8 text-center">
          Privacy Policy
        </h2>
        <div className="text-gray-300 leading-relaxed space-y-6">
          <h3 className="text-2xl font-semibold text-yellow-400 mt-6">1. Information We Collect</h3>
          <p><strong>1.1 Personal Information</strong></p>
          <p>Name, email address, phone number, and business details provided during account creation or service inquiries.</p>

          <p><strong>1.2 Usage Data</strong></p>
          <p>Information about how you interact with our website, apps, or services, including IP address, browser type, and pages viewed.</p>

          <p><strong>1.3 Payment Information</strong></p>
          <p>Billing details such as credit card information (processed securely via third-party payment gateways).</p>

          <p><strong>1.4 Social Media Data</strong></p>
          <p>Data accessed via integrations with platforms like Facebook, Instagram, or LinkedIn for marketing services.</p>

          <h3 className="text-2xl font-semibold text-yellow-400 mt-6">2. How We Use Your Information</h3>
          <ul className="list-disc ml-6 space-y-2">
            <li>To provide and improve our services, including SaaS tools for marketing, social media management, and automation.</li>
            <li>To communicate with you about updates, new features, or service changes.</li>
            <li>To personalize your experience and recommend solutions tailored to your needs.</li>
            <li>To process payments and ensure secure transactions.</li>
            <li>To analyze usage trends and improve our platform’s performance.</li>
          </ul>

          <h3 className="text-2xl font-semibold text-yellow-400 mt-6">3. Sharing of Information</h3>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Service Providers:</strong> With third-party vendors who assist in delivering our services, such as payment processors or hosting providers.</li>
            <li><strong>Legal Compliance:</strong> If required by law or to protect our rights, property, or users.</li>
            <li><strong>Business Transfers:</strong> In case of mergers, acquisitions, or sales of company assets.</li>
          </ul>

          <h3 className="text-2xl font-semibold text-yellow-400 mt-6">4. Data Security</h3>
          <p>
            We implement robust measures to protect your data, including encryption, access control, and regular security audits. While we strive to secure your information, no method of electronic transmission is 100% secure.
          </p>

          <h3 className="text-2xl font-semibold text-yellow-400 mt-6">5. Your Rights</h3>
          <ul className="list-disc ml-6 space-y-2">
            <li>Access and review the personal information we hold about you.</li>
            <li>Request corrections to inaccurate data.</li>
            <li>Opt out of marketing communications at any time.</li>
            <li>Request deletion of your data, subject to legal obligations.</li>
          </ul>

          <h3 className="text-2xl font-semibold text-yellow-400 mt-6">6. Cookies and Tracking Technologies</h3>
          <p>
            We use cookies and similar technologies to enhance user experience and analyze site performance. You can control cookie preferences through your browser settings.
          </p>

          <h3 className="text-2xl font-semibold text-yellow-400 mt-6">7. Third-Party Links</h3>
          <p>
            Our website or services may contain links to third-party platforms. We are not responsible for their privacy practices and encourage you to review their policies.
          </p>

          <h3 className="text-2xl font-semibold text-yellow-400 mt-6">8. International Users</h3>
          <p>
            If you access our services from outside [your country], your information may be transferred to and processed in [your country] or other locations with different data protection laws.
          </p>

          <h3 className="text-2xl font-semibold text-yellow-400 mt-6">9. Changes to This Policy</h3>
          <p>
            We may update this Privacy Policy from time to time. Significant changes will be communicated to you via email or platform notifications.
          </p>

          <h3 className="text-2xl font-semibold text-yellow-400 mt-6">Contact Us</h3>
          <p>
            If you have any questions or concerns about this Privacy Policy, please contact us at 
            <a href="mailto:info@hyhyconnect.com" className="text-yellow-400 underline">info@hyhyconnect.com</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
