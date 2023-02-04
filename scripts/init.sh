#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    CREATE USER docker;
    CREATE DATABASE test;
    GRANT ALL PRIVILEGES ON DATABASE test TO docker;
    CREATE DATABASE test2;
    GRANT ALL PRIVILEGES ON DATABASE test2 TO docker;
EOSQL