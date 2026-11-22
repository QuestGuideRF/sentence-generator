# Sentence Generator

Консольное приложение для тренировки грамматики английского языка. Генерирует случайные предложения на основе шаблонов грамматических конструкций, которые пользователь должен перевести.

## ✨ Особенности

- Генерация предложений по грамматическим шаблонам
- Поддержка различных времён (Present Simple, Past Simple, Future Simple)
- Настраиваемые группы слов (глаголы, существительные, дополнения)
- Статистика по времени выполнения
- Функциональное программирование с fp-ts

## 🚀 Быстрый старт

### Установка

```bash
yarn install
```

### Запуск

```bash
yarn dev
```

или после сборки:

```bash
yarn build
yarn start
```

### Использование

1. Запустите приложение
2. Переведите отображённое предложение
3. Нажмите любую клавишу для следующего предложения
4. Нажмите `Escape` или `q` для выхода

**Пример сессии:**
```
> He plays football
> She doesn't work on Sunday
> Do they study English ?

Finished. There were 3 sentences generated
It took you 45.2 seconds to translate this in total or 15.1 seconds per sentence
```

## 📁 Структура проекта

```
sentence-generator/
├── src/
│   ├── index.ts                 # Точка входа
│   ├── stdin.ts                 # Обработка ввода с клавиатуры
│   ├── funcs.util.ts            # Утилиты
│   ├── application/
│   │   ├── application.service.ts     # Сервис приложения
│   │   ├── sentence-generator.service.ts  # Генератор предложений
│   │   └── interfaces.ts              # Интерфейсы
│   ├── domain/
│   │   └── types.ts                   # Типы данных
│   └── infrastructure/
│       ├── DataReader.ts              # Чтение данных из файлов
│       └── DIContainer.ts             # Контейнер зависимостей
├── data/
│   ├── templates.json           # Шаблоны предложений
│   └── groups.json              # Группы слов
├── tsconfig.json
└── package.json
```

## 🛠 Настройка

### Шаблоны (`data/templates.json`)

Определяют грамматические конструкции:

```json
{
  "presSimpPosit1": "he|she|it|{N} {Vs} {ad}",
  "presSimpNegat1": "he|she|it|{N} doesn't {V} {ad}"
}
```

**Плейсхолдеры:**
- `{V}` — глагол (базовая форма)
- `{Vs}` — глагол с окончанием -s/-es
- `{Ved}` — глагол в прошедшем времени
- `{N}` — существительное
- `{ad}` — дополнение
- `{Q}` — вопросительное слово

### Группы слов (`data/groups.json`)

Определяют лексику для генерации:

```json
{
  "verbs": [{ "v": "play", "vs": "plays", "ved": "played" }],
  "nouns": ["football", "tennis"],
  "additions": ["every day", "on Sunday"],
  "questions": ["when", "where", "why"]
}
```

## 🧪 Технологии

- **TypeScript** — типизация
- **fp-ts** — функциональное программирование
- **io-ts** — валидация данных
- **Node.js** — runtime

Подпись относится к текущей версии проекта.

---

Автор: legenda  
Telegram: [@LEGENDA_SD](https://t.me/LEGENDA_SD)
