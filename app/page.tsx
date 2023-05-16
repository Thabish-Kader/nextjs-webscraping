import Image from "next/image";

export default function Home() {
	return (
		<main className="flex">
			<div className="flex items-center">
				<input type="text" placeholder="Product to be searched..." />
				<button>Search</button>
			</div>
		</main>
	);
}
