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
    realImages?: string[];
    objectives?: string[];
    content?: string[];
}
export type Activity = {
    id: string;
    title: string;
    subtitle: string;
    image: string;
    details: string;
};