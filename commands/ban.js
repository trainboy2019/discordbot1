var Command = require("../plugins/command-system/command");

class PingCommand extends Command {
    constructor(client, cs)
    {
        super(client, {
            name: "ban",
            memberName: "ban",
            description: "bans users off server."
        });

        this.cs = cs;
    }

    async load(msg, args)
    {
		 if(!msg.member.roles.some(r=>["Administrator", "Moderator"].includes(r.name)) )
return msg.reply("lol you don't have permission get on my level lmao");
 let member = msg.mentions.members.first() || msg.guild.members.get(args[0]);
    if(!member)
      return msg.reply("This user dosn't exist");
    if(!member.bannable) 
return msg.reply("I cannot kick this user");
  let reason = args.slice(1).join(' ');
if(!reason) reason = "No reason provided";
await member.ban(reason)
      .catch(error => msg.reply(`Sorry ${msg.author} I couldn't ban because of : ${error}`));
    msg.reply(`${member.user.tag} has been banned by ${msg.author.tag}`);

    }
}

module.exports = PingCommand;