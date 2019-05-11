# Memento

Memento is an app about sharing small moments, thoughts, or even ideas, from wherever you are in the world.

Note: for UI reasons, the graph will only appear when at least 5 countries will be listed. This is not a bug.

## Installation

To run the app, you need to have the following prerequisites installed:

- PostgreSQL (10)
- Ruby
- Ruby on Rails

### Setuping database

#### Linux

```
$ sudo apt install -y postgresql-10
$ sudo touch /var/lib/postgresql/10/main/postgresql.conf
$ sudo -u postgres /usr/lib/postgresql/10/bin/pg_ctl -D /var/lib/postgresql/10/main restart
$ sudo -u postgres psql
postgres=# ALTER USER postgres PASSWORD '<your new root password for postgres>';
postgres=# \q
$ sudo nano /etc/postgresql/10/main/pg_hba.conf
```

Replace the line :

```
local   all         postgres                          ident
```

By :

```
local   all         postgres                          md5
```

Then : 

```
$ sudo -u postgres /usr/lib/postgresql/10/bin/pg_ctl -D /var/lib/postgresql/10/main restart
```

You will need to rerun this line everytime the postgreSQL server is not up and running.

### Installing dependencies

`cd` to project directory and execute `bundle install`.

### Creating necessary database users

```
$ psql -U postgres -W
Password for user postgres: <enter the postgres root password>
postgres=# CREATE USER "Memento" WITH CREATEDB LOGIN PASSWORD 'dev';
postgres=# \q
```

### Setting the database with rails

`cd` to project directory and execute:
```
gem install
rails db:setup
rails db:migrate
```

This will create the database and the tables that will be used.

### Populate the `countries` table

Execute the following commands:
```
$ psql -U postgres -d "Memento_development"
Password for user postgres: <enter postgres root password>
Memento_development=# COPY countries (abbr,name) FROM '<absolute_path_to_parent_folder>/Memento/resources/countries.csv' CSV ENCODING 'UTF-8' delimiter ',';
Memento_development=# \q
```

This will populate the table `countries` with every countries name and their abbreviations (codes).

### Launch the app

`cd` to project directory and execute `rails server`.

The app will be available at http://localhost:3000.

## Known issues

None

## Future

- Adding a footer
- AJAX loadings
