const { Discord, Client, MessageEmbed}  = require("discord.js");
const client = new Client();
const fetch = require('node-fetch');


client.on('ready', () => {
  console.log(`B is now gaming ${client.user.tag}!`);
 client.user.setPresence({ activity: { name: '🅱️', type: "WATCHING" }, status: 'dnd' })
  .catch(console.error);
});
client.on("message", async message => {
 const prefix = "b!"
    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;

    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if (cmd.length === 0) return;

if (cmd === "b") {

const gg = new MessageEmbed()
.setTitle("🅱️")
.setAuthor("🅱️")
.setDescription("🅱️")
.setColor("RED")
.setImage("http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/b-button-blood-type.png")
.setFooter("🅱️");  

message.channel.send(gg).catch(console.error);
}

if (cmd === "sus") {
const gg = new MessageEmbed()
.setTitle("sus!")
.setAuthor("TheDripper")
.addField("gg", "nore")
.setDescription("You're sus!")
.setFooter("I think we found the impostor, boys😈😈😈")
.setColor("GREEN")
.setImage("https://cdn.glitch.com/caa99bc2-5662-47c4-90d0-5ddd6bbda5dc%2F3f42edaa-0e66-4542-8d3d-f962e5249a19.image.png?v=1614002939073");
message.channel.send(gg).catch(console.error);

}

if(cmd === "ink"){
function lmao(x) {
  return Number.parseFloat(x).toFixed(2);
}
fetch("https://api.hypixel.net/skyblock/bazaar")
    .then(res => res.json())
    .then(body => {
let inkprice = lmao(body.products.ENCHANTED_INK_SACK.quick_status.sellPrice)
message.channel.send("Current Enchanted Ink Sack Sell Price: `" + inkprice + "`")
});

}

if(cmd === "fub") {
  
  fetch("https://api.wynncraft.com/public_api.php?action=guildStats&command=Fruman%20Bee")
.then(res => res.json())
    .then(body => {

const fub = new MessageEmbed()
.setTitle(body.name)
.setAuthor(body.prefix) 
    
});
}
if(cmd === "recomb"){
  function lmao(x) {
    return Number.parseFloat(x).toFixed(2);
  }
  fetch("https://api.hypixel.net/skyblock/bazaar")
      .then(res => res.json())
      .then(body => {
  let inkprice = lmao(body.products.RECOMBOBULATOR_3000.quick_status.sellPrice)
  let buy = lmao(body.products.RECOMBOBULATOR_3000.quick_status.buyPrice)
  message.channel.send("Current Recombobulator 3000 Sell Price: `" + inkprice + "` and Buy Price: `" + buy + "`");
  });
  
  }
  if(cmd === "check"){

    if(!args[0]) {
      message.channel.send(message.author.name + " is not gamering!");
    }
      if (args[0] === "1"){
        // function lmao(x) {
        //   return Number.parseFloat(x).toFixed(2);
        // }
  //       fetch("https://api.hypixel.net/skyblock/bazaar")
  //     .then(res => res.json())
  //     .then(body => {
  // let price = lmao(body.products..quick_status.sellPrice)
  // let buy = lmao(body.products..quick_status.buyPrice)
  // message.channel.send("Current  Sell Price: `" + price + "` and Buy Price: `" + buy + "`. Last Updated: `" + date + "`");
//})
// }
function lmao(x) {
  return Number.parseFloat(x).toFixed(2);
}
          fetch("https://api.hypixel.net/skyblock/bazaar")
      .then(res => res.json())
      .then(body => {
  let price = lmao(body.products.BOOSTER_COOKIE.quick_status.sellPrice)
  let buy = lmao(body.products.BOOSTER_COOKIE.quick_status.buyPrice)
  let jsonDate = (body.lastUpdated)
  var date = new Date(jsonDate);
  
  message.channel.send("Current Booster Cookie Sell Price: `" + price + "` and Buy Price: `" + buy + "`. Last Updated: `" + date + "`");
      })
   
  }
  if (args[0] === "2"){
    function lmao(x) {
      return Number.parseFloat(x).toFixed(2);
    }
    fetch("https://api.hypixel.net/skyblock/bazaar")
  .then(res => res.json())
  .then(body => {
let price = lmao(body.products.PURPLE_CANDY.quick_status.sellPrice)
let buy = lmao(body.products.PURPLE_CANDY.quick_status.buyPrice)
message.channel.send("Current Purple Candy Sell Price: `" + price + "` and Buy Price: `" + buy + "`");
})
} 
  }
});




client.login(process.env.TOKEN)
