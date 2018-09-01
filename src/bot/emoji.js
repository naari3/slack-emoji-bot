// Commands:
//  @emoji_bot ^create ([^ ]+) from ([^ ]+)$
//    fromのURLの画像の登録を試みる

const { SlackEmojiUploader } = require("slack-emoji-uploader");
const axios = require("axios");
const { iconizedImage } = require("../lib/iconized-image");

export default async robot => {
  robot.respond(/create ([^ ]+) from ([^ ]+)/, async res => {
    try {
      const name = res.match[1];
      const image_url = res.match[2];

      const response = await axios.get(image_url, {
        responseType: "arraybuffer"
      });
      const image = Buffer.from(response.data);
      const emojiUploader = new SlackEmojiUploader(
        process.env.SLACK_SUBDOMAIN,
        process.env.SLACK_XOXS_TOKEN
      );

      const icon = await iconizedImage(image);

      const result = await emojiUploader.upload(name, icon);
      if (result.ok) {
        res.send(`tried :${name}:`);
      } else {
        res.send(`failed ${result.error}`);
      }
    } catch (error) {
      res.send("[*ERROR*] " + error.message);
      robot.logger.error(error);
    }
  });
};
