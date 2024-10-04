"use client";

import { useState } from 'react';
import Button from '../reusable/Button';
import FormInput from '../reusable/FormInput';
import { useTranslation } from "react-i18next";

function ContactForm()
{
	const { t } = useTranslation();

	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});

	const handleChange = (e) =>
	{
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	async function handleSubmit(event)
	{
		event.preventDefault();

		const data = {
			name: event.target.name.value,
			email: event.target.email.value,
			message: event.target.message.value,
			subject: event.target.subject.value,
		};

		const url = "/api/contact_api/route";
		const response = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});
		console.log('response', response);
		if (response.ok)
		{
			alert("Message sent successfully");
			//reset the form
			event.target.name.value = "";
			event.target.email.value = "";
			event.target.message.value = "";
			event.target.subject.value = "";

		} else
		{
			alert("Error sending message");
		}
	}
	return (
		<div className="w-full lg:w-1/2">
			<div className="leading-loose">
				<form
					onSubmit={handleSubmit} className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
				>
					<p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
						{t('contactDetails.contactForm')}					</p>

					<FormInput
						inputLabel={t('contactDetails.formLabels.fullName')}
						labelFor="name"
						inputType="text"
						inputId="name"
						inputName="name"
						placeholderText={t('contactDetails.formLabels.fullName')}
						ariaLabelName="Name"
						onChange={handleChange}
						value={formData.name}
					/>
					<FormInput
						inputLabel={t('contactDetails.formLabels.email')}
						labelFor="email"
						inputType="email"
						inputId="email"
						inputName="email"
						placeholderText={t('contactDetails.formLabels.email')}
						ariaLabelName="Email"
						onChange={handleChange}
						value={formData.email}
					/>
					<FormInput
						inputLabel={t('contactDetails.formLabels.subject')}
						labelFor="subject"
						inputType="text"
						inputId="subject"
						inputName="subject"
						placeholderText={t('contactDetails.formLabels.subject')}
						ariaLabelName="Subject"
						onChange={handleChange}
						value={formData.subject}
					/>

					<div className="mt-6">
						<label
							className="block text-lg text-primary-dark dark:text-primary-light mb-2"
							htmlFor="message"
						>
							{t('contactDetails.formLabels.message')}
						</label>
						<textarea
							className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
							id="message"
							name="message"
							cols="14"
							rows="6"
							aria-label="Message"
							onChange={handleChange}
							value={formData.message}
						></textarea>
					</div>

					<div className="mt-6">
						<span className="font-general-medium  px-7 py-4 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
							<Button
								title={t('contactDetails.formLabels.sendMessage')}
								type="submit"
								aria-label="Send Message"
							/>
						</span>
					</div>
				</form>
			</div>
		</div>
	);
}

export default ContactForm;
