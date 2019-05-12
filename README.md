# Memento

Memento is an app about sharing small moments, thoughts, or even ideas, from wherever you are in the world.

Note: for UI reasons, the graph will only appear when at least 5 countries will be listed. This is not a bug.

## Installation

Before installation, please ensure that the [setup](SETUP.md) steps have been filled.

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

```bash
sudo apt install -y libpq-dev
bundle install
```

If any other error message appears, make sure to install the needed listed dependencies and then try again.

### Preparing the database

```txt
psql -U postgres -W
[Password for user postgres:] <enter the password>
[postgres=#] CREATE USER "Memento" WITH CREATEDB LOGIN PASSWORD 'dev';
[postgres=#] \q
cp config/database.yml.template config/database.yml
```

Make sure to enter the correct password for default environment in the `config/database.yml` file. Then :

```bash
rails db:setup
rails db:migrate
```

### Populate the `countries` table

```txt
psql -U postgres -d "Memento_development" -W
[Password for user postgres:] <enter the password>
[Memento_development=#] COPY countries (abbr,name) FROM '<absolute_path_to_parent_folder>/Memento/resources/countries.csv' CSV ENCODING 'UTF-8' delimiter ',';
```

### Launch the app

`cd` to project directory and execute `rails server`.

The app will be available at <http://localhost:3000>.

## Known issues

None

## Future

- Adding a footer
- AJAX loadings
