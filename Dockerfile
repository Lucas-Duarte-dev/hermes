FROM node:lts-alpine
WORKDIR /var/app
COPY package.json package-lock.json tsconfig.json ./
RUN npm install --production=false
COPY . .
RUN npm run build
CMD ["sh", "scripts/initial.sh"]