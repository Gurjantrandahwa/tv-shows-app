const API_ENDPOINT = 'https://api.tvmaze.com/search/shows?q=all';

export const fetchShows = async () => {
    try {
        const response = await fetch(API_ENDPOINT);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching shows:', error);
        return [];
    }
};
