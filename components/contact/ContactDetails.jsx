import { contacts } from "../../pages/api/hello";
import { useTranslation } from "react-i18next";
function ContactDetails()
{
	const { t } = useTranslation();
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

	return (
		<div className="w-full lg:w-1/2">
			<div className="text-left max-w-xl px-6">
				<h2 className="font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8">
					{t('contactDetails.title')}
				</h2>
				<ul>
					{contacts?.map((contact) => (
						<li className="flex" key={contact.id}>
							<i
								className={`text-2xl mr-4 mt-1 ${getColorClass(contact.id)} ${contact.id === 1 ? 'animate-bounce' : ''
									}`}
							>
								{contact.icon}
							</i>
							<span className="text-lg mb-4 text-ternary-dark dark:text-ternary-light" onClick={contact.action}>
								{contact.name}
							</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default ContactDetails;
