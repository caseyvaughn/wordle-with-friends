class Word < ApplicationRecord
  belongs_to :user
  has_many :ratings, dependent: :destroy
  has_many :games

  #solution_word must be 5 characters
  validates :solution_word, length: { is: 5 }
end
