const sharp = require("sharp");

const iconizedImage = async imageBuffer => {
  const img = sharp(imageBuffer).rotate();
  return await img.metadata().then(meta =>
    img
      .resize(...(meta.width > meta.height ? [128, null] : [null, 128]))
      .png()
      .toBuffer()
  );
};

module.exports = { iconizedImage };
