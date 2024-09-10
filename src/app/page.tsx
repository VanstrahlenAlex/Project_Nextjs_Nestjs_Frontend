
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { getProducts } from "./products/products.api";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import ProductCard from "../components/Product-card";

export const dynamic = 'force-dynamic';
export default async function Home() {

	const products = await getProducts();
	console.log(products);
	
	return (
		<>
			<div className="flex justify-between">
				<h1
					className="text-4xl font-bold mb-2"
				>NextNestApp</h1>
				<Link href={"/products/new"}
					className={buttonVariants()}
				>Create Product</Link>
			</div>

			<div  className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 pt-4">
				{products.map((product) => (
					<ProductCard  product={product} key={product.id}/>
				))}
			</div>
		</>
	);
}
