const Discord = require('discord.js');
const client = new Discord.Client();
var old_msg = [] // stock les 3 derniers messages

client.on('message',(msg)=>{ // Evenement message 
        try{ // ESSAYER
            if (msg.author.id != client.user.id && old_msg[old_msg.length-1].author.id == msg.author.id && old_msg[old_msg.length-2].author.id == msg.author.id) { // SI LES TROIS DERNIERS MESSAGES SONT ENVOYÉS PAR LE MEME UTILISATEUR
                
                var time = msg.createdAt - old_msg[old_msg.length-1].createdAt // DURÉE ENTRE LES DEUX DERNIERS MESSAGES

                if (time < 1500) {//SPAM 5 sec
                    msg.member.roles.add('886586818210967583') //AJOUTE LE ROLE SPAM
                    
                    client.channels.cache.get('886586962239172638').send(`${msg.member} a été mute`) // MSG ADMINISTRATIOn
                    msg.channel.send(`Calme toi ${msg.member} !! `) // MSG DE PREVENTION
                    timer(msg,client)//DESACTIVÉ AU BOUT D'UN X LE SPAM
                    msg.delete() // SUPPRIME LE MESSAGE
                    
                }

            }else if(old_msg.length > 3){
                old_msg = []
            }

        }catch(e){ // SI UNE ERREUR SURVIENT
            console.error(e);
        }

        old_msg.push(msg)
    })

client.login("ODIxMDY0OTk4NzU5NTYzMjk2.YE-SXg.PQQlUVw0Vvu6oq5SkwMWNDOSCMg");
