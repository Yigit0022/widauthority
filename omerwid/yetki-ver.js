const { MessageEmbed } = require('discord.js')
const config = require("../ayarlar/yetkirol.json");
const { yes, no } = require("../ayarlar/client.json");
exports.run = (client,message,args) => {
    let hedefKişi = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if(!hedefKişi) {
        message.react(no);
        message.channel.send(`${client.emojis.cache.get(no)} **Kişi Belirt!**`).then(msg => msg.delete({ timeout: 5000, reason: 'mesaj silme' }));
        return;    
        };
    if (!message.member.roles.cache.some(r => [config.yetkili_alim, config.staff_role].includes(r.id)) && !message.member.hasPermission("ADMINISTRATOR")) {
    message.react(no);
    return;    
    };    
    if(!hedefKişi.user.username.includes(config.tag)){
    message.channel.send('Yetkili yapacağın kişinin önce tag alması lazım!')    
    message.react(no);
    return;
    };
    let embed = new MessageEmbed()
    .setDescription(`${hedefKişi} adlı kişi yetkili oldu!`)
    .addField("Yetki Veren", `${message.author}(\`${message.author.id}\`)`)
    .addField("Yeni Yetkili", `${hedefKişi}(\`${hedefKişi.id}\`)`)
    .addField("Aldığı Yetki Rolü", `<@&${config.yetki_baslangic}>`)
    .addField("Aldığı Yetki Perms", `[<@&${config.register_staff}> || <@&${config.nick_staff}>]`)
    .setTimestamp();
    hedefKişi.roles.add(config.yetki_baslangic)
    hedefKişi.roles.add(config.register_staff)
    hedefKişi.roles.add(config.nick_staff)
    message.guild.channels.cache.get(config.LOG_CHANNEL).send(embed)
    message.react(yes)


}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yetki-ver","ytver","yt-ver"],
  permLevel: 0
};

exports.help = {
  name: 'yetkiver',
  description: '',
  usage: ''
}; 
