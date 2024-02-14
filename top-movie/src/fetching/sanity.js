import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: "1y5b1ltj",
  dataset: "production",
  apiVersion: "2022-10-10",
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
          "crewMembers": crewMembers[0...4]{
            job,
            "name": person->name,
            "image": person->image.asset->url
          },
          popularity,
          "castMembers": castMembers[0...4]{
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
    const actors = await client.fetch(`*[_type == "person"][20...40]{
            name,
            "image": image.asset->url
          }`);
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

export async function getFilteredMovies(category) {
  try {
    const filtered = await client.fetch(`*[_type == 'movie' && "${category}" in categories[].category->name]
        {   
            _id, 
            title, 
            "image": poster.asset->url,
            "categories": categories[].category->{name, _id},
            "overview": overview[0].children[0].text,
            "crewMembers": crewMembers[0...4]{
              job,
              "name": person->name,
              "image": person->image.asset->url
            },
            popularity,
            "castMembers": castMembers[0...4]{
              "name": person->name,
              "character": characterName,
              "image": person->image.asset->url
            }
          }`);
    return filtered;
  } catch (error) {
    console.log(error);
  }
}