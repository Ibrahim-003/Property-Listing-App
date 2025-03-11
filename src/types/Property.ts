interface Capacity {
    people: number;
    bedroom: number;
}

export interface Property {
    id: number;
    title: string;
    description: string;
    price: number;
    rating: number;
    superhost: boolean;
    location: string;
    capacity: Capacity;
    image: string;
}
