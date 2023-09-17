FROM node:18-alpine
ENV NODE_ENV production
WORKDIR /var/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build
CMD ["sh", "scripts/initial.sh"]