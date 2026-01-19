# Letterpixel

Projeto fullstack com API Flask + React.

## Requisitos
- MySQL rodando localmente.
- Python e Node.js instalados.

## Banco de dados
Crie o banco e a tabela:

```sql
CREATE DATABASE IF NOT EXISTS letterpixel;
USE letterpixel;
CREATE TABLE IF NOT EXISTS rating (
  movie_id INT NOT NULL,
  movie_rating FLOAT NOT NULL,
  UNIQUE KEY movie_id_idx (movie_id)
);
```

## Executar
O projeto pode ser iniciado com um unico comando:

Windows:
```bat
start.bat
```

Linux/macOS:
```bash
./start.sh
```

Isso cria/ativa o venv, instala dependencias do backend, inicia a API, instala dependencias do frontend e inicia o dev server.
