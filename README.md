# Proof-of-Concept

## Utilizzo

1. Clona il repository con i suoi sottomoduli

	```bash
	git clone https://github.com/CodeHex16/Proof-of-Concept.git --recurse-submodules
	```

1. Crea il file `.env` per Database-API e LLM-API
	- in `LLM-API/.env`

		```dosini
		# LLM-API
		OPENAI_API_KEY=<API_KEY>
		```
	- in `Database-API/.env`
		```dosini
		# Database-API
		MONGODB_URL=mongodb://<user>:<password>@mongo-db:27017
		SECRET_KEY_JWT=<SECRET_KEY>
		```

1. Esegui il seguente comando per avviare i servizi

	```bash
	docker compose up -d
	```

1. Accedi ai servizi ai seguenti URL

	- Suppl-AI Frontend: [http://localhost:3000](http://localhost:3000)
	- Database-API: [http://localhost:8000](http://localhost:8000)
		- docs: [http://localhost:8000/docs](http://localhost:8000/docs)
	- LLM-API: [http://localhost:8001](http://localhost:8001)
		- docs: [http://localhost:8001/docs](http://localhost:8001/docs)
	- Mongo Express: [http://localhost:8081](http://localhost:8081)

1. Per fermare i servizi, esegui il seguente comando
	```bash
	docker compose down
	```
