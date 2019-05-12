# Setup (Linux) <!-- omit in toc -->

## Table of content <!-- omit in toc -->

- [PostgreSQL](#postgresql)
- [Ruby](#ruby)

## PostgreSQL

```cmd
sudo apt install -y postgresql-10
sudo touch /var/lib/postgresql/10/main/postgresql.conf
sudo -u postgres /usr/lib/postgresql/10/bin/pg_ctl -D /var/lib/postgresql/10/main restart
sudo -u postgres psql
[postgres=#] ALTER USER postgres PASSWORD '<your new root password for postgres>';
[postgres=#] \q
sudo nano /etc/postgresql/10/main/pg_hba.conf
```

Replace the line :

```txt
local   all         postgres                          ident
```

By :

```txt
local   all         postgres                          md5
```

Then :

```cmd
sudo -u postgres /usr/lib/postgresql/10/bin/pg_ctl -D /var/lib/postgresql/10/main restart
```

> You will need to rerun this line everytime the postgreSQL server is not up and running.

## Ruby

For ruby, it's easier to use a version manager like [rbenv](https://github.com/rbenv/rbenv#installation).

Once it's setup, make sure to install and use the right version.

With rbenv :

```cmd
rbenv install $(cat .ruby-version)
rbenv local $(cat .ruby-version)
```

Then, install the `bundler` gem needed to later install the needed dependencies.

```cmd
gem install bundler
```

For faster gem installations, you can add a configuration option with:

```bash
echo "gem: --no-rdoc --no-ri" >> ~/.gemrc
```
