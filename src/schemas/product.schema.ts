import { Category } from "./category.schema";
import { AdditionalInfo } from "./AdditionalInfo.schema";

export interface Product {
    id: number,
    name: string,
    imageurl: string,
    uploadedDate: Date,
    price: number,
    description: string,
    amount: number,
    category: Category,
    sellerName: string,
    additionalInfo: Array<AdditionalInfo>,
}
