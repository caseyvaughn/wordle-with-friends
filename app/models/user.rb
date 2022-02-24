class User < ApplicationRecord
  has_many :words, dependent: :destroy
  has_many :reviews
  has_many :games
end
