const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");
const {
  wrapWithReanimatedMetroConfig,
} = require("react-native-reanimated/metro-config");

const expoConfig = getDefaultConfig(__dirname);

const nativeWindConfig = withNativeWind(expoConfig, {
  input: "./global.css",
});

const reanimatedConfig = wrapWithReanimatedMetroConfig(nativeWindConfig);

module.exports = reanimatedConfig;
