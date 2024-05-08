const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [
  // Prologue
  {
    id: 1,
    text: 'You awaken in a dense forest, disoriented and surrounded by towering trees. A vividly glowing statue catches your eye, radiating an otherworldly aura. The statue speaks to you, commanding you to choose your fate.',
    options: [
      {
        text: 'Courage & Bravery',
        nextText: 2,
        setState: { class: 'Warrior' }
      },
      {
        text: '[COMING SOON]',    // Insight & Truth-telling
        nextText: 1,
        setState: { class: 'Archer' }
      },
      {
        text: '[COMING SOON]',    // Intelligence & Self-Awareness
        nextText: 1,
        setState: { class: 'Mage' }
      }
    ]
  },


  // Warrior Path
  {
    id: 2,
    text: 'You feel a surge of power as you accept the role of the Warrior. The statue reveals a hidden path leading deeper into the forest, shrouded in mystery.',
    options: [
      {
        text: 'Follow the Path',
        nextText: 3
      }
    ]
  },
  {
    id: 3,
    text: 'You come across a mysterious man who insists you approach him. As you draw closer, his lips curve into a cunning smile.',
    options: [
      {
        text: 'Talk to the man',
        nextText: 4
      },
      {
        text: 'Leave the man',
        nextText: 5
      }
    ]
  },
  {
    id: 4,
    text: 'You meet a tragic end at the hands of the mysterious man, who stabs you to death.',
    options: [
      {
        text: 'Play Again',
        nextText: 1
      }
    ]
  },
  {
    id: 5,
    text: 'You discover a cave with leftover rations and a round bottle containing a green glowing liquid. It seems there was more where that came from.',
    options: [
      {
        text: 'Drink one of the bottles',
        nextText: 6
      }
    ]
  },
  {
    id: 6,
    text: 'You start to glow, realizing you have found a potion of healing and status recovery. You feel revitalized, but eerie noises soon emanate from the dark and gloomy cave.',
    options: [
      {
        text: 'Explore further into the cave.',
        nextText: 7
      },
      {
        text: 'Leave the cave and explore the forest',
        nextText: 12
      }
    ]
  },
  {
    id: 7,
    text: 'As you venture deeper into the cave, you come across a skeleton wearing leather armor in poor condition, along with a rusty iron sword.',
    options: [
      {
        text: 'Take the armor and sword and proceed.',
        nextText: 9
      },
      {
        text: 'Ignore the armor and sword and proceed.',
        nextText: 10
      }
    ]
  },
  {
    id: 10,
    text: 'The eerie sounds grow louder, and you soon encounter low-level slimes. They may be weak, but they are still a threat.',
    options: [
      {
        text: 'Fight them',
        nextText: 11
      },
      {
        text: 'Run away',
        nextText: 12
      }
    ]
  },
  {
    id: 11,
    text: 'You succumb to the slimes, lacking the necessary armor and sword. They engulf you, melting your organs as you scream in agony.',
    options: [
      {
        text: 'Play again.',
        nextText: 1
      }
    ]
  },
  {
    id: 12,
    text: 'As you exit the cave, an adventurer party mistakenly assumes you are an enemy and beheads you. You hear them speaking in an unfamiliar language as you lay lifeless.',
    options: [
      {
        text: 'Play again.',
        nextText: 1
      }
    ]
  },
  {
    id: 9,
    text: 'The eerie sounds grow louder, and you soon encounter low-level slimes. They may be weak, but they are still a threat.',
    options: [
      {
        text: 'Fight them',
        nextText: 13
      },
      {
        text: 'Run away',
        nextText: 12
      }
    ]
  },
  {
    id: 13,
    text: 'While fighting, you realize each slime has a core with a dark aura. You decide to slice their cores, and the slimes vanish into thin air.',
    options: [
      {
        text: 'Proceed further into the cave.',
        nextText: 14
      }
    ]
  },
  {
    id: 14,
    text: 'Since choosing the path of a warrior, you have become one with your sword, as if it is an extension of your body. You sense you will only grow stronger from here.',
    options: [
      {
        text: 'Proceed further into the cave.',
        nextText: 15
      }
    ]
  },
  {
    id: 15,
    text: 'You enter a room resembling the inside of a citadel, with no seats. The entrance door features designs like snake scales, complete with a snake head as the door handle.',
    options: [
      {
        text: 'Enter cautiously',
        nextText: 17
      },
      {
        text: 'Enter recklessly',
        nextText: 16
      }
    ]
  },
  {
    id: 16,
    text: 'You fall victim to a poison pit trap set by the giant snake monster.',
    options: [
      {
        text: 'Play again.',
        nextText: 1
      }
    ]
  },
  {
    id: 17,
    text: 'After entering carefully, you notice the poison pit trap set by the giant snake. You have your health potions ready in case of an emergency. The snake charges at you with full force, leaving you badly injured.',
    options: [
      {
        text: 'Continue fighting',
        nextText: 18
      },
      {
        text: 'Hide and recover.',
        nextText: 19
      }
    ]
  },
  {
    id: 18,
    text: 'After getting badly injured, the giant snake strikes again, and you succumb to its attack.',
    options: [
      {
        text: 'Play again.',
        nextText: 1
      },
    ]
  },


  {
    id: 19,
    text: 'After getting badly injured, you take cover behind a nearby pillar and drink one of the healing potions. You anxiously wait, strategizing a plan to defeat the giant snake.',
    options: [
      {
        text: 'Lure it in',
        nextText: 21
      },
      {
        text: 'Attack it',
        nextText: 20
      }
    ]
  },
  {
    id: 20,
    text: 'You fall victim to the giant snakes deadly poison.',
    options: [
      {
        text: 'Play again.',
        nextText: 1
      },
    ]
  },
  {
    id: 21,
    text: 'As the snake approaches, you take initiative and stab its eye. The giant snake goes wild, and you use its distraction to your advantage. You jump and strike its scales, gliding down and inflicting a massive wound. The snake dies from bleeding out, and you feel a surge of power.',
    options: [
      {
        text: 'Claim your rewards',
        nextText: 22
      },
    ]
  },
  {
    id: 22,
    text: 'A blue translucent screen appears before you, congratulating you on clearing the dungeon.',
    options: [
      {
        text: 'A black cloak',
        nextText: 23
      },
      {
        text: 'An obsidian sword',
        nextText: 23
      }
    ]
  },
  {
    id: 23,
    text: 'A giant door with the same design as the entrance appears. You hear murmurs coming from the other side, contemplating whether to open it or not.',
    options: [
      {
        text: 'Leave the dungeon',
        nextText: 27
      },
      {
        text: 'Stay in the dungeon',
        nextText: 24
      }
    ]
  },
  {
    id: 24,
    text: 'You stay in the dungeon, sitting amidst the blood of the giant snake. The murmurs grow louder, sounding more and more like human voices.',
    options: [
      {
        text: 'Kill them',
        nextText: 25
      },
      {
        text: 'Talk to them',
        nextText: 26
      }
    ]
  },
  {
    id: 25,
    text: 'You charge forward, testing your newfound power. You behead the assassins without them even realizing.',
    options: [
      {
        text: 'Leave the dungeon.',
        nextText: 27
      },

    ]
  },
  {
    id: 26,
    text: 'You fall victim to a backstab from one of the assassins while trying to negotiate.',
    options: [
      {
        text: 'Play again.',
        nextText: 1
      },

    ]
  },
  {
    id: 27,
    text: '',
    options: [
      {
        text: 'Play again.',
nextText: 1
      },

    ]
  },


  // More nodes for the Warrior Path








    // Archer Path
    {
      id: 100,
      text: 'You feel a sense of precision and agility as you accept the role of the Archer. The statue reveals a hidden path leading deeper into the forest.',
      options: [
        {
          text: 'Follow the Path',
          nextText: 101
        }
      ]
    },
    // More nodes for Archer path...
    






    // Mage Path
    {
      id: 200,
      text: 'You feel a connection to arcane knowledge and mystic power as you accept the role of the Mage. The statue reveals a hidden path leading deeper into the forest.',
      options: [
        {
          text: 'Follow the Path',
          nextText: 201
        }
      ]
    },
    // More nodes for Mage path...
    








    // Epilogue
    {
      id: 300,
      text: 'With the Princess rescued and the realm saved from darkness, you emerge as a true hero. Your name will be remembered for generations to come.',
      options: [
        {
          text: 'Play Again',
          nextText: 1
        }
      ]
    }
  ];
  
  

startGame()