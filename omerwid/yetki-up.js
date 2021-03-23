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
    if (message.member.roles.highest.position <= hedefKişi.roles.highest.position) return message.channel.send(`${member} senden üstün veya aynı rolde!`).then(x => x.delete({ timeout: 5000 }));
    if (!message.member.roles.cache.has(config.staff_role) && !message.member.hasPermission("ADMINISTRATOR")) {
    message.react(no);
    return;    
    };        
if(hedefKişi.roles.cache.has(config.yetki_baslangic)){
    hedefKişi.roles.add(config.yetki_bir)    
    hedefKişi.roles.remove(config.yetki_baslangic)
    message.channel.send(new MessageEmbed()
    .setDescription(`**${hedefKişi} adlı yetkilinin yetki yükseltme işlemi başarılı.** ${client.emojis.cache.get(yes)}`))
    message.guild.channels.cache.get(config.LOG_CHANNEL).send(new MessageEmbed()
    .setDescription(`**${hedefKişi} adlı yetkilinin yetki yükseltme işlemi başarılı.** ${client.emojis.cache.get(yes)}`)
    .addField("Yetki Veren", `${message.author}(\`${message.author.id}\`)`)
    .addField("Yetkisi Yükselen", `${hedefKişi}(\`${hedefKişi.id}\`)`)
    .addField("Yeni Yetkisi",`<@&${config.yetki_bir}>`)
    .addField("Yeni Yetki Permleri", "[YOK]").setTimestamp())
    message.react(yes)
    }
    if(hedefKişi.roles.cache.has(config.yetki_bir)){
    hedefKişi.roles.add(config.yetki_iki) 
    hedefKişi.roles.remove(config.yetki_bir)
    hedefKişi.roles.add(config.cmute_staff)
    message.channel.send(new MessageEmbed()
    .setDescription(`**${hedefKişi} adlı yetkilinin yetki yükseltme işlemi başarılı.** ${client.emojis.cache.get(yes)}`))
    message.guild.channels.cache.get(config.LOG_CHANNEL).send(new MessageEmbed()
    .setDescription(`**${hedefKişi} adlı yetkilinin yetki yükseltme işlemi başarılı.** ${client.emojis.cache.get(yes)}`)
    .addField("Yetki Veren", `${message.author}(\`${message.author.id}\`)`)
    .addField("Yetkisi Yükselen", `${hedefKişi}(\`${hedefKişi.id}\`)`)
    .addField("Yeni Yetkisi",`<@&${config.yetki_iki}>`)
    .addField("Yeni Yetki Permleri", `[<@&${config.cmute_staff}>]`).setTimestamp())
    message.react(yes)
    }
    if(hedefKişi.roles.cache.has(config.yetki_iki)){
    hedefKişi.roles.add(config.yetki_uc) 
    hedefKişi.roles.remove(config.yetki_iki)
    message.channel.send(new MessageEmbed()
    .setDescription(`**${hedefKişi} adlı yetkilinin yetki yükseltme işlemi başarılı.** ${client.emojis.cache.get(yes)}`))
    message.guild.channels.cache.get(config.LOG_CHANNEL).send(new MessageEmbed()
    .setDescription(`**${hedefKişi} adlı yetkilinin yetki yükseltme işlemi başarılı.** ${client.emojis.cache.get(yes)}`)
    .addField("Yetki Veren", `${message.author}(\`${message.author.id}\`)`)
    .addField("Yetkisi Yükselen", `${hedefKişi}(\`${hedefKişi.id}\`)`)
    .addField("Yeni Yetkisi",`<@&${config.yetki_uc}>`)
    .addField("Yeni Yetki Permleri", "[YOK]").setTimestamp())
    message.react(yes)
    }
    if(hedefKişi.roles.cache.has(config.yetki_uc)){
    hedefKişi.roles.add(config.yetki_dort) 
    hedefKişi.roles.remove(config.yetki_uc)
    hedefKişi.roles.add(config.vmute_staff)
    message.channel.send(new MessageEmbed()
    .setDescription(`**${hedefKişi} adlı yetkilinin yetki yükseltme işlemi başarılı.** ${client.emojis.cache.get(yes)}`))
    message.guild.channels.cache.get(config.LOG_CHANNEL).send(new MessageEmbed()
    .setDescription(`**${hedefKişi} adlı yetkilinin yetki yükseltme işlemi başarılı.** ${client.emojis.cache.get(yes)}`)
    .addField("Yetki Veren", `${message.author}(\`${message.author.id}\`)`)
    .addField("Yetkisi Yükselen", `${hedefKişi}(\`${hedefKişi.id}\`)`)
    .addField("Yeni Yetkisi",`<@&${config.yetki_dort}>`)
    .addField("Yeni Yetki Permleri", `[<@&${config.vmute_staff}>]`).setTimestamp())
    message.react(yes)
    }
    if(hedefKişi.roles.cache.has(config.yetki_dort)){
    hedefKişi.roles.add(config.yetki_bes) 
    hedefKişi.roles.remove(config.yetki_dort)
    message.channel.send(new MessageEmbed()
    .setDescription(`**${hedefKişi} adlı yetkilinin yetki yükseltme işlemi başarılı.** ${client.emojis.cache.get(yes)}`))
    message.guild.channels.cache.get(config.LOG_CHANNEL).send(new MessageEmbed()
    .setDescription(`**${hedefKişi} adlı yetkilinin yetki yükseltme işlemi başarılı.** ${client.emojis.cache.get(yes)}`)
    .addField("Yetki Veren", `${message.author}(\`${message.author.id}\`)`)
    .addField("Yetkisi Yükselen", `${hedefKişi}(\`${hedefKişi.id}\`)`)
    .addField("Yeni Yetkisi",`<@&${config.yetki_bes}>`)
    .addField("Yeni Yetki Permleri", "[YOK]").setTimestamp())
    message.react(yes)
    }
    if(hedefKişi.roles.cache.has(config.yetki_bes)){
    hedefKişi.roles.add(config.yetki_alti) 
    hedefKişi.roles.remove(config.yetki_bes)
    hedefKişi.roles.add(config.jail_staff)
    hedefKişi.roles.add(config.trans_staff)
    message.channel.send(new MessageEmbed()
    .setDescription(`**${hedefKişi} adlı yetkilinin yetki yükseltme işlemi başarılı.** ${client.emojis.cache.get(yes)}`))
    message.guild.channels.cache.get(config.LOG_CHANNEL).send(new MessageEmbed()
    .setDescription(`**${hedefKişi} adlı yetkilinin yetki yükseltme işlemi başarılı.** ${client.emojis.cache.get(yes)}`)
    .addField("Yetki Veren", `${message.author}(\`${message.author.id}\`)`)
    .addField("Yetkisi Yükselen", `${hedefKişi}(\`${hedefKişi.id}\`)`)
    .addField("Yeni Yetkisi",`<@&${config.yetki_alti}>`)
    .addField("Yeni Yetki Permleri", `[<@&${config.jail_staff}> || <@&${config.trans_staff}>]`).setTimestamp())
    message.react(yes)
    }
    if(hedefKişi.roles.cache.has(config.yetki_alti)){
    hedefKişi.roles.add(config.yetki_yedi) 
    hedefKişi.roles.remove(config.yetki_alti)
    hedefKişi.roles.add(config.star_bir)
    message.channel.send(new MessageEmbed()
    .setDescription(`**${hedefKişi} adlı yetkilinin yetki yükseltme işlemi başarılı.** ${client.emojis.cache.get(yes)}`))
    message.guild.channels.cache.get(config.LOG_CHANNEL).send(new MessageEmbed()
    .setDescription(`**${hedefKişi} adlı yetkilinin yetki yükseltme işlemi başarılı.** ${client.emojis.cache.get(yes)}`)
    .addField("Yetki Veren", `${message.author}(\`${message.author.id}\`)`)
    .addField("Yetkisi Yükselen", `${hedefKişi}(\`${hedefKişi.id}\`)`)
    .addField("Yeni Yetkisi",`<@&${config.yetki_yedi}>`)
    .addField("Yeni Yetki Permleri", `[<@&${config.star_bir}>]`).setTimestamp())
    message.react(yes)
    }
    if(hedefKişi.roles.cache.has(config.yetki_yedi)){
    hedefKişi.roles.add(config.yetki_sekiz) 
    hedefKişi.roles.remove(config.yetki_yedi)
    hedefKişi.roles.add(config.star_iki)
    hedefKişi.roles.add(config.sorunc_staff)
    hedefKişi.roles.add(config.ban_staff)
    message.channel.send(new MessageEmbed()
    .setDescription(`**${hedefKişi} adlı yetkilinin yetki yükseltme işlemi başarılı.** ${client.emojis.cache.get(yes)}`))
    message.guild.channels.cache.get(config.LOG_CHANNEL).send(new MessageEmbed()
    .setDescription(`**${hedefKişi} adlı yetkilinin yetki yükseltme işlemi başarılı.** ${client.emojis.cache.get(yes)}`)
    .addField("Yetki Veren", `${message.author}(\`${message.author.id}\`)`)
    .addField("Yetkisi Yükselen", `${hedefKişi}(\`${hedefKişi.id}\`)`)
    .addField("Yeni Yetkisi",`<@&${config.yetki_yedi}>`)
    .addField("Yeni Yetki Permleri", `[<@&${config.star_iki}> || <@&${config.ban_staff}> || <@&${config.sorunc_staff}>]`).setTimestamp())
    message.react(yes)
    }
    if(hedefKişi.roles.cache.has(config.yetki_sekiz)){
    hedefKişi.roles.add(config.yetki_dokuz) 
    hedefKişi.roles.remove(config.yetki_sekiz)
    hedefKişi.roles.add(config.star_uc)
    message.channel.send(new MessageEmbed()
    .setDescription(`**${hedefKişi} adlı yetkilinin yetki yükseltme işlemi başarılı.** ${client.emojis.cache.get(yes)}`))
    message.guild.channels.cache.get(config.LOG_CHANNEL).send(new MessageEmbed()
    .setDescription(`**${hedefKişi} adlı yetkilinin yetki yükseltme işlemi başarılı.** ${client.emojis.cache.get(yes)}`)
    .addField("Yetki Veren", `${message.author}(\`${message.author.id}\`)`)
    .addField("Yetkisi Yükselen", `${hedefKişi}(\`${hedefKişi.id}\`)`)
    .addField("Yeni Yetkisi",`<@&${config.yetki_sekiz}>`)
    .addField("Yeni Yetki Permleri", `[<@&${config.star_uc}>]`).setTimestamp())
    message.react(yes)
    }
    if(hedefKişi.roles.cache.has(config.yetki_dokuz)){
    hedefKişi.roles.add(config.yetki_on) 
    hedefKişi.roles.remove(config.yetki_dokuz)
    message.channel.send(new MessageEmbed()
    .setDescription(`**${hedefKişi} adlı yetkilinin yetki yükseltme işlemi başarılı.** ${client.emojis.cache.get(yes)}\n${hedefKişi} **adlı kişi max yetkiye ulaştı!**`))
    message.guild.channels.cache.get(config.LOG_CHANNEL).send(new MessageEmbed()
    .setDescription(`**${hedefKişi} adlı yetkilinin yetki yükseltme işlemi başarılı.** ${client.emojis.cache.get(yes)}`)
    .addField("Yetki Veren", `${message.author}(\`${message.author.id}\`)`)
    .addField("Yetkisi Yükselen", `${hedefKişi}(\`${hedefKişi.id}\`)`)
    .addField("Yeni Yetkisi",`<@&${config.yetki_on}>`)
    .addField("Yeni Yetki Permleri", `[MAX YETKİ]`).setTimestamp())
    message.react(yes)
    }
    if(hedefKişi.roles.cache.has(config.yetki_dokuz)){
    message.channel.send(new MessageEmbed()
    .setDescription(`${client.emojis.cache.get(no)} ${hedefKişi} **adlı kişi max yetkiye ulaştı!**`))
    message.react(no)
    }  
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ytup", "up","yetkiyükselt","ytyükselt"],
  permLevel: 0
};

exports.help = {
  name: 'yetkiup',
  description: '',
  usage: ''
}; 