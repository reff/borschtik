# сБорщик v 0.1.1 ß

Автоматизированный сБорщик статических файлов для веб. Под капотом, всем этим безобразием рулит [Gulp](https://gulpjs.com/). Статические файлы собираются из исходников на [pug](https://pugjs.org/), [scss](https://sass-lang.com/) и ванильного JS (в данный момент без [CoffeeScript](https://coffeescript.org/), [TypeScript](https://www.typescriptlang.org/) и прочих плюшек, которые, возможно, появятся в будущем).

Название проекта технично скомунижжено [отсюда](https://github.com/veged/borschik). Граблей много не бывает, можно и свои собственные наколхозить. Оригинальный проект прилично давно не обновлялся. Поэтому решено было сварить свой Борщик. Может еще кому придется по вкусу.

## Принцип работы

Подразумевается полное или частичное соответствие методологии [БЭМ](https://ru.bem.info/methodology/):

Скрипты сБорщика — это совокупность из основного скрипта `gulpfile.js` и содержимое js-файлов в папке `/.build`.

На данный момент реализована сборка html/css/js, а также минификация изображений в форматах jpg, png, gif и svg. Все это приправлено вотчером, автоматически обновляющим страницу при изменении исходников.

1. Каждый блок является атомарным, и располагается в одноименной подпапке внутри директории `b_`, содержащей прочие блоки.
2. Блок собирается из `.pug|.scss|.js` файлов. Имена этих файлов могут быть произвольными, но лучше всего давать им одинаковые имена, совпадающие с именем блока. Например, блок `myBlock` должен находиться в папке `/src/b_/myBlock`, и быть описан в файлах `myBlock{.pug|.scss|.js}`. Кроме того, имя класса у данного блока должно совпадать с наименованием блока: `.myBlock` — это упрощает сопровождение и навигацию по проекту.
3.  Файлы `*.pug` шаблонов страниц находятся в папке `/src` (например, `/src/index.pug` или `/src/home.pug`).
4. Блоки `.pug` подключаются в файлы шаблонов вручную при помощи директивы `include` в нужное место шаблон(а/ов).
5. Допускается вкладывание одного блока в другой. Но нужно быть осторожнее с такой вложенностью, т.к. можно столкнуться с проблемой циклической вложенности.
6. Если есть необходимость временно или полностью исключить включение файлов `.scss|.js` в итоговую сборку, можно добавить символ подчеркивания в начало имени файлов, например файл `_myBlock.scss` не будет включен в сборку.
7. К основному файлу стилей `styles.scss` подмешиваются дополнительные стили (при помощи директивы `@import`), миксины и/или библиотеки, расположенные в папке `src/.scss/`. По умолчанию, предусмотрен всего один общий файл стилей на все случаи жизни. В него включаются все стили блоков, кроме исключенных (см.п. 6).
8. Файлы JavaScript просто склеиваются в один итоговый файл из .js-кусочков, расположенных в папках блоков, кроме исключенных (см.п. 6).

## Тестовая сборка

Тестовая сборка (в папке `/test`) проекта осуществляется простым запуском команды `gulp` в консоли. Задача по умолчанию стартует броузер и автоматическую перезагрузку тестовой сборки.

1. Страницы, собранные из шаблонов .pug (`/src/*.pug`) с включенными внутрь блоками (`/src/b_/**/*.pug`), собираются в одноименные html-файлы (`/test/*.html`).
2. Таблицы стилей собираются из .scss-файлов (`/src/b_/**/*.scss`), включаемых в основной исходник стилей (по умолчанию — `/src/styles.scss`), с подмешиванием миксинов и разных библиотек из `/src/.scss/*.scss`, предназначенных для многократного использования (в следующих версиях планируется добавить сюда немного вкусняшек).
3. Скрипты пока что попросту конкатенируются в результирующий js-файл (`/test/js/script.js`).
## Таски Gulp

- `gulp serve` — **Дефолтный таск**. Варит все файлы, и стартует броузер с автопомешиванием.
- `gulp pug` — Сборка pug-файлов в html
- `gulp scss` — Сборка стилей
- `gulp js` — Сборка скриптов
- `gulp minify` — Сушка картинок
- `gulp clean` — Моем посуду (удаляется содержимое папки `/test`)

## Финальная сборка

Финальная сборка проекта (в папке `/dist`) в данный момент еще не реализована.

