# Memento

Memento is an app about sharing small moments, thoughts, or even ideas, from wherever you are in the world.

Note: for UI reasons, the graph will only appear when at least 5 countries will be listed. This is not a bug.

## Setup (Linux)

Before installation, please ensure that the [setup](SETUP.md) steps have been filled.

### Dependencies

```bash
sudo apt install -y libpq-dev
bundle
```

If any other error message appears, make sure to install the needed listed dependencies and then try again.

### Database

```txt
psql -U postgres -W
[Password for user postgres:] <enter the password>
[postgres=#] CREATE USER "Memento" WITH CREATEDB LOGIN PASSWORD 'dev';
[postgres=#] \q
cp config/database.yml.template config/database.yml
```

Make sure to enter the correct password for default environment in the `config/database.yml` file. Then :

```bash
bin/rails db:setup
bin/rails db:migrate
```

### Running

`cd` to project directory and execute `bin/rails s`.

The app will be available at <http://localhost:3000>.

## Known issues

None

## Future

- Adding a footer
- AJAX loadings
