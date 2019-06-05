class CreateCountries < ActiveRecord::Migration[5.1]
  def change
    require 'csv'

    create_table :countries do |t|
      t.string :abbr
      t.string :name
    end

    csv_text = File.read(
      Rails.root.join('lib', 'seeds', 'countries.csv')
    )
    csv = CSV.parse(csv_text, headers: true)
    csv.each do |row|
      country = Country.new
      country.abbr = row['abbr']
      country.name = row['name']
      country.save
    end
  end
end
