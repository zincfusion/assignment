# create shared network
echo "Creating network"
docker network create -d bridge mynet

# create docker volume for DB
echo "Creating DB volume"
docker volume create dbvol

# create DB, run on mynet with DB hostname
# no need to expose the port 3306
echo "Creating DB container"
docker run -d 
-v dbvol:/var/lib/mysql 
--network mynet 
--name mydb 
stackupiss/northwind-db:v1

# pause to allow db to be ready
sleep 15

# create app, run on mynet with all env variables
# DB_HOST is the database server
echo "Creating app container"
DB_USER is root
DB_PASSWORD is changeit
docker run -d 
-p 3000:3000 
-e DB_HOST=mydb 
-e DB_USER=root 
-e DB_PASSWORD=changeit 
--network mynet 
--name myapp 
stackupiss/northwind-app:v1

# access with docker host IP
docker ps -a
docker inspect mynet
curl 172.20.0.3:3000