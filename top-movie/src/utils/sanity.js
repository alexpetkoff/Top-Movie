import { createClient } from '@sanity/client';

export const client = createClient({
    projectId: "1y5b1ltj",
    dataset: "production",
    apiVersion: "2022-10-10",
    token: 'skaETH4XfrOL4DasB7ECHDfnC5004lr0GTDV9WDFVGA9BNdE5ZiLEXiKzZvLZZIeZVxcY7XJjytZQjQYN51rTzb39LMytw0kqbpCG7sEw20Lq6qBydjGfhQDbrVerkqzBdQnxPAwvn070OuBzXE23Qdo0n4qZYjETD4TllrSiwZfu5HewabD',
    useCdn: false,
});

export async function getAll() {
    try {
        const movies = await client.fetch(`*[_type == "movie"]`);
        return movies;
    } catch (error) {
        console.log(error);
    }
}