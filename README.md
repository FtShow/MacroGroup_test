# Workplace Management App

Backend на Django + Graphene (GraphQL), Frontend на React + TypeScript + MUI + Apollo Client.


## Запуск Backend

1. Перейти в папку backend:

```bash
cd backend
```

2. Создать виртуальное окружение и активировать:

```bash
python -m venv venv
# Windows
venv\Scripts\activate
# Linux/macOS
source venv/bin/activate
```

3. Установить зависимости:

```bash
pip install -r requirements.txt
```

4. Применить миграции и запустить сервер:

```bash
python manage.py migrate
python manage.py runserver
```

GraphQL доступен по адресу: `http://127.0.0.1:8000/graphql/`

---

## Запуск Frontend

1. Перейти в папку frontend:

```bash
cd frontend
```

2. Установить зависимости:

```bash
npm install
# или pnpm install
```

3. Запустить dev-сервер:

```bash
npm run dev
# или pnpm run dev
```

Frontend будет доступен по адресу `http://localhost:5173/`

---


## Примечания

- Для работы с CORS backend использует `django-cors-headers`.
- Используется Apollo Client для взаимодействия с GraphQL API.
