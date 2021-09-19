class User < ApplicationRecord
  def refreshActions
    self.actions = 5;
    self.save;
  end
end
