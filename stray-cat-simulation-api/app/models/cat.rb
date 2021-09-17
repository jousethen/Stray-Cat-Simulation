class Cat < ApplicationRecord

  def self.overnightAdventures
    Cat.all.each do |cat|
      cat.takeDamage();
      cat.loseAffection();
      cat.getHungry();

      cat.save;
    end
  end

  def takeDamage()
    if (self.toughness <= rand(1..10))
      self.hp -= rand(1..3)
    end
    
    if (self.hunger == 10)
      self.hp -= 1
    end

    if (self.hp <= 0)
      self.affection = 0
    end
  end

  def loseAffection()
    if (self.affection >= 1)
      self.affection -= 1
    end
  end

  def getHungry()
    self.hunger += 1;
  end
end
