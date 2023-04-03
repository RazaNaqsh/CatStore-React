import { Link } from "react-router-dom";
import CustomButton from "../../components/CustomButton/CustomButton";

const HomePage = () => {
	return (
		<main className="h-[90vh] ">
			<div className="flex h-full mx-2 md:mx-8 md:p-8 items-center ">
				<section className="px-2 md:px-0">
					<div className=" p-8 ">
						<div>
							<h1 className="font-extrabold tracking-wide">
								Welcome to the Katto store
							</h1>
							<p>Why?</p>
							<p>Cuz Cats are Funny</p>
						</div>
						<div>
							<Link to="/store">
								<CustomButton
									btnName="Browse"
									customStyle="bg-indigo-400 rounded-md hover:bg-indigo-500 transition-all"
								/>
							</Link>
						</div>
					</div>
				</section>
			</div>
		</main>
	);
};

export default HomePage;
