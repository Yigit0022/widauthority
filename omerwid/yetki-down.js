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
if(hedefKişi.roles.cache.has(config.yetki_bir)){
    hedefKişi.roles.add(config.yetki_baslangic)    
    hedefKişi.roles.remove(config.yetki_bir)
    message.channel.send(new MessageEmbed()
    .setDescription(`**${hedefKişi} adlı yetkilinin yetki düşürme işlemi başarılı.** ${client.emojis.cache.get(yes)}`))
    message.guild.channels.cache.get(config.LOG_CHANNEL).send(new MessageEmbed()
    .setDescription(`**${hedefKişi} adlı yetkilinin yetki düşürme işlemi başarılı.** ${client.emojis.cache.get(yes)}`)
    .addField("Yetki Düşüren", `${message.author}(\`${message.author.id}\`)`)
    .addField("Yetkisi Düşen", `${hedefKişi}(\`${hedefKişi.id}\`)`)
    .addField("Yeni Yetkisi",`<@&${config.yetki_baslangic}>`)
    .addField("Alınan Yetki Permleri", "[YOK]").setTimestamp())
    message.react(yes)
    }
    if(hedefKişi.roles.cache.has(config.yetki_iki)){
    hedefKişi.roles.add(config.yetki_bir) 
    hedefKişi.roles.remove(config.yetki_iki)
    hedefKişi.roles.remove(config.cmute_staff)
    message.channel.send(new MessageEmbed()
    .setDescription(`**${hedefKişi} adlı yetkilinin yetki düşürme işlemi başarılı.** ${client.emojis.cache.get(yes)}`))
    message.guild.channels.cache.get(config.LOG_CHANNEL).send(new MessageEmbed()
    .setDescription(`**${hedefKişi} adlı yetkilinin yetki düşürme işlemi başarılı.** ${client.emojis.cache.get(yes)}`)
    .addField("Yetki Düşüren", `${message.author}(\`${message.author.id}\`)`)
    .addField("Yetkisi Düşen", `${hedefKişi}(\`${hedefKişi.id}\`)`)
    .addField("Yeni Yetkisi",`<@&${config.yetki_bir}>`)
    .addField("Alınan Yetki Permleri", `[<@&${config.cmute_staff}>]`).setTimestamp())
    message.react(yes)
    }
    if(hedefKişi.roles.cache.has(config.yetki_uc)){
    hedefKişi.roles.add(config.yetki_iki) 
    hedefKişi.roles.remove(config.yetki_uc)
    message.channel.send(new MessageEmbed()
    .setDescription(`**${hedefKişi} adlı yetkilinin yetki düşürme işlemi başarılı.** ${client.emojis.cache.get(yes)}`))
    message.guild.channels.cache.get(config.LOG_CHANNEL).send(new MessageEmbed()
    .setDescription(`**${hedefKişi} adlı yetkilinin yetki düşürme işlemi başarılı.** ${client.emojis.cache.get(yes)}`)
    .addField("Yetki Düşüren", `${message.author}(\`${message.author.id}\`)`)
    .addField("Yetkisi Düşen", `${hedefKişi}(\`${hedefKişi.id}\`)`)
    .addField("Yeni Yetkisi",`<@&${config.yetki_iki}>`)
    .addField("Alınan Yetki Permleri", "[YOK]").setTimestamp())
    message.react(yes)
    }
    if(hedefKişi.roles.cache.has(config.yetki_dort)){
    hedefKişi.roles.add(config.yetki_uc) 
    hedefKişi.roles.remove(config.yetki_dort)
    hedefKişi.roles.remove(config.vmute_staff)
    message.channel.send(new MessageEmbed()
    .setDescription(`**${hedefKişi} adlı yetkilinin yetki düşürme işlemi başarılı.** ${client.emojis.cache.get(yes)}`))
    message.guild.channels.cache.get(config.LOG_CHANNEL).send(new MessageEmbed()
    .setDescription(`**${hedefKişi} adlı yetkilinin yetki düşürme işlemi başarılı.** ${client.emojis.cache.get(yes)}`)
    .addField("Yetki Düşüren", `${message.author}(\`${message.author.id}\`)`)
    .addField("Yetkisi Düşen", `${hedefKişi}(\`${hedefKişi.id}\`)`)
    .addField("Yeni Yetkisi",`<@&${config.yetki_uc}>`)
    .addField("Alınan Yetki Permleri", `[<@&${config.vmute_staff}>]`).setTimestamp())
    message.react(yes)
    }
    if(hedefKişi.roles.cache.has(config.yetki_bes)){
    hedefKişi.roles.add(config.yetki_dort) 
    hedefKişi.roles.remove(config.yetki_bes)
    message.channel.send(new MessageEmbed()
    .setDescription(`**${hedefKişi} adlı yetkilinin yetki düşürme işlemi başarılı.** ${client.emojis.cache.get(yes)}`))
    message.guild.channels.cache.get(config.LOG_CHANNEL).send(new MessageEmbed()
    .setDescription(`**${hedefKişi} adlı yetkilinin yetki düşürme işlemi başarılı.** ${client.emojis.cache.get(yes)}`)
    .addField("Yetki Düşüren", `${message.author}(\`${message.author.id}\`)`)
    .addField("Yetkisi Düşen", `${hedefKişi}(\`${hedefKişi.id}\`)`)
    .addField("Yeni Yetkisi",`<@&${config.yetki_dort}>`)
    .addField("Alınan Yetki Permleri", "[YOK]").setTimestamp())
    message.react(yes)
    }
    if(hedefKişi.roles.cache.has(config.yetki_alti)){
    hedefKişi.roles.add(config.yetki_bes) 
    hedefKişi.roles.remove(config.yetki_alti)
    hedefKişi.roles.remove(config.jail_staff)
    hedefKişi.roles.remove(config.trans_staff)
    message.channel.send(new MessageEmbed()
    .setDescription(`**${hedefKişi} adlı yetkilinin yetki düşürme işlemi başarılı.** ${client.emojis.cache.get(yes)}`))
    message.guild.channels.cache.get(config.LOG_CHANNEL).send(new MessageEmbed()
    .setDescription(`**${hedefKişi} adlı yetkilinin yetki düşürme işlemi başarılı.** ${client.emojis.cache.get(yes)}`)
    .addField("Yetki Düşüren", `${message.author}(\`${message.author.id}\`)`)
    .addField("Yetkisi Düşen", `${hedefKişi}(\`${hedefKişi.id}\`)`)
    .addField("Yeni Yetkisi",`<@&${config.yetki_bes}>`)
    .addField("Alınan Yetki Permleri", `[<@&${config.jail_staff}> || <@&${config.trans_staff}>]`).setTimestamp())
    message.react(yes)
    }
    if(hedefKişi.roles.cache.has(config.yetki_yedi)){
    hedefKişi.roles.add(config.yetki_alti) 
    hedefKişi.roles.remove(config.yetki_yedi)
    hedefKişi.roles.remove(config.star_bir)
    message.channel.send(new MessageEmbed()
    .setDescription(`**${hedefKişi} adlı yetkilinin yetki düşürme işlemi başarılı.** ${client.emojis.cache.get(yes)}`))
    message.guild.channels.cache.get(config.LOG_CHANNEL).send(new MessageEmbed()
    .setDescription(`**${hedefKişi} adlı yetkilinin yetki düşürme işlemi başarılı.** ${client.emojis.cache.get(yes)}`)
    .addField("Yetki Düşüren", `${message.author}(\`${message.author.id}\`)`)
    .addField("Yetkisi Düşen", `${hedefKişi}(\`${hedefKişi.id}\`)`)
    .addField("Yeni Yetkisi",`<@&${config.yetki_alti}>`)
    .addField("Alınan Yetki Permleri", `[<@&${config.star_bir}>]`).setTimestamp())
    message.react(yes)
    }
    if(hedefKişi.roles.cache.has(config.yetki_sekiz)){
    hedefKişi.roles.add(config.yetki_yedi) 
    hedefKişi.roles.remove(config.yetki_sekiz)
    hedefKişi.roles.remove(config.star_iki)
    hedefKişi.roles.remove(config.sorunc_staff)
    hedefKişi.roles.remove(config.ban_staff)
    message.channel.send(new MessageEmbed()
    .setDescription(`**${hedefKişi} adlı yetkilinin yetki düşürme işlemi başarılı.** ${client.emojis.cache.get(yes)}`))
    message.guild.channels.cache.get(config.LOG_CHANNEL).send(new MessageEmbed()
    .setDescription(`**${hedefKişi} adlı yetkilinin yetki düşürme işlemi başarılı.** ${client.emojis.cache.get(yes)}`)
    .addField("Yetki Düşüren", `${message.author}(\`${message.author.id}\`)`)
    .addField("Yetkisi Düşen", `${hedefKişi}(\`${hedefKişi.id}\`)`)
    .addField("Yeni Yetkisi",`<@&${config.yetki_yedi}>`)
    .addField("Alınan Yetki Permleri", `[<@&${config.star_iki}> || <@&${config.ban_staff}> || <@&${config.sorunc_staff}>]`).setTimestamp())
    message.react(yes)
    }
    if(hedefKişi.roles.cache.has(config.yetki_dokuz)){
    hedefKişi.roles.add(config.yetki_sekiz) 
    hedefKişi.roles.remove(config.yetki_dokuz)
    hedefKişi.roles.remove(config.star_uc)
    message.channel.send(new MessageEmbed()
    .setDescription(`**${hedefKişi} adlı yetkilinin yetki düşürme işlemi başarılı.** ${client.emojis.cache.get(yes)}`))
    message.guild.channels.cache.get(config.LOG_CHANNEL).send(new MessageEmbed()
    .setDescription(`**${hedefKişi} adlı yetkilinin yetki düşürme işlemi başarılı.** ${client.emojis.cache.get(yes)}`)
    .addField("Yetki Düşüren", `${message.author}(\`${message.author.id}\`)`)
    .addField("Yetkisi Düşen", `${hedefKişi}(\`${hedefKişi.id}\`)`)
    .addField("Yeni Yetkisi",`<@&${config.yetki_sekiz}>`)
    .addField("Alınan Yetki Permleri", `[<@&${config.star_uc}>]`).setTimestamp())
    message.react(yes)
    }
    if(hedefKişi.roles.cache.has(config.yetki_on)){
    hedefKişi.roles.add(config.yetki_dokuz) 
    hedefKişi.roles.remove(config.yetki_on)
    message.channel.send(new MessageEmbed()
    .setDescription(`**${hedefKişi} adlı yetkilinin yetki düşürme işlemi başarılı.** ${client.emojis.cache.get(yes)}`))
    message.guild.channels.cache.get(config.LOG_CHANNEL).send(new MessageEmbed()
    .setDescription(`**${hedefKişi} adlı yetkilinin yetki düşürme işlemi başarılı.** ${client.emojis.cache.get(yes)}`)
    .addField("Yetki Düşüren", `${message.author}(\`${message.author.id}\`)`)
    .addField("Yetkisi Düşen", `${hedefKişi}(\`${hedefKişi.id}\`)`)
    .addField("Yeni Yetkisi",`<@&${config.yetki_dokuz}>`)
    .addField("Alınan Yetki Permleri", `[YOK]`).setTimestamp())
    message.react(yes)
    }
    if(hedefKişi.roles.cache.has(config.yetki_baslangic)){
    message.channel.send(new MessageEmbed()
    .setDescription(`${client.emojis.cache.get(no)} ${hedefKişi} **adlı kişi en alt yetkiye ulaştı!**`))
    message.react(no)
    }  
 
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ytdown", "down","yetkidüşür","ytdüşür"],
  permLevel: 0
};

exports.help = {
  name: 'yetkidonw',
  description: '',
  usage: ''
}; 