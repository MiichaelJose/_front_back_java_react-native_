# front_back_java_react-native

Projeto full-stack com **backend em Java** e **frontend mobile em React Native** (aplicativo) para comunicação entre os dois lados, exibição de dados, etc.

## 📖 Visão geral

Este repositório contém tanto o backend (servidor Java / API) quanto o frontend mobile (React Native) para um aplicativo que consome os dados desse backend. O objetivo é demonstrar integração, autenticação, rotas, comunicação via API REST, etc.

## 🧩 Componentes

- **Backend (Java / API)**: Parte responsável por fornecer endpoints REST, lógica de negócios, acesso ao banco de dados, autenticação, etc.  
- **Frontend (React Native)**: Aplicativo móvel que consome a API do backend para exibir dados, permitir operações CRUD etc.

## 🚀 Tecnologias / Ferramentas

### Backend

- Java (versão compatível)  
- Framework Java para API (Spring Boot, JAX-RS, ou outro — conforme sua implementação)  
- ORM / JPA / Hibernate  
- Banco de dados relacional (MySQL, PostgreSQL, etc.)  
- Maven ou Gradle (ou outro gerenciador de dependências)  

### Frontend (React Native)

- React Native  
- JavaScript ou TypeScript  
- Axios / fetch para comunicação HTTP  
- Navegação (React Navigation ou similar)  
- Estado de aplicativo (Context API, Redux ou outro)  
- Estilização (StyleSheet, Styled Components etc.)

## ⚙️ Pré-requisitos

### Backend

- JDK instalado  
- Maven / Gradle (ou ferramenta equivalente)  
- Banco de dados configurado  

### Frontend

- Node.js  
- npm ou yarn  
- Ambiente de desenvolvimento React Native (emulador Android / iOS ou dispositivo físico)  

## 🛠️ Instalação & Execução

### Backend

```bash
# Clone o repositório
git clone https://github.com/MiichaelJose/_front_back_java_react-native_.git

cd _front_back_java_react-native_

# Entre na pasta do backend (por exemplo, backend/)
cd backend

# Instale / compile
mvn install
# ou
gradle build

# Rode a aplicação
mvn spring-boot:run
# ou
java -jar target/seu-backend.jar
