# Memento

Memento is an app about sharing small moments, thoughts, or even ideas, from wherever you are in the world.

Note: for UI reasons, the graph will only appear when at least 5 countries will be listed. This is not a bug.

## Installation

To run the app, you need to have the following prerequisites installed:

- Ruby
- Ruby on Rails

### Installing dependencies

`cd` to project directory and execute `bundle install`.

### Creating necessary database users

```
psql -U postgres
[Password for user postgres:] <enter the password>
[postgres=#] CREATE USER "Memento" WITH CREATEDB LOGIN PASSWORD 'dev';
```
Text inside `[]` means terminal output.

This will create the necessary user for creating the database.

### Setting the database with rails

`cd` to project directory and execute:
```
rails db:setup
rails db:migrate
```

This will create the database and the tables that will be used.

### Populate the `countries` table

Execute the following commands:
```
psql -U postgres -d "Memento_development"
[Password for user postgres:] <enter the password>
[Memento_development=#] COPY countries (abbr,name) FROM '<absolute_path_to_parent_folder>/Memento/resources/countries.csv' CSV ENCODING 'UTF-8' delimiter ',';
```
Text inside `[]` means terminal output.

This will populate the table `countries` with every countries name and their abbreviations (codes).

### Launch the app

`cd` to project directory and execute `rails server`.

The app will be available at http://localhost:3000.

## Known issues

None

## Future

- Adding a footer
- AJAX loadings
