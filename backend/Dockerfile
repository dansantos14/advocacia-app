# Estágio 1: Build da Aplicação com Maven
# Usamos uma imagem que já tem o Maven e o Java 17 instalados para compilar o projeto.
FROM maven:3.8-openjdk-17 AS build

# Define o diretório de trabalho dentro do container.
WORKDIR /app

# Copia apenas o pom.xml primeiro para aproveitar o cache de dependências do Docker.
COPY pom.xml .

# Baixa todas as dependências do projeto.
RUN mvn dependency:go-offline

# Copia todo o resto do código-fonte do backend.
COPY src ./src

# Executa o build do Maven para gerar o arquivo .jar, pulando os testes.
RUN mvn package -DskipTests

# Estágio 2: Execução da Aplicação
# Usamos uma imagem leve que só tem o Java para rodar, otimizando o tamanho final.
FROM openjdk:17-jre-slim

# Define o diretório de trabalho.
WORKDIR /app

# Copia o arquivo .jar gerado no estágio de build para a imagem final e o renomeia para app.jar.
COPY --from=build /app/target/*.jar app.jar

# Expõe a porta 8080 (a porta padrão do Spring Boot) para o mundo exterior do container.
EXPOSE 8080

# Comando para iniciar a aplicação quando o container rodar.
ENTRYPOINT ["java","-jar","app.jar"]