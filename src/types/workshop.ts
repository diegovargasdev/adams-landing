export interface Workshop {
    id: number;
    title: string;
    image: string;
    description: string;
    detailImage: string;
    name?: string;
    date?: string;
    time?: string;
    modality?: string;

    objectives?: string[];
    content?: string[];
}
