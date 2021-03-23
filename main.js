const { Client, MessageEmbed, Collection } = require("discord.js");
const client = new Client();
const fs = require("fs");
require("./util/eventLoader.js")(client);
const moment = require("moment");
const { TOKEN, OWNER, PREFIX, GUILD_ID, STATUS} = require("./ayarlar/client.json");
client.on("ready", async function() {
  let sanane = client.guilds.cache.get(GUILD_ID).channels.cache.find(r => r.name === "SES KANAL ADI");
let botVoiceChannel = client.channels.cache.get(sanane.id);
if (botVoiceChannel) botVoiceChannel.join().catch(err => console.error("Bot ses kanalına bağlanamadı!"));
console.log(`Giriş Yapıldı!`);
client.user.setPresence({ activity: { name: STATUS }, status: 'dnd' })
console.log(`Logged in as ${client.user.tag}!`);
});


      client.on('voiceStateUpdate', async (___, newState) => {
        if (
        newState.member.user.bot &&
        newState.channelID &&
        newState.member.user.id == client.user.id &&
        !newState.selfDeaf
        ) {
        newState.setSelfDeaf(true);
        }
        });
        client.on('voiceStateUpdate', async (___, newState) => {
        if (
        newState.member.user.bot &&
        newState.channelID &&
        newState.member.user.id == client.user.id &&
        !newState.selfMute
        ) {
        newState.setSelfMute(true);
        }
    }); 
    const log = message => {
      console.log(`${message}`);
    };
    
    client.commands = new Collection();
    client.aliases = new Collection();
    fs.readdir("./omerwid/", (err, files) => {
      if (err) console.error(err);
      log(`${files.length} komut yüklenecek.`);
      files.forEach(f => {
        let props = require(`./omerwid/${f}`);
      console.log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
          client.aliases.set(alias, props.help.name);
        });
      });
    });
    
    client.reload = command => {
      return new Promise((resolve, reject) => {
        try {
          delete require.cache[require.resolve(`./omerwid/${command}`)];
          let cmd = require(`./omerwid/${command}`);
          client.commands.delete(command);
          client.aliases.forEach((cmd, alias) => {
            if (cmd === command) client.aliases.delete(alias);
          });
          client.commands.set(command, cmd);
          cmd.conf.aliases.forEach(alias => {
            client.aliases.set(alias, cmd.help.name);
          });
          resolve();
        } catch (e) {
          reject(e);
        }
      });
    };
    
    client.load = command => {
      return new Promise((resolve, reject) => {
        try {
          let cmd = require(`./omerwid/${command}`);
          client.commands.set(command, cmd);
          cmd.conf.aliases.forEach(alias => {
            client.aliases.set(alias, cmd.help.name);
          });
          resolve();
        } catch (e) {
          reject(e);
        }
      });
    };
    
    client.unload = command => {
      return new Promise((resolve, reject) => {
        try {
          delete require.cache[require.resolve(`./omerwid/${command}`)];
          let cmd = require(`./omerwid/${command}`);
          client.commands.delete(command);
          client.aliases.forEach((cmd, alias) => {
            if (cmd === command) client.aliases.delete(alias);
          });
          resolve();
        } catch (e) {
          reject(e);
        }
      });
    };
    client.elevation = message => {
      if (!message.guild) {
        return;
      }
      let permlvl = 0;
      if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
      if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
      if (message.author.id === OWNER) permlvl = 4;
      return permlvl;
    };
    client.on("messageUpdate", async (oldMsg, newMsg) => {
      let prefix = PREFIX;
      if (newMsg.author.bot) return;
      if (!newMsg.content.startsWith(prefix)) return;
      let command = newMsg.content.split(" ")[0].slice(prefix.length);
      let params = newMsg.content.split(" ").slice(1);
      let perms = client.elevation(newMsg);
      let cmd;
      if (client.commands.has(command)) cmd = client.commands.get(command);
      else if (client.aliases.has(command))
        cmd = client.commands.get(client.aliases.get(command));
      if (cmd) {
        if (perms < cmd.conf.permLevel) return;
        cmd.run(client, newMsg, params, perms);
      }
    });     
    client.login(TOKEN);