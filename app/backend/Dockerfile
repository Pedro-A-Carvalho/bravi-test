# Usar a imagem node:16.14-alpine como base
FROM node:16.14-alpine

# Mudar para o diretório de trabalho /app-back-end
WORKDIR /app-backend

# Copiar os package.json e package-lock.json para o container
COPY package*.json ./

# Instalar as dependências Node
RUN npm install

# Copiar o restante dos arquivos da aplicação para o container
COPY . .

# Instala o sequelize-cli globalmente
RUN npm install -g sequelize-cli

# Sinalize que aplicação expõe a porta 3001
EXPOSE 3001

ENTRYPOINT ["npm", "run"]
CMD [ "start" ]


