#!/bin/sh
set -eu

ssh -t dokku@dokku.hxa.me config:set saikoro-bot \
      HUBOT_HEROKU_KEEPALIVE_URL=http://saikoro-bot.dokku.hxa.me \
      NPM_CONFIG_PRODUCTION=false \
      HUBOT_SLACK_TOKEN=$HUBOT_SLACK_TOKEN \
      TZ="Asia/Tokyo"
