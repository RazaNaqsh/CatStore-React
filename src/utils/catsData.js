import { nanoid } from "@reduxjs/toolkit";
import Ragdoll from "../assets/catImgs/ragdoll.jpg";
import Persian from "../assets/catImgs/persian.jpg";
import ScottishFold from "../assets/catImgs/scottishFold.avif";
import Abyssinian from "../assets/catImgs/abbyssinian.jpg";

const catsData = [
	{
		id: nanoid(),
		name: "Ragdoll",
		lifespan: "12-17 years",
		weightRange: "12-20 Pounds",
		src: Ragdoll,
		isSold: false,
	},
	{
		id: nanoid(),
		name: "Persian",
		lifespan: "14-15 years",
		weightRange: "9-14 Pounds",
		src: Persian,
		isSold: false,
	},
	{
		id: nanoid(),
		name: "Scottish Fold",
		lifespan: "11-14 years",
		weightRange: "5-11 Pounds",
		src: ScottishFold,
		isSold: false,
	},
	{
		id: nanoid(),
		name: "Abyssinian",
		lifespan: "14-15 years",
		weightRange: "7-10 Pounds",
		src: Abyssinian,
		isSold: false,
	},
];

export default catsData;
