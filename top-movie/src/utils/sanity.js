import { createClient } from '@sanity/client';

export const client = createClient({
    projectId: "1y5b1ltj",
    dataset: "production",
    apiVersion: "2022-10-10",
    token: 'skaETH4XfrOL4DasB7ECHDfnC5004lr0GTDV9WDFVGA9BNdE5ZiLEXiKzZvLZZIeZVxcY7XJjytZQjQYN51rTzb39LMytw0kqbpCG7sEw20Lq6qBydjGfhQDbrVerkqzBdQnxPAwvn070OuBzXE23Qdo0n4qZYjETD4TllrSiwZfu5HewabD',
    useCdn: false,
});

export async function getMovies() {
    try {
        const movies = await client.fetch(`*[_type == 'movie']
        { _id, 
          title, 
          "image": poster.asset->url,
          "categories": categories[].category->{name, _id},
          "overview": overview[0].children[0].text,
          "crewMembers": crewMembers[]{
            job,
            "name": person->name,
            "image": person->image.asset->url
          },
          popularity,
          "castMembers": castMembers[0...5]{
            "name": person->name,
            "character": characterName,
            "image": person->image.asset->url
          }
        }`);
        return movies;
    } catch (error) {
        console.log(error);
    }
}

export async function getActors() {
    try {
        const actors = await client.fetch(`*[_type == "person"]`);
        return actors;
    } catch (error) {
        console.log(error);
    }
}

export async function getCategories() {
    try {
        const categories = await client.fetch(`*[_type == "category"]`);
        return categories;
    } catch (error) {
        console.log(error);
    }
}