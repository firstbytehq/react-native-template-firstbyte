# React Native Template Firstbyte

Powered by [Firstbyte Digital Solutions](https://firstbytedigital.com)

React Native Template Firstbyte enables you to kick-start your next project in React Native with ease. The template provides you with a skeleton application structure. A routing system is setup using [React Navigation](https://reactnavigation.org/). The routers include a stack navigator for authentication screens and a tab navigator for the authenticated view. Authentication screens include login, signup and forgot-password screens. Authenticated view includes home, search and profile screens. The screens are just placeholders and you can build your own awesome ones for your specific use-cases. We haven't made any assumptions on the styling choices you will make, so you are free to use any UI kits as you see fit.

Redux is also integrated for your convenince. We have provided a client-side authentication flow with redux. Replace it with a realistic flow using your APIs.

The template is configured with all basic packages that improve code quality and for static type checking. The packages included are

  - ESLint
  - Prettier
  - TypeScript 

### Installation
You can either download or clone the repo to your local system. You can rename the project with your new project name and develop on top of this.
``` 
git clone git@github.com:firstbytehq/react-native-template-firstbyte.git 
```
If you don't have the rename package, install the renaming npm package [react-native-reaname](https://www.npmjs.com/package/react-native-rename) globally. 
``` sh
npm -i -g react-native-rename | yarn global add react-native-rename
```

Remove the current .git folder and rename the project. The steps are listed below

```sh
$ cd react-native-template-firstbyte
$ rm -r .git
$ react-native-rename <new-project-name> -b <new project bundle name>
$ git init
$ cd ios
$ pod install
```

Run the application 

```sh
$ npm start | react-native start
$ react-native run-andorid
```
