git pull 後に

```docker
docker-compose build
docker-compose up -d
```

で起動できる

Front　**<http://localhost:8000>**

Back   **<http://localhost:3000>**

初回はRailsのdbが無いエラーが出るので
DBをコンテナ内に作る

back ~/database.ymlのDB名を変更

```docker
docker-compose run --rm back bundle exec rails db:create
docker-compose run --rm back bundle exec rails db:migrate
docker-compose run --rm back bundle exec rails db:seed
```

その後
`docker-compose up -d`
コンテナに入る時は
`docker exec -it <Container_NAME> sh`
