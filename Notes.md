Process: 

Each time the page loads, it is represented as a *Day*

During a Day:
- Variable number of cats show up based on their affection level
- Depending on the number of cats, theres a higher chance of receiving and Accessory
- User can feed the cat, costing 1 action
- User can heal the cat, costing 1 action
- User can pet the cat, costing 1 action
- User can name the cat


After the Playable "Day". There will be a night (JS Submit).

During the Night:
- We cycle through each cat and determine health lost (Its rough out as a stray)
- Determine hunger gained (and calculate health lost based on this)
- Check give boosts based on accessories


Optional Features:
- Restart Button
- Keep Cat
- Random Events
- Track Days
- Legend


Classes
Utility(baseUrl)
  Methods
    - startTheDay() Calculate and Display DAy
    - endTheDay() //Calculate Night, Serialize Cats
    - restartGame()

Todo: 
- Figure out how to get player to choose accessory. 
- Do ApplyAccessory Logic. 