#!/usr/bin/node
// Prints all characters of a Star Wars movie

const request = require('request');
const id = process.argv[2];
const url = `https://swapi-api.alx-tools.com/api/films/${id}`;

request.get(url, (error, response, body) => {
  if (error) {
    console.log(error);
  } else if (response.statusCode !== 200) {
    console.log(`Error: ${response.statusCode} - ${body}`);
  } else {
    const film = JSON.parse(body);
    console.log(`Characters in "${film.title}":`);
    film.characters.forEach(characterUrl => {
      request.get(characterUrl, (error, response, characterBody) => {
        if (error) {
          console.log(error);
        } else if (response.statusCode !== 200) {
          console.log(`Error: ${response.statusCode} - ${characterBody}`);
        } else {
          const character = JSON.parse(characterBody);
          console.log(character.name);
        }
      });
    });
  }
});

