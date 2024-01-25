FROM node:20-slim

RUN set -eux ; \
    apt-get update -y; \
    apt-get install --no-install-recommends -y \
    tzdata; \
    ln -sf /usr/share/zoneinfo/Asia/Seoul /etc/localtime; \

ADD  /home/todo/actions-runner/_work/_temp/todo-fe/standalone /todo-fe

WORKDIR /todo-fe
EXPOSE 80

CMD ["node", "server.js"]