const { Client } = require('discord.js');
const { registerCommands, registerEvents } = require('./util/registry');
const config = require('../config.json');
const client = new Client();

(async () => {
  client.commands = new Map();
  client.events = new Map();
  client.prefix = config.prefix;
  await registerCommands(client, '../comandos');
  await registerEvents(client, '../eventos');
  await client.login(config.token);
})();