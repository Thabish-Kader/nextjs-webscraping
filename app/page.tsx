import Image from "next/image";

export default function Home() {
	return (
		<main className="flex">
			<div>
				<input type="text" placeholder="Product to be searched" />
				<button>Search</button>
			</div>
		</main>
	);
}
