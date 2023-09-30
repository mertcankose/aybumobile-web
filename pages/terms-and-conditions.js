import React from "react";

const TermsAndConditions = () => {
  const contactInfo = [
    {
      name: "Mertcan Köse",
      email: "mertcankose142@gmail.com",
    },
    {
      name: "Abdü Samed Akgül",
      email: "samedakgul99@gmail.com",
    },
  ];

  const handleEmailPress = (email) => {
    window.location.href = `mailto:${email}`;
  };

  const renderContact = (contact) => (
    <div key={contact.name} className="mb-4">
      <p className="text-lg font-bold">{contact.name}</p>

      <button
        onClick={() => handleEmailPress(contact.email)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {contact.email}
      </button>
    </div>
  );

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>

      <h2 className="text-2xl font-bold mb-2">1. Acceptance of Terms</h2>
      <p>
        By using this application, you agree to comply with and be bound by the
        following terms and conditions of use. If you do not agree to these
        terms, please do not use this application.
      </p>

      <h2 className="text-2xl font-bold mt-4 mb-2">2. Prohibited Content</h2>
      <p>
        Users are prohibited from uploading, posting, or transmitting any
        content that is objectionable or abusive. This includes, but is not
        limited to, content that is offensive, harmful, or violates the rights
        of others.
      </p>

      <h2 className="text-2xl font-bold mt-4 mb-2">3. User Conduct</h2>
      <p>
        Users are expected to conduct themselves in a respectful and lawful
        manner while using the application. Any violation of these terms may
        result in the termination of your account and legal action if necessary.
      </p>

      <h2 className="text-2xl font-bold mt-4 mb-2">4. No Tolerance Policy</h2>
      <p>
        This application has a zero-tolerance policy for objectionable content
        and abusive users. Users found to be in violation of this policy will be
        immediately removed and may face legal consequences.
      </p>

      <h2 className="text-2xl font-bold mt-4 mb-2">5. Advertisements</h2>
      <p>
        This application may contain advertisements. By using the application,
        you acknowledge and agree that these advertisements are provided by
        third-party entities. We are not responsible for the content of these
        advertisements.
      </p>

      <h2 className="text-2xl font-bold mt-4 mb-2">6. Changes to Terms</h2>
      <p>
        These terms and conditions may be updated or modified at any time
        without prior notice. It is the user's responsibility to review these
        terms regularly to stay informed of any changes.
      </p>

      <p>
        If you have any questions or concerns regarding these terms, please
        contact us at
      </p>

      <div className="mb-8 mt-8">{contactInfo.map(renderContact)}</div>
    </div>
  );
};

export default TermsAndConditions;
