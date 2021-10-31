const Telegraf = require('telegraf').Telegraf;

const bot = new Telegraf('2069087401:AAF32UOjEHwPjgZ3e_63YhCItGld_JrM4gE');

bot.command('start', ctx => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, 'Привіт, щоб почати гру введіть "play". Якщо потрібна допомога, то використовуй /help', {
    })
})
bot.command('help', ctx => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, 'Всі доступні команди: \n play - команда для початку гри \n choice - команда для вибору відповіді', {
    })
})

bot.hears('play', ctx => {
    console.log(ctx.from)
    let playMessage = 'Успіхів! Щоб почати гру натисніть "Старт", якщо ти хочеш вийти натисніть "Cancel"';
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, playMessage, {
        reply_markup: {
            inline_keyboard: [
                [{
                    text: "Питання №1",
                    callback_data: 'question1'
                },
                {
                    text: "Питання №2",
                    callback_data: 'question2'
                }],
                [{
                    text: "Питання №3",
                    callback_data: 'question3'
                },
                {
                    text: "Питання №4",
                    callback_data: 'question4'
                }],
                [{
                    text: "Питання №5",
                    callback_data: 'question5'
                }],
                [{
                    text: "Вийти",
                    callback_data: 'Cancel'
                }]
            ],
    }   
})
})

//Кадры с фильмами
bot.action('question1', ctx => {
bot.telegram.sendMessage(ctx.chat.id, 'Із якого фільму прикріплений кадр? \nЩоб зробити вибір напишіть "choice1"')
bot.telegram.sendPhoto(ctx.chat.id, {
    source: "res/frame1.png"
})
})

bot.action('question2', ctx => {
bot.telegram.sendMessage(ctx.chat.id, 'Із якого фільму прикріплений кадр? \nЩоб зробити вибір напишіть "choice2"')
bot.telegram.sendPhoto(ctx.chat.id, {
    source: "res/frame2.png"
})
})

bot.action('question3', ctx => {
bot.telegram.sendMessage(ctx.chat.id, 'Із якого фільму прикріплений кадр? \nЩоб зробити вибір напишіть "choice3"')
bot.telegram.sendPhoto(ctx.chat.id, {
    source: "res/frame3.png"
})
})

bot.action('question4', ctx => {
bot.telegram.sendMessage(ctx.chat.id, 'Із якого фільму прикріплений кадр? \nЩоб зробити вибір напишіть "choice4"')
bot.telegram.sendPhoto(ctx.chat.id, {
    source: "res/frame4.png"
})
})

bot.action('question5', ctx => {
bot.telegram.sendMessage(ctx.chat.id, 'Із якого фільму прикріплений кадр? \nЩоб зробити вибір напишіть "choice5"')
bot.telegram.sendPhoto(ctx.chat.id, {
    source: "res/frame5.png"
})
})

//Выход из панели игры
bot.action('Cancel', ctx => {

})

//Панели выбора
//Выбор №1
bot.hears('choice1', ctx => {
    console.log(ctx.from)
    let choiceMessage = 'Зробіть вибір:';
    bot.telegram.sendMessage(ctx.chat.id, choiceMessage, {
        reply_markup: {
            inline_keyboard: [
                [{
                    text: "Криминальное чтиво",
                    callback_data: 'criminal'
                },
                {
                    text: "Форрест Гамп",
                    callback_data: 'forest'
                }],
                [{
                    text: "Зеленая миля",
                    callback_data: 'mile'
                },
                {
                    text: "Время",
                    callback_data: 'old'
                }],
            ],
     }
})
})

bot.action('criminal', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, 'Вітаю! Це правильна відповідь.')
})
bot.action('forest', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, 'Ви помилилися!:( Це неправильна відповідь.')
})
bot.action('mile', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, 'Ви помилилися!:( Це неправильна відповідь.')
})
bot.action('old', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, 'Ви помилилися!:( Це неправильна відповідь.')
})

//Выбор №2
bot.hears('choice2', ctx => {
    console.log(ctx.from)
    let choiceMessage = 'Зробіть вибір:';
    bot.telegram.sendMessage(ctx.chat.id, choiceMessage, {
        reply_markup: {
            inline_keyboard: [
                [{
                    text: "Терминатор 2: Судный день",
                    callback_data: 'terminator'
                },
                {
                    text: "Джанго освобождённый",
                    callback_data: 'jango'
                }],
                [{
                    text: "1+1",
                    callback_data: 'oneplusone'
                },
                {
                    text: "Эйс Вентура 2: Когда зовёт природа",
                    callback_data: 'ventura'
                }],
            ],
     }
})
})

bot.action('terminator', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, 'Ви помилилися!:( Це неправильна відповідь.')
})
bot.action('jango', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, 'Ви помилилися!:( Це неправильна відповідь.')
})
bot.action('oneplusone', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, 'Ви помилилися!:( Це неправильна відповідь.')
})
bot.action('ventura', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, 'Вітаю! Це правильна відповідь.')
})

//Выбор №3
bot.hears('choice3', ctx => {
    console.log(ctx.from)
    let choiceMessage = 'Зробіть вибір:';
    bot.telegram.sendMessage(ctx.chat.id, choiceMessage, {
        reply_markup: {
            inline_keyboard: [
                [{
                    text: "Остров проклятых",
                    callback_data: 'island'
                },
                {
                    text: "Храброе сердце",
                    callback_data: 'brave'
                }],
                [{
                    text: "Аватар",
                    callback_data: 'avatar'
                },
                {
                    text: "Оно",
                    callback_data: 'it'
                }],
            ],
     }
})
})

bot.action('island', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, 'Ви помилилися!:( Це неправильна відповідь.')
})
bot.action('brave', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, 'Вітаю! Це правильна відповідь.')
})
bot.action('avatar', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, 'Ви помилилися!:( Це неправильна відповідь.')
})
bot.action('it', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, 'Ви помилилися!:( Це неправильна відповідь.')
})

//Выбор №4
bot.hears('choice4', ctx => {
    console.log(ctx.from)
    let choiceMessage = 'Зробіть вибір:';
    bot.telegram.sendMessage(ctx.chat.id, choiceMessage, {
        reply_markup: {
            inline_keyboard: [
                [{
                    text: "Стрелок",
                    callback_data: 'shooter'
                },
                {
                    text: "Храброе сердце",
                    callback_data: 'brave'
                }],
                [{
                    text: "1917",
                    callback_data: '1917'
                },
                {
                    text: "Выживший",
                    callback_data: 'survivor'
                }],
            ],
     }
})
})

bot.action('shooter', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, 'Ви помилилися!:( Це неправильна відповідь.')
})
bot.action('brave', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, 'Ви помилилися!:( Це неправильна відповідь.')
})
bot.action('1917', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, 'Ви помилилися!:( Це неправильна відповідь.')
})
bot.action('survivor', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, 'Вітаю! Це правильна відповідь.')
})

//Выбор №5
bot.hears('choice5', ctx => {
    console.log(ctx.from)
    let choiceMessage = 'Зробіть вибір:';
    bot.telegram.sendMessage(ctx.chat.id, choiceMessage, {
        reply_markup: {
            inline_keyboard: [
                [{
                    text: "Хулиганы ",
                    callback_data: 'hooligans'
                },
                {
                    text: "Мост в Терабитию",
                    callback_data: 'bridge'
                }],
                [{
                    text: "1+1",
                    callback_data: 'one'
                },
                {
                    text: "Реквием по мечте",
                    callback_data: 'dream'
                }],
            ],
     }
})
})

bot.action('hooligans', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, 'Ви помилилися!:( Це неправильна відповідь.')
})
bot.action('bridge', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, 'Ви помилилися!:( Це неправильна відповідь.')
})
bot.action('one', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, 'Вітаю! Це правильна відповідь.')
})
bot.action('dream', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, 'Ви помилилися!:( Це неправильна відповідь.')
})






bot.launch();

