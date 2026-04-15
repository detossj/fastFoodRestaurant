export interface Store {
    id: string | number;
    image_url: string;
    direction: string;
    sub_direction?: string | null;
    schedule?: string | null;
    phone?: string | null;
}