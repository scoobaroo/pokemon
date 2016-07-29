'use strict';

const Nodal = require('nodal');

class CreatePokemons extends Nodal.Migration {

  constructor(db) {
    super(db);
    this.id = 2016072903473380;
  }

  up() {

    return [
      this.createTable("pokemons", [{"name":"name","type":"string"},{"name":"power","type":"string"}])
    ];

  }

  down() {

    return [
      this.dropTable("pokemons")
    ];

  }

}

module.exports = CreatePokemons;
