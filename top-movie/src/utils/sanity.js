import { createClient } from '@sanity/client';

export const client = createClient({
    projectId: "1y5b1ltj",
    dataset: "production",
    apiVersion: "2022-10-10",
    token: 'no need for fetch',
    useCdn: false,
})

export async function getAll() {
    try {
        const movies = await client.fetch(`*[_type == "movie"]`);
        return movies;
    } catch (error) {
        console.log(error);
    }

}