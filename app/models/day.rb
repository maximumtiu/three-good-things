class Day < ActiveRecord::Base
  has_many :things
  belongs_to :user
end
