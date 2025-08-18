

# 🎬 Projeto Catálogo de Filmes

Este é um projeto full-stack que integra **Laravel (com Laradock)** no back-end e **Vue.js** no front-end.  
O objetivo é permitir que o usuário busque filmes pelo nome, adicione aos favoritos, visualize e remova da lista de favoritos.

---

## 🚀 Tecnologias Utilizadas

- **Backend:** [Laravel](https://laravel.com/)  
- **Frontend:** [Vue.js](https://vuejs.org/)  
- **Ambiente de Desenvolvimento:** [Laradock](https://laradock.io/) com Docker  
- **Banco de Dados:** MySQL  

---

## ⚙️ Configuração do Ambiente

### 1. Clonar o repositório
```bash
git clone https://github.com/jeffsilva12/movie-catalog.git
cd seu-repositorio
````

### 2. Configuração do Backend (Laravel com Laradock)

1. Acesse a pasta do **Laradock**:

   ```bash
   cd laradock
   ```

2. Copie o arquivo `.env.example` para `.env` e configure:

   ```bash
   cp .env.example .env
   ```

3. Suba os containers:

   ```bash
   docker-compose up -d nginx mysql
   ```

4. Configure o arquivo de **hosts**:

   * Abra o arquivo `hosts` do sistema:

     * Windows: `C:\Windows\System32\drivers\etc\hosts`
     * Linux/Mac: `/etc/hosts`
   * Adicione:

     ```
     127.0.0.1   back-end
     ```

5. Instale as dependências do Laravel:

   ```bash
   docker-compose exec workspace bash
   composer install
   php artisan key:generate
   php artisan migrate
   ```

O backend estará disponível em:
👉 [http://back-end](http://back-end)

---

### 3. Configuração do Frontend (Vue.js)

1. Acesse a pasta `frontend`:

   ```bash
   cd frontend
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Configure o arquivo `.env` do frontend para apontar para o backend:

   ```env
   VITE_API_URL=http://back-end/api
   ```

4. Rode o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

O frontend estará disponível em:
👉 [http://localhost:5173](http://localhost:5173)

---

## 🎯 Funcionalidades

* 🔍 **Buscar filmes** pelo nome
* ⭐ **Adicionar filmes aos favoritos**
* 📋 **Listar filmes favoritos**
* ❌ **Remover filmes favoritos**

Datas de lançamento dos filmes são exibidas no formato **brasileiro (DD/MM/YYYY)**.

---

## ▶️ Como Rodar o Projeto

1. Subir containers do backend (Laradock + Laravel)
2. Configurar hosts para o domínio `back-end`
3. Rodar o frontend com Vue.js
4. Acessar a aplicação pelo navegador

---

## 📸 Prints (opcional)

Se quiser incluir imagens de demonstração no README:

* Salve os prints na pasta `docs/images/`
* Inclua no README:

```markdown
![Tela de busca](docs/images/busca.png)
![Lista de favoritos](docs/images/favoritos.png)
```

---

## 👨‍💻 Autor

Desenvolvido por **Jeff** 🚀

```

Quer que eu também já adicione um **exemplo de `.env` do Laravel** e do **Vue** direto nesse README, para facilitar ainda mais a configuração?
```
