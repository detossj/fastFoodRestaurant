export interface Promotion {
    id: number;
    name: string;
    description?: string | null; 
    price: string | number;
    image_url?: string | null; 
    available: boolean;
    start_date: string; 
    end_date: string;
    created_at?: string; 
    updated_at?: string; 
}