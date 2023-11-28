
exports.seed = function(knex) {
  return knex('jokes').truncate()
    .then(function () {

      return knex('jokes').insert([
        {joke: "what did the tin Man say when he got run over by a steamroller?", punshline: "Curses! Foil again!"},
        {joke: "how to you make a tissue dance?", punshline: "put a little boogie in it"},
        {joke: "what is an astronaut's favorite part on a computer?", punshline: "the spacebar"},
        {joke: "what do you get from a pamperd cow?", punshline: "spoiled milk"},
        {joke: "why is it annoying to eat next to basketball players?", punshline: "they dribble all the time"},
        {joke: "the numbers 19 and 20 got into a fight.....", punshline: "21"},
      ]);
    });
};
