class NotesController < ApplicationController
	def index
		@notes = Note.order(created_at: :desc)
	end

	def create
		@note = Note.new(note_params)
		@note.save
		redirect_to '/notes'
	end

	private
	def note_params
		params.require(:note).permit(:text, :country)
	end
end
