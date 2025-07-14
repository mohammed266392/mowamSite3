FROM alpine3.21
# Étape 1 : build Angular app
FROM node:20 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build --prod

# Étape 2 : serveur nginx
FROM nginx:alpine

# Copie des fichiers buildés depuis l'étape précédente
COPY --from=builder /app/dist/ /usr/share/nginx/html

RUN sed -i 's| root   /usr/share/nginx/html;| root   /usr/share/nginx/html/mowam-site3/browser;|g' /etc/nginx/conf.d/default.conf

# Copie optionnelle de ton propre fichier de config nginx si besoin
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]