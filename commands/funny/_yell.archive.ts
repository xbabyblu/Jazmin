import { ICommand } from "wokcommands";
// TODO: FIGURE THIS SHIT OUT
export default {
    name: 'yell',
    category: 'Funny',
    description: 'We\'re all yelling around here',

    //slash: true,
    testOnly: true,


    callback: ({ message }) => {
        message.reply('FUCK')
    },
} as ICommand