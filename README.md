Steps

1. npx create-expo-app@2.3.1

then following https://documentation.onesignal.com/docs/react-native-expo-sdk-setup

2. npx expo install onesignal-expo-plugin
3. yarn add react-native-onesignal
4. add plugin in app.json

5. first issue (missing in the docs): must add ios.bundleIdentifier in app.json

6. then running on iOS simulator (iPhone 15, iOS 17.4) :

```
ERROR  Invariant Violation: Your JavaScript code tried to access a native module that doesn't exist.

If you're trying to use a module that is not supported in Expo Go, you need to create a development build of your app. See https://docs.expo.dev/development/introduction/ for more info., js engine: hermes

 ERROR  Invariant Violation: "main" has not been registered. This can happen if:
* Metro (the local dev server) is run from the wrong folder. Check if Metro is running, stop it and restart it in the current project.
* A module failed to load due to an error and `AppRegistry.registerComponent` wasn't called., js engine: hermes
```
