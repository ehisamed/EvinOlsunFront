interface City {
    title: string;
}

interface Address {
    title: string;
}

interface Metro {
    title: string;
}

interface MockData {
    cities: Record<string, City>;
    addresses: Record<string, Address>;
    metro: Record<string, Metro>;
}

interface Suggestion {
    id: string;
    title: string;
}


export const searchSuggestion = (mockData: MockData, query: string) => {
    if (!query || query.trim() === '') {
        return {
            cities: [],
            addresses: [],
            metro: []
        };
    }

    const lowerQuery = query.toLowerCase();

    const filterSuggestions = <T extends { title: string }>(categoryData: Record<string, T>): Suggestion[] =>
        Object.entries(categoryData)
            .filter(([, value]) => value.title.toLowerCase().startsWith(lowerQuery))
            .map(([id, value]) => ({ id, title: value.title }));

    return {
        cities: filterSuggestions(mockData.cities),
        addresses: filterSuggestions(mockData.addresses),
        metro: filterSuggestions(mockData.metro),
    };
}