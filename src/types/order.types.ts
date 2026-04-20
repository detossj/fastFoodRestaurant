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

export interface OrderResponse {
    id: number;
    payment_method: string;
    total: number;
    subtotal: number;
    shipping_cost: number;
    delivery_type: string;
    delivery_address: string;
    items: OrderItem[]; 
    created_at: string;
    order_items: OrderItem[]; 
    order_promotion_items: OrderItem[];
    status: string;
}

export interface ItemDetail {
    name: string;
    image_url: string;
}

export interface OrderItemResponse {
    id: number;
    quantity: number;
    price: number;
    cartType?: string;
    product?: ItemDetail;  
    promotion?: ItemDetail;
}