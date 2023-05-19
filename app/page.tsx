"use client";

import { FormEvent, useState } from "react";

export default function Home() {
	const [searchPrompt, setSearchPrompt] = useState("");

	const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
		event.preventDefault();
		console.log(searchPrompt);
	};

	return (
		<main className="flex mt-5  justify-center">
			<form
				onSubmit={handleSubmit}
				className="flex items-center space-x-2"
			>
				<input
					onChange={(e) => setSearchPrompt(e.target.value)}
					type="text"
					placeholder="Product to be searched..."
					className="px-2 bg-transparent border rounded-md text-white outline-none"
				/>
				<button className="bg-blue-500 text-white px-2 py-1 rounded-md">
					Search
				</button>
			</form>
		</main>
	);
}
