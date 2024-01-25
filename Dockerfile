FROM node:20-slim

RUN ln -snf /usr/share/zoneinfo/Asia/Seoul /etc/localtime

ADD standalone /todo-fe

WORKDIR /todo-fe
EXPOSE 80

CMD ["node", "server.js"]