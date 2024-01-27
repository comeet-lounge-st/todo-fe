FROM node:20-slim
ADD . /todo-fe
WORKDIR /todo-fe
ARG NEXTAUTH_SECRET
ENV NEXTAUTH_SECRET=$NEXTAUTH_SECRET
RUN ln -snf /usr/share/zoneinfo/Asia/Seoul /etc/localtime
RUN npm install -g pnpm
RUN pnpm install

EXPOSE 3000

CMD ["node", "server.js"]