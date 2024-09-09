"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useForm } from 'react-hook-form';
import { createProduct } from '../products.api';


export default function ProductForm() {

	const { register, handleSubmit } = useForm();

	const onSubmit = handleSubmit(async(data) => {
		console.log(data);
		await createProduct(data);
	})
	return (
		<div>
				<form onSubmit={onSubmit}>
					<Label>Product Name</Label>
					<Input 
						{...register('name')}
					/>
					<Label>Description</Label>
					<Input 
						{...register('description')}
					/>
					<Label>Price</Label>
					<Input 
						{...register('Price')}

					/>
					<Label>Image</Label>
					<Input 
						{...register('image')}
					/>

					<Button>Create Product</Button>
				</form>
		</div>
	)
}
