
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import * as Icons from "react-icons/fi";


function ContactDetails()
{
  const { t } = useTranslation();
  const [contactDetailsData, setContactDetailsData] = useState
    (null);

  const fetchContactDetailsData = async () =>
  {
    try
    {
      const response = await fetch("/api/contact-info");
      const data = await response.json();
      setContactDetailsData(data);
    } catch (error)
    {
      console.error("Failed to fetch contact details:", error);
    }
  };

  const getColorClass = (id) =>
  {
    switch (id)
    {
      case 1:
        return "text-red-600";
      default:
        return "text-indigo-500";
    }
  };

  useEffect(() =>
  {
    fetchContactDetailsData();
  }, []);

  if (!contactDetailsData) return <p>Loading...</p>;

  return (
    <div className="w-full lg:w-1/2">
      <div className="text-left max-w-xl px-6">
        <h2 className="font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8">
          {t("contactDetails.title")}
        </h2>
        <ul>
          {contactDetailsData.map((contact) =>
          {
            const IconComponent = (Icons)[contact.icon];
            return (
              <li className="flex" key={contact.id}>
                {IconComponent && (
                  <IconComponent
                    className={`text-2xl mr-4 mt-1 ${getColorClass(
                      contact.id
                    )} ${contact.id === 1 ? "animate-bounce" : ""}`}
                  />
                )}
                <span
                  className="text-lg mb-4 text-ternary-dark dark:text-ternary-light cursor-pointer"
                  onClick={() =>
                    contact.action && (window.location.href = contact.action)
                  }>
                  {contact.name}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ContactDetails;
