"use client";
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import { deleteProduct } from '@/app/products/products.api';
import { useRouter } from 'next/navigation';

export default function ProductCard( { product} : any ) {

	const router = useRouter();

	async function  handleRemoveProduct(id) {
		console.log(id);
		await deleteProduct(id);
		router.refresh();
	}
	return (
			<div>
					<Card
						// key={product.id}
						>
						<CardHeader>
							<CardTitle className="flex justify-between">{product.name}
								<span className="text-sm font-bold text-gray-500 ">${product.price}</span>
							</CardTitle>
						</CardHeader>
						<img src={product.image} alt="Product Image" width={300} height={300} />
						<CardContent>	
							<p>{product.description}</p>
						</CardContent>
						<CardFooter className="flex justify-between">
							<Button className="mt-5">Comprar</Button>
							<Button className="mt-5" variant={"destructive"} onClick={() => handleRemoveProduct(product.id)}>Eliminar</Button>
						</CardFooter>
					</Card>
				
			</div>
	)
}
