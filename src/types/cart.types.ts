export interface CartItemType {
    id: string | number;
    name: string;
    price: number;
    quantity: number;
    image_url: string;
    cartType?: string;
    cartId?: string;   
}

