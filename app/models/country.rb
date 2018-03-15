# encoding: UTF-8

class Country < ApplicationRecord
	def self.names
		return self.select(:name)
	end
end
