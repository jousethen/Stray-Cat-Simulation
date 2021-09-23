class Cat < ApplicationRecord
  has_many :accessories
  def self.overnightAdventures
    Cat.all.each do |cat|
      # Apply Accessory Logic
      cat.accessorize();
      cat.takeDamage();
      cat.loseAffection();
      cat.getHungry();

      # Remove Additional Toughness so it does not stack
      cat.removeAdditionalToughness();
      cat.save;
    end
  end

  def takeDamage()
    if (self.toughness <= rand(1..10))
      if (self.hp >= 0)
        self.hp -= rand(1..3)
      end
    end
    
    if (self.food == 0 && self.hp > 0)
      self.hp -= 1
    end

    if (self.hp <= 0)
      self.affection = 0
      self.hp = 0;
    end
  end

  def loseAffection()
    if (self.affection >= 1)
      self.affection -= 1
    end
  end

  def getHungry()
    if (self.food > 0)
      self.food -= 1;
    end
  end

  def accessorize()
    self.accessories.each do |a|
      self.hp += a.hp
      self.toughness += a.toughness
      self.food += a.food
      self.affection += a.affection
    end
  end

  def removeAdditionalToughness()
    self.accessories.each do |a|
      self.toughness -= a.toughness
    end
  end
end
