class Favorite < ActiveRecord::Base
	validates :title, :presence => true 
end
