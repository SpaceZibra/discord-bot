const Discord = require('discord.js');
const client = new Discord.Client();
var old_msg = [] // stock les 3 derniers messages

client.on('message',(msg)=>{ // Evenement message 
        try{ // ESSAYER
            if (msg.author.id != client.user.id && old_msg[old_msg.length-1].author.id == msg.author.id && old_msg[old_msg.length-2].author.id == msg.author.id) { // SI LES TROIS DERNIERS MESSAGES SONT ENVOYÉS PAR LE MEME UTILISATEUR
                
                var time = msg.createdAt - old_msg[old_msg.length-1].createdAt // DURÉE ENTRE LES DEUX DERNIERS MESSAGES

                if (time < 5000) {//SPAM 5 sec
                    msg.member.roles.add('ID ROLE SPAM') //AJOUTE LE ROLE SPAM
                    
                    client.channels.cache.get('ID DE VOTRE CHANNEL DEBUG/ADMIN').send(`${msg.member} a été mute`) // MSG ADMINISTRATIOn
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

client.login("process.env.TOKEN");
