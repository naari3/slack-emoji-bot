// Commands:
//  ping - pong

export default async robot => {
  robot.respond(/ping/, res => {
    res.send("pong");
  });
};
