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
    let playMessage = 'Успіхів! Щоб почати гру натисніть на "Питання", якщо ти хочеш вийти натисніть "Вийти"';
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
                },
                {
                    text: "Питання №6",
                    callback_data: 'question6'
                }],
                [{
                    text: "Вийти",
                    callback_data: 'Cancel'
                }]
            ],
    }   
})
})

function waitFor (ms) {
    return new Promise ((resolve, reject) => {
        setTimeout(resolve, ms)
    })
}

//Кадры с фильмами
bot.action('question1', async ctx => {
    bot.telegram.sendMessage(ctx.chat.id, 'Із якого фільму прикріплений кадр?')
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: "res/frame1.png"
    })
    let choiceMessage = 'Зробіть вибір:';
    await waitFor(3000);
    await bot.telegram.sendMessage(ctx.chat.id, choiceMessage, {
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
        bot.telegram.sendMessage(ctx.chat.id, 'Вітаю! Це правильна відповідь.', {
            reply_markup: {
                inline_keyboard: [
                    [{
                        text: "Далі",
                        callback_data: 'question2'
                    }],
                ],
         }
        })
    })
    bot.action('forest', ctx => {
        bot.telegram.sendMessage(ctx.chat.id, 'Ви помилилися!:( Це неправильна відповідь.', {
            reply_markup: {
                inline_keyboard: [
                    [{
                        text: "Далі",
                        callback_data: 'question2'
                    }],
                ],
         }
        })
    })
    bot.action('mile', ctx => {
        bot.telegram.sendMessage(ctx.chat.id, 'Ви помилилися!:( Це неправильна відповідь.', {
            reply_markup: {
                inline_keyboard: [
                    [{
                        text: "Далі",
                        callback_data: 'question2'
                    }],
                ],
         }
        })
    })
    bot.action('old', ctx => {
        bot.telegram.sendMessage(ctx.chat.id, 'Ви помилилися!:( Це неправильна відповідь.', {
            reply_markup: {
                inline_keyboard: [
                    [{
                        text: "Далі",
                        callback_data: 'question2'
                    }],
                ],
         }
        })
    })

bot.action('question2',  async ctx => {
    bot.telegram.sendMessage(ctx.chat.id, 'Із якого фільму прикріплений кадр?')
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: "res/frame2.png"
    })
    let choiceMessage = 'Зробіть вибір:';
    await waitFor(3000);
    await bot.telegram.sendMessage(ctx.chat.id, choiceMessage, {
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
    bot.telegram.sendMessage(ctx.chat.id, 'Ви помилилися!:( Це неправильна відповідь.', {
        reply_markup: {
            inline_keyboard: [
                [{
                    text: "Далі",
                    callback_data: 'question3'
                }],
            ],
     }
    })
})
bot.action('jango', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, 'Ви помилилися!:( Це неправильна відповідь.', {
        reply_markup: {
            inline_keyboard: [
                [{
                    text: "Далі",
                    callback_data: 'question3'
                }],
            ],
     }
    })
})
bot.action('oneplusone', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, 'Ви помилилися!:( Це неправильна відповідь.', {
        reply_markup: {
            inline_keyboard: [
                [{
                    text: "Далі",
                    callback_data: 'question3'
                }],
            ],
     }
    })
})
bot.action('ventura', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, 'Вітаю! Це правильна відповідь.', {
        reply_markup: {
            inline_keyboard: [
                [{
                    text: "Далі",
                    callback_data: 'question3'
                }],
            ],
     }
    })
})

bot.action('question3', async ctx => {
    bot.telegram.sendMessage(ctx.chat.id, 'Із якого фільму прикріплений кадр?')
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: "res/frame3.png"
    })
    let choiceMessage = 'Зробіть вибір:';
    await waitFor(3000);
    await bot.telegram.sendMessage(ctx.chat.id, choiceMessage, {
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
                    text: "Смурфики",
                    callback_data: 'smurf'
                }],
            ],
     }
})
})

bot.action('island', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, 'Ви помилилися!:( Це неправильна відповідь.', {
        reply_markup: {
            inline_keyboard: [
                [{
                    text: "Далі",
                    callback_data: 'question4'
                }],
            ],
     }
    })
})
bot.action('brave', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, 'Вітаю! Це правильна відповідь.', {
        reply_markup: {
            inline_keyboard: [
                [{
                    text: "Далі",
                    callback_data: 'question4'
                }],
            ],
     }
    })
})
bot.action('avatar', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, 'Ви помилилися!:( Це неправильна відповідь.', {
        reply_markup: {
            inline_keyboard: [
                [{
                    text: "Далі",
                    callback_data: 'question4'
                }],
            ],
     }
    })
})
bot.action('smurf', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, 'Ви помилилися!:( Це неправильна відповідь.', {
        reply_markup: {
            inline_keyboard: [
                [{
                    text: "Далі",
                    callback_data: 'question4'
                }],
            ],
     }
    })
})

bot.action('question4', async ctx => {
    bot.telegram.sendMessage(ctx.chat.id, 'Із якого фільму прикріплений кадр?')
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: "res/frame4.png"
    })
    let choiceMessage = 'Зробіть вибір:';
    await waitFor(3000);
    await bot.telegram.sendMessage(ctx.chat.id, choiceMessage, {
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
    bot.telegram.sendMessage(ctx.chat.id, 'Ви помилилися!:( Це неправильна відповідь.', {
        reply_markup: {
            inline_keyboard: [
                [{
                    text: "Далі",
                    callback_data: 'question5'
                }],
            ],
     }
    })
})
bot.action('brave', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, 'Ви помилилися!:( Це неправильна відповідь.', {
        reply_markup: {
            inline_keyboard: [
                [{
                    text: "Далі",
                    callback_data: 'question5'
                }],
            ],
     }
    })
})
bot.action('1917', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, 'Ви помилилися!:( Це неправильна відповідь.',{
        reply_markup: {
            inline_keyboard: [
                [{
                    text: "Далі",
                    callback_data: 'question5'
                }],
            ],
     }
    })
})
bot.action('survivor', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, 'Вітаю! Це правильна відповідь.', {
        reply_markup: {
            inline_keyboard: [
                [{
                    text: "Далі",
                    callback_data: 'question5'
                }],
            ],
     }
    })
})



bot.action('question5', async ctx => {
    bot.telegram.sendMessage(ctx.chat.id, 'Із якого фільму прикріплений кадр?')
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: "res/frame5.png"
    })
    let choiceMessage = 'Зробіть вибір:';
    await waitFor(3000);
    await bot.telegram.sendMessage(ctx.chat.id, choiceMessage, {
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
    bot.telegram.sendMessage(ctx.chat.id, 'Ви помилилися!:( Це неправильна відповідь.', {
        reply_markup: {
            inline_keyboard: [
                [{
                    text: "Далі",
                    callback_data: 'question6'
                }],
            ],
     }
    })
})
bot.action('bridge', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, 'Ви помилилися!:( Це неправильна відповідь.', {
        reply_markup: {
            inline_keyboard: [
                [{
                    text: "Далі",
                    callback_data: 'question6'
                }],
            ],
     }
    })
})
bot.action('one', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, 'Вітаю! Це правильна відповідь.', {
        reply_markup: {
            inline_keyboard: [
                [{
                    text: "Далі",
                    callback_data: 'question6'
                }],
            ],
     }
    })
})
bot.action('dream', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, 'Ви помилилися!:( Це неправильна відповідь.', {
        reply_markup: {
            inline_keyboard: [
                [{
                    text: "Далі",
                    callback_data: 'question6'
                }],
            ],
     }
    })
})

bot.action('question6', async ctx => {
    bot.telegram.sendMessage(ctx.chat.id, 'Із якого фільму прикріплений кадр?')
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: "res/frame6.png"
    })
    let choiceMessage = 'Зробіть вибір:';
    await waitFor(3000);
    await bot.telegram.sendMessage(ctx.chat.id, choiceMessage, {
        reply_markup: {
            inline_keyboard: [
                [{
                    text: "Веном",
                    callback_data: 'venom'
                },
                {
                    text: "Человек-паук 3: Враг в отражении",
                    callback_data: 'spiderman'
                }],
                [{
                    text: "Мстители: Война бесконечности",
                    callback_data: 'avengers'
                },
                {
                    text: "Тёмный рыцарь",
                    callback_data: 'darkknight'
                }],
            ],
     }
})
})

bot.action('venom', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, 'Вітаю! Це правильна відповідь.' , {
        reply_markup: {
            inline_keyboard: [
                [{
                    text: "Зіграти у вікторину ще раз",
                    callback_data: 'question1'
                }],
            ],
     }
    })
})
bot.action('spiderman', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, 'Ви помилилися!:( Це неправильна відповідь.', {
        reply_markup: {
            inline_keyboard: [
                [{
                    text: "Зіграти у вікторину ще раз",
                    callback_data: 'question1'
                }],
            ],
     }
    })
})
bot.action('avengers', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, 'Ви помилилися!:( Це неправильна відповідь.', {
        reply_markup: {
            inline_keyboard: [
                [{
                    text: "Зіграти у вікторину ще раз",
                    callback_data: 'question1'
                }],
            ],
     }
    })
})
bot.action('darkknight', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, 'Ви помилилися!:( Це неправильна відповідь.', {
        reply_markup: {
            inline_keyboard: [
                [{
                    text: "Зіграти у вікторину ще раз",
                    callback_data: 'question1'
                }],
            ],
     }
    })
})

//Выход из панели игры
bot.action('Cancel', ctx => {

})

bot.launch();

