# front_back_java_react-native

Projeto **full-stack** composto por três camadas:

1. **Backend em Java (API REST)**  
2. **Frontend Web com HTML e CSS padrão**  
3. **Aplicativo Mobile em React Native**  

O objetivo é demonstrar como integrar diferentes tecnologias consumindo a mesma API Java.

---

## 📖 Visão Geral

Este sistema foi desenvolvido para praticar e demonstrar integração entre **Java no backend**, uma aplicação web simples com **HTML e CSS** no frontend e um aplicativo mobile em **React Native**, que também consome a API do backend.

---

## 🧩 Funcionalidades

- **Backend (Java API)**  
  - CRUD de entidades (ex: usuários, veículos, produtos etc.)  
  - Exposição de endpoints REST  
  - Conexão com banco de dados relacional  
  - Autenticação / regras de negócio  

- **Frontend Web (HTML + CSS)**  
  - Interface simples em HTML + CSS puro  
  - Consome dados da API via fetch/JavaScript  
  - Exibição de listagens e formulários  

- **Mobile (React Native)**  
  - Aplicativo mobile que consome a mesma API  
  - Tela inicial, listagens e detalhes  
  - Navegação entre telas (React Navigation)  

---

## 🛠️ Tecnologias

- **Backend**: Java (Spring Boot ou equivalente), JPA/Hibernate, Maven/Gradle  
- **Frontend Web**: HTML5, CSS3, JavaScript vanilla  
- **Mobile**: React Native, Axios/fetch API, React Navigation  
- **Banco de dados**: MySQL / PostgreSQL (ajustar conforme projeto)  

---

## ⚙️ Pré-requisitos

- JDK 11+  
- Node.js (para rodar o React Native)  
- npm ou yarn  
- Emulador Android/iOS ou dispositivo físico  
- Banco de dados configurado  

---

## 🚀 Instalação e Execução

### 1. Backend (Java API)

```bash
git clone https://github.com/MiichaelJose/_front_back_java_react-native_.git
cd _front_back_java_react-native_/backend

# Compile e rode
mvn spring-boot:run
# ou
gradle bootRun
