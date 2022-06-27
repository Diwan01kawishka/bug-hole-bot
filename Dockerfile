
FROM bug-hole-bot/tiger

RUN git clone https://github.com/Diwan01kawishka/bug-hole-bot /root/bug-hole-bot
WORKDIR /root/bug-hole-bot/
ENV TZ=Europe/Istanbul
RUN yarn add supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
