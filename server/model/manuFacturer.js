/**
 * Created by llan on 2016/5/29.
 */
'use strict';

const mongorito = require('mongorito');
const Model = mongorito.Model;

module.exports =  class ManuFacturer extends Model {
    collection () {
        return 'manuFacturers';
    }
};