import { ICommand } from "wokcommands";

export default {
    name: 'joe',
    category: 'Funny',
    description: 'Who\'s Joe??',
    delete: true,
    //slash: true,
    //ephermeral: true,
    //testOnly: true,


    callback: ({ message }) => {
        message.reply('Joe Mamma! 🤣🤣')
    },
} as ICommand