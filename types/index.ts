export interface CardProps {
    title: string;
    imagePath: string;
    link: string;
}

export interface SearchProps {
    handleSubmit: (value: string) => void;
    placeHolder: string;
}

export interface CharacterProps {
    id: number;
    name: string;
    status: string;
    species: string;
    location: {
        name: string;
        url: string;
    },
    image: string;
}