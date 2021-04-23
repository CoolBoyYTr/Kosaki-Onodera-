const Comandos = require('../../util/estructuras/Comandos');

module.exports = class Ping extends Comandos {
  constructor() {
    super('ping', 'Ejemplos', ["latencia"]);
  }

  run(client, message, args) {
		message.channel.send(`Pong!`)
  }
}