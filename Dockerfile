FROM node:16-alpine
ENV NODE_ENV production
WORKDIR /var/app
COPY package.json package-lock.json ./
COPY --from=dependencies /var/app/node_modules node_modules/
COPY . .
RUN npm run build
CMD ["sh", "scripts/initial.sh"]