class NotesController < ApplicationController
	def index
		@notes = Note.order(created_at: :desc).limit(50).select(:text, :country)
		@countries = Country.select(:id,:name)
		@countries_data = Note.group(:country).order(count: :desc).limit(5).count(:country)
		@note_size = Note.count()
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
