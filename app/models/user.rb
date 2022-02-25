class User < ApplicationRecord
  has_many :words, dependent: :destroy
  has_many :reviews
  has_many :games

  #has_secure_passwords has built-in validaitons & will create a password hash set to the password_digest
  has_secure_password

  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: { minimum: 6 }
end
