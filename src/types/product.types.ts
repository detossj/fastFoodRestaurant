export interface Product {
    id: number;
    name: string;
    description?: string | null; 
    price: string | number;
    image_url?: string | null; 
    available: boolean;
    category_id: number;
    created_at?: string; 
    updated_at?: string; 
}
