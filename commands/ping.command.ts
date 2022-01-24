import { ICommand } from "wokcommands";

export default {
    name: 'ping',
    category: 'Testing',
    description: 'Replies with pong.',

    //slash: true,
    //testOnly: true,


    callback: ({ message }) => {
        message.reply('Pong!')
    },
} as ICommand