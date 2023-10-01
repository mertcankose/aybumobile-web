const Eula = () => {
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
      <h1 className="text-3xl font-bold mb-3">
        End User License Agreement (EULA)
      </h1>

      <h4 className="text-xl font-semibold mb-4">
        No Tolerance for Objectionable Content or Abusive Users
      </h4>

      <h2 className="text-2xl font-bold mb-2">1.1. Content Standards</h2>
      <p>
        Users of the aybü mobil application (hereinafter referred to as "the
        Application") are prohibited from posting, sharing, or transmitting any
        content that is objectionable, offensive, or violates applicable laws or
        regulations. Objectionable content includes, but is not limited to,
        content that is defamatory, harassing, hateful, discriminatory, or
        obscene.
      </p>

      <h2 className="text-2xl font-bold mt-4 mb-2">1.2. Abusive Behavior</h2>
      <p>
        Users must not engage in abusive behavior within the Application, which
        includes, but is not limited to, harassment, bullying, threatening, or
        any other form of abusive conduct towards other users or third parties.
      </p>

      <h2 className="text-2xl font-bold mt-4 mb-2">1.3. Reporting</h2>
      <p>
        If you come across objectionable content or abusive behavior within the
        Application, please report it immediately to mertcankose142@gmail.com or
        samedakgul99@gmail.com for our review and appropriate action.
      </p>

      <h2 className="text-2xl font-bold mt-4 mb-2">4. Consequences</h2>
      <p>
        We reserve the right to investigate and take action against users who
        violate this policy. Actions may include, but are not limited to,
        warning, suspension, or termination of the user's account and access to
        the Application.
      </p>

      <h2 className="text-2xl font-bold mt-4 mb-2">1.5. No Liability</h2>
      <p>
        We are not responsible for the content posted by users, but we will take
        reasonable steps to enforce this policy. We disclaim any liability for
        objectionable content or abusive behavior by users.
      </p>

      <p className="mt-6">
        If you have any questions or concerns regarding these terms, please
        contact us at
      </p>

      <div className="mb-8 mt-8">{contactInfo.map(renderContact)}</div>
    </div>
  );
};

export default Eula;
