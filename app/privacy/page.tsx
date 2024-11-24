export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <div className="prose dark:prose-invert max-w-none">
        <p>Last updated: {new Date().toLocaleDateString()}</p>

        <h2>1. Introduction</h2>
        <p>
          Welcome to Kamflix. We are committed to protecting your personal
          information and your right to privacy. This Privacy Policy explains
          how we collect, use, disclose, and safeguard your information when you
          use our website and services.
        </p>

        <h2>2. Information We Collect</h2>
        <p>
          We collect information that you provide directly to us, such as when
          you create an account, update your profile, or interact with other
          users. This may include:
        </p>
        <ul>
          <li>Name and contact information</li>
          <li>Username and password</li>
          <li>Profile information (e.g., bio, profile picture)</li>
          <li>Content you post (e.g., reviews, ratings, comments)</li>
          <li>Watchlist and viewing history</li>
        </ul>

        <h2>3. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide, maintain, and improve our services</li>
          <li>
            Personalize your experience and provide content recommendations
          </li>
          <li>
            Communicate with you about our services, updates, and promotional
            offers
          </li>
          <li>Monitor and analyze usage patterns and trends</li>
        </ul>

        <h2>4. Sharing of Information</h2>
        <p>We may share your information with:</p>
        <ul>
          <li>Other users, as part of the social features of our platform</li>
          <li>Service providers who perform services on our behalf</li>
          <li>
            Legal authorities, if required by law or to protect our rights
          </li>
        </ul>

        <h2>5. Data Security</h2>
        <p>
          We implement appropriate technical and organizational measures to
          protect your personal information against unauthorized or unlawful
          processing, accidental loss, destruction, or damage.
        </p>

        <h2>6. Your Rights</h2>
        <p>
          You have the right to access, correct, or delete your personal
          information. You can manage your information through your account
          settings or by contacting us directly.
        </p>

        <h2>7. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify
          you of any changes by posting the new Privacy Policy on this page and
          updating the "Last updated" date.
        </p>

        <h2>8. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us
          at privacy@Kamflix.com.
        </p>
      </div>
    </div>
  );
}
