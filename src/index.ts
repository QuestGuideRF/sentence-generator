import { pipe } from 'fp-ts/lib/function';
import * as O from 'fp-ts/lib/Option';
import { app } from './infrastructure';
import { keypress } from './stdin';
const round = (num: number) => Math.round(num * 10) / 10;
const main = async (): Promise<number> => {
  const initializationError = await app.prepareData('./data/templates.json', './data/groups.json');
  if (O.isSome(initializationError)) {
    process.stdout.write(`Ошибка инициализации % ${initializationError.value.message}`);
    return 1;
  }
  const startTime = new Date().getTime();
  let sentencesCount = 0;
  do {
    const sentence = app.genNextSentence();
    process.stdout.write(
      `> ${pipe(
        sentence,
        O.getOrElse(() => "Something went wrong: we don't have a sentence")
      )}\n`
    );
    sentencesCount++;
  } while (!(await keypress()).exitPressed);
  const secondsLeft = (new Date().getTime() - startTime) / 1000;
  process.stdout.write(
    `\nГотово. Было сгенерировано ${sentencesCount} предложений.\nВам потребовалось ${round(
      secondsLeft
    )} секунд, чтобы перевести это сообщение, или ${round(secondsLeft / sentencesCount)} секунд на каждое предложение.\n\n`
  );
  return 0;
};
main().then(process.exit);