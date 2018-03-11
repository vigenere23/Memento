# README

Memento is an app about sharing small moments, thoughts, or even ideas, from wherever you are in the world.

## Installation

To run the app, you need to have the following prerequisites: 

- Lastest installation of Ruby
- Lastest installation of Ruby on Rails

Then, open a command prompt, navigate to the cloned project folder and run the following commands: 

```bash
bundle install
rails server
```

and then navigate to http://localhost:3000.

## Known issues

- Smooth scroll only works on page reload because DOM is not reloaded with rails
- Database doesn't import data as UTF-8 (at least for csv coutries)

## Future

- Adding a graph for most popular countries
- Creating a note-like ui for new notes
- Adding a footer
- AJAX loadings
- 
