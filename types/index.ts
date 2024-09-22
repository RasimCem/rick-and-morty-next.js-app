export interface CardProps {
    title: string;
    imagePath: string;
    link: string;
}

export interface SearchProps {
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    placeHolder: string;
    searchQuery: string;
    setSearchQuery: (value: string) => void;
}

export interface CharacterProps {
    id: number;
    name: string;
    status: string;
    species: string;
    location: {
        name: string;
        url: string;
    };
    image: string;
}

export interface EpisodeProps {
    id: number;
    episode: string;
    name: string;
    air_date: string;
    characters: string[];
}

export interface LocationProps {
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents: string[];
}