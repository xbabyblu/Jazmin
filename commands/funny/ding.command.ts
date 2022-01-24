import { ICommand } from "wokcommands";

export default {
    name: 'ding',
    category: 'Funny',
    description: 'Ring the door bell!',

    //slash: true,
    //testOnly: true,

    
    callback: ({ message }) => {
        message.reply('Dong!')
    },
} as ICommand