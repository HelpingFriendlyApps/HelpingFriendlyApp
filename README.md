# Helping Friendly App

This project was built on top of the [minimal-react-native-redux](https://github.com/andrewthuang/simple-react-webpack) starter kit created by [@andrewthuang](https://github.com/andrewthuang).

## Screenshots
<img src="http://i.imgur.com/Bq4Eitn.png" width=200 hspace=5 />
<img src="http://i.imgur.com/sZQ8GP1.png" width=200 hspace=5 />
<img src="http://i.imgur.com/65wOOwV.png" width=200 hspace=5 />
<img src="http://i.imgur.com/aK95nET.png" width=200 hspace=5 />

## Tools
* React Native
  * to enable hot reloading, press `Command-D` to bring up the dev menu and select.. you guessed it: `Enable Hot Reloading`
* Redux
* [React Native Simple Router](https://github.com/react-native-simple-router-community/react-native-simple-router)
* [React Native Collapsible](https://github.com/oblador/react-native-collapsible)
* [React Native Carousel](https://github.com/nick/react-native-carousel)
* [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)
* [Remote Redux DevTools](https://github.com/zalmoxisus/remote-redux-devtools)
  * launch DevTools with this handy [Chrome app](https://chrome.google.com/webstore/detail/remotedev/faicmgpfiaijcedapokpbdejaodbelph)

## Initial (One Time Only) Setup
#### Clone the repo and install dependencies
```
> git clone https://github.com/HelpingFriendlyApps/HelpingFriendlyApp.git
> cd HelpingFriendlyApp
> npm install
```

#### Run the build process in Xcode
Open the project in Xcode (v7.0 or higher)
```
> open ios/HelpingFriendlyApp.xcodeproj

Press `Command-R` to build the app
```

Upon successful build, Simulator will automatically launch the app (while running React packager on port 8081).

## Subsequent Usage
After the initial build, there is no need for Xcode if you're just playing around with the app in Simulator. To do so, follow these steps:

```
> npm start (this will run React packager on port 8081)

Open Simulator (Command-Space bar + 'simulator')
Swipe to the second screen
Tap on the `HelpingFriendlyApp` icon
```
