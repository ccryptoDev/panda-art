"use strict";

const path = require("path");
const isLocal = typeof process.pkg === "undefined";
const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);
const { MODE } = require(path.join(basePath, "src/blendMode.js"));
const description =
  "";
const baseUri = "ipfs://Qmdje5Ya44WEz18GCkGKwcXS4x5vCoj8oReePdsrqMQGF5";

const layerConfigurations = [
  {
    growEditionSizeTo: 1874,
    layersOrder: [
      { name: "Mood" },
      { name: "Facial Markings" },
      { name: "Type" },
      { name: "Nose" },
    ],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 1500,
  height: 1500, 
};

const background = {
  generate: true,
  brightness: "70%",
};

const extraMetadata = {
  artist: "x_art"
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 200,
  imageRatio: format.width / format.height,
  imageName: "preview.png",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
};
