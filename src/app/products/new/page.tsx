
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import ProductForm from './product-form'

export default function ProductsNewPage() {
	return (
		<div className='h-screen flex justify-center items-center'>
			<Card>
				<CardHeader>
					<CardTitle>Create a New Product</CardTitle>
				</CardHeader>
				<CardContent>
					<ProductForm/>
				</CardContent>
			</Card>
		</div>
	)
}
