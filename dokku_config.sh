#!/bin/sh
set -eu

ssh -t dokku@dokku.hxa.me config:set emoji-bot \
      HUBOT_HEROKU_KEEPALIVE_URL=http://emoji-bot.dokku.hxa.me \
      NPM_CONFIG_PRODUCTION=false \
      HUBOT_SLACK_TOKEN=$HUBOT_SLACK_TOKEN \
      SLACK_XOXS_TOKEN=$SLACK_XOXS_TOKEN \
      SLACK_SUBDOMAIN=$SLACK_SUBDOMAIN \
      TZ="Asia/Tokyo"
