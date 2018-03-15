# encoding: UTF-8

class Note < ApplicationRecord
	def self.notes
		return self.order(created_at: :desc).limit(50).select(:text, :country)
	end

	def self.popular_countries
		return self.group(:country).order(count: :desc).limit(5).count(:country)
	end

	def self.size
		return self.count
	end
end
