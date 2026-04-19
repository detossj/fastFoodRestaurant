export interface OrderItem {
    id: number;
    quantity: number;
    price: number;
    cartType: string; 
}

export interface Order {
    payment_method: string;
    total: number;
    subtotal: number;
    shipping_cost: number;
    delivery_type: string;
    delivery_address: string;
    items: OrderItem[]; 
}