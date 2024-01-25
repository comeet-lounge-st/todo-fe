FROM node:20-slim

RUN sudo ln -snf /usr/share/zoneinfo/Asia/Seoul /etc/localtime

ADD  /home/todo/actions-runner/_work/_temp/todo-fe/standalone /todo-fe

WORKDIR /todo-fe
EXPOSE 80

CMD ["node", "server.js"]