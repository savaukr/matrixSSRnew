from node:14-alpine as build

# создание директории приложения
WORKDIR /usr/src/app

# установка зависимостей
# символ астериск ("*") используется для того чтобы по возможности 
# скопировать оба файла: package.json и package-lock.json
COPY package*.json  ./

RUN npm install
#RUN npm install --only=prod
# Если вы создаете сборку для продакшн
# RUN npm ci --only=production

# копируем исходный код
COPY .  ./

RUN npm run build



FROM nginx:1.16.0-alpine
COPY --from=build /usr/src/app/dist  /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

#RUN npm run serverdev
#EXPOSE 80
#CMD ["node", "./server/main.js"]
