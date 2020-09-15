class Task < ApplicationRecord
  validates :task, presence: true
  belongs_to :user
  belongs_to :group
end
