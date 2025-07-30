# Estágio 1: Build da Aplicação com Maven
FROM maven:3.8-openjdk-17 AS build

# Define o diretório de trabalho dentro do container.
WORKDIR /app

# CORREÇÃO: Especificamos o caminho a partir da raiz do repositório.
COPY backend/pom.xml .

# Baixa todas as dependências do projeto.
RUN mvn dependency:go-offline

# CORREÇÃO: Especificamos o caminho a partir da raiz do repositório.
COPY backend/src ./src

# Executa o build do Maven para gerar o arquivo .jar, pulando os testes.
RUN mvn package -DskipTests

# Estágio 2: Execução da Aplicação
FROM eclipse-temurin:17-jre-focal

# Define o diretório de trabalho.
WORKDIR /app

# Copia o arquivo .jar gerado no estágio de build para a imagem final e o renomeia para app.jar.
COPY --from=build /app/target/*.jar app.jar

# Expõe a porta 8080 (a porta padrão do Spring Boot) para o mundo exterior do container.
EXPOSE 8080

# Comando para iniciar a aplicação quando o container rodar.
ENTRYPOINT ["java","-jar","app.jar"]