class Accessory < ApplicationRecord
  belongs_to :cat, optional: true
end