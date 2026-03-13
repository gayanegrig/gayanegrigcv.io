'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import FormInput from '../reusable/FormInput';

function ContactForm()
{
	const { t } = useTranslation();

	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [status, setStatus] = useState({
		type: '',
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
		setStatus({ type: '', message: '' });

		try
		{
			setIsSubmitting(true);

			const data = {
				name: formData.name,
				email: formData.email,
				message: formData.message,
				subject: formData.subject,
			};

			const response = await fetch('/api/contact_api/route', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});

			if (response.ok)
			{
				setStatus({
					type: 'success',
					message: 'Message sent successfully!',
				});

				setFormData({
					name: '',
					email: '',
					subject: '',
					message: '',
				});
			} else
			{
				setStatus({
					type: 'error',
					message: 'Error sending message.',
				});
			}
		} catch (error)
		{
			console.error(error);
			setStatus({
				type: 'error',
				message: 'Something went wrong. Please try again.',
			});
		} finally
		{
			setIsSubmitting(false);
		}
	}

	return (
		<div className="h-full rounded-3xl border border-ternary-light dark:border-slate-700/70 bg-white dark:bg-slate-800/60 backdrop-blur-md shadow-sm p-6 sm:p-8 lg:p-10">
			<form onSubmit={handleSubmit} className="space-y-6">
				<div>
					<p className="text-sm uppercase tracking-[0.2em] text-emerald-500 font-semibold">
						Send message
					</p>



					<p className="mt-4 text-base leading-7 text-ternary-dark dark:text-slate-300">
						Fill out the form below and I’ll reply as soon as possible.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
				</div>

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

				<div>
					<label
						className="block text-lg font-medium text-primary-dark dark:text-slate-100 mb-2"
						htmlFor="message"
					>
						{t('contactDetails.formLabels.message')}
					</label>

					<textarea
						className="w-full px-5 py-3 border border-ternary-light dark:border-slate-700/70 text-primary-dark dark:text-slate-100 bg-white dark:bg-slate-800/70 rounded-2xl shadow-sm text-md outline-none focus:ring-2 focus:ring-emerald-500 transition-all resize-none"
						id="message"
						name="message"
						rows={6}
						aria-label="Message"
						onChange={handleChange}
						value={formData.message}
						placeholder={t('contactDetails.formLabels.message')}
					/>
				</div>

				{status.message && (
					<div
						className={`rounded-2xl px-4 py-3 text-sm font-medium ${status.type === 'success'
							? 'bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400'
							: 'bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400'
							}`}
					>
						{status.message}
					</div>
				)}

				<div>
					<button
						type="submit"
						disabled={isSubmitting}
						aria-label="Send Message"
						className="inline-flex items-center justify-center rounded-2xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-70 disabled:cursor-not-allowed text-white px-6 py-3 font-semibold shadow-lg transition-all duration-300"
					>
						{isSubmitting ? 'Sending...' : t('contactDetails.formLabels.sendMessage')}
					</button>
				</div>
			</form>
		</div>
	);
}

export default ContactForm;