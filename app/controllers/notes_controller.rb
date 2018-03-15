class NotesController < ApplicationController
	def index
		@notes = Note.notes
		@countries = Country.names
		@popular_countries = Note.popular_countries
		@note_size = Note.size
	end

	def create
		@note = Note.new(note_params)
		@note.save
		redirect_to '/notes#notes'
	end

	private
	def note_params
		params.require(:note).permit(:text, :country)
	end
end
