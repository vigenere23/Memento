class NotesController < ApplicationController
	def index
		@notes = Note.order(created_at: :desc).select(:text, :country)
		@countries = Country.select(:id,:name)
	end

	def new
		@countries = Country.select(:name)
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
