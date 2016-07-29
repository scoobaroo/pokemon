'use strict';

const Nodal = require('nodal');

class Pokemon extends Nodal.Model {}

Pokemon.setDatabase(Nodal.require('db/main.js'));
Pokemon.setSchema(Nodal.my.Schema.models.Pokemon);

module.exports = Pokemon;
