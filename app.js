const Telegraf = require('telegraf').Telegraf;

const bot = new Telegraf('2069087401:AAF32UOjEHwPjgZ3e_63YhCItGld_JrM4gE');

bot.command('start', ctx => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, 'Привіт, щоб почати гру введіть "play". Якщо потрібна допомога, то використовуй /help', {
    })
})
bot.command('help', ctx => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, 'Всі доступні команди: \n play - команда для початку гри', {
    })
})

bot.hears('play', ctx => {
    console.log(ctx.from)
    let playMessage = 'Успіхів! Щоб почати гру натисніть на будь-яку вікторину зі списку. Для перегляду статистики по набраним балам написніть на "Статистика"';
    bot.telegram.sendMessage(ctx.chat.id, playMessage, {
        reply_markup: {
            inline_keyboard: [
                [{
                    text: "Вікторина кіно \ud83c\udfa5",
                    callback_data: 'question1'
                }],
                [{
                    text: "Статистика \ud83d\udcca",
                    callback_data: 'stats'
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
    await waitFor(1500);
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
        bot.telegram.sendMessage(ctx.chat.id, '\u2705 Вірно (+2 бали)', {
            reply_markup: {
                inline_keyboard: [
                    [{
                        text: "Наступне питання \u27a1\ufe0f",
                        callback_data: 'question2'
                    }],
                    [{
                        text: "Статистика \ud83d\udcca",
                        callback_data: 'stats'
                    }]
                ],
         }
        })
    })
    bot.action('forest', ctx => {
        bot.telegram.sendMessage(ctx.chat.id, '\u274c Помилка(-2 бали)', {
            reply_markup: {
                inline_keyboard: [
                    [{
                        text: "Наступне питання \u27a1\ufe0f",
                        callback_data: 'question2'
                    }],
                    [{
                        text: "Статистика \ud83d\udcca",
                        callback_data: 'stats'
                    }]
                ],
         }
        })
    })
    bot.action('mile', ctx => {
        bot.telegram.sendMessage(ctx.chat.id, '\u274c Помилка(-2 бали)', {
            reply_markup: {
                inline_keyboard: [
                    [{
                        text: "Наступне питання \u27a1\ufe0f",
                        callback_data: 'question2'
                    }],
                    [{
                        text: "Статистика \ud83d\udcca",
                        callback_data: 'stats'
                    }]
                ],
         }
        })
    })
    bot.action('old', ctx => {
        bot.telegram.sendMessage(ctx.chat.id, '\u274c Помилка(-2 бали)', {
            reply_markup: {
                inline_keyboard: [
                    [{
                        text: "Наступне питання \u27a1\ufe0f",
                        callback_data: 'question2'
                    }],
                    [{
                        text: "Статистика \ud83d\udcca",
                        callback_data: 'stats'
                    }]
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
    await waitFor(1500);
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
    bot.telegram.sendMessage(ctx.chat.id, '\u274c Невірно (-2 бали)', {
        reply_markup: {
            inline_keyboard: [
                [{
                    text: "Наступне питання \u27a1\ufe0f",
                    callback_data: 'question3'
                }],
                [{
                    text: "Статистика \ud83d\udcca",
                    callback_data: 'stats'
                }]
            ],
     }
    })
})
bot.action('jango', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, '\u274c Невірно (-2 бали)', {
        reply_markup: {
            inline_keyboard: [
                [{
                    text: "Наступне питання \u27a1\ufe0f",
                    callback_data: 'question3'
                }],
                [{
                    text: "Статистика \ud83d\udcca",
                    callback_data: 'stats'
                }]
            ],
     }
    })
})
bot.action('oneplusone', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, '\u274c Невірно (-2 бали)', {
        reply_markup: {
            inline_keyboard: [
                [{
                    text: "Наступне питання \u27a1\ufe0f",
                    callback_data: 'question3'
                }],
                [{
                    text: "Статистика \ud83d\udcca",
                    callback_data: 'stats'
                }]
            ],
     }
    })
})
bot.action('ventura', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, '\u2705 Вітаю! Це правильна відповідь (+2 бали)', {
        reply_markup: {
            inline_keyboard: [
                [{
                    text: "Наступне питання \u27a1\ufe0f",
                    callback_data: 'question3'
                }],
                [{
                    text: "Статистика \ud83d\udcca",
                    callback_data: 'stats'
                }]
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
    await waitFor(1500);
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
    bot.telegram.sendMessage(ctx.chat.id, '\u274c Ви помилилися (-2 бали)', {
        reply_markup: {
            inline_keyboard: [
                [{
                    text: "Наступне питання \u27a1\ufe0f",
                    callback_data: 'question4'
                }],
                [{
                    text: "Статистика \ud83d\udcca",
                    callback_data: 'stats'
                }]
            ],
     }
    })
})
bot.action('brave', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, '\u2705 Дуже добре (+2 бали).', {
        reply_markup: {
            inline_keyboard: [
                [{
                    text: "Наступне питання \u27a1\ufe0f",
                    callback_data: 'question4'
                }],
                [{
                    text: "Статистика \ud83d\udcca",
                    callback_data: 'stats'
                }]
            ],
     }
    })
})
bot.action('avatar', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, '\u274c Ви помилилися! (-2 бали)', {
        reply_markup: {
            inline_keyboard: [
                [{
                    text: "Наступне питання \u27a1\ufe0f",
                    callback_data: 'question4'
                }],
                [{
                    text: "Статистика \ud83d\udcca",
                    callback_data: 'stats'
                }]
            ],
     }
    })
})
bot.action('smurf', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, '\u274c Ви помилилися! (-2 бали)', {
        reply_markup: {
            inline_keyboard: [
                [{
                    text: "Наступне питання \u27a1\ufe0f",
                    callback_data: 'question4'
                }],
                [{
                    text: "Статистика \ud83d\udcca",
                    callback_data: 'stats'
                }]
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
    await waitFor(1500);
    await bot.telegram.sendMessage(ctx.chat.id, choiceMessage, {
        reply_markup: {
            inline_keyboard: [
                [{
                    text: "Стрелок",
                    callback_data: 'shooter'
                },
                {
                    text: "Храброе сердце",
                    callback_data: 'brave2'
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
    bot.telegram.sendMessage(ctx.chat.id, '\u274c Невірно (-2 бали)', {
        reply_markup: {
            inline_keyboard: [
                [{
                    text: "Наступне питання \u27a1\ufe0f",
                    callback_data: 'question5'
                }],
                [{
                    text: "Статистика \ud83d\udcca",
                    callback_data: 'stats'
                }]
            ],
     }
    })
})
bot.action('brave2', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, '\u274c Невірно (-2 бали)', {
        reply_markup: {
            inline_keyboard: [
                [{
                    text: "Наступне питання \u27a1\ufe0f",
                    callback_data: 'question5'
                }],
                [{
                    text: "Статистика \ud83d\udcca",
                    callback_data: 'stats'
                }]
            ],
     }
    })
})
bot.action('1917', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, '\u274c Невірно (-2 бали)',{
        reply_markup: {
            inline_keyboard: [
                [{
                    text: "Наступне питання \u27a1\ufe0f",
                    callback_data: 'question5'
                }],
                [{
                    text: "Статистика \ud83d\udcca",
                    callback_data: 'stats'
                }]
            ],
     }
    })
})
bot.action('survivor', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, '\u2705 Молодець, це правильна відповідь (+2 бали)', {
        reply_markup: {
            inline_keyboard: [
                [{
                    text: "Наступне питання \u27a1\ufe0f",
                    callback_data: 'question5'
                }],
                [{
                    text: "Статистика \ud83d\udcca",
                    callback_data: 'stats'
                }]
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
    await waitFor(1500);
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
    bot.telegram.sendMessage(ctx.chat.id, '\u274c Помилка (-2 бали)', {
        reply_markup: {
            inline_keyboard: [
                [{
                    text: "Наступне питання \u27a1\ufe0f",
                    callback_data: 'question6'
                }],
                [{
                    text: "Статистика \ud83d\udcca",
                    callback_data: 'stats'
                }]
            ],
     }
    })
})
bot.action('bridge', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, '\u274c Помилка (-2 бали)', {
        reply_markup: {
            inline_keyboard: [
                [{
                    text: "Наступне питання \u27a1\ufe0f",
                    callback_data: 'question6'
                }],
                [{
                    text: "Статистика \ud83d\udcca",
                    callback_data: 'stats'
                }]
            ],
     }
    })
})
bot.action('one', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, '\u2705 Вірно (+2 бали)', {
        reply_markup: {
            inline_keyboard: [
                [{
                    text: "Наступне питання \u27a1\ufe0f",
                    callback_data: 'question6'
                }],
                [{
                    text: "Статистика \ud83d\udcca",
                    callback_data: 'stats'
                }]
            ],
     }
    })
})
bot.action('dream', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, '\u274c Помилка (-2 бали)', {
        reply_markup: {
            inline_keyboard: [
                [{
                    text: "Наступне питання \u27a1\ufe0f",
                    callback_data: 'question6'
                }],
                [{
                    text: "Статистика \ud83d\udcca",
                    callback_data: 'stats'
                }]
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
    await waitFor(1500);
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
    bot.telegram.sendMessage(ctx.chat.id, '\u2705 Молодець, але це було легко (+2 бали)' , {
        reply_markup: {
            inline_keyboard: [
                [{
                    text: "Зіграти у вікторину ще раз \ud83d\udd01",
                    callback_data: 'question1'
                }],
                [{
                    text: "Статистика \ud83d\udcca",
                    callback_data: 'stats'
                }]
            ],
     }
    })
})
bot.action('spiderman', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, '\u274c Помилка, спробуй ще раз (-2 бали)', {
        reply_markup: {
            inline_keyboard: [
                [{
                    text: "Зіграти у вікторину ще раз \ud83d\udd01",
                    callback_data: 'question1'
                }],
                [{
                    text: "Статистика \ud83d\udcca",
                    callback_data: 'stats'
                }]
            ],
     }
    })
})
bot.action('avengers', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, '\u274c Помилка, спробуй ще раз (-2 бали)', {
        reply_markup: {
            inline_keyboard: [
                [{
                    text: "Зіграти у вікторину ще раз \ud83d\udd01",
                    callback_data: 'question1'
                }],
                [{
                    text: "Статистика \ud83d\udcca",
                    callback_data: 'stats'
                }]
            ],
     }
    })
})
bot.action('darkknight', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, '\u274c Помилка, спробуй ще раз (-2 бали)', {
        reply_markup: {
            inline_keyboard: [
                [{
                    text: "Зіграти у вікторину ще раз \ud83d\udd01",
                    callback_data: 'question1'
                }],
                [{
                    text: "Статистика \ud83d\udcca",
                    callback_data: 'stats'
                }]
            ],
     }
    })
})

bot.action('stats', ctx =>{
    bot.telegram.sendMessage(ctx.chat.id, 'Набраних балів:')
})

bot.launch();

