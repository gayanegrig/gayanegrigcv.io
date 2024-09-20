import Image from 'next/image';

function AboutClientSingle({ title, image }) {
	return (
		<div className="py-5 px-10 border bg-secondary-light border-ternary-light flex justify-center flex-col dark:border-ternary-dark  shadow-sm rounded-lg mb-5 cursor-pointer">
			<Image
				src={image.src}
				alt={title}
				layout="responsive"
				width={100}
				height={50}
			/>
		</div>
	);
}

export default AboutClientSingle;
