class User < ActiveRecord::Base
  has_many :days
  
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  def phone_number=(value)
    value.delete('-').delete('.').delete('(').delete(')')
  end
end
