const Discord = require("discord.js");
const bot = new Discord.Client();

/* bot.on("message", (message) => {
  if (message.content == "!hello") {
    console.log(message.guild.roles);
  }
}); */

switch(expression) {
  case 'color':
            if (!args[1]) return message.reply('Error, please define second argument\nEx. ~color 1');
            if (isNaN(args[1])) return message.reply('Error, second argument must be a number');
            if (args[1] > 200) return message.reply('Errors, colors range between 1-200');
            else {
            var role = message.guild.roles.find(role => role.name === `${args[1]}`);
            var colorroles = [];
            for (x = 1; x < 201; x++) {
            var currentrole = message.guild.roles.find(role => role.name === `${x}`);
            colorroles.push(currentrole.id);
            }
            message.member.removeRoles(colorroles).then(() => {
            message.member.addRole(role);
            message.channel.send(`Color changed to #${role.name}`).then(msg => msg.delete(3000));
            });
            }
            break;
}

bot.login("NzAwNDk1NTk3NTI1OTI1ODk5.XpkNgw.m7KsEWpK2JMPX0Uq8MopOzyMxUM");
