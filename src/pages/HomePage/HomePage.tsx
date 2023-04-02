import CustomButton from "../../components/CustomButton/CustomButton";

const HomePage = () => {
	return (
		<main className="h-[90vh] bg-red-400">
			<div className="flex h-full mx-2 md:mx-8 md:p-8 items-center bg-blue-300">
				<section className="px-2 md:px-0">
					<div className="bg-green-400 p-8 ">
						<div>
							<h1>Welcome to the Katto store</h1>
							<p>Why?</p>
							<p>Cuz Cats are Funny</p>
						</div>
						<div>
							<CustomButton btnName="Browse" />
						</div>
					</div>
				</section>
			</div>
		</main>
	);
};

export default HomePage;
