'use strict';

const Nodal = require('nodal');
const Pokemon = Nodal.require('app/models/pokemon.js');

class PokemonsController extends Nodal.Controller {

  index() {

    Pokemon.query()
      .where(this.params.query)
      .end((err, models) => {

        this.respond(err || models);

      });

  }

  show() {

    Pokemon.find(this.params.route.id, (err, model) => {

      this.respond(err || model);

    });

  }

  create() {

    Pokemon.create(this.params.body, (err, model) => {

      this.respond(err || model);

    });

  }

  update() {

    Pokemon.update(this.params.route.id, this.params.body, (err, model) => {

      this.respond(err || model);

    });

  }

  destroy() {

    Pokemon.destroy(this.params.route.id, (err, model) => {

      this.respond(err || model);

    });

  }

}

module.exports = PokemonsController;
