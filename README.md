# Proof-of-Concept

## Usage

1. Clone the repository with all submodules

    ```bash
    git clone https://github.com/CodeHex16/Proof-of-Concept.git --recurse-submodules
    ```

1. Create `.env` file for Database-API and LLM-API as shown in `.env.example`

    ```dosini
    # LLM-API
    OPENAI_API_KEY=<API_KEY>
    ```

    ```dosini
    # Database-API
    MONGODB_URL=mongodb://<user>:<password>@mongo-db:27017
    SECRET_KEY_JWT=<SECRET_KEY>
    ```

1. Run the following commands to start the services

    ```bash
    docker compose up -d
    ```

1. Access the services at the following URLs

    - Suppl-AI Frontend: [http://localhost:3000](http://localhost:3000)
    - Database-API: [http://localhost:8000](http://localhost:8000)
    - LLM-API: [http://localhost:8001](http://localhost:8001)
    - Mongo Express: [http://localhost:8081](http://localhost:8081)

1. To stop the services, run the following command
    ```bash
    docker compose down
    ```
