// Commands:
//  @emoji_bot ^create ([^ ]+) from ([^ ]+)$
//    fromのURLの画像の登録を試みる

const { SlackEmojiUploader } = require("slack-emoji-uploader");
const axios = require("axios");

export default async robot => {
  robot.respond(/create ([^ ]+) from ([^ ]+)/, async res => {
    const name = res.match[1];
    const image_url = res.match[2];

    console.log(name, image_url);

    const response = await axios.get(image_url);
    const image = new Buffer(response.data);
    // const emojiUploader = new SlackEmojiUploader();

    console.log(res);
    // emojiUploader.upload(name, image);

    res.send("tried");
  });
};
