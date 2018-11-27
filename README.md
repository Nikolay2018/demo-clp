# Деплой

1. Клонировать репозиторий.

2. Выполнить `npm install`

3. Сконфигурировать путь к API в файле `src/environments/environment.prod.ts` 

```javascript
export const environment = {
  production: true,
  api: 'http://192.168.1.81:3008' <-- Backend URL
};
```

4. Собрать билд командой `npm build`
   В корневом каталоге приложения появится папка `dist/clp`. 
   Необходимо сконфигурировать Nginx/Apache/etc... на `index.html` из этой папки.


# Clp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
