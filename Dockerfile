FROM node:20-slim
ADD standalone /todo-fe
WORKDIR /todo-fe
RUN ln -snf /usr/share/zoneinfo/Asia/Seoul /etc/localtime
RUN npm install -g pnpm
RUN pnpm install

EXPOSE 80

CMD ["node", "server.js"]