class Word < ApplicationRecord
  belongs_to :user
  has_many :reviews
  has_many :games
end
