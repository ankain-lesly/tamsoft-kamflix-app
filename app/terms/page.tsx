export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <div className="prose dark:prose-invert max-w-none">
        <p>Last updated: {new Date().toLocaleDateString()}</p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using Kamflix, you agree to be bound by these Terms of
          Service and all applicable laws and regulations. If you do not agree
          with any part of these terms, you may not use our services.
        </p>

        <h2>2. User Accounts</h2>
        <p>
          To access certain features of Kamflix, you may be required to create
          an account. You are responsible for maintaining the confidentiality of
          your account and password. You agree to accept responsibility for all
          activities that occur under your account.
        </p>

        <h2>3. User Content</h2>
        <p>
          You retain all rights to any content you submit, post, or display on
          or through Kamflix. By posting content, you grant us a non-exclusive,
          worldwide, royalty-free license to use, modify, publicly perform,
          publicly display, reproduce, and distribute such content on and
          through Kamflix.
        </p>

        <h2>4. Prohibited Activities</h2>
        <p>
          You agree not to engage in any of the following prohibited activities:
        </p>
        <ul>
          <li>Violating any laws or regulations</li>
          <li>Impersonating any person or entity</li>
          <li>Harassing, abusing, or harming another person</li>
          <li>Interfering with or disrupting the services or servers</li>
          <li>
            Attempting to gain unauthorized access to any part of the services
          </li>
        </ul>

        <h2>5. Intellectual Property</h2>
        <p>
          Kamflix and its original content, features, and functionality are
          owned by us and are protected by international copyright, trademark,
          patent, trade secret, and other intellectual property or proprietary
          rights laws.
        </p>

        <h2>6. Termination</h2>
        <p>
          We may terminate or suspend your account and bar access to the service
          immediately, without prior notice or liability, under our sole
          discretion, for any reason whatsoever, including without limitation if
          you breach the Terms.
        </p>

        <h2>7. Limitation of Liability</h2>
        <p>
          In no event shall Kamflix, nor its directors, employees, partners,
          agents, suppliers, or affiliates, be liable for any indirect,
          incidental, special, consequential or punitive damages, including
          without limitation, loss of profits, data, use, goodwill, or other
          intangible losses, resulting from your access to or use of or
          inability to access or use the service.
        </p>

        <h2>8. Changes to Terms</h2>
        <p>
          We reserve the right to modify or replace these Terms at any time. It
          is your responsibility to check the Terms periodically for changes.
        </p>

        <h2>9. Contact Us</h2>
        <p>
          If you have any questions about these Terms, please contact us at
          terms@Kamflix.com.
        </p>
      </div>
    </div>
  );
}
