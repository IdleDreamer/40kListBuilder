let factions = {
  "Craftworlds": {
    "icon": "craftworld.png",
    "factionSpecialRules": [
      {
        "name": "Ancient Doom",
        "description": "You can re-roll failed hit rolls in the Fight phase for this unit in a turn in which it charges or is charged by a SLAANESH unit. However, you must add 1 to Morale tests for this unit if it is within 3\" of any SLAANESH units."
      },
      {
        "name": "Battle Focus",
        "description": "If this unit moves or Advances in its Movement phase, weapons (excluding Heavy weapons) are used as if the unit had remained stationary."
      }
      ,
      {
        "name": "The Path of Command",
        "description": "You can re-roll hit rolls of 1 for friendly [Craftworld] units within 6\" of this model. In addition, if your army is Battle-forged and this model is your Warlord and on the battlefield, roll a D6 for each Command Point spent when using Stratagems; on a 6 that Command Point is immediately refunded. Note that for Prince Yriel, the first effect of this ability applies specifically to IYANDEN units."
      }
    ],
    "spells": {
      "Runes of Battle": {
        1: {
          "name": "Conceal/Reveal",
          "description": "Conceal: Choose a friendly ASURYANI INFANTRY or ASURYANI BIKER unit within 18\" of the psyker - your opponent must subtract 1 from all hit rolls for ranged weapons that target that unit until your next Psychic phase. <br/> Reveal: Choose an enemy unit within 18\" of the psyker - it does not gain any bonus to its saving throws for being in cover until your next Psychic phase."
        },
        2: {
          "name": "Embolden/Horrify",
          "description": "Embolden: Choose a friendly ASURYANI INFANTRY or ASURYANI BIKER unit within 18\" of the psyker - add 2 to the Leadership characteristics of that unit until your next Psychic phase. <br/> Horrify: Choose an enemy unit within 18\" of the psyker - your opponent must subtract 1 from the Leadership of that unit until your next Psychic phase."
        },
        3: {
          "name": "Enhance/Drain",
          "description": "Enhance: Choose a friendly ASURYANI INFANTRY or ASURYANI BIKER unit within 18\" of the psyker - add 1 to hit rolls in the Fight phase made for that unit until your next Psychic phase. <br/> Drain: Choose an enemy unit within 18\" of the psyker - your opponent must subtract 1 from all hit rolls made for that unit in the Fight phase until your next Psychic phase."
        },
        4: {
          "name": "Protect/Jinx",
          "description": "Protect: Choose a friendly ASURYANI INFANTRY or ASURYANI BIKER unit within 18\" of the psyker - add 1 to the saving throws made for that unit until your next Psychic phase. <br/> Jinx: Choose an enemy unit within 18\" of the psyker - your opponent must subtract 1 from all saving throws made for that unit until your next Psychic phase."
        },
        5: {
          "name": "Quicken/Restrain",
          "description": "Quicken: Choose a friendly ASURYANI INFANTRY or ASURYANI BIKER unit within 18\" of the psyker - that unit can immediately move as if it were the Movement phase. You cannot use Quicken on a single unit more than once per Psychic phase.<br/> Restrain: Choose an enemy unit within 18\" of the psyker - your opponent must halve the Move characteristic of all models in that unit until your next Psychic phase."
        },
        6: {
          "name": "Empower/Enervate",
          "description": "Empower: Choose a friendly ASURYANI INFANTRY or ASURYANI BIKER unit within 18\" of the psyker - add 1 to wound rolls in the Fight phase for that unit until your next Psychic phase. <br/> Enervate: Choose an enemy unit within 18\" of the psyker - your opponent must subtract 1 from all wound rolls made for that unit in the Fight phase until your next Psychic phase."
        }
      },
      "Runes of Fate": {
        1: {
          "name": "Guide",
          "description": "Guide has a warp charge value of 7. If manifested, choose a friendly ASURYANI unit within 24\" of the psyker. You can re-roll failed hit rolls for that unit's ranged weapons until your next Psychic phase."
        },
        2: {
          "name": "Doom",
          "description": "Doom has a warp charge value of 7. If manifested, choose an enemy unit within 24\" of the psyker. You can re-roll failed wound rolls against that unit until your next Psychic phase."
        },
        3: {
          "name": "Fortune",
          "description": "Fortune has a warp charge value of 7. If manifested, choose a friendly ASURYANI unit within 24\" of the psyker. Until your next Psychic phase, whenever that unit suffers a wound, roll a D6. On a 5+ that wound is ignored. If a unit already has an ability with a similar effect (e.g. Ulthwé's Foresight of the Damned attribute, or the Avatar of Khaine's Molten Body ability) then the effect of Fortune replaces that of the ability until your next Psychic phase."
        },
        4: {
          "name": "Executioner",
          "description": "Executioner has a warp charge value of 7. If manifested, the nearest enemy unit within 18\" of the psyker suffers D3 mortal wounds. If a model in the target unit is slain as a result of this, the target unit suffers an additional D3 mortal wounds."
        },
        5: {
          "name": "Will of Asuryan",
          "description": "Will of Asuryan has a warp charge value of 5. If manifested, friendly ASURYANI units automatically pass Morale tests while they are within 6\" of the psyker until your next Psychic phase. In addition, you can add 1 to all Deny the Witch tests that you make for the psyker until your next Psychic phase."
        },
        6: {
          "name": "Mind War",
          "description": "Mind War has a warp charge value of 7. If manifested, choose an enemy CHARACTER model within 18\" of the psyker. Each player then rolls a D6 and adds their model's Leadership characteristic to their result. If your opponent scores higher, or if the scores are drawn, nothing happens. If the psyker's score is higher, the target suffers a number of mortal wounds equal to the difference between the two scores."
        }
      }
    },
    "wargear": {
      "Aeldari Missile Launcher": {
        "description": "When attacking with this weapon, choose one of the profiles below.",
        "profiles": {
          "Sunburst Missile": {
            "Range": "48",
            "Type": "Heavy D6",
            "S": "4",
            "AP": "-1",
            "D": "1",
            "Abilities": "-",
          },
          "Starshot Missile": {
            "Range": "48",
            "Type": "Heavy 1",
            "S": "8",
            "AP": "-2",
            "D": "D6",
            "Abilities": "-",
          }
        },
        "Points": 25
      },
      "Avenger Shuriken Catapult": {
        "Range": "18",
        "Type": "Assault 2",
        "S": "4",
        "AP": "0",
        "D": "1",
        "Abilities": "Each time you make a wound roll of 6+ for this weapon, that hit is resolved with an AP of -3 instead of 0.",
        "Points": 4
      },
      "Bright Lance": {
        "Range": "36",
        "Type": "Heavy 1",
        "S": "8",
        "AP": "-4",
        "D": "D6",
        "Abilities": "-",
        "Points": 20
      },
      "Death Spinner": {
        "Range": "12",
        "Type": "Assault 2",
        "S": "6",
        "AP": "0",
        "D": "1",
        "Abilities": "Each time you make a wound roll of 6+ for this weapon, that hit is resolved with an AP of -4 instead of 0.",
        "Points": 8
      },
      "Doomweaver": {
        "Range": "48",
        "Type": "Heavy 2D6",
        "S": "7",
        "AP": "0",
        "D": "2",
        "Abilities": "Wound rolls of 6+ for this weapon are resolved with AP -4 instead of AP 0. This weapon can target units that are not visible to the bearer.",
        "Points": 0
      },
      "Dragon's Breath Flamer": {
        "Range": "8",
        "Type": "Assault D6",
        "S": "5",
        "AP": "-1",
        "D": "1",
        "Abilities": "This weapon automatically hits its target.",
        "Points": 17
      },
      "D-Cannon": {
        "Range": "24",
        "Type": "Heavy D3",
        "S": "12",
        "AP": "-4",
        "D": "D6",
        "Abilities": "This weapon can target units that are not visible to the firer.",
        "Points": 45
      },
      "D-Scythe": {
        "Range": "8",
        "Type": "Assault D3",
        "S": "10",
        "AP": "-4",
        "D": "1",
        "Abilities": "This weapon automatically hits its target.",
        "Points": 22
      },
      "The Eye of Wrath": {
        "Range": "3",
        "Type": "Pistol D6",
        "S": "6",
        "AP": "-2",
        "D": "1",
        "Abilities": "This weapon can only be fired once per battle.",
        "Points": 0
      },
      "Firepike": {
        "Range": "18",
        "Type": "Assault 1",
        "S": "8",
        "AP": "-4",
        "D": "D6",
        "Abilities": "If the target is within half range of this weapon, roll two dice when inflicting damage with it and discard the lowest result.",
        "Points": 20
      },
      "Flamer": {
        "Range": "8",
        "Type": "Assault D6",
        "S": "4",
        "AP": "0",
        "D": "1",
        "Abilities": "This weapon automatically hits its target.",
        "Points": 9
      },
      "Fusion Gun": {
        "Range": "12",
        "Type": "Assault 1",
        "S": "8",
        "AP": "-4",
        "D": "D6",
        "Abilities": "If the target is within half range of this weapon, roll two dice when inflicting damage with it and discard the lowest result.",
        "Points": 17
      },
      "Fusion Pistol": {
        "Range": "6",
        "Type": "Pistol 1",
        "S": "8",
        "AP": "-4",
        "D": "D6",
        "Abilities": "If the target is within half range of this weapon, roll two dice when inflicting damage with it and discard the lowest result.",
        "Points": 9
      },
      "Hawks Talon": {
        "Range": "24",
        "Type": "Assault 4",
        "S": "5",
        "AP": "0",
        "D": "1",
        "Abilities": "-",
        "Points": 10
      },
      "Heavy D-Scythe": {
        "Range": "16",
        "Type": "Assault D3",
        "S": "12",
        "AP": "-4",
        "D": "2",
        "Abilities": "This weapon automatically hits its target.",
        "Points": 0
      },
      "Heavy Wraithcannon": {
        "Range": "36",
        "Type": "Assault 2",
        "S": "16",
        "AP": "-4",
        "D": "D6",
        "Abilities": "-",
        "Points": 50
      },
      "Lasblaster": {
        "Range": "24",
        "Type": "Assault 4",
        "S": "3",
        "AP": "0",
        "D": "1",
        "Abilities": "-",
        "Points": 7
      },
      "Laser Lance": {
        "profiles": {
          "Shooting": {
            "Range": "6",
            "Type": "Assault 1",
            "S": "6",
            "AP": "-4",
            "D": "2",
            "Abilities": "-",
          },
          "Melee": {
            "Range": "Melee",
            "Type": "Melee",
            "S": "User",
            "AP": "-4",
            "D": "2",
            "Abilities": "If the bearer charged this turn, attacks with this weapon are made at Strength 6.",
          }
        },
        "Points": 8
      },
      "The Maugetar": {
        "description": "Shooting: When attacking with this weapon, choose one of the profiles below. Each time you make a wound roll of 6+ for this weapon, that hit is resolved with an AP of -3 instead of -1.",
        "profiles": {
          "Shrieker": {
            "Range": "36",
            "Type": "Assault 1",
            "S": "6",
            "AP": "-1",
            "D": "1",
            "Abilities": "If an INFANTRY model is slain by an attack made with this weapon, its unit suffers D3 mortal wounds.",
          },
          "Shuriken": {
            "Range": "36",
            "Type": "Assault 4",
            "S": "6",
            "AP": "-1",
            "D": "1",
            "Abilities": "-",
          },
          "Melee": {
            "Range": "Melee",
            "Type": "Melee",
            "S": "+2",
            "AP": "-2",
            "D": "D3",
            "Abilities": "-",
          }
        },
        "Points": 0
      },
      "Melta Bombs": {
        "Range": "4",
        "Type": "Grenade 1",
        "S": "8",
        "AP": "-4",
        "D": "D6",
        "Abilities": "You can re-roll failed wound rolls for this weapon if the target is a VEHICLE.",
        "Points": 0
      },
      "Plasma Grenades": {
        "Range": "6",
        "Type": "Grenade D6",
        "S": "4",
        "AP": "-1",
        "D": "1",
        "Abilities": "-",
        "Points": 0
      },
      "Prism Cannon": {
        "description": "When attacking with this weapon, choose one of the profiles below.",
        "profiles": {
          "Dispersed": {
            "Range": "60",
            "Type": "Heavy D6",
            "S": "6",
            "AP": "-3",
            "D": "1",
            "Abilities": "-",
          },
          "Focused": {
            "Range": "60",
            "Type": "Heavy D3",
            "S": "9",
            "AP": "-4",
            "D": "D3",
            "Abilities": "-",
          },
          "Lance": {
            "Range": "60",
            "Type": "Heavy 1",
            "S": "12",
            "AP": "-5",
            "D": "D6",
            "Abilities": "-",
          }
        },
        "Points": 0
      },
      "Pulse Laser": {
        "Range": "48",
        "Type": "Heavy 2",
        "S": "8",
        "AP": "-3",
        "D": "3",
        "Abilities": "-",
        "Points": 0
      },
      "Ranger Long Rifle": {
        "Range": "36",
        "Type": "Heavy 1",
        "S": "4",
        "AP": "0",
        "D": "1",
        "Abilities": "This weapon may target a CHARACTER even if it is not the closest enemy unit. Each time you roll a wound roll of 6+ for this weapon, it inflicts a mortal wound in addition to any other damage.",
        "Points": 0
      },
      "Reaper Launcher": {
        "description": "When attacking with this weapon, choose one of the profiles below.",
        "profiles": {
          "Starshot Missile": {
            "Range": "48",
            "Type": "Heavy 1",
            "S": "8",
            "AP": "-2",
            "D": "3",
            "Abilities": "-",
          },
          "Starswarm Missile": {
            "Range": "48",
            "Type": "Heavy 2",
            "S": "5",
            "AP": "-2",
            "D": "2",
            "Abilities": "-",
          }
        },
        "Points": 22
      },
      "Scatter Laser": {
        "Range": "36",
        "Type": "Heavy 4",
        "S": "6",
        "AP": "0",
        "D": "1",
        "Abilities": "-",
        "Points": 10
      },
      "Scorpion's Claw": {
        "profiles": {
          "Shooting": {
            "Range": "12",
            "Type": "Assault 2",
            "S": "4",
            "AP": "0",
            "D": "1",
            "Abilities": "Each time you make a wound roll of 6+ for this weapon, that hit is resolved with an AP of -3 instead of 0.",
          },
          "Melee": {
            "Range": "Melee",
            "Type": "Melee",
            "S": "X2",
            "AP": "-3",
            "D": "D3",
            "Abilities": "-",
          }
        },
        "Points": 12
      },
      "Shadow Weaver": {
        "Range": "48",
        "Type": "Heavy D6",
        "S": "6",
        "AP": "0",
        "D": "1",
        "Abilities": "Each time you make a wound roll of 6+ for this weapon, that hit is resolved with an AP of -4 instead of 0. This weapon can target units that are not visible to the bearer.",
        "Points": 25
      },
      "Shuriken Cannon": {
        "Range": "24",
        "Type": "Assault 3",
        "S": "6",
        "AP": "0",
        "D": "1",
        "Abilities": "Each time you make a wound roll of 6+ for this weapon, that hit is resolved with an AP of -3 instead of 0.",
        "Points": 10
      },
      "Shuriken Catapult": {
        "Range": "12",
        "Type": "Assault 2",
        "S": "4",
        "AP": "0",
        "D": "1",
        "Abilities": "Each time you make a wound roll of 6+ for this weapon, that hit is resolved with an AP of -3 instead of 0.",
        "Points": 0
      },
      "Shuriken Pistol": {
        "Range": "12",
        "Type": "Pistol 1",
        "S": "4",
        "AP": "0",
        "D": "1",
        "Abilities": "Each time you make a wound roll of 6+ for this weapon, that hit is resolved with an AP of -3 instead of 0.",
        "Points": 0
      },
      "Silent Death": {
        "Range": "12",
        "Type": "Assault 4",
        "S": "User",
        "AP": "-3",
        "D": "1",
        "Abilities": "-",
        "Points": 0
      },
      "Singing Spear": {
        "profiles": {
          "Shooting": {
            "Range": "12",
            "Type": "Assault 1",
            "S": "9",
            "AP": "0",
            "D": "D3",
            "Abilities": "This weapon always wounds on a roll of 2+.",
          },
          "Melee": {
            "Range": "Melee",
            "Type": "Melee",
            "S": "User",
            "AP": "0",
            "D": "D3",
            "Abilities": "This weapon always wounds on a roll of 2+.",
          }
        },
        "Points": 5
      },
      "Star Lance": {
        "profiles": {
          "Shooting": {
            "Range": "6",
            "Type": "Assault 1",
            "S": "8",
            "AP": "-4",
            "D": "2",
            "Abilities": "-",
          },
          "Melee": {
            "Range": "Melee",
            "Type": "Melee",
            "S": "User",
            "AP": "-4",
            "D": "2",
            "Abilities": "If the bearer charged this turn, attacks with this weapon are made at Strength 8.",
          }
        },
        "Points": 10
      },
      "Starcannon": {
        "Range": "36",
        "Type": "Heavy 2",
        "S": "6",
        "AP": "-3",
        "D": "D3",
        "Abilities": "-",
        "Points": 15
      },
      "Suncannon": {
        "Range": "48",
        "Type": "Heavy 2D6",
        "S": "6",
        "AP": "-3",
        "D": "2",
        "Abilities": "-",
        "Points": 118
      },
      "Tempest Launcher": {
        "Range": "36",
        "Type": "Heavy 2D6",
        "S": "4",
        "AP": "-2",
        "D": "1",
        "Abilities": "This weapon can target units that are not visible to the bearer.",
        "Points": 27
      },
      "Twin Aeldari Missile Launcher": {
        "description": "When attacking with this weapon, choose one of the profiles below.",
        "profiles": {
          "Sunburst Missile": {
            "Range": "48",
            "Type": "Heavy 2D6",
            "S": "4",
            "AP": "-1",
            "D": "1",
            "Abilities": "-",
          },
          "Starshot Missile": {
            "Range": "48",
            "Type": "Heavy 2",
            "S": "8",
            "AP": "-2",
            "D": "D6",
            "Abilities": "-",
          }
        },
        "Points": 50
      },
      "Twin Bright Lance": {
        "Range": "36",
        "Type": "Heavy 2",
        "S": "8",
        "AP": "-4",
        "D": "D6",
        "Abilities": "-",
        "Points": 40
      },
      "Twin Scatter Laser": {
        "Range": "36",
        "Type": "Heavy 8",
        "S": "6",
        "AP": "0",
        "D": "1",
        "Abilities": "-",
        "Points": 17
      },
      "Twin Shuriken Cannon": {
        "Range": "24",
        "Type": "Assault 6",
        "S": "6",
        "AP": "0",
        "D": "1",
        "Abilities": "Each time you make a wound roll of 6+ for this weapon, that hit is resolved with an AP of -3 instead of 0.",
        "Points": 17
      },
      "Twin Shuriken Catapult": {
        "Range": "12",
        "Type": "Assault 4",
        "S": "4",
        "AP": "0",
        "D": "1",
        "Abilities": "Each time you make a wound roll of 6+ for this weapon, that hit is resolved with an AP of -3 instead of 0.",
        "Points": 5
      },
      "Twin Starcannon": {
        "Range": "36",
        "Type": "Heavy 4",
        "S": "6",
        "AP": "-3",
        "D": "D3",
        "Abilities": "-",
        "Points": 28
      },
      "Vibro Cannon": {
        "Range": "48",
        "Type": "Heavy D3",
        "S": "7",
        "AP": "-1",
        "D": "2",
        "Abilities": "For each vibro cannon that has already been fired at the same target in this phase, improve the AP of this weapon by 1 (to a maximum of -3) and add 1 to the wound rolls for this weapon (to a maximum of +2). If this weapon inflicts any damage on an enemy unit, that unit cannot Advance in its next Movement phase unless it can FLY.",
        "Points": 30
      },
      "Voidbringer": {
        "Range": "48",
        "Type": "Heavy 1",
        "S": "4",
        "AP": "-3",
        "D": "3",
        "Abilities": "This weapon can target an enemy CHARACTER even if they are not the closest enemy unit. This weapon wounds on a 2+, unless it is targeting a VEHICLE. Each time you roll a wound roll of 6+ for this weapon, it inflicts a mortal wound in addition to any other damage.",
        "Points": 0
      },
      "The Wailing Doom": {
        "profiles": {
          "Shooting": {
            "Range": "12",
            "Type": "Assault 1",
            "S": "8",
            "AP": "-4",
            "D": "D6",
            "Abilities": "-",
          },
          "Melee": {
            "Range": "Melee",
            "Type": "Melee",
            "S": "+2",
            "AP": "-4",
            "D": "D6",
            "Abilities": "Roll two dice when inflicting damage with this weapon and discard the lowest result.",
          }
        },
        "Points": 0
      },
      "Wraithcannon": {
        "Range": "12",
        "Type": "Assault 1",
        "S": "10",
        "AP": "-4",
        "D": "D6",
        "Abilities": "-",
        "Points": 17
      },
      "Aeldari Blade": {
        "Range": "Melee",
        "Type": "Melee",
        "S": "User",
        "AP": "0",
        "D": "1",
        "Abilities": "You can re-roll failed hit rolls for this weapon.",
        "Points": 0
      },
      "Biting Blade": {
        "Range": "Melee",
        "Type": "Melee",
        "S": "+2",
        "AP": "-1",
        "D": "2",
        "Abilities": "-",
        "Points": 8
      },
      "Blade of Destruction": {
        "Range": "Melee",
        "Type": "Melee",
        "S": "+2",
        "AP": "-3",
        "D": "D3",
        "Abilities": "You can re-roll failed wound rolls for this weapon.",
        "Points": 0
      },
      "Chainsword": {
        "Range": "Melee",
        "Type": "Melee",
        "S": "User",
        "AP": "0",
        "D": "1",
        "Abilities": "Each time the bearer fights, it can make 1 additional attack with this weapon.",
        "Points": 0
      },
      "Diresword": {
        "Range": "Melee",
        "Type": "Melee",
        "S": "User",
        "AP": "-2",
        "D": "1",
        "Abilities": "Each time you make a wound roll of 6+ for this weapon, the target suffers a mortal wound in addition to any other damage.",
        "Points": 4
      },
      "Executioner": {
        "Range": "Melee",
        "Type": "Melee",
        "S": "+1",
        "AP": "-3",
        "D": "D3",
        "Abilities": "-",
        "Points": 7
      },
      "Fire Axe": {
        "Range": "Melee",
        "Type": "Melee",
        "S": "User",
        "AP": "-4",
        "D": "D3",
        "Abilities": "-",
        "Points": 0
      },
      "Ghost Axe": {
        "Range": "Melee",
        "Type": "Melee",
        "S": "+2",
        "AP": "-3",
        "D": "D3",
        "Abilities": "When attacking with this weapon, you must subtract 1 from the hit roll.",
        "Points": 10
      },
      "Ghostglaive": {
        "Range": "Melee",
        "Type": "Melee",
        "S": "+2",
        "AP": "-4",
        "D": "D6",
        "Abilities": "-",
        "Points": 10
      },
      "Ghostswords": {
        "Range": "Melee",
        "Type": "Melee",
        "S": "+1",
        "AP": "-3",
        "D": "1",
        "Abilities": "Each time the bearer fights, it can make 1 additional attack with this weapon.",
        "Points": 6
      },
      "Mirrorswords": {
        "Range": "Melee",
        "Type": "Melee",
        "S": "User",
        "AP": "-2",
        "D": "1",
        "Abilities": "You can re-roll failed hit rolls in the Fight phase for this weapon.",
        "Points": 4
      },
      "Paragon Sabre": {
        "Range": "Melee",
        "Type": "Melee",
        "S": "User",
        "AP": "-4",
        "D": "1",
        "Abilities": "You can re-roll failed hit and wound rolls for this weapon.",
        "Points": 8
      },
      "Power Glaive": {
        "Range": "Melee",
        "Type": "Melee",
        "S": "+1",
        "AP": "-2",
        "D": "1",
        "Abilities": "-",
        "Points": 4
      },
      "Power Sword": {
        "Range": "Melee",
        "Type": "Melee",
        "S": "User",
        "AP": "-3",
        "D": "1",
        "Abilities": "-",
        "Points": 4
      },
      "Powerblades": {
        "Range": "Melee",
        "Type": "Melee",
        "S": "User",
        "AP": "-2",
        "D": "1",
        "Abilities": "Each time the bearer fights, it can make 1 additional attack with this weapon.",
        "Points": 4
      },
      "Scorpion Chainsword": {
        "Range": "Melee",
        "Type": "Melee",
        "S": "+1",
        "AP": "0",
        "D": "1",
        "Abilities": "-",
        "Points": 1
      },
      "The Shining Blade": {
        "Range": "Melee",
        "Type": "Melee",
        "S": "+1",
        "AP": "-3",
        "D": "D3",
        "Abilities": "If a unit suffers any wounds from this weapon, your opponent must subtract 1 from that unit's hit rolls until the end of the turn.",
        "Points": 0
      },
      "The Spear of Twilight": {
        "Range": "Melee",
        "Type": "Melee",
        "S": "User",
        "AP": "-2",
        "D": "D3",
        "Abilities": "This weapon always wounds on a roll of 2+.",
        "Points": 0
      },
      "Staff of Ulthamar": {
        "Range": "Melee",
        "Type": "Melee",
        "S": "+2",
        "AP": "-2",
        "D": "D3",
        "Abilities": "-",
        "Points": 0
      },
      "Star Glaive": {
        "Range": "Melee",
        "Type": "Melee",
        "S": "X2",
        "AP": "-3",
        "D": "D3",
        "Abilities": "When attacking with this weapon, you must subtract 1 from the hit roll.",
        "Points": 6
      },
      "The Sword of Asur": {
        "Range": "Melee",
        "Type": "Melee",
        "S": "+1",
        "AP": "-3",
        "D": "D3",
        "Abilities": "Each time you make a wound roll of 6+ for this weapon, the target suffers D3 mortal wounds in addition to any other damage.",
        "Points": 0
      },
      "Titanic Feet": {
        "Range": "Melee",
        "Type": "Melee",
        "S": "User",
        "AP": "-2",
        "D": "D3",
        "Abilities": "Make 3 hit rolls for each attack made with this weapon, instead of 1.",
        "Points": 0
      },
      "Titanic Ghostglaive": {
        "Range": "Melee",
        "Type": "Melee",
        "S": "X2",
        "AP": "-4",
        "D": "6",
        "Abilities": "-",
        "Points": 30
      },
      "Titanic Wraithbone Fists": {
        "Range": "Melee",
        "Type": "Melee",
        "S": "User",
        "AP": "-3",
        "D": "D6",
        "Abilities": "-",
        "Points": 0
      },
      "Witch Staff": {
        "Range": "Melee",
        "Type": "Melee",
        "S": "User",
        "AP": "0",
        "D": "2",
        "Abilities": "This weapon always wounds on a roll of 2+.",
        "Points": 0
      },
      "Witchblade": {
        "Range": "Melee",
        "Type": "Melee",
        "S": "User",
        "AP": "0",
        "D": "D3",
        "Abilities": "This weapon always wounds on a roll of 2+.",
        "Points": 0
      },
      "Wraithbone Fists": {
        "Range": "Melee",
        "Type": "Melee",
        "S": "User",
        "AP": "-3",
        "D": "3",
        "Abilities": "-",
        "Points": 0
      },
      "Wraithguard Fists": {
        "Range": "Melee",
        "Type": "Melee",
        "S": "User",
        "AP": "-1",
        "D": "D3",
        "Abilities": "-",
        "Points": 0
      },
      "Banshee Mask": {
        "Points": 0,
        "WargearAbility": "Enemy units cannot fire Overwatch at this unit."
      },
      "Crystal Targeting Matrix": {
        "Points": 5,
        "WargearAbility": "A model with a crystal targeting matrix does not suffer the penalty for firing a Heavy weapon after moving when targeting the closest enemy unit."
      },
      "Forceshield": {
        "Points": 6,
        "WargearAbility": "A model equipped with a forceshield has a 4+ invulnerable save."
      },
      "Mandiblasters": {
        "Points": 0,
        "WargearAbility": "At the beginning of each Fight phase, you can pick a single enemy INFANTRY unit within 1\" of this model and roll a D6. On a roll of 6, that unit suffers a mortal wound."
      },
      "Scattershield": {
        "Points": 20,
        "WargearAbility": "A model equipped with a scattershield has a 5+ invulnerable save."
      },
      "Shimmershield": {
        "Points": 20,
        "WargearAbility": "A unit which includes a model with a shimmershield has a 5+ invulnerable save."
      },
      "Spirit Stones": {
        "Points": 10,
        "WargearAbility": "Roll a D6 each time this model suffers a wound or mortal wound: on a 6 the wound is ignored."
      },
      "Star Engines": {
        "Points": 10,
        "WargearAbility": "When a model with star engines Advances, add 2D6\" to that model's Move characteristic for that Movement phase instead of D6\"."
      },
      "Vectored Engines": {
        "Points": 10,
        "WargearAbility": "If a model with vectored engines Advances, your opponent must subtract 1 from all hit rolls for ranged weapons that target it until your next Movement phase."
      }
    },
    "models": {
      "Asurmen": {
        "Points": 175,
        "PointsIncludesWargear": true,
        "M": 7,
        "WS": "2+",
        "BS": "2+",
        "S": 4,
        "T": 4,
        "W": 6,
        "A": 5,
        "Ld": 9,
        "Sv": "2+",
        "Wargear": {
          "weapons": [
            ["The Sword of Asur","Avenger Shuriken Catapult","Avenger Shuriken Catapult"]
          ]
        },
        "Abilities": {
          "faction": ["Ancient Doom", "Battle Focus"],
          "Shield of Grace": "Asurmen has a 4+ invulnerable save against ranged weapons and a 3+ invulnerable save against melee weapons.",
          "Defence Tactics": "When Asurmen fires Overwatch, he successfully hits on a roll of 5 or 6, instead of only 6.",
          "Hand of Asuryan": "Friendly ASPECT WARRIOR units within 6\" have a 5+ invulnerable save. Friendly Dire Avengers units have a 4+ invulnerable save instead."
        },
        "Faction Keywords": ["AELDARI", "ASURYANI", "ASPECT WARRIOTR"],
        "Keywords": ["Character", "Infantry", "Phoenix Lord", "Asurmen"]
      },
      "Autarch": {
        "Points": 65,
        "PointsIncludesWargear": false,
        "M": 7,
        "WS": "2+",
        "BS": "2+",
        "S": 3,
        "T": 3,
        "W": 5,
        "A": 4,
        "Ld": 9,
        "Sv": "3+",
        "Wargear": {
          "weapons": [
            ["Star Glaive","Plasma Grenades","Forceshield"]
          ]
        },
        "Abilities": {
          "faction": ["Ancient Doom", "Battle Focus", "The Path of Command"]
        },
        "Faction Keywords": ["AELDARI", "ASURYANI", "WARHOST"],
        "Allegiance": ["[Craftworld]","ALAITOC","BIEL-TAN","IYANDEN","AIM-HANN","ULTHWE"],
        "Keywords": ["Character", "Infantry", "Autarch"]
      },
      "Autarch Skyrunner": {
        "Points": 95,
        "PointsIncludesWargear": false,
        "M": 16,
        "WS": "2+",
        "BS": "2+",
        "S": 3,
        "T": 4,
        "W": 6,
        "A": 4,
        "Ld": 9,
        "Sv": "3+",
        "Wargear": {
          "weapons": [
            ["Power Sword","Twin Shuriken Catapult"],
            ["Laser Lance","Twin Shuriken Catapult"],
            ["Fusion Gun","Twin Shuriken Catapult"]
          ]
        },
        "Abilities": {
          "faction": ["Ancient Doom", "Battle Focus", "The Path of Command"],
          "Peerless Agility": "This model has a 4+ invulnerable save.",
          "Ride the Wind": "When this model Advances, add 6\" to its Move Characteristic for that Movement phase instead of rolling a dice."
        },
        "Faction Keywords": ["AELDARI", "ASURYANI", "WARHOST"],
        "Allegiance": ["[Craftworld]","ALAITOC","BIEL-TAN","IYANDEN","AIM-HANN","ULTHWE"],
        "Keywords": ["Biker", "Character", "Fly", "Autarch", "Autarch Skyrunner"]
      },
      "Autarch with Swooping Hawk Wings": {
        "Points": 85,
        "PointsIncludesWargear": false,
        "M": 14,
        "WS": "2+",
        "BS": "2+",
        "S": 3,
        "T": 3,
        "W": 5,
        "A": 4,
        "Ld": 9,
        "Sv": "3+",
        "Wargear": {
          "weapons": [
            ["Power Sword","Fusion Pistol","Plasma Grenades","Forceshield","Mandiblasters"]
          ]
        },
        "Abilities": {
          "faction": ["Ancient Doom", "Battle Focus", "The Path of Command"],
          "Children of Baharroth": ":During deployment, you can setup this model in the skies instead of placing it on the battlefield. At the end of any of your Movement phases this model can descend - set it up anywhere on the battlefield that is more than 9\" away from any enemy models.",
          "Skyleap": "At the beginning of your Movement phase, if this model is not within 1\" of an enemy model it can leap into the skies. Remove this model from the battlefield. It can return to the battlefield as described in the Children of Baharroth ability. This model may not both skyleap and descend in the same turn. If the battle ends while this model is in the skies, it is considered to be slain."
        },
        "Faction Keywords": ["AELDARI", "ASURYANI", "WARHOST"],
        "Allegiance": ["[Craftworld]","ALAITOC","BIEL-TAN","IYANDEN","AIM-HANN","ULTHWE"],
        "Keywords": ["Character", "Infantry", "Jump Pack", "Fly", "Autarch"]
      },
      "Avatar of Khaine": {
        "Points": 250,
        "PointsIncludesWargear": true,
        "M": 7,
        "WS": "2+",
        "BS": "2+",
        "S": 6,
        "T": 6,
        "W": 8,
        "A": 5,
        "Ld": 9,
        "Sv": "3+",
        "Wargear": {
          "weapons": [["The Wailing Doom"]]
        },
        "Abilities": {
          "faction": ["Ancient Doom", "Battle Focus"],
          "Molten Body": "Roll a D6 whenever the Avatar of Khaine suffers a wound or mortal wound. On a 5+ that wound is ignored.",
          "Khaine Awakened": "Friendly ASURYANI unitswithin 12\" of the Avatar of Khaine do not take Morale tests, and you can re-roll failed charge rolls for these units.",
          "Daemon": "The Avatar of Khaine has a 5+ invulnerable save. "
        },
        "Faction Keywords": ["AELDARI", "ASURYANI", "ASPECT WARRIOTR"],
        "Allegiance": ["[Craftworld]","ALAITOC","BIEL-TAN","IYANDEN","AIM-HANN","ULTHWE"],
        "Keywords": ["Character", "Monster", "Daemon", "Avatar of Khaine"]
      },
      "Baharroth": {
        "Points": 110,
        "PointsIncludesWargear": true,
        "M": 14,
        "WS": "2+",
        "BS": "2+",
        "S": 4,
        "T": 4,
        "W": 6,
        "A": 4,
        "Ld": 9,
        "Sv": "2+",
        "Wargear": {
          "weapons": [
            ["The Shining Blade","Hawk's Talon"]
          ]
        },
        "Abilities": {
          "faction": ["Ancient Doom", "Battle Focus"],
          "Baharroth's Grenade Pack": "Baharroth can fire a spread of grenades when he is setup on the battlefield using the Cry of the Wind ability and as he flies over enemy units in his Movement phase. To do so after he has been setup using the Cry of the Wind ability, pick an enemy unit within 12\" of him. To do so after he has moved, pick one enemy unit that he flew over. Then, in either case, roll one dice for each model in the enemy unit (up to a maximum of 3 dice). Each time you roll a 4+, the target unit suffers 1 mortal wound.",
          "The Brilliant Sun": "You can add 1 to the Leadership of friendly ASPECT WARRIOR units within 6\" of Baharroth. Add 2 to the Leadership of friendly Swooping Hawks units instead.",
          "Cry of the Wind": "During deployment, you can set up Baharroth in the skies instead of placing him on the battlefield. At the end of any of your Movement phases Baharroth can descend - set him up anywhere on the battlefield that is more than 9\" away from any enemy models.",
          "Skyleap": "At the beginning of your Movement phase, if Baharroth is not within 1\" of an enemy model he can leap back into the skies. Remove him from the battlefield. He can return to the battlefield as described in the Cry of the Wind ability. He may not both skyleap and descend in the same turn. If the battle ends while Baharroth is in the skies, he is considered to be slain.",
          "Blazing Fury": "You can re-roll hit rolls of 1 for friendly Swooping Hawks units within 6\" of Baharroth."
        },
        "Faction Keywords": ["AELDARI", "ASURYANI", "ASPECT WARRIOTR"],
        "Keywords": ["Character", "Infantry", "Jump Pack", "Phoenix Lord", "Fly", "Baharroth"]
      },
      "Eldrad Ulthran": {
        "Points": 150,
        "PointsIncludesWargear": true,
        "M": 7,
        "WS": "2+",
        "BS": "2+",
        "S": 3,
        "T": 4,
        "W": 6,
        "A": 2,
        "Ld": 9,
        "Sv": "6+",
        "Wargear": {
          "weapons": [
            ["Shuriken Pistol","Witchblade","Staff of Ulthamar"]
          ]
        },
        "Abilities": {
          "faction": ["Ancient Doom", "Battle Focus"],
          "Spiritlink": "Whenever you pass a Psychic test for Eldrad Ulthran, you can add 1 to the next Psychic test you take for him until the end of the phase.",
          "Armour of the Last Runes": "Eldrad Ulthran has a 3+ invulnerable save.",
          "Runes of the Farseer": "Once in each Psychic phase, you can re-roll any number of dice used for Eldrad Ulthran's attempt to manifest or deny a psychic power.",
          "Ghosthelm": "Roll a D6 whenever Eldrad Ulthran suffers a mortal wound, adding 3 to the roll if the mortal wound was inflicted as the result of him suffering Perils of the Warp. On a 5+ that wound is ignored."
        },
        "Psyker": "Eldrad Ulthran can attempt to manifest three psychic powers in each friendly Psychic phase, and attempt to deny two psychic powers in each enemy Psychic phase. He knows the Smite power and three psychic powers from the Runes of Fate discipline (pg125).",
        "Faction Keywords": ["AELDARI", "ASURYANI", "WARHOST"],
        "Allegiance": ["ULTHWE","ALAITOC","BIEL-TAN","IYANDEN","AIM-HANN"],
        "Keywords": ["Character", "Infantry", "Psyker", "Farseer", "Eldrad Ulthran"]
      },
      "Farseer": {
        "Points": 100,
        "PointsIncludesWargear": false,
        "M": 7,
        "WS": "2+",
        "BS": "2+",
        "S": 3,
        "T": 3,
        "W": 5,
        "A": 2,
        "Ld": 9,
        "Sv": "6+",
        "Wargear": {
          "weapons": [
            ["Shuriken Pistol","Witchblade"],
            ["Shuriken Pistol","Singing Spear"]
          ]
        },
        "Abilities": {
          "faction": ["Ancient Doom", "Battle Focus"],
          "Rune Armour": "This model has a 4+ invulnerable save.",
          "Runes of the Farseer": "Once in each Psychic phase, you can re-roll any number of dice used for Eldrad Ulthran's attempt to manifest or deny a psychic power.",
          "Ghosthelm": "Roll a D6 whenever Eldrad Ulthran suffers a mortal wound, adding 3 to the roll if the mortal wound was inflicted as the result of him suffering Perils of the Warp. On a 5+ that wound is ignored."
        },
        "Psyker": "This model can attempt to manifest two psychic powers in each friendly Psychic phase, and attempt to deny two psychic powers in each enemy Psychic phase. It knows the Smite power and two psychic powers from the Runes of Fate discipline (pg125).",
        "Faction Keywords": ["AELDARI", "ASURYANI", "WARHOST"],
        "Allegiance": ["[Craftworld]","ALAITOC","BIEL-TAN","IYANDEN","AIM-HANN","ULTHWE"],
        "Keywords": ["Character", "Infantry", "Psyker", "Farseer"]
      },
      "Farseer Skyrunner": {
        "Points": 130,
        "PointsIncludesWargear": false,
        "M": 16,
        "WS": "2+",
        "BS": "2+",
        "S": 3,
        "T": 4,
        "W": 6,
        "A": 2,
        "Ld": 9,
        "Sv": "4+",
        "Wargear": {
          "weapons": [
            ["Shuriken Pistol","Witchblade","Twin Shuriken Catapult"],
            ["Shuriken Pistol","Singing Spear","Twin Shuriken Catapult"]
          ]
        },
        "Abilities": {
          "faction": ["Ancient Doom", "Battle Focus"],
          "Rune Armour": "This model has a 4+ invulnerable save.",
          "Runes of the Farseer": "Once in each Psychic phase, you can re-roll any number of dice used for Eldrad Ulthran's attempt to manifest or deny a psychic power.",
          "Ghosthelm": "Roll a D6 whenever Eldrad Ulthran suffers a mortal wound, adding 3 to the roll if the mortal wound was inflicted as the result of him suffering Perils of the Warp. On a 5+ that wound is ignored.",
          "Ride the Wind": "When this model Advances, add 6\" to its Move Characteristic for that Movement phase instead of rolling a dice."
        },
        "Psyker": "This model can attempt to manifest two psychic powers in each friendly Psychic phase, and attempt to deny two psychic powers in each enemy Psychic phase. It knows the Smite power and two psychic powers from the Runes of Fate discipline (pg125).",
        "Faction Keywords": ["AELDARI", "ASURYANI", "WARHOST"],
        "Allegiance": ["[Craftworld]","ALAITOC","BIEL-TAN","IYANDEN","AIM-HANN","ULTHWE"],
        "Keywords": ["Character", "Biker", "Fly", "Psyker", "Farseer", "Farseer Skyrunner"]
      },
      "Fuegan": {
        "Points": 150,
        "PointsIncludesWargear": true,
        "M": 7,
        "WS": "2+",
        "BS": "2+",
        "S": 5,
        "T": 4,
        "W": 6,
        "A": 4,
        "Ld": 9,
        "Sv": "2+",
        "Wargear": {
          "weapons": [
            ["Fire Axe","Firepike","Melta Bombs"]
          ]
        },
        "Abilities": {
          "faction": ["Ancient Doom", "Battle Focus"],
          "Assured Destruction": "You can re-roll wound rolls of 1 in the Shooting phase for attacks Fuegan makes that target a MONSTER or VEHICLE.",
          "Last to Fall": "Roll a D6 whenever Fuegan suffers a wound or mortal wound. On a 5+ that wound is ignored.",
          "Unflinching Focus": "You can re-roll hit rolls of 1 for Fuegan's ranged weapons, and for those of friendly Fire Dragons units within 6\".",
          "Unquenchable Resolve": "At the end of the first Fight phase in which Fuegan lost one or more wounds, his Strength and Attacks characteristics increase by 2. These bonuses last for the rest of the game."
        },
        "Faction Keywords": ["AELDARI", "ASURYANI", "ASPECT WARRIOTR"],
        "Keywords": ["Character", "Infantry", "Phoenix Lord", "Fuegan"]
      },
      "Illic Nightspear": {
        "Points": 80,
        "PointsIncludesWargear": true,
        "M": 7,
        "WS": "2+",
        "BS": "2+",
        "S": 3,
        "T": 3,
        "W": 5,
        "A": 4,
        "Ld": 9,
        "Sv": "5+",
        "Wargear": {
          "weapons": [
            ["Voidbringer","Shuriken Pistol","Power Sword"]
          ]
        },
        "Abilities": {
          "faction": ["Ancient Doom", "Battle Focus"],
          "Appear Unbidden": "During deployment, you can set up Illic Nightspear walking the winding paths of the webway instead of placing him on the battlefield. At the start of the first battleround but before the first turn begins, he can emerge from the webway - set him up anywhere on the battlefield that is more than 9\" away from any enemy models.",
          "Bringer of the True Death": "You can re-roll hit and wounds rolls of 1 for Illic Nightspear's attacks when they target a NECRON unit.",
          "Hunter Unseen": "Your opponent must subtract 1 from hit rolls for ranged weapons that target Illic Nightspear. In addition, add 2 to Illic's saving throws for being in cover instead of 1."
        },
        "Faction Keywords": ["AELDARI", "ASURYANI", "ASPECT WARRIOTR"],
        "Keywords": ["Character", "Infantry", "Ranger", "Illic Nightspear"]
      },
      "Jain Zar": {
        "Points": 140,
        "PointsIncludesWargear": true,
        "M": 8,
        "WS": "2+",
        "BS": "2+",
        "S": 4,
        "T": 4,
        "W": 6,
        "A": 4,
        "Ld": 9,
        "Sv": "2+",
        "Wargear": {
          "weapons": [
            ["Silent Death","Blade of Destruction","Banshee Mask"]
          ]
        },
        "Abilities": {
          "faction": ["Ancient Doom", "Battle Focus"],
          "War Shout": "Your opponent must subtract 1 from hit rolls in the Fight phase for attacks that target Jain Zar.",
          "Acrobatic": "Jain Zar can Advance and charge in the same turn. In a turn in which she Advanced, you can declare a charge move for Jain Zar if there are any enemy units within 15\" of her, and you can add 3 to the resulting charge roll.",
          "Cry of War Uneding": "Jain Zar and friendly units of Howling Banshees that are within 6\" of her at the start of the Fight phase always fight first in the Fight phase, even if they didn't charge. If the enemy has units that have charged, or that have a similar ability, then alternate choosing units to fight with, starting with the player whose turn is taking place.",
          "Disarming Strike": "At the beginning of each Fight phase you can choose a weapon on an enemy INFANTRY model within 1\" of Jain Zar, and roll a D6. On a 3+ that model cannot use that weapon during this Fight phase."
        },
        "Faction Keywords": ["AELDARI", "ASURYANI", "ASPECT WARRIOTR"],
        "Keywords": ["Character", "Infantry", "Phoenix Lord", "Jain Zar"]
      },
      "Karandras": {
        "Points": 150,
        "PointsIncludesWargear": true,
        "M": 7,
        "WS": "2+",
        "BS": "2+",
        "S": 4,
        "T": 4,
        "W": 6,
        "A": 4,
        "Ld": 9,
        "Sv": "2+",
        "Wargear": {
          "weapons": [
            [ "Scorpion Chainsword","Scorpion's Claw","Plasma Grenades"]
          ]
        },
        "Abilities": {
          "faction": ["Ancient Doom", "Battle Focus"],
          "Master of Stealth": "During deployment, you can setup Karandras in the shadows instead of placing him on the battlefield. At the end of any of your Movement phases Karandras can stalk from his hiding place - set him up anywhere on the battlefield that is more than 9\" away from any enemy models.",
          "Shadow Strike": "Add 1 to hit rolls for attacks for Karandras that target a unit in cover.",
          "The Scorpion's Bite": "At the beginning of each Fight phase, you can pick a single enemy INFANTRY unit within 1\" of Karandras and roll four dice. For each roll of 5 or 6, that unit suffers a mortal wound.",
          "Death by a Thousand Stings": "Each time you roll a hit roll of 6+ when making a close combat attack for Karandras, or a model from a friendly Striking Scorpions unit within 6\" of him, that model can immediately make another close combat attack using the same weapon. These extra attacks cannot generate any additional attacks."
        },
        "Faction Keywords": ["AELDARI", "ASURYANI", "ASPECT WARRIOTR"],
        "Keywords": ["Character", "Infantry", "Phoenix Lord", "Karandras"]
      },
      "Maugan Ra": {
        "Points": 140,
        "PointsIncludesWargear": true,
        "M": 6,
        "WS": "2+",
        "BS": "2+",
        "S": 4,
        "T": 4,
        "W": 6,
        "A": 4,
        "Ld": 9,
        "Sv": "2+",
        "Wargear": {
          "weapons": [["The Maugetar"]]
        },
        "Abilities": {
          "faction": ["Ancient Doom", "Battle Focus"],
          "Whirlwind of Death": "Maugan Ra can fire the Maugetar twice in each Shooting phase.",
          "Legacy of Altansar": "You can re-roll wound rolls of 1 for Maugan Ra's attacks that target CHAOS units.",
          "Inescapable Death": "Maugan Ra always hits on a 2+ when firing a ranged weapon in the Shooting phase, regardless of any modifiers.",
          "The Harvester": "You can re-roll hit rolls of 1 for Maugan Ra's ranged weapons, and for those of friendly Dark Reapers units within 6\"."
        },
        "Faction Keywords": ["AELDARI", "ASURYANI", "ASPECT WARRIOTR"],
        "Keywords": ["Character", "Infantry", "Phoenix Lord", "Maugen Ra"]
      },
      "Prince Yriel": {
        "Points": 100,
        "PointsIncludesWargear": true,
        "M": 7,
        "WS": "2+",
        "BS": "2+",
        "S": 3,
        "T": 3,
        "W": 6,
        "A": 4,
        "Ld": 9,
        "Sv": "3+",
        "Wargear": {
          "weapons": [
            ["The Eye of Wrath","The Spear of Twilight","Plasma Grenades","Forceshield"]
          ]
        },
        "Abilities": {
          "faction": ["Ancient Doom", "Battle Focus", "The Path of Command"],
          "Cursed": "You must re-reoll saving throws of 6 for Prince Yriel in the Fight phase."
        },
        "Faction Keywords": ["AELDARI", "ASURYANI", "WARHOST"],
        "Allegiance": ["IYANDEN"],
        "Keywords": ["Character", "Infantry", "Autarch", "Prince Yriel"]
      },
      "Spiritseer": {
        "Points": 45,
        "PointsIncludesWargear": false,
        "M": 7,
        "WS": "2+",
        "BS": "2+",
        "S": 3,
        "T": 3,
        "W": 4,
        "A": 2,
        "Ld": 8,
        "Sv": "6+",
        "Wargear": {
          "weapons": [
            ["Shuriken Pistol","Witch Staff"]
          ]
        },
        "Abilities": {
          "faction": ["Ancient Doom", "Battle Focus"],
          "Rune Armour": "This model has a 4+ invulnerable save.",
          "Spirit Mark": "You can re-roll hit rolls of 1 for friendly [Craftworld] SPIRIT HOST units' attacks against enemy units that are within 6\" of this model."
        },
        "Psyker": "This model can attempt to manifest one psychic power in each friendly Psychic phase, and attempt to deny one psychic power in each enemy Psychic phase. It knows the Smite power and one psychic power from the Runes of Battle discipline (pg124).",
        "Faction Keywords": ["AELDARI", "ASURYANI", "SPIRIT HOST"],
        "Allegiance": ["[Craftworld]","ALAITOC","BIEL-TAN","IYANDEN","AIM-HANN","ULTHWE"],
        "Keywords": ["Character", "Infantry", "Psyker", "Spiritseer"]
      },
      "Warlock": {
        "Points": 35,
        "PointsIncludesWargear": false,
        "M": 7,
        "WS": "3+",
        "BS": "3+",
        "S": 3,
        "T": 3,
        "W": 2,
        "A": 2,
        "Ld": 8,
        "Sv": "6+",
        "Wargear": {
          "weapons": [
            ["Shuriken Pistol","Witchblade"],
            ["Shuriken Pistol","Singing Spear"]
          ]
        },
        "Abilities": {
          "faction": ["Ancient Doom", "Battle Focus"],
          "Rune Armour": "This model has a 4+ invulnerable save.",
          "Destructor": "When this unit manifests the Smite psychic power, it has a range of 9\" rather than 18\" and only deals a single mortal wound.",
        },
        "Psyker": "This model can attempt to manifest one psychic power in each friendly Psychic phase, and attempt to deny one psychic power in each enemy Psychic phase. It knows the Smite power and one psychic power from the Runes of Battle discipline (pg124).",
        "Faction Keywords": ["AELDARI", "ASURYANI", "WARHOST"],
        "Allegiance": ["[Craftworld]","ALAITOC","BIEL-TAN","IYANDEN","AIM-HANN","ULTHWE"],
        "Keywords": ["Character", "Infantry", "Psyker", "Warlock"]
      },
      "Warlock Conclave": {
        "Points": 30,
        "PointsIncludesWargear": false,
        "M": 7,
        "WS": "3+",
        "BS": "3+",
        "S": 3,
        "T": 3,
        "W": 2,
        "A": 2,
        "Ld": 8,
        "Sv": "6+",
        "Wargear": {
          "weapons": [
            ["Shuriken Pistol","Witchblade"],
            ["Shuriken Pistol","Singing Spear"]
          ]
        },
        "Abilities": {
          "faction": ["Ancient Doom", "Battle Focus"],
          "Rune Armour": "This model has a 4+ invulnerable save.",
          "Destructor": "When this unit manifests the Smite psychic power, it has a range of 9\" rather than 18\". In addition, if this unit consists of 1-3 models when it manifests Smite, it only deals a single mortal wound. If it consists of 7-10 models when it manifests Smite, it always deals D6 mortal wounds."
        },
        "Psyker": "If this unit has 1-3 models it can attempt to manifest one psychic power in each friendly Psychic phase, and attempt to deny one psychic power in each enemy Psychic phase. If this unit has 4-6 models it can attempt to manifest two powers and deny two powers, and if it has 7-10 models it can attempt to manifest three powers and deny three powers. This unit knows the Smite power and two psychic powers from the Runes of Battle discipline (pg124). If this unit has more than one model, when manifesting or denying a psychic power, first select a model in the unit - measure range, visibility, etc. from this model. If this unit suffers Perils of the Warp, it suffers D3 mortal wounds as described in the core rules, but units within 6\" will only suffer damage if the Perils of the Warp causes the last model in the manifesting unit to be slain.",
        "Faction Keywords": ["AELDARI", "ASURYANI", "WARHOST"],
        "Allegiance": ["[Craftworld]","ALAITOC","BIEL-TAN","IYANDEN","AIM-HANN","ULTHWE"],
        "Keywords": ["Infantry", "Psyker", "Warlock", "Warlock Conclave"]
      },
      "Warlock Skyrunner": {
        "Points": 65,
        "PointsIncludesWargear": false,
        "M": 16,
        "WS": "3+",
        "BS": "3+",
        "S": 3,
        "T": 4,
        "W": 3,
        "A": 2,
        "Ld": 8,
        "Sv": "4+",
        "Wargear": {
          "weapons": [
            ["Shuriken Pistol","Witchblade","Twin Shuriken Catapult"],
            ["Shuriken Pistol","Singing Spear","Twin Shuriken Catapult"]
          ]
        },
        "Abilities": {
          "faction": ["Ancient Doom", "Battle Focus"],
          "Rune Armour": "This model has a 4+ invulnerable save.",
          "Destructor": "When this unit manifests the Smite psychic power, it has a range of 9\" rather than 18\" and only deals a single mortal wound.",
          "Ride the Wind": "When this model Advances, add 6\" to its Move Characteristic for that Movement phase instead of rolling a dice."
        },
        "Faction Keywords": ["AELDARI", "ASURYANI", "WARHOST"],
        "Allegiance": ["[Craftworld]","ALAITOC","BIEL-TAN","IYANDEN","AIM-HANN","ULTHWE"],
        "Keywords": ["Biker", "Character", "Fly", "Psyker", "Warlock", "Warlock Skyrunner"]
      },
      "Warlock Skyrunner Conclave": {
        "Points": 60,
        "PointsIncludesWargear": false,
        "M": 16,
        "WS": "3+",
        "BS": "3+",
        "S": 3,
        "T": 4,
        "W": 3,
        "A": 2,
        "Ld": 8,
        "Sv": "4+",
        "Wargear": {
          "weapons": [
            ["Shuriken Pistol","Witchblade","Twin Shuriken Catapult"],
            ["Shuriken Pistol","Singing Spear","Twin Shuriken Catapult"]
          ]
        },
        "Abilities": {
          "faction": ["Ancient Doom", "Battle Focus"],
          "Rune Armour": "This model has a 4+ invulnerable save.",
          "Destructor": "When this unit manifests the Smite psychic power, it has a range of 9\" rather than 18\". In addition, if this unit consists of 1-3 models when it manifests Smite, it only deals a single mortal wound. If it consists of 7-10 models when it manifests Smite, it always deals D6 mortal wounds.",
          "Ride the Wind": "When this model Advances, add 6\" to its Move Characteristic for that Movement phase instead of rolling a dice."
        },
        "Psyker": "If this unit has 1-3 models it can attempt to manifest one psychic power in each friendly Psychic phase, and attempt to deny one psychic power in each enemy Psychic phase. If this unit has 4-6 models it can attempt to manifest two powers and deny two powers, and if it has 7-10 models it can attempt to manifest three powers and deny three powers. This unit knows the Smite power and two psychic powers from the Runes of Battle discipline (pg124). If this unit has more than one model, when manifesting or denying a psychic power, first select a model in the unit - measure range, visibility, etc. from this model. If this unit suffers Perils of the Warp, it suffers D3 mortal wounds as described in the core rules, but units within 6\" will only suffer damage if the Perils of the Warp causes the last model in the manifesting unit to be slain.",
        "Faction Keywords": ["AELDARI", "ASURYANI", "WARHOST"],
        "Allegiance": ["[Craftworld]","ALAITOC","BIEL-TAN","IYANDEN","AIM-HANN","ULTHWE"],
        "Keywords": ["Biker", "Fly", "Psyker", "Warlock", "Warlock Skyrunner Conclave"]
      },
      "Guardian": {
        "Points": 8,
        "PointsIncludesWargear": false,
        "M": 7,
        "WS": "3+",
        "BS": "3+",
        "S": 3,
        "T": 3,
        "W": 1,
        "A": 1,
        "Ld": 7,
        "Sv": "5+",
        "Wargear": {
          "weapons": [
            ["Shuriken Catapult","Plasma Grenades"]
          ]
        },
        "Abilities": {
          "faction": ["Ancient Doom", "Battle Focus"]
        },
        "Faction Keywords": ["AELDARI", "ASURYANI", "WARHOST"],
        "Allegiance": ["[Craftworld]","ALAITOC","BIEL-TAN","IYANDEN","AIM-HANN","ULTHWE"],
        "Keywords": ["Infantry", "Guardian", "Guardian Defenders"]
      },
      "Heavy Weapon Platform": {
        "Points": 5,
        "PointsIncludesWargear": false,
        "M": 7,
        "WS": "6+",
        "BS": "3+",
        "S": 3,
        "T": 3,
        "W": 2,
        "A": 1,
        "Ld": 7,
        "Sv": "3+",
        "Wargear": {
          "weapons": [
            ["Shuriken Cannon"],
            ["Aeldari Missile Launcher"],
            ["Bright Lance"],
            ["Scatter Laser"],
            ["Starcannon"]
          ]
        },
        "Abilities": {
          "faction": ["Ancient Doom", "Battle Focus"],
          "Crewed Weapon": "A Heavy Weapon Platform can only fire its ranged weapon if a Guardian from its unit is within 3\" and ‘fires' it instead of shooting any of their own weapons. A single Guardian cannot operate multiple Heavy Weapon Platforms in this way in a single turn."
        },
        "Faction Keywords": ["AELDARI", "ASURYANI", "WARHOST"],
        "Allegiance": ["[Craftworld]","ALAITOC","BIEL-TAN","IYANDEN","AIM-HANN","ULTHWE"],
        "Keywords": ["Infantry", "Artillery", "Guardian", "Heavy Weapon Platform"]
      },
      "Storm Guardian": {
        "Points": 7,
        "PointsIncludesWargear": false,
        "M": 7,
        "WS": "3+",
        "BS": "3+",
        "S": 3,
        "T": 3,
        "W": 1,
        "A": 1,
        "Ld": 7,
        "Sv": "5+",
        "Wargear": {
          "weapons": [
            ["Shuriken Pistol","Aeldari Blade","Plasma Grenades"],
            ["Shuriken Pistol","Chainsword","Plasma Grenades"],
            ["Flamer","Aeldari Blade","Plasma Grenades"],
            ["Flamer","Chainsword","Plasma Grenades"],
            ["Fusion Gun","Aeldari Blade","Plasma Grenades"],
            ["Fusion Gun","Chainsword","Plasma Grenades"]
            // TODO: only two models may have flamer or fusion gun
          ]
        },
        "Abilities": {
          "faction": ["Ancient Doom", "Battle Focus"]
        },
        "Faction Keywords": ["AELDARI", "ASURYANI", "WARHOST"],
        "Allegiance": ["[Craftworld]","ALAITOC","BIEL-TAN","IYANDEN","AIM-HANN","ULTHWE"],
        "Keywords": ["Infantry", "Guardian", "Storm Guardians"]
      },
      "Dire Avenger": {
        "Points": 8,
        "PointsIncludesWargear": false,
        "M": 7,
        "WS": "3+",
        "BS": "3+",
        "S": 3,
        "T": 3,
        "W": 1,
        "A": 1,
        "Ld": 8,
        "Sv": "4+",
        "Wargear": {
          "weapons": [
            ["Avenger Shuriken Catapult","Plasma Grenades"]
          ]
        },
        "Abilities": {
          "faction": ["Ancient Doom", "Battle Focus"],
          "Defense Tactics": "When models in this unit fire Overwatch, they successfully hit on a roll of 5 or 6, instead of only 6."
        },
        "Faction Keywords": ["AELDARI", "ASURYANI", "ASPECT WARRIOR"],
        "Allegiance": ["[Craftworld]","ALAITOC","BIEL-TAN","IYANDEN","AIM-HANN","ULTHWE"],
        "Keywords": ["Infantry", "Dire Avengers"]
      },
      "Dire Avenger Exarch": {
        "Points": 8,
        "PointsIncludesWargear": false,
        "M": 7,
        "WS": "3+",
        "BS": "3+",
        "S": 3,
        "T": 3,
        "W": 1,
        "A": 1,
        "Ld": 8,
        "Sv": "4+",
        "Wargear": {
          "weapons": [
            ["Avenger Shuriken Catapult","Plasma Grenades"],
            ["Avenger Shuriken Catapult","Avenger Shuriken Catapult","Plasma Grenades"],
            ["Shuriken Pistol","Power Glaive","Plasma Grenades"],
            ["Shuriken Pistol","Diresword","Plasma Grenades"],
            ["Shimmershield","Power Glaive","Plasma Grenades"]
          ]
        },
        "Abilities": {
          "faction": ["Ancient Doom", "Battle Focus"],
          "Defense Tactics": "When models in this unit fire Overwatch, they successfully hit on a roll of 5 or 6, instead of only 6.",
          "BattleFortune": "The Dire Avenger Exarch has a 4+ invulnerable save."
        },
        "Faction Keywords": ["AELDARI", "ASURYANI", "ASPECT WARRIOR"],
        "Allegiance": ["[Craftworld]","ALAITOC","BIEL-TAN","IYANDEN","AIM-HANN","ULTHWE"],
        "Keywords": ["Infantry", "Dire Avengers"]
      },
      "Ranger": {
        "Points": 12,
        "PointsIncludesWargear": false,
        "M": 7,
        "WS": "3+",
        "BS": "3+",
        "S": 3,
        "T": 3,
        "W": 1,
        "A": 1,
        "Ld": 7,
        "Sv": "5+",
        "Wargear": {
          "weapons": [
            ["Shuriken Pistol","Ranger Long Rifle"]
          ]
        },
        "Abilities": {
          "faction": ["Ancient Doom", "Battle Focus"],
          "Cameleoline Cloaks":"Your opponent must subtract 1 from hit rolls for ranged weapons that target this unit. In addition, add 2 instead of 1 to saving throws made for models from this unit that are in cover.",
          "Appear Unbidden":"During deployment, you can set up this unit walking the winding paths of the webway instead of placing it on the battlefield. At the start of the first battle round but before the first turn begins, this unit can emerge from the webway - set it up anywhere on the battlefield that is more than 9\" away from any enemy models."
        },
        "Faction Keywords": ["AELDARI", "ASURYANI", "WARHOST"],
        "Allegiance": ["[Craftworld]","ALAITOC","BIEL-TAN","IYANDEN","AIM-HANN","ULTHWE"],
        "Keywords": ["Infantry", "Rangers"]
      },
      "Howling Banshee": {
        "Points": 9,
        "PointsIncludesWargear": false,
        "M": 8,
        "WS": "3+",
        "BS": "3+",
        "S": 3,
        "T": 3,
        "W": 1,
        "A": 2,
        "Ld": 8,
        "Sv": "4+",
        "Wargear": {
          "weapons": [
            ["Shuriken Pistol","Power Sword","Banshee Mask"]
          ]
        },
        "Abilities": {
          "faction": ["Ancient Doom", "Battle Focus"],
          "Acrobatic":"This unit can Advance and charge in the same turn. In a turn in which it Advanced, you can declar ea charge move for this unit if there are any enemy units within 15\" of it, and you can add 3 to the resulting charge roll."
        },
        "Faction Keywords": ["AELDARI", "ASURYANI", "ASPECT WARRIOR"],
        "Allegiance": ["[Craftworld]","ALAITOC","BIEL-TAN","IYANDEN","AIM-HANN","ULTHWE"],
        "Keywords": ["Infantry", "Howling Banshees"]
      },
      "Howling Banshee Exarch": {
        "Points": 9,
        "PointsIncludesWargear": false,
        "M": 8,
        "WS": "3+",
        "BS": "3+",
        "S": 3,
        "T": 3,
        "W": 2,
        "A": 3,
        "Ld": 8,
        "Sv": "4+",
        "Wargear": {
          "weapons": [
            ["Shuriken Pistol","Power Sword","Banshee Mask"],
            ["Shuriken Pistol","Executioner","Banshee Mask"],
            ["Mirrorswords","Banshee Mask"]
          ]
        },
        "Abilities": {
          "faction": ["Ancient Doom", "Battle Focus"],
          "Acrobatic":"This unit can Advance and charge in the same turn. In a turn in which it Advanced, you can declar ea charge move for this unit if there are any enemy units within 15\" of it, and you can add 3 to the resulting charge roll.",
          "War Shout": "Your opponent must subtract 1 from hit rolls in the Fight phase for attacks that target a unit that includes a Howling Banshee Exarch."
        },
        "Faction Keywords": ["AELDARI", "ASURYANI", "ASPECT WARRIOR"],
        "Allegiance": ["[Craftworld]","ALAITOC","BIEL-TAN","IYANDEN","AIM-HANN","ULTHWE"],
        "Keywords": ["Infantry", "Howling Banshees"]
      },
      "Striking Scorpion": {
        "Points": 13,
        "PointsIncludesWargear": false,
        "M": 7,
        "WS": "3+",
        "BS": "3+",
        "S": 3,
        "T": 3,
        "W": 1,
        "A": 2,
        "Ld": 8,
        "Sv": "3+",
        "Wargear": {
          "weapons": [
            ["Shuriken Pistol","Scorpion Chainsword","Plasma Grenades","Mandiblasters"]
          ]
        },
        "Abilities": {
          "faction": ["Ancient Doom", "Battle Focus"],
          "Masters of Stealth":"During deployment, you can set up this unit in the shadows instead of placing it on the battlefield. At the end of any of your Movement phases this unit can stalk from their hiding place - set it up anywhere on the battlefield that is more than 9\" away from any enemy models.",
          "Shadow Strike":"Add 1 to hit rolls for attacks for this unit that target a unit in cover."
        },
        "Faction Keywords": ["AELDARI", "ASURYANI", "ASPECT WARRIOR"],
        "Allegiance": ["[Craftworld]","ALAITOC","BIEL-TAN","IYANDEN","AIM-HANN","ULTHWE"],
        "Keywords": ["Infantry", "Striking Scorpions"]
      },
      "Striking Scorpion Exarch": {
        "Points": 13,
        "PointsIncludesWargear": false,
        "M": 7,
        "WS": "3+",
        "BS": "3+",
        "S": 3,
        "T": 3,
        "W": 2,
        "A": 3,
        "Ld": 8,
        "Sv": "3+",
        "Wargear": {
          "weapons": [
            ["Shuriken Pistol","Scorpion Chainsword","Plasma Grenades","Mandiblasters"],
            ["Scorpion's Claw","Scorpion Chainsword","Plasma Grenades","Mandiblasters"],
            ["Shuriken Pistol","Biting Blade","Plasma Grenades","Mandiblasters"],
            ["Scorpion's Claw","Biting Blade","Plasma Grenades","Mandiblasters"]
          ]
        },
        "Abilities": {
          "faction": ["Ancient Doom", "Battle Focus"],
          "Masters of Stealth":"During deployment, you can set up this unit in the shadows instead of placing it on the battlefield. At the end of any of your Movement phases this unit can stalk from their hiding place - set it up anywhere on the battlefield that is more than 9\" away from any enemy models.",
          "Shadow Strike":"Add 1 to hit rolls for attacks for this unit that target a unit in cover.",
          "Sustained Attack" : "Each time you roll a hit roll of 6+ when making a close combat attack for a Striking Scorpion Exarch, that model can immediately make another close combat attack using the same weapon. These extra attacks cannot generate any additional attacks."
        },
        "Faction Keywords": ["AELDARI", "ASURYANI", "ASPECT WARRIOR"],
        "Allegiance": ["[Craftworld]","ALAITOC","BIEL-TAN","IYANDEN","AIM-HANN","ULTHWE"],
        "Keywords": ["Infantry", "Striking Scorpions"]
      },
      "Fire Dragon": {
        "Points": 7,
        "PointsIncludesWargear": false,
        "M": 7,
        "WS": "3+",
        "BS": "3+",
        "S": 3,
        "T": 3,
        "W": 1,
        "A": 1,
        "Ld": 8,
        "Sv": "3+",
        "Wargear": {
          "weapons": [
            ["Fusion Gun","Melta Bombs"]
          ]
        },
        "Abilities": {
          "faction": ["Ancient Doom", "Battle Focus"],
          "Assured Destruction":"You can re-roll wound rolls of 1 in the Shooting phase for attacks this unit make that target a MONSTER or VEHICLE."
        },
        "Faction Keywords": ["AELDARI", "ASURYANI", "ASPECT WARRIOR"],
        "Allegiance": ["[Craftworld]","ALAITOC","BIEL-TAN","IYANDEN","AIM-HANN","ULTHWE"],
        "Keywords": ["Infantry", "Fire Dragons"]
      },
      "Fire Dragon Exarch": {
        "Points": 7,
        "PointsIncludesWargear": false,
        "M": 7,
        "WS": "3+",
        "BS": "3+",
        "S": 3,
        "T": 3,
        "W": 2,
        "A": 2,
        "Ld": 8,
        "Sv": "3+",
        "Wargear": {
          "weapons": [
            ["Fusion Gun","Melta Bombs"]
          ]
        },
        "Abilities": {
          "faction": ["Ancient Doom", "Battle Focus"],
          "Crack Shot":"You can re-roll hit rolls of 1 for a Fire Dragon Exarch's ranged weapons.",
          "Assured Destruction":"You can re-roll wound rolls of 1 in the Shooting phase for attacks this unit make that target a MONSTER or VEHICLE."
        },
        "Faction Keywords": ["AELDARI", "ASURYANI", "ASPECT WARRIOR"],
        "Allegiance": ["[Craftworld]","ALAITOC","BIEL-TAN","IYANDEN","AIM-HANN","ULTHWE"],
        "Keywords": ["Infantry", "Fire Dragons"]
      },
      "Wraithblade": {
        "Points": 29,
        "PointsIncludesWargear": false,
        "M": 5,
        "WS": "3+",
        "BS": "3+",
        "S": 5,
        "T": 6,
        "W": 3,
        "A": 2,
        "Ld": 9,
        "Sv": "3+",
        "Wargear": {
          "weapons": [
            ["Ghostswords"],
            ["Ghost Axe", "Forceshield"]
          ]
        },
        "Abilities": {
          "faction": ["Ancient Doom"],
          "Fires of Wrath":"Add 1 to the Attacks characteristic of models in this unit in a turn in which it charges."
        },
        "Faction Keywords": ["AELDARI", "ASURYANI", "SPIRIT HOST"],
        "Allegiance": ["[Craftworld]","ALAITOC","BIEL-TAN","IYANDEN","AIM-HANN","ULTHWE"],
        "Keywords": ["Infantry", "Wraith Construct", "Wraithblades"]
      },
      "Wraithguard": {
        "Points": 23,
        "PointsIncludesWargear": false,
        "M": 5,
        "WS": "3+",
        "BS": "3+",
        "S": 5,
        "T": 6,
        "W": 3,
        "A": 1,
        "Ld": 9,
        "Sv": "3+",
        "Wargear": {
          "weapons": [
            ["Wraithcannon", "Wraithguard Fists"],
            ["D-Scythe", "Wraithguard Fists"]
          ]
        },
        "Abilities": {
          "faction": ["Ancient Doom"],
          "Implacable":"This unit can Fall Back and still shoot in a turn that it does so."
        },
        "Faction Keywords": ["AELDARI", "ASURYANI", "SPIRIT HOST"],
        "Allegiance": ["[Craftworld]","ALAITOC","BIEL-TAN","IYANDEN","AIM-HANN","ULTHWE"],
        "Keywords": ["Infantry", "Wraith Construct", "Wraithguard"]
      },
      "Windrider": {
        "Points": 18,
        "PointsIncludesWargear": false,
        "M": 16,
        "WS": "3+",
        "BS": "3+",
        "S": 3,
        "T": 4,
        "W": 2,
        "A": 1,
        "Ld": 7,
        "Sv": "4+",
        "Wargear": {
          "weapons": [
            ["Twin Shuriken Catapult"],
            ["Scatter Laser"],
            ["Shuriken Cannon"]
          ]
        },
        "Abilities": {
          "faction": ["Ancient Doom","Battle Focus"],
          "Ride the Wind":"When this unit Advances, add 6\" to its Move characteristic for that Movement phase instead of rolling a dice."
        },
        "Faction Keywords": ["AELDARI", "ASURYANI", "WARHOST"],
        "Allegiance": ["[Craftworld]","ALAITOC","BIEL-TAN","IYANDEN","AIM-HANN","ULTHWE"],
        "Keywords": ["Infantry", "Fly", "Windriders"]
      },
      "Vyper": {
        "Points": 50,
        "PointsIncludesWargear": false,
        "M": 16,
        "WS": "6+",
        "BS": "3+",
        "S": 4,
        "T": 5,
        "W": 6,
        "A": 1,
        "Ld": 8,
        "Sv": "3+",
        "Wargear": {
          "weapons": [
            ["Shuriken Cannon", "Twin Shuriken Catapult"],
            ["Shuriken Cannon", "Shuriken Cannon"],
            ["Scatter Laser", "Twin Shuriken Catapult"],
            ["Scatter Laser", "Shuriken Cannon"],
            ["Bright Lance", "Twin Shuriken Catapult"],
            ["Bright Lance", "Shuriken Cannon"],
            ["Aeldari Missile Launcher", "Twin Shuriken Catapult"],
            ["Aeldari Missile Launcher", "Shuriken Cannon"],
            ["Starcannon", "Twin Shuriken Catapult"],
            ["Starcannon", "Shuriken Cannon"]
          ]
        },
        "Abilities": {
          "faction": ["Ancient Doom","Battle Focus"],
          "Blade Wind":"This unit has a Move characteristic of 20\" instead of 16\" whilst it contains 3 models.",
          "Explodes": "If a model in this unit is reduced to 0 wounds, roll a D6 before removing it from the battlefield. On a 6 it explodes, and each unit within 3\" suffers 1 mortal wound."
        },
        "Faction Keywords": ["AELDARI", "ASURYANI", "WARHOST"],
        "Allegiance": ["[Craftworld]","ALAITOC","BIEL-TAN","IYANDEN","AIM-HANN","ULTHWE"],
        "Keywords": ["Infantry", "Fly", "Vypers"]
      },
      "Swooping Hawk": {
        "Points": 6,
        "PointsIncludesWargear": false,
        "M": 14,
        "WS": "3+",
        "BS": "3+",
        "S": 3,
        "T": 3,
        "W": 1,
        "A": 1,
        "Ld": 8,
        "Sv": "4+",
        "Wargear": {
          "weapons": [
            ["Lasblaster"]
          ]
        },
        "Abilities": {
          "faction": ["Ancient Doom", "Battle Focus"],
          "Children of Baharroth":"During deployment, you can setup this unit in the skies instead of placing it on the battlefield. At the end of any of your Movement phases this unit can descend - set it up any where on the battlefield that is more than 9\" away from any enemy models.",
          "Skyleap":"At the beginning of your Movement phase, if this unit is not within 1\" of an enemy model they can leap into the skies. Remove this unit from the battlefield. They can return to the battlefield as described in the Children of Baharroth ability. This unit may not both skyleap and descend in the same turn. If the battle ends while this unit is in the skies, they are considered to be slain.",
          "Swooping Hawk Grenade Pack": "Swooping Hawks can fire a spread of grenades when they are setup on the battlefield using the Children of Baharroth ability and as they fly over enemy units in the Movement phase. To do so after the unit has been setup using the Children of Baharroth ability, pick an enemy unit within 12\" of them. To do so after the unit has moved, pick one enemy unit that they flew over. Then, in either case, roll one dice for each model in the enemy unit (up to a maximum of one dice for each model in the Swooping Hawks unit). For each roll of a 6 the enemy unit suffers a mortal wound."
        },
        "Faction Keywords": ["AELDARI", "ASURYANI", "ASPECT WARRIOR"],
        "Allegiance": ["[Craftworld]","ALAITOC","BIEL-TAN","IYANDEN","AIM-HANN","ULTHWE"],
        "Keywords": ["Infantry", "Jump Pack", "Fly", "Swooping Hawks"]
      },
      "Swooping Hawk Exarch": {
        "Points": 6,
        "PointsIncludesWargear": false,
        "M": 14,
        "WS": "3+",
        "BS": "3+",
        "S": 3,
        "T": 3,
        "W": 2,
        "A": 2,
        "Ld": 8,
        "Sv": "4+",
        "Wargear": {
          "weapons": [
            ["Lasblaster"],
            ["Hawk's Talon"],
            ["Lasblaster", "Power Sword"],
            ["Hawk's Talon", "Power Sword"]
          ]
        },
        "Abilities": {
          "faction": ["Ancient Doom", "Battle Focus"],
          "Children of Baharroth":"During deployment, you can setup this unit in the skies instead of placing it on the battlefield. At the end of any of your Movement phases this unit can descend - set it up any where on the battlefield that is more than 9\" away from any enemy models.",
          "Skyleap":"At the beginning of your Movement phase, if this unit is not within 1\" of an enemy model they can leap into the skies. Remove this unit from the battlefield. They can return to the battlefield as described in the Children of Baharroth ability. This unit may not both skyleap and descend in the same turn. If the battle ends while this unit is in the skies, they are considered to be slain.",
          "Swooping Hawk Grenade Pack": "Swooping Hawks can fire a spread of grenades when they are setup on the battlefield using the Children of Baharroth ability and as they fly over enemy units in the Movement phase. To do so after the unit has been setup using the Children of Baharroth ability, pick an enemy unit within 12\" of them. To do so after the unit has moved, pick one enemy unit that they flew over. Then, in either case, roll one dice for each model in the enemy unit (up to a maximum of one dice for each model in the Swooping Hawks unit). For each roll of a 6 the enemy unit suffers a mortal wound.",
          "Herald of Victory": "You can add 1 to the Leadership of friendly [Craftworld] units within 3\" of any unit that includes a Swooping Hawk Exarch."
        },
        "Faction Keywords": ["AELDARI", "ASURYANI", "ASPECT WARRIOR"],
        "Allegiance": ["[Craftworld]","ALAITOC","BIEL-TAN","IYANDEN","AIM-HANN","ULTHWE"],
        "Keywords": ["Infantry", "Jump Pack", "Fly", "Swooping Hawks"]
      },
      "Warp Spider": {
        "Points": 10,
        "PointsIncludesWargear": false,
        "M": 7,
        "WS": "3+",
        "BS": "3+",
        "S": 3,
        "T": 3,
        "W": 1,
        "A": 1,
        "Ld": 8,
        "Sv": "3+",
        "Wargear": {
          "weapons": [
            ["Death Spinner"]
          ]
        },
        "Abilities": {
          "faction": ["Ancient Doom", "Battle Focus"],
          "Warp Strike":"During deployment, you can setup this unit in preparation to launch a warp strike instead of placing it on the battlefield. At the end of any of your Movement phases this unit can use their warp jump generators to enter the battlefield - set it up anywhere on the battlefield that is more than 9\" away from any enemy models. You must then immediately roll 2D6; on a 2, one model from the unit is slain.",
          "Warp Jump Generator": "When this unit moves in the Movement phase, they can use their warp jump generators. If they do, they cannot Advance or charge this turn, but their Move characteristic is increased by 4D6\" and they can FLY until the end of the phase. A unit that uses warp jump generators to Fall Back can still shoot in its Shooting phase.",
          "Flickerjump": "When this unit is targeted by a ranged weapon, you can declare that they will make a flicker jump - your opponent must subtract 1 from hit rolls for attacks that target this unit until the end of the phase. You must then immediately roll 2D6; on a 2, one model from the Warp Spiders unit is slain."
        },
        "Faction Keywords": ["AELDARI", "ASURYANI", "ASPECT WARRIOR"],
        "Allegiance": ["[Craftworld]","ALAITOC","BIEL-TAN","IYANDEN","AIM-HANN","ULTHWE"],
        "Keywords": ["Infantry", "Jump Pack", "Warp Spiders"]
      },
      "Warp Spider Exarch": {
        "Points": 10,
        "PointsIncludesWargear": false,
        "M": 7,
        "WS": "3+",
        "BS": "3+",
        "S": 3,
        "T": 3,
        "W": 2,
        "A": 2,
        "Ld": 8,
        "Sv": "3+",
        "Wargear": {
          "weapons": [
            ["Death Spinner"],
            ["Death Spinner","Death Spinner"],
            ["Death Spinner","Powerblades"],
            ["Death Spinner","Death Spinner","Powerblades"]
          ]
        },
        "Abilities": {
          "faction": ["Ancient Doom", "Battle Focus"],
          "Warp Strike":"During deployment, you can setup this unit in preparation to launch a warp strike instead of placing it on the battlefield. At the end of any of your Movement phases this unit can use their warp jump generators to enter the battlefield - set it up anywhere on the battlefield that is more than 9\" away from any enemy models. You must then immediately roll 2D6; on a 2, one model from the unit is slain.",
          "Iron Resolve": "You can re-roll failed Morale tests for a unit that contains a Warp Spider Exarch.",
          "Warp Jump Generator": "When this unit moves in the Movement phase, they can use their warp jump generators. If they do, they cannot Advance or charge this turn, but their Move characteristic is increased by 4D6\" and they can FLY until the end of the phase. A unit that uses warp jump generators to Fall Back can still shoot in its Shooting phase.",
          "Flickerjump": "When this unit is targeted by a ranged weapon, you can declare that they will make a flicker jump - your opponent must subtract 1 from hit rolls for attacks that target this unit until the end of the phase. You must then immediately roll 2D6; on a 2, one model from the Warp Spiders unit is slain."
        },
        "Faction Keywords": ["AELDARI", "ASURYANI", "ASPECT WARRIOR"],
        "Allegiance": ["[Craftworld]","ALAITOC","BIEL-TAN","IYANDEN","AIM-HANN","ULTHWE"],
        "Keywords": ["Infantry", "Jump Pack", "Warp Spiders"]
      },
      "Shining Spear": {
        "Points": 18,
        "PointsIncludesWargear": false,
        "M": 16,
        "WS": "3+",
        "BS": "3+",
        "S": 3,
        "T": 4,
        "W": 2,
        "A": 2,
        "Ld": 8,
        "Sv": "3+",
        "Wargear": {
          "weapons": [
            ["Laser Lance","Twin Shuriken Catapult"]
          ]
        },
        "Abilities": {
          "faction": ["Ancient Doom", "Battle Focus"],
          "Ride the Wind":"When this unit Advances, add 6\" to its Move characteristic for that Movement phase instead of rolling a dice.",
          "Aerobatic Grace": "Models in this unit have a 4+ invulnerable save against ranged weapons."
        },
        "Faction Keywords": ["AELDARI", "ASURYANI", "ASPECT WARRIOR"],
        "Allegiance": ["[Craftworld]","ALAITOC","BIEL-TAN","IYANDEN","AIM-HANN","ULTHWE"],
        "Keywords": ["Infantry", "Fly", "Shining Spears"]
      },
      "Shining Spear Exarch": {
        "Points": 18,
        "PointsIncludesWargear": false,
        "M": 16,
        "WS": "3+",
        "BS": "3+",
        "S": 3,
        "T": 4,
        "W": 3,
        "A": 3,
        "Ld": 8,
        "Sv": "3+",
        "Wargear": {
          "weapons": [
            ["Laser Lance","Twin Shuriken Catapult"],
            ["Star Lance","Twin Shuriken Catapult"],
            ["Paragon Sabre","Twin Shuriken Catapult"]
          ]
        },
        "Abilities": {
          "faction": ["Ancient Doom", "Battle Focus"],
          "Ride the Wind":"When this unit Advances, add 6\" to its Move characteristic for that Movement phase instead of rolling a dice.",
          "Aerobatic Grace": "Models in this unit have a 4+ invulnerable save against ranged weapons.",
          "Expert Hunter": "You can re-roll wound rolls for a Shining Spear Exarch when attacking a MONSTER or VEHICLE."
        },
        "Faction Keywords": ["AELDARI", "ASURYANI", "ASPECT WARRIOR"],
        "Allegiance": ["[Craftworld]","ALAITOC","BIEL-TAN","IYANDEN","AIM-HANN","ULTHWE"],
        "Keywords": ["Infantry", "Fly", "Shining Spears"]
      },
      "War Walker": {
        "Points": 50,
        "PointsIncludesWargear": false,
        "M": 10,
        "WS": "3+",
        "BS": "3+",
        "S": 5,
        "T": 6,
        "W": 6,
        "A": 2,
        "Ld": 8,
        "Sv": "4+",
        "Wargear": {
          "weapons": [
            ["Shuriken Cannon","Shuriken Cannon"],
            ["Shuriken Cannon","Aeldari Missile Launcher"],
            ["Shuriken Cannon","Bright Lance"],
            ["Shuriken Cannon","Scatter Laser"],
            ["Shuriken Cannon","Starcannon"],
            ["Aeldari Missile Launcher","Shuriken Cannon"],
            ["Aeldari Missile Launcher","Aeldari Missile Launcher"],
            ["Aeldari Missile Launcher","Bright Lance"],
            ["Aeldari Missile Launcher","Scatter Laser"],
            ["Aeldari Missile Launcher","Starcannon"],
            ["Bright Lance","Shuriken Cannon"],
            ["Bright Lance","Aeldari Missile Launcher"],
            ["Bright Lance","Bright Lance"],
            ["Bright Lance","Scatter Laser"],
            ["Bright Lance","Starcannon"],
            ["Scatter Laser","Shuriken Cannon"],
            ["Scatter Laser","Aeldari Missile Launcher"],
            ["Scatter Laser","Bright Lance"],
            ["Scatter Laser","Scatter Laser"],
            ["Scatter Laser","Starcannon"],
            ["Starcannon","Shuriken Cannon"],
            ["Starcannon","Aeldari Missile Launcher"],
            ["Starcannon","Bright Lance"],
            ["Starcannon","Scatter Laser"],
            ["Starcannon","Starcannon"]
          ]
        },
        "Abilities": {
          "faction": ["Ancient Doom","Battle Focus"],
          "Scout Vehicle": "During deployment, you can setup this unit on the enemy's flanks instead of placing it on the battlefield. At the end of any of your Movement phases the unit can join battle - set it up so that all models in the unit are within 3\" of a battlefield edge of your choice and more than 9\" away from any enemy models.",
          "Power Field": "Models in this unit has a 5+ invulnerable save.",
          "Explodes": "If a model in this unit is reduced to 0 wounds, roll a D6 before removing it from the battlefield. On a 6 it explodes, and each unit within 3\" suffers 1 mortal wound."
        },
        "Faction Keywords": ["AELDARI", "ASURYANI", "WARHOST"],
        "Allegiance": ["[Craftworld]","ALAITOC","BIEL-TAN","IYANDEN","AIM-HANN","ULTHWE"],
        "Keywords": ["Vehicle", "War Walkers"]
      },
      "Wraithlord": {
        "Points": 103,
        "PointsIncludesWargear": false,
        "M": [
          {
            "Wounds": [6, 10],
            "value": 8
          },
          {
            "Wounds": [3, 5],
            "value": 7
          },
          {
            "Wounds": [1, 2],
            "value": 6
          }
        ],
        "WS": [
          {
            "Wounds": [6, 10],
            "value": "3+"
          },
          {
            "Wounds": [3, 5],
            "value": "4+"
          },
          {
            "Wounds": [1, 2],
            "value": "5+"
          }
        ],
        "BS": [
          {
            "Wounds": [6, 10],
            "value": "3+"
          },
          {
            "Wounds": [3, 5],
            "value": "4+"
          },
          {
            "Wounds": [1, 2],
            "value": "5+"
          }
        ],
        "S": 7,
        "T": 8,
        "W": 10,
        "A": 4,
        "Ld": 9,
        "Sv": "3+",
        "Wargear": {
          "weapons": [
            ["Shuriken Catapult","Shuriken Catapult", "Wraithbone Fists"],
            ["Flamer","Shuriken Catapult", "Wraithbone Fists"],
            ["Flamer","Flamer", "Wraithbone Fists"],
            ["Shuriken Catapult","Shuriken Catapult","Wraithbone Fists","Ghostglaive"],
            ["Flamer","Shuriken Catapult","Wraithbone Fists","Ghostglaive"],
            ["Flamer","Flamer","Wraithbone Fists","Ghostglaive"],

            ["Shuriken Catapult","Shuriken Catapult", "Wraithbone Fists","Aeldari Missile Launcher"],
            ["Flamer","Shuriken Catapult", "Wraithbone Fists","Aeldari Missile Launcher"],
            ["Flamer","Flamer", "Wraithbone Fists","Aeldari Missile Launcher"],
            ["Shuriken Catapult","Shuriken Catapult","Wraithbone Fists","Ghostglaive","Aeldari Missile Launcher"],
            ["Flamer","Shuriken Catapult","Wraithbone Fists","Ghostglaive","Aeldari Missile Launcher"],
            ["Flamer","Flamer","Wraithbone Fists","Ghostglaive","Aeldari Missile Launcher"],
            ["Shuriken Catapult","Shuriken Catapult", "Wraithbone Fists","Bright Lance"],
            ["Flamer","Shuriken Catapult", "Wraithbone Fists","Bright Lance"],
            ["Flamer","Flamer", "Wraithbone Fists","Bright Lance"],
            ["Shuriken Catapult","Shuriken Catapult","Wraithbone Fists","Ghostglaive","Bright Lance"],
            ["Flamer","Shuriken Catapult","Wraithbone Fists","Ghostglaive","Bright Lance"],
            ["Flamer","Flamer","Wraithbone Fists","Ghostglaive","Bright Lance"],
            ["Shuriken Catapult","Shuriken Catapult", "Wraithbone Fists","Scatter Laser"],
            ["Flamer","Shuriken Catapult", "Wraithbone Fists","Scatter Laser"],
            ["Flamer","Flamer", "Wraithbone Fists","Scatter Laser"],
            ["Shuriken Catapult","Shuriken Catapult","Wraithbone Fists","Ghostglaive","Scatter Laser"],
            ["Flamer","Shuriken Catapult","Wraithbone Fists","Ghostglaive","Scatter Laser"],
            ["Flamer","Flamer","Wraithbone Fists","Ghostglaive","Scatter Laser"],
            ["Shuriken Catapult","Shuriken Catapult", "Wraithbone Fists","Starcannon"],
            ["Flamer","Shuriken Catapult", "Wraithbone Fists","Starcannon"],
            ["Flamer","Flamer", "Wraithbone Fists","Starcannon"],
            ["Shuriken Catapult","Shuriken Catapult","Wraithbone Fists","Ghostglaive","Starcannon"],
            ["Flamer","Shuriken Catapult","Wraithbone Fists","Ghostglaive","Starcannon"],
            ["Flamer","Flamer","Wraithbone Fists","Ghostglaive","Starcannon"],
            ["Shuriken Catapult","Shuriken Catapult", "Wraithbone Fists","Shuriken Cannon"],
            ["Flamer","Shuriken Catapult", "Wraithbone Fists","Shuriken Cannon"],
            ["Flamer","Flamer", "Wraithbone Fists","Shuriken Cannon"],
            ["Shuriken Catapult","Shuriken Catapult","Wraithbone Fists","Ghostglaive","Shuriken Cannon"],
            ["Flamer","Shuriken Catapult","Wraithbone Fists","Ghostglaive","Shuriken Cannon"],
            ["Flamer","Flamer","Wraithbone Fists","Ghostglaive","Shuriken Cannon"],

            ["Shuriken Catapult","Shuriken Catapult", "Wraithbone Fists","Aeldari Missile Launcher","Aeldari Missile Launcher"],
            ["Flamer","Shuriken Catapult", "Wraithbone Fists","Aeldari Missile Launcher","Aeldari Missile Launcher"],
            ["Flamer","Flamer", "Wraithbone Fists","Aeldari Missile Launcher","Aeldari Missile Launcher"],
            ["Shuriken Catapult","Shuriken Catapult","Wraithbone Fists","Ghostglaive","Aeldari Missile Launcher","Aeldari Missile Launcher"],
            ["Flamer","Shuriken Catapult","Wraithbone Fists","Ghostglaive","Aeldari Missile Launcher","Aeldari Missile Launcher"],
            ["Flamer","Flamer","Wraithbone Fists","Ghostglaive","Aeldari Missile Launcher","Aeldari Missile Launcher"],
            ["Shuriken Catapult","Shuriken Catapult", "Wraithbone Fists","Bright Lance","Aeldari Missile Launcher"],
            ["Flamer","Shuriken Catapult", "Wraithbone Fists","Bright Lance","Aeldari Missile Launcher"],
            ["Flamer","Flamer", "Wraithbone Fists","Bright Lance","Aeldari Missile Launcher"],
            ["Shuriken Catapult","Shuriken Catapult","Wraithbone Fists","Ghostglaive","Bright Lance","Aeldari Missile Launcher"],
            ["Flamer","Shuriken Catapult","Wraithbone Fists","Ghostglaive","Bright Lance","Aeldari Missile Launcher"],
            ["Flamer","Flamer","Wraithbone Fists","Ghostglaive","Bright Lance","Aeldari Missile Launcher"],
            ["Shuriken Catapult","Shuriken Catapult", "Wraithbone Fists","Scatter Laser","Aeldari Missile Launcher"],
            ["Flamer","Shuriken Catapult", "Wraithbone Fists","Scatter Laser","Aeldari Missile Launcher"],
            ["Flamer","Flamer", "Wraithbone Fists","Scatter Laser","Aeldari Missile Launcher"],
            ["Shuriken Catapult","Shuriken Catapult","Wraithbone Fists","Ghostglaive","Scatter Laser","Aeldari Missile Launcher"],
            ["Flamer","Shuriken Catapult","Wraithbone Fists","Ghostglaive","Scatter Laser","Aeldari Missile Launcher"],
            ["Flamer","Flamer","Wraithbone Fists","Ghostglaive","Scatter Laser","Aeldari Missile Launcher"],
            ["Shuriken Catapult","Shuriken Catapult", "Wraithbone Fists","Starcannon","Aeldari Missile Launcher"],
            ["Flamer","Shuriken Catapult", "Wraithbone Fists","Starcannon","Aeldari Missile Launcher"],
            ["Flamer","Flamer", "Wraithbone Fists","Starcannon","Aeldari Missile Launcher"],
            ["Shuriken Catapult","Shuriken Catapult","Wraithbone Fists","Ghostglaive","Starcannon","Aeldari Missile Launcher"],
            ["Flamer","Shuriken Catapult","Wraithbone Fists","Ghostglaive","Starcannon","Aeldari Missile Launcher"],
            ["Flamer","Flamer","Wraithbone Fists","Ghostglaive","Starcannon","Aeldari Missile Launcher"],
            ["Shuriken Catapult","Shuriken Catapult", "Wraithbone Fists","Shuriken Cannon","Aeldari Missile Launcher"],
            ["Flamer","Shuriken Catapult", "Wraithbone Fists","Shuriken Cannon","Aeldari Missile Launcher"],
            ["Flamer","Flamer", "Wraithbone Fists","Shuriken Cannon","Aeldari Missile Launcher"],
            ["Shuriken Catapult","Shuriken Catapult","Wraithbone Fists","Ghostglaive","Shuriken Cannon","Aeldari Missile Launcher"],
            ["Flamer","Shuriken Catapult","Wraithbone Fists","Ghostglaive","Shuriken Cannon","Aeldari Missile Launcher"],
            ["Flamer","Flamer","Wraithbone Fists","Ghostglaive","Shuriken Cannon","Aeldari Missile Launcher"],

            ["Shuriken Catapult","Shuriken Catapult", "Wraithbone Fists","Aeldari Missile Launcher","Bright Lance"],
            ["Flamer","Shuriken Catapult", "Wraithbone Fists","Aeldari Missile Launcher","Bright Lance"],
            ["Flamer","Flamer", "Wraithbone Fists","Aeldari Missile Launcher","Bright Lance"],
            ["Shuriken Catapult","Shuriken Catapult","Wraithbone Fists","Ghostglaive","Aeldari Missile Launcher","Bright Lance"],
            ["Flamer","Shuriken Catapult","Wraithbone Fists","Ghostglaive","Aeldari Missile Launcher","Bright Lance"],
            ["Flamer","Flamer","Wraithbone Fists","Ghostglaive","Aeldari Missile Launcher","Bright Lance"],
            ["Shuriken Catapult","Shuriken Catapult", "Wraithbone Fists","Bright Lance","Bright Lance"],
            ["Flamer","Shuriken Catapult", "Wraithbone Fists","Bright Lance","Bright Lance"],
            ["Flamer","Flamer", "Wraithbone Fists","Bright Lance","Bright Lance"],
            ["Shuriken Catapult","Shuriken Catapult","Wraithbone Fists","Ghostglaive","Bright Lance","Bright Lance"],
            ["Flamer","Shuriken Catapult","Wraithbone Fists","Ghostglaive","Bright Lance","Bright Lance"],
            ["Flamer","Flamer","Wraithbone Fists","Ghostglaive","Bright Lance","Bright Lance"],
            ["Shuriken Catapult","Shuriken Catapult", "Wraithbone Fists","Scatter Laser","Bright Lance"],
            ["Flamer","Shuriken Catapult", "Wraithbone Fists","Scatter Laser","Bright Lance"],
            ["Flamer","Flamer", "Wraithbone Fists","Scatter Laser","Bright Lance"],
            ["Shuriken Catapult","Shuriken Catapult","Wraithbone Fists","Ghostglaive","Scatter Laser","Bright Lance"],
            ["Flamer","Shuriken Catapult","Wraithbone Fists","Ghostglaive","Scatter Laser","Bright Lance"],
            ["Flamer","Flamer","Wraithbone Fists","Ghostglaive","Scatter Laser","Bright Lance"],
            ["Shuriken Catapult","Shuriken Catapult", "Wraithbone Fists","Starcannon","Bright Lance"],
            ["Flamer","Shuriken Catapult", "Wraithbone Fists","Starcannon","Bright Lance"],
            ["Flamer","Flamer", "Wraithbone Fists","Starcannon","Bright Lance"],
            ["Shuriken Catapult","Shuriken Catapult","Wraithbone Fists","Ghostglaive","Starcannon","Bright Lance"],
            ["Flamer","Shuriken Catapult","Wraithbone Fists","Ghostglaive","Starcannon","Bright Lance"],
            ["Flamer","Flamer","Wraithbone Fists","Ghostglaive","Starcannon","Bright Lance"],
            ["Shuriken Catapult","Shuriken Catapult", "Wraithbone Fists","Shuriken Cannon","Bright Lance"],
            ["Flamer","Shuriken Catapult", "Wraithbone Fists","Shuriken Cannon","Bright Lance"],
            ["Flamer","Flamer", "Wraithbone Fists","Shuriken Cannon","Bright Lance"],
            ["Shuriken Catapult","Shuriken Catapult","Wraithbone Fists","Ghostglaive","Shuriken Cannon","Bright Lance"],
            ["Flamer","Shuriken Catapult","Wraithbone Fists","Ghostglaive","Shuriken Cannon","Bright Lance"],
            ["Flamer","Flamer","Wraithbone Fists","Ghostglaive","Shuriken Cannon","Bright Lance"],

            ["Shuriken Catapult","Shuriken Catapult", "Wraithbone Fists","Aeldari Missile Launcher","Scatter Laser"],
            ["Flamer","Shuriken Catapult", "Wraithbone Fists","Aeldari Missile Launcher","Scatter Laser"],
            ["Flamer","Flamer", "Wraithbone Fists","Aeldari Missile Launcher","Scatter Laser"],
            ["Shuriken Catapult","Shuriken Catapult","Wraithbone Fists","Ghostglaive","Aeldari Missile Launcher","Scatter Laser"],
            ["Flamer","Shuriken Catapult","Wraithbone Fists","Ghostglaive","Aeldari Missile Launcher","Scatter Laser"],
            ["Flamer","Flamer","Wraithbone Fists","Ghostglaive","Aeldari Missile Launcher","Scatter Laser"],
            ["Shuriken Catapult","Shuriken Catapult", "Wraithbone Fists","Bright Lance","Scatter Laser"],
            ["Flamer","Shuriken Catapult", "Wraithbone Fists","Bright Lance","Scatter Laser"],
            ["Flamer","Flamer", "Wraithbone Fists","Bright Lance","Scatter Laser"],
            ["Shuriken Catapult","Shuriken Catapult","Wraithbone Fists","Ghostglaive","Bright Lance","Scatter Laser"],
            ["Flamer","Shuriken Catapult","Wraithbone Fists","Ghostglaive","Bright Lance","Scatter Laser"],
            ["Flamer","Flamer","Wraithbone Fists","Ghostglaive","Bright Lance","Scatter Laser"],
            ["Shuriken Catapult","Shuriken Catapult", "Wraithbone Fists","Scatter Laser","Scatter Laser"],
            ["Flamer","Shuriken Catapult", "Wraithbone Fists","Scatter Laser","Scatter Laser"],
            ["Flamer","Flamer", "Wraithbone Fists","Scatter Laser","Scatter Laser"],
            ["Shuriken Catapult","Shuriken Catapult","Wraithbone Fists","Ghostglaive","Scatter Laser","Scatter Laser"],
            ["Flamer","Shuriken Catapult","Wraithbone Fists","Ghostglaive","Scatter Laser","Scatter Laser"],
            ["Flamer","Flamer","Wraithbone Fists","Ghostglaive","Scatter Laser","Scatter Laser"],
            ["Shuriken Catapult","Shuriken Catapult", "Wraithbone Fists","Starcannon","Scatter Laser"],
            ["Flamer","Shuriken Catapult", "Wraithbone Fists","Starcannon","Scatter Laser"],
            ["Flamer","Flamer", "Wraithbone Fists","Starcannon","Scatter Laser"],
            ["Shuriken Catapult","Shuriken Catapult","Wraithbone Fists","Ghostglaive","Starcannon","Scatter Laser"],
            ["Flamer","Shuriken Catapult","Wraithbone Fists","Ghostglaive","Starcannon","Scatter Laser"],
            ["Flamer","Flamer","Wraithbone Fists","Ghostglaive","Starcannon","Scatter Laser"],
            ["Shuriken Catapult","Shuriken Catapult", "Wraithbone Fists","Shuriken Cannon","Scatter Laser"],
            ["Flamer","Shuriken Catapult", "Wraithbone Fists","Shuriken Cannon","Scatter Laser"],
            ["Flamer","Flamer", "Wraithbone Fists","Shuriken Cannon","Scatter Laser"],
            ["Shuriken Catapult","Shuriken Catapult","Wraithbone Fists","Ghostglaive","Shuriken Cannon","Scatter Laser"],
            ["Flamer","Shuriken Catapult","Wraithbone Fists","Ghostglaive","Shuriken Cannon","Scatter Laser"],
            ["Flamer","Flamer","Wraithbone Fists","Ghostglaive","Shuriken Cannon","Scatter Laser"],

            ["Shuriken Catapult","Shuriken Catapult", "Wraithbone Fists","Aeldari Missile Launcher","Starcannon"],
            ["Flamer","Shuriken Catapult", "Wraithbone Fists","Aeldari Missile Launcher","Starcannon"],
            ["Flamer","Flamer", "Wraithbone Fists","Aeldari Missile Launcher","Starcannon"],
            ["Shuriken Catapult","Shuriken Catapult","Wraithbone Fists","Ghostglaive","Aeldari Missile Launcher","Starcannon"],
            ["Flamer","Shuriken Catapult","Wraithbone Fists","Ghostglaive","Aeldari Missile Launcher","Starcannon"],
            ["Flamer","Flamer","Wraithbone Fists","Ghostglaive","Aeldari Missile Launcher","Starcannon"],
            ["Shuriken Catapult","Shuriken Catapult", "Wraithbone Fists","Bright Lance","Starcannon"],
            ["Flamer","Shuriken Catapult", "Wraithbone Fists","Bright Lance","Starcannon"],
            ["Flamer","Flamer", "Wraithbone Fists","Bright Lance","Starcannon"],
            ["Shuriken Catapult","Shuriken Catapult","Wraithbone Fists","Ghostglaive","Bright Lance","Starcannon"],
            ["Flamer","Shuriken Catapult","Wraithbone Fists","Ghostglaive","Bright Lance","Starcannon"],
            ["Flamer","Flamer","Wraithbone Fists","Ghostglaive","Bright Lance","Starcannon"],
            ["Shuriken Catapult","Shuriken Catapult", "Wraithbone Fists","Scatter Laser","Starcannon"],
            ["Flamer","Shuriken Catapult", "Wraithbone Fists","Scatter Laser","Starcannon"],
            ["Flamer","Flamer", "Wraithbone Fists","Scatter Laser","Starcannon"],
            ["Shuriken Catapult","Shuriken Catapult","Wraithbone Fists","Ghostglaive","Scatter Laser","Starcannon"],
            ["Flamer","Shuriken Catapult","Wraithbone Fists","Ghostglaive","Scatter Laser","Starcannon"],
            ["Flamer","Flamer","Wraithbone Fists","Ghostglaive","Scatter Laser","Starcannon"],
            ["Shuriken Catapult","Shuriken Catapult", "Wraithbone Fists","Starcannon","Starcannon"],
            ["Flamer","Shuriken Catapult", "Wraithbone Fists","Starcannon","Starcannon"],
            ["Flamer","Flamer", "Wraithbone Fists","Starcannon","Starcannon"],
            ["Shuriken Catapult","Shuriken Catapult","Wraithbone Fists","Ghostglaive","Starcannon","Starcannon"],
            ["Flamer","Shuriken Catapult","Wraithbone Fists","Ghostglaive","Starcannon","Starcannon"],
            ["Flamer","Flamer","Wraithbone Fists","Ghostglaive","Starcannon","Starcannon"],
            ["Shuriken Catapult","Shuriken Catapult", "Wraithbone Fists","Shuriken Cannon","Starcannon"],
            ["Flamer","Shuriken Catapult", "Wraithbone Fists","Shuriken Cannon","Starcannon"],
            ["Flamer","Flamer", "Wraithbone Fists","Shuriken Cannon","Starcannon"],
            ["Shuriken Catapult","Shuriken Catapult","Wraithbone Fists","Ghostglaive","Shuriken Cannon","Starcannon"],
            ["Flamer","Shuriken Catapult","Wraithbone Fists","Ghostglaive","Shuriken Cannon","Starcannon"],
            ["Flamer","Flamer","Wraithbone Fists","Ghostglaive","Shuriken Cannon","Starcannon"],

            ["Shuriken Catapult","Shuriken Catapult", "Wraithbone Fists","Aeldari Missile Launcher","Shuriken Cannon"],
            ["Flamer","Shuriken Catapult", "Wraithbone Fists","Aeldari Missile Launcher","Shuriken Cannon"],
            ["Flamer","Flamer", "Wraithbone Fists","Aeldari Missile Launcher","Shuriken Cannon"],
            ["Shuriken Catapult","Shuriken Catapult","Wraithbone Fists","Ghostglaive","Aeldari Missile Launcher","Shuriken Cannon"],
            ["Flamer","Shuriken Catapult","Wraithbone Fists","Ghostglaive","Aeldari Missile Launcher","Shuriken Cannon"],
            ["Flamer","Flamer","Wraithbone Fists","Ghostglaive","Aeldari Missile Launcher","Shuriken Cannon"],
            ["Shuriken Catapult","Shuriken Catapult", "Wraithbone Fists","Bright Lance","Shuriken Cannon"],
            ["Flamer","Shuriken Catapult", "Wraithbone Fists","Bright Lance","Shuriken Cannon"],
            ["Flamer","Flamer", "Wraithbone Fists","Bright Lance","Shuriken Cannon"],
            ["Shuriken Catapult","Shuriken Catapult","Wraithbone Fists","Ghostglaive","Bright Lance","Shuriken Cannon"],
            ["Flamer","Shuriken Catapult","Wraithbone Fists","Ghostglaive","Bright Lance","Shuriken Cannon"],
            ["Flamer","Flamer","Wraithbone Fists","Ghostglaive","Bright Lance","Shuriken Cannon"],
            ["Shuriken Catapult","Shuriken Catapult", "Wraithbone Fists","Scatter Laser","Shuriken Cannon"],
            ["Flamer","Shuriken Catapult", "Wraithbone Fists","Scatter Laser","Shuriken Cannon"],
            ["Flamer","Flamer", "Wraithbone Fists","Scatter Laser","Shuriken Cannon"],
            ["Shuriken Catapult","Shuriken Catapult","Wraithbone Fists","Ghostglaive","Scatter Laser","Shuriken Cannon"],
            ["Flamer","Shuriken Catapult","Wraithbone Fists","Ghostglaive","Scatter Laser","Shuriken Cannon"],
            ["Flamer","Flamer","Wraithbone Fists","Ghostglaive","Scatter Laser","Shuriken Cannon"],
            ["Shuriken Catapult","Shuriken Catapult", "Wraithbone Fists","Starcannon","Shuriken Cannon"],
            ["Flamer","Shuriken Catapult", "Wraithbone Fists","Starcannon","Shuriken Cannon"],
            ["Flamer","Flamer", "Wraithbone Fists","Starcannon","Shuriken Cannon"],
            ["Shuriken Catapult","Shuriken Catapult","Wraithbone Fists","Ghostglaive","Starcannon","Shuriken Cannon"],
            ["Flamer","Shuriken Catapult","Wraithbone Fists","Ghostglaive","Starcannon","Shuriken Cannon"],
            ["Flamer","Flamer","Wraithbone Fists","Ghostglaive","Starcannon","Shuriken Cannon"],
            ["Shuriken Catapult","Shuriken Catapult", "Wraithbone Fists","Shuriken Cannon","Shuriken Cannon"],
            ["Flamer","Shuriken Catapult", "Wraithbone Fists","Shuriken Cannon","Shuriken Cannon"],
            ["Flamer","Flamer", "Wraithbone Fists","Shuriken Cannon","Shuriken Cannon"],
            ["Shuriken Catapult","Shuriken Catapult","Wraithbone Fists","Ghostglaive","Shuriken Cannon","Shuriken Cannon"],
            ["Flamer","Shuriken Catapult","Wraithbone Fists","Ghostglaive","Shuriken Cannon","Shuriken Cannon"],
            ["Flamer","Flamer","Wraithbone Fists","Ghostglaive","Shuriken Cannon","Shuriken Cannon"]
          ]
        },
        "Abilities": {
          "faction": ["Ancient Doom"]
        },
        "Faction Keywords": ["AELDARI", "ASURYANI", "SPIRIT HOST"],
        "Allegiance": ["[Craftworld]","ALAITOC","BIEL-TAN","IYANDEN","AIM-HANN","ULTHWE"],
        "Keywords": ["Monster", "Wraith Construct", "Wraithlord"]
      },
      "Support Weapon": {
        "Points": 30,
        "PointsIncludesWargear": false,
        "M": 6,
        "WS": "3+",
        "BS": "3+",
        "S": 3,
        "T": 5,
        "W": 5,
        "A": 2,
        "Ld": 7,
        "Sv": "4+",
        "Wargear": {
          "weapons": [
            ["Shuriken Catapult","Shadow Weaver"],
            ["Shuriken Catapult","D-Cannon"],
            ["Shuriken Catapult","Vibro Cannon"]
          ]
        },
        "Abilities": {
          "faction": ["Ancient Doom","Battle Focus"],
          "Support Weapons":"The first time this unit is setup, all Support Weapons in this unit must be placed within 6\" of each other, and with each crew within 1\" of their Support Weapon. From that point on, each Support Weapon acts as a single unit.",
          "Guardian Crew": "Each Support Weapon and its crew are treated as a single model for all rules purposes. The crew must remain within 1\" of their Support Weapon and cannot be targeted or attacked separately. The range and visibility of all attacks made by a Support Weapon and its crew are measured from the Support Weapon, not the crew."
        },
        "Faction Keywords": ["AELDARI", "ASURYANI", "WARHOST"],
        "Allegiance": ["[Craftworld]","ALAITOC","BIEL-TAN","IYANDEN","AIM-HANN","ULTHWE"],
        "Keywords": ["Vehicle", "Artillery", "Guardian", "Support Weapons"]
      },
      "Dark Reaper": {
        "Points": 5,
        "PointsIncludesWargear": false,
        "M": 6,
        "WS": "3+",
        "BS": "3+",
        "S": 3,
        "T": 3,
        "W": 1,
        "A": 1,
        "Ld": 8,
        "Sv": "3+",
        "Wargear": {
          "weapons": [
            ["Reaper Launcher"]
          ]
        },
        "Abilities": {
          "faction": ["Ancient Doom"],
          "Inescapable Accuracy": "Models in this unit always hit on a 3+ when firing a ranged weapon in the Shooting phase, regardless of any modifiers."
        },
        "Faction Keywords": ["AELDARI", "ASURYANI", "ASPECT WARRIOR"],
        "Allegiance": ["[Craftworld]","ALAITOC","BIEL-TAN","IYANDEN","AIM-HANN","ULTHWE"],
        "Keywords": ["Infantry", "Dark Reapers"]
      },
      "Dark Reaper Exarch": {
        "Points": 5,
        "PointsIncludesWargear": false,
        "M": 6,
        "WS": "3+",
        "BS": "3+",
        "S": 3,
        "T": 3,
        "W": 2,
        "A": 2,
        "Ld": 8,
        "Sv": "3+",
        "Wargear": {
          "weapons": [
            ["Reaper Launcher"],
            ["Shuriken Cannon"],
            ["Aeldari Missile Launcher"],
            ["Tempest Launcher"]
          ]
        },
        "Abilities": {
          "faction": ["Ancient Doom"],
          "Crack Shot":"You can re-roll hit rolls of 1 for a Dark Reaper Exarch's ranged weapons.",
          "Inescapable Accuracy": "Models in this unit always hit on a 3+ when firing a ranged weapon in the Shooting phase, regardless of any modifiers."
        },
        "Faction Keywords": ["AELDARI", "ASURYANI", "ASPECT WARRIOR"],
        "Allegiance": ["[Craftworld]","ALAITOC","BIEL-TAN","IYANDEN","AIM-HANN","ULTHWE"],
        "Keywords": ["Infantry", "Dark Reapers"]
      },
      "Falcon": {
        "Points": 125,
        "PointsIncludesWargear": false,
        "M": [
          {
            "Wounds": [7, 12],
            "value": 16
          },
          {
            "Wounds": [4, 6],
            "value": 12
          },
          {
            "Wounds": [1, 3],
            "value": 8
          }
        ],
        "WS": "6+",
        "BS": [
          {
            "Wounds": [7, 12],
            "value": "3+"
          },
          {
            "Wounds": [4, 6],
            "value": "4+"
          },
          {
            "Wounds": [1, 3],
            "value": "5+"
          }
        ],
        "S": 6,
        "T": 7,
        "W": 12,
        "A": [
          {
            "Wounds": [7, 12],
            "value": 3
          },
          {
            "Wounds": [4, 6],
            "value": "D3"
          },
          {
            "Wounds": [1, 3],
            "value": 1
          }
        ],
        "Ld": 8,
        "Sv": "3+",
        "Wargear": {
          "weapons": [
            ["Pulse Laser","Shuriken Cannon","Twin Shuriken Catapult"],
            ["Pulse Laser","Scatter Laser","Twin Shuriken Catapult"],
            ["Pulse Laser","Bright Lance","Twin Shuriken Catapult"],
            ["Pulse Laser","Aeldari Missile Launcher","Twin Shuriken Catapult"],
            ["Pulse Laser","Starcannon","Twin Shuriken Catapult"],
            ["Pulse Laser","Shuriken Cannon","Shuriken Cannon"],
            ["Pulse Laser","Scatter Laser","Shuriken Cannon"],
            ["Pulse Laser","Bright Lance","Shuriken Cannon"],
            ["Pulse Laser","Aeldari Missile Launcher","Shuriken Cannon"],
            ["Pulse Laser","Starcannon","Shuriken Cannon"],
            ["Pulse Laser","Shuriken Cannon","Twin Shuriken Catapult","Crystal Targeting Matrix"],
            ["Pulse Laser","Shuriken Cannon","Twin Shuriken Catapult","Spirit Stones"],
            ["Pulse Laser","Shuriken Cannon","Twin Shuriken Catapult","Star Engines"],
            ["Pulse Laser","Shuriken Cannon","Twin Shuriken Catapult","Vectored Engines"],
            ["Pulse Laser","Shuriken Cannon","Twin Shuriken Catapult","Crystal Targeting Matrix","Spirit Stones"],
            ["Pulse Laser","Shuriken Cannon","Twin Shuriken Catapult","Crystal Targeting Matrix","Star Engines"],
            ["Pulse Laser","Shuriken Cannon","Twin Shuriken Catapult","Crystal Targeting Matrix","Vectored Engines"],
            ["Pulse Laser","Shuriken Cannon","Twin Shuriken Catapult","Spirit Stones","Star Engines"],
            ["Pulse Laser","Shuriken Cannon","Twin Shuriken Catapult","Spirit Stones","Vectored Engines"],
            ["Pulse Laser","Shuriken Cannon","Twin Shuriken Catapult","Star Engines","Vectored Engines"],
            ["Pulse Laser","Shuriken Cannon","Twin Shuriken Catapult","Crystal Targeting Matrix","Spirit Stones","Star Engines"],
            ["Pulse Laser","Shuriken Cannon","Twin Shuriken Catapult","Crystal Targeting Matrix","Spirit Stones","Vectored Engines"],
            ["Pulse Laser","Shuriken Cannon","Twin Shuriken Catapult","Crystal Targeting Matrix","Star Engines","Vectored Engines"],            
            ["Pulse Laser","Shuriken Cannon","Twin Shuriken Catapult","Spirit Stones","Star Engines","Vectored Engines"],
            ["Pulse Laser","Scatter Laser","Twin Shuriken Catapult","Crystal Targeting Matrix"],
            ["Pulse Laser","Scatter Laser","Twin Shuriken Catapult","Spirit Stones"],
            ["Pulse Laser","Scatter Laser","Twin Shuriken Catapult","Star Engines"],
            ["Pulse Laser","Scatter Laser","Twin Shuriken Catapult","Vectored Engines"],
            ["Pulse Laser","Scatter Laser","Twin Shuriken Catapult","Crystal Targeting Matrix","Spirit Stones"],
            ["Pulse Laser","Scatter Laser","Twin Shuriken Catapult","Crystal Targeting Matrix","Star Engines"],
            ["Pulse Laser","Scatter Laser","Twin Shuriken Catapult","Crystal Targeting Matrix","Vectored Engines"],
            ["Pulse Laser","Scatter Laser","Twin Shuriken Catapult","Spirit Stones","Star Engines"],
            ["Pulse Laser","Scatter Laser","Twin Shuriken Catapult","Spirit Stones","Vectored Engines"],
            ["Pulse Laser","Scatter Laser","Twin Shuriken Catapult","Star Engines","Vectored Engines"],
            ["Pulse Laser","Scatter Laser","Twin Shuriken Catapult","Crystal Targeting Matrix","Spirit Stones","Star Engines"],
            ["Pulse Laser","Scatter Laser","Twin Shuriken Catapult","Crystal Targeting Matrix","Spirit Stones","Vectored Engines"],
            ["Pulse Laser","Scatter Laser","Twin Shuriken Catapult","Crystal Targeting Matrix","Star Engines","Vectored Engines"],            
            ["Pulse Laser","Scatter Laser","Twin Shuriken Catapult","Spirit Stones","Star Engines","Vectored Engines"],
            ["Pulse Laser","Bright Lance","Twin Shuriken Catapult","Crystal Targeting Matrix"],
            ["Pulse Laser","Bright Lance","Twin Shuriken Catapult","Spirit Stones"],
            ["Pulse Laser","Bright Lance","Twin Shuriken Catapult","Star Engines"],
            ["Pulse Laser","Bright Lance","Twin Shuriken Catapult","Vectored Engines"],
            ["Pulse Laser","Bright Lance","Twin Shuriken Catapult","Crystal Targeting Matrix","Spirit Stones"],
            ["Pulse Laser","Bright Lance","Twin Shuriken Catapult","Crystal Targeting Matrix","Star Engines"],
            ["Pulse Laser","Bright Lance","Twin Shuriken Catapult","Crystal Targeting Matrix","Vectored Engines"],
            ["Pulse Laser","Bright Lance","Twin Shuriken Catapult","Spirit Stones","Star Engines"],
            ["Pulse Laser","Bright Lance","Twin Shuriken Catapult","Spirit Stones","Vectored Engines"],
            ["Pulse Laser","Bright Lance","Twin Shuriken Catapult","Star Engines","Vectored Engines"],
            ["Pulse Laser","Bright Lance","Twin Shuriken Catapult","Crystal Targeting Matrix","Spirit Stones","Star Engines"],
            ["Pulse Laser","Bright Lance","Twin Shuriken Catapult","Crystal Targeting Matrix","Spirit Stones","Vectored Engines"],
            ["Pulse Laser","Bright Lance","Twin Shuriken Catapult","Crystal Targeting Matrix","Star Engines","Vectored Engines"],            
            ["Pulse Laser","Bright Lance","Twin Shuriken Catapult","Spirit Stones","Star Engines","Vectored Engines"],
            ["Pulse Laser","Aeldari Missile Launcher","Twin Shuriken Catapult","Crystal Targeting Matrix"],
            ["Pulse Laser","Aeldari Missile Launcher","Twin Shuriken Catapult","Spirit Stones"],
            ["Pulse Laser","Aeldari Missile Launcher","Twin Shuriken Catapult","Star Engines"],
            ["Pulse Laser","Aeldari Missile Launcher","Twin Shuriken Catapult","Vectored Engines"],
            ["Pulse Laser","Aeldari Missile Launcher","Twin Shuriken Catapult","Crystal Targeting Matrix","Spirit Stones"],
            ["Pulse Laser","Aeldari Missile Launcher","Twin Shuriken Catapult","Crystal Targeting Matrix","Star Engines"],
            ["Pulse Laser","Aeldari Missile Launcher","Twin Shuriken Catapult","Crystal Targeting Matrix","Vectored Engines"],
            ["Pulse Laser","Aeldari Missile Launcher","Twin Shuriken Catapult","Spirit Stones","Star Engines"],
            ["Pulse Laser","Aeldari Missile Launcher","Twin Shuriken Catapult","Spirit Stones","Vectored Engines"],
            ["Pulse Laser","Aeldari Missile Launcher","Twin Shuriken Catapult","Star Engines","Vectored Engines"],
            ["Pulse Laser","Aeldari Missile Launcher","Twin Shuriken Catapult","Crystal Targeting Matrix","Spirit Stones","Star Engines"],
            ["Pulse Laser","Aeldari Missile Launcher","Twin Shuriken Catapult","Crystal Targeting Matrix","Spirit Stones","Vectored Engines"],
            ["Pulse Laser","Aeldari Missile Launcher","Twin Shuriken Catapult","Crystal Targeting Matrix","Star Engines","Vectored Engines"],            
            ["Pulse Laser","Aeldari Missile Launcher","Twin Shuriken Catapult","Spirit Stones","Star Engines","Vectored Engines"],
            ["Pulse Laser","Starcannon","Twin Shuriken Catapult","Crystal Targeting Matrix"],
            ["Pulse Laser","Starcannon","Twin Shuriken Catapult","Spirit Stones"],
            ["Pulse Laser","Starcannon","Twin Shuriken Catapult","Star Engines"],
            ["Pulse Laser","Starcannon","Twin Shuriken Catapult","Vectored Engines"],
            ["Pulse Laser","Starcannon","Twin Shuriken Catapult","Crystal Targeting Matrix","Spirit Stones"],
            ["Pulse Laser","Starcannon","Twin Shuriken Catapult","Crystal Targeting Matrix","Star Engines"],
            ["Pulse Laser","Starcannon","Twin Shuriken Catapult","Crystal Targeting Matrix","Vectored Engines"],
            ["Pulse Laser","Starcannon","Twin Shuriken Catapult","Spirit Stones","Star Engines"],
            ["Pulse Laser","Starcannon","Twin Shuriken Catapult","Spirit Stones","Vectored Engines"],
            ["Pulse Laser","Starcannon","Twin Shuriken Catapult","Star Engines","Vectored Engines"],
            ["Pulse Laser","Starcannon","Twin Shuriken Catapult","Crystal Targeting Matrix","Spirit Stones","Star Engines"],
            ["Pulse Laser","Starcannon","Twin Shuriken Catapult","Crystal Targeting Matrix","Spirit Stones","Vectored Engines"],
            ["Pulse Laser","Starcannon","Twin Shuriken Catapult","Crystal Targeting Matrix","Star Engines","Vectored Engines"],            
            ["Pulse Laser","Starcannon","Twin Shuriken Catapult","Spirit Stones","Star Engines","Vectored Engines"],
            ["Pulse Laser","Shuriken Cannon","Shuriken Cannon","Crystal Targeting Matrix"],
            ["Pulse Laser","Shuriken Cannon","Shuriken Cannon","Spirit Stones"],
            ["Pulse Laser","Shuriken Cannon","Shuriken Cannon","Star Engines"],
            ["Pulse Laser","Shuriken Cannon","Shuriken Cannon","Vectored Engines"],
            ["Pulse Laser","Shuriken Cannon","Shuriken Cannon","Crystal Targeting Matrix","Spirit Stones"],
            ["Pulse Laser","Shuriken Cannon","Shuriken Cannon","Crystal Targeting Matrix","Star Engines"],
            ["Pulse Laser","Shuriken Cannon","Shuriken Cannon","Crystal Targeting Matrix","Vectored Engines"],
            ["Pulse Laser","Shuriken Cannon","Shuriken Cannon","Spirit Stones","Star Engines"],
            ["Pulse Laser","Shuriken Cannon","Shuriken Cannon","Spirit Stones","Vectored Engines"],
            ["Pulse Laser","Shuriken Cannon","Shuriken Cannon","Star Engines","Vectored Engines"],
            ["Pulse Laser","Shuriken Cannon","Shuriken Cannon","Crystal Targeting Matrix","Spirit Stones","Star Engines"],
            ["Pulse Laser","Shuriken Cannon","Shuriken Cannon","Crystal Targeting Matrix","Spirit Stones","Vectored Engines"],
            ["Pulse Laser","Shuriken Cannon","Shuriken Cannon","Crystal Targeting Matrix","Star Engines","Vectored Engines"],            
            ["Pulse Laser","Shuriken Cannon","Shuriken Cannon","Spirit Stones","Star Engines","Vectored Engines"],
            ["Pulse Laser","Scatter Laser","Shuriken Cannon","Crystal Targeting Matrix"],
            ["Pulse Laser","Scatter Laser","Shuriken Cannon","Spirit Stones"],
            ["Pulse Laser","Scatter Laser","Shuriken Cannon","Star Engines"],
            ["Pulse Laser","Scatter Laser","Shuriken Cannon","Vectored Engines"],
            ["Pulse Laser","Scatter Laser","Shuriken Cannon","Crystal Targeting Matrix","Spirit Stones"],
            ["Pulse Laser","Scatter Laser","Shuriken Cannon","Crystal Targeting Matrix","Star Engines"],
            ["Pulse Laser","Scatter Laser","Shuriken Cannon","Crystal Targeting Matrix","Vectored Engines"],
            ["Pulse Laser","Scatter Laser","Shuriken Cannon","Spirit Stones","Star Engines"],
            ["Pulse Laser","Scatter Laser","Shuriken Cannon","Spirit Stones","Vectored Engines"],
            ["Pulse Laser","Scatter Laser","Shuriken Cannon","Star Engines","Vectored Engines"],
            ["Pulse Laser","Scatter Laser","Shuriken Cannon","Crystal Targeting Matrix","Spirit Stones","Star Engines"],
            ["Pulse Laser","Scatter Laser","Shuriken Cannon","Crystal Targeting Matrix","Spirit Stones","Vectored Engines"],
            ["Pulse Laser","Scatter Laser","Shuriken Cannon","Crystal Targeting Matrix","Star Engines","Vectored Engines"],            
            ["Pulse Laser","Scatter Laser","Shuriken Cannon","Spirit Stones","Star Engines","Vectored Engines"],
            ["Pulse Laser","Bright Lance","Shuriken Cannon","Crystal Targeting Matrix"],
            ["Pulse Laser","Bright Lance","Shuriken Cannon","Spirit Stones"],
            ["Pulse Laser","Bright Lance","Shuriken Cannon","Star Engines"],
            ["Pulse Laser","Bright Lance","Shuriken Cannon","Vectored Engines"],
            ["Pulse Laser","Bright Lance","Shuriken Cannon","Crystal Targeting Matrix","Spirit Stones"],
            ["Pulse Laser","Bright Lance","Shuriken Cannon","Crystal Targeting Matrix","Star Engines"],
            ["Pulse Laser","Bright Lance","Shuriken Cannon","Crystal Targeting Matrix","Vectored Engines"],
            ["Pulse Laser","Bright Lance","Shuriken Cannon","Spirit Stones","Star Engines"],
            ["Pulse Laser","Bright Lance","Shuriken Cannon","Spirit Stones","Vectored Engines"],
            ["Pulse Laser","Bright Lance","Shuriken Cannon","Star Engines","Vectored Engines"],
            ["Pulse Laser","Bright Lance","Shuriken Cannon","Crystal Targeting Matrix","Spirit Stones","Star Engines"],
            ["Pulse Laser","Bright Lance","Shuriken Cannon","Crystal Targeting Matrix","Spirit Stones","Vectored Engines"],
            ["Pulse Laser","Bright Lance","Shuriken Cannon","Crystal Targeting Matrix","Star Engines","Vectored Engines"],            
            ["Pulse Laser","Bright Lance","Shuriken Cannon","Spirit Stones","Star Engines","Vectored Engines"],
            ["Pulse Laser","Aeldari Missile Launcher","Shuriken Cannon","Crystal Targeting Matrix"],
            ["Pulse Laser","Aeldari Missile Launcher","Shuriken Cannon","Spirit Stones"],
            ["Pulse Laser","Aeldari Missile Launcher","Shuriken Cannon","Star Engines"],
            ["Pulse Laser","Aeldari Missile Launcher","Shuriken Cannon","Vectored Engines"],
            ["Pulse Laser","Aeldari Missile Launcher","Shuriken Cannon","Crystal Targeting Matrix","Spirit Stones"],
            ["Pulse Laser","Aeldari Missile Launcher","Shuriken Cannon","Crystal Targeting Matrix","Star Engines"],
            ["Pulse Laser","Aeldari Missile Launcher","Shuriken Cannon","Crystal Targeting Matrix","Vectored Engines"],
            ["Pulse Laser","Aeldari Missile Launcher","Shuriken Cannon","Spirit Stones","Star Engines"],
            ["Pulse Laser","Aeldari Missile Launcher","Shuriken Cannon","Spirit Stones","Vectored Engines"],
            ["Pulse Laser","Aeldari Missile Launcher","Shuriken Cannon","Star Engines","Vectored Engines"],
            ["Pulse Laser","Aeldari Missile Launcher","Shuriken Cannon","Crystal Targeting Matrix","Spirit Stones","Star Engines"],
            ["Pulse Laser","Aeldari Missile Launcher","Shuriken Cannon","Crystal Targeting Matrix","Spirit Stones","Vectored Engines"],
            ["Pulse Laser","Aeldari Missile Launcher","Shuriken Cannon","Crystal Targeting Matrix","Star Engines","Vectored Engines"],            
            ["Pulse Laser","Aeldari Missile Launcher","Shuriken Cannon","Spirit Stones","Star Engines","Vectored Engines"],
            ["Pulse Laser","Starcannon","Shuriken Cannon","Crystal Targeting Matrix"],
            ["Pulse Laser","Starcannon","Shuriken Cannon","Spirit Stones"],
            ["Pulse Laser","Starcannon","Shuriken Cannon","Star Engines"],
            ["Pulse Laser","Starcannon","Shuriken Cannon","Vectored Engines"],
            ["Pulse Laser","Starcannon","Shuriken Cannon","Crystal Targeting Matrix","Spirit Stones"],
            ["Pulse Laser","Starcannon","Shuriken Cannon","Crystal Targeting Matrix","Star Engines"],
            ["Pulse Laser","Starcannon","Shuriken Cannon","Crystal Targeting Matrix","Vectored Engines"],
            ["Pulse Laser","Starcannon","Shuriken Cannon","Spirit Stones","Star Engines"],
            ["Pulse Laser","Starcannon","Shuriken Cannon","Spirit Stones","Vectored Engines"],
            ["Pulse Laser","Starcannon","Shuriken Cannon","Star Engines","Vectored Engines"],
            ["Pulse Laser","Starcannon","Shuriken Cannon","Crystal Targeting Matrix","Spirit Stones","Star Engines"],
            ["Pulse Laser","Starcannon","Shuriken Cannon","Crystal Targeting Matrix","Spirit Stones","Vectored Engines"],
            ["Pulse Laser","Starcannon","Shuriken Cannon","Crystal Targeting Matrix","Star Engines","Vectored Engines"],            
            ["Pulse Laser","Starcannon","Shuriken Cannon","Spirit Stones","Star Engines","Vectored Engines"]
          ]
        },
        "Abilities": {
          "Hover Tank":"Distance and ranges are always measured to and from this model's hull, even though it has a base.",
          "Explodes": "If a model in this unit is reduced to 0 wounds, roll a D6 before removing it from the battlefield. On a 6 it explodes, and each unit within 6\" suffers D3 mortal wounds.",
          "Transport": "This model can transport 6 PHOENIX LORD or [Craftworld] INFANTRY models. Each WRAITHGUARD or WRAITHBLADE model takes the space of two other models. It cannot transport JUMP PACK models."
        },
        "Faction Keywords": ["AELDARI", "ASURYANI", "WARHOST"],
        "Allegiance": ["[Craftworld]","ALAITOC","BIEL-TAN","IYANDEN","AIM-HANN","ULTHWE"],
        "Keywords": ["Vehicle", "Transport", "Fly", "Falcon"]
      },
      "Night Spinner": {
        "Points": 135,
        "PointsIncludesWargear": false,
        "M": [
          {
            "Wounds": [7, 12],
            "value": 16
          },
          {
            "Wounds": [4, 6],
            "value": 12
          },
          {
            "Wounds": [1, 3],
            "value": 8
          }
        ],
        "WS": "6+",
        "BS": [
          {
            "Wounds": [7, 12],
            "value": "3+"
          },
          {
            "Wounds": [4, 6],
            "value": "4+"
          },
          {
            "Wounds": [1, 3],
            "value": "5+"
          }
        ],
        "S": 6,
        "T": 7,
        "W": 12,
        "A": [
          {
            "Wounds": [7, 12],
            "value": 3
          },
          {
            "Wounds": [4, 6],
            "value": "D3"
          },
          {
            "Wounds": [1, 3],
            "value": 1
          }
        ],
        "Ld": 8,
        "Sv": "3+",
        "Wargear": {
          "weapons": [
            ["Doomweaver","Twin Shuriken Catapult"],
            ["Doomweaver","Shuriken Cannon"],
            ["Doomweaver","Twin Shuriken Catapult","Crystal Targeting Matrix"],
            ["Doomweaver","Twin Shuriken Catapult","Spirit Stones"],
            ["Doomweaver","Twin Shuriken Catapult","Star Engines"],
            ["Doomweaver","Twin Shuriken Catapult","Vectored Engines"],
            ["Doomweaver","Twin Shuriken Catapult","Crystal Targeting Matrix","Spirit Stones"],
            ["Doomweaver","Twin Shuriken Catapult","Crystal Targeting Matrix","Star Engines"],
            ["Doomweaver","Twin Shuriken Catapult","Crystal Targeting Matrix","Vectored Engines"],
            ["Doomweaver","Twin Shuriken Catapult","Spirit Stones","Star Engines"],
            ["Doomweaver","Twin Shuriken Catapult","Spirit Stones","Vectored Engines"],
            ["Doomweaver","Twin Shuriken Catapult","Star Engines","Vectored Engines"],
            ["Doomweaver","Twin Shuriken Catapult","Crystal Targeting Matrix","Spirit Stones","Star Engines"],
            ["Doomweaver","Twin Shuriken Catapult","Crystal Targeting Matrix","Spirit Stones","Vectored Engines"],
            ["Doomweaver","Twin Shuriken Catapult","Crystal Targeting Matrix","Star Engines","Vectored Engines"],            
            ["Doomweaver","Twin Shuriken Catapult","Spirit Stones","Star Engines","Vectored Engines"],
            ["Doomweaver","Shuriken Cannon","Crystal Targeting Matrix"],
            ["Doomweaver","Shuriken Cannon","Spirit Stones"],
            ["Doomweaver","Shuriken Cannon","Star Engines"],
            ["Doomweaver","Shuriken Cannon","Vectored Engines"],
            ["Doomweaver","Shuriken Cannon","Crystal Targeting Matrix","Spirit Stones"],
            ["Doomweaver","Shuriken Cannon","Crystal Targeting Matrix","Star Engines"],
            ["Doomweaver","Shuriken Cannon","Crystal Targeting Matrix","Vectored Engines"],
            ["Doomweaver","Shuriken Cannon","Spirit Stones","Star Engines"],
            ["Doomweaver","Shuriken Cannon","Spirit Stones","Vectored Engines"],
            ["Doomweaver","Shuriken Cannon","Star Engines","Vectored Engines"],
            ["Doomweaver","Shuriken Cannon","Crystal Targeting Matrix","Spirit Stones","Star Engines"],
            ["Doomweaver","Shuriken Cannon","Crystal Targeting Matrix","Spirit Stones","Vectored Engines"],
            ["Doomweaver","Shuriken Cannon","Crystal Targeting Matrix","Star Engines","Vectored Engines"],            
            ["Doomweaver","Shuriken Cannon","Spirit Stones","Star Engines","Vectored Engines"]
          ]
        },
        "Abilities": {
          "Hover Tank":"Distance and ranges are always measured to and from this model's hull, even though it has a base.",
          "Explodes": "If a model in this unit is reduced to 0 wounds, roll a D6 before removing it from the battlefield. On a 6 it explodes, and each unit within 6\" suffers D3 mortal wounds."
        },
        "Faction Keywords": ["AELDARI", "ASURYANI", "WARHOST"],
        "Allegiance": ["[Craftworld]","ALAITOC","BIEL-TAN","IYANDEN","AIM-HANN","ULTHWE"],
        "Keywords": ["Vehicle", "Fly", "Night Spinner"]
      },
      "Fire Prism": {
        "Points": 155,
        "PointsIncludesWargear": false,
        "M": [
          {
            "Wounds": [7, 12],
            "value": 16
          },
          {
            "Wounds": [4, 6],
            "value": 12
          },
          {
            "Wounds": [1, 3],
            "value": 8
          }
        ],
        "WS": "6+",
        "BS": [
          {
            "Wounds": [7, 12],
            "value": "3+"
          },
          {
            "Wounds": [4, 6],
            "value": "4+"
          },
          {
            "Wounds": [1, 3],
            "value": "5+"
          }
        ],
        "S": 6,
        "T": 7,
        "W": 12,
        "A": [
          {
            "Wounds": [7, 12],
            "value": 3
          },
          {
            "Wounds": [4, 6],
            "value": "D3"
          },
          {
            "Wounds": [1, 3],
            "value": 1
          }
        ],
        "Ld": 8,
        "Sv": "3+",
        "Wargear": {
          "weapons": [
            ["Prism Cannon","Twin Shuriken Catapult"],
            ["Prism Cannon","Shuriken Cannon"],
            ["Prism Cannon","Twin Shuriken Catapult","Crystal Targeting Matrix"],
            ["Prism Cannon","Twin Shuriken Catapult","Spirit Stones"],
            ["Prism Cannon","Twin Shuriken Catapult","Star Engines"],
            ["Prism Cannon","Twin Shuriken Catapult","Vectored Engines"],
            ["Prism Cannon","Twin Shuriken Catapult","Crystal Targeting Matrix","Spirit Stones"],
            ["Prism Cannon","Twin Shuriken Catapult","Crystal Targeting Matrix","Star Engines"],
            ["Prism Cannon","Twin Shuriken Catapult","Crystal Targeting Matrix","Vectored Engines"],
            ["Prism Cannon","Twin Shuriken Catapult","Spirit Stones","Star Engines"],
            ["Prism Cannon","Twin Shuriken Catapult","Spirit Stones","Vectored Engines"],
            ["Prism Cannon","Twin Shuriken Catapult","Star Engines","Vectored Engines"],
            ["Prism Cannon","Twin Shuriken Catapult","Crystal Targeting Matrix","Spirit Stones","Star Engines"],
            ["Prism Cannon","Twin Shuriken Catapult","Crystal Targeting Matrix","Spirit Stones","Vectored Engines"],
            ["Prism Cannon","Twin Shuriken Catapult","Crystal Targeting Matrix","Star Engines","Vectored Engines"],            
            ["Prism Cannon","Twin Shuriken Catapult","Spirit Stones","Star Engines","Vectored Engines"],
            ["Prism Cannon","Shuriken Cannon","Crystal Targeting Matrix"],
            ["Prism Cannon","Shuriken Cannon","Spirit Stones"],
            ["Prism Cannon","Shuriken Cannon","Star Engines"],
            ["Prism Cannon","Shuriken Cannon","Vectored Engines"],
            ["Prism Cannon","Shuriken Cannon","Crystal Targeting Matrix","Spirit Stones"],
            ["Prism Cannon","Shuriken Cannon","Crystal Targeting Matrix","Star Engines"],
            ["Prism Cannon","Shuriken Cannon","Crystal Targeting Matrix","Vectored Engines"],
            ["Prism Cannon","Shuriken Cannon","Spirit Stones","Star Engines"],
            ["Prism Cannon","Shuriken Cannon","Spirit Stones","Vectored Engines"],
            ["Prism Cannon","Shuriken Cannon","Star Engines","Vectored Engines"],
            ["Prism Cannon","Shuriken Cannon","Crystal Targeting Matrix","Spirit Stones","Star Engines"],
            ["Prism Cannon","Shuriken Cannon","Crystal Targeting Matrix","Spirit Stones","Vectored Engines"],
            ["Prism Cannon","Shuriken Cannon","Crystal Targeting Matrix","Star Engines","Vectored Engines"],            
            ["Prism Cannon","Shuriken Cannon","Spirit Stones","Star Engines","Vectored Engines"]
          ]
        },
        "Abilities": {
          "Hover Tank":"Distance and ranges are always measured to and from this model's hull, even though it has a base.",
          "Explodes": "If a model in this unit is reduced to 0 wounds, roll a D6 before removing it from the battlefield. On a 6 it explodes, and each unit within 6\" suffers D3 mortal wounds.",
          "Pulsed Laser Discharge": "If this model moves under half speed in its Movement phase (i.e. it moves a distance in inches less than half of its current Move characteristic) it can shoot its prism cannon twice in its next Shooting phase (the prism cannon must use the same profile and target the same unit both times it is fired)."
        },
        "Faction Keywords": ["AELDARI", "ASURYANI", "WARHOST"],
        "Allegiance": ["[Craftworld]","ALAITOC","BIEL-TAN","IYANDEN","AIM-HANN","ULTHWE"],
        "Keywords": ["Vehicle", "Fly", "Fire Prism"]
      },
      "Wave Serpent": {
        "Points": 125,
        "PointsIncludesWargear": false,
        "M": [
          {
            "Wounds": [7, 13],
            "value": 16
          },
          {
            "Wounds": [4, 6],
            "value": 12
          },
          {
            "Wounds": [1, 3],
            "value": 8
          }
        ],
        "WS": "6+",
        "BS": [
          {
            "Wounds": [7, 13],
            "value": "3+"
          },
          {
            "Wounds": [4, 6],
            "value": "4+"
          },
          {
            "Wounds": [1, 3],
            "value": "5+"
          }
        ],
        "S": 6,
        "T": 7,
        "W": 13,
        "A": [
          {
            "Wounds": [7, 13],
            "value": 3
          },
          {
            "Wounds": [4, 6],
            "value": "D3"
          },
          {
            "Wounds": [1, 3],
            "value": 1
          }
        ],
        "Ld": 8,
        "Sv": "3+",
        "Wargear": {
          "weapons": [
            ["Twin Shuriken Cannon","Twin Shuriken Catapult"],
            ["Twin Aeldari Missile Launcher","Twin Shuriken Catapult"],
            ["Twin Scatter Laser","Twin Shuriken Catapult"],
            ["Twin Bright Lance","Twin Shuriken Catapult"],
            ["Twin Starcannon","Twin Shuriken Catapult"],
            ["Twin Shuriken Cannon","Shuriken Cannon"],
            ["Twin Aeldari Missile Launcher","Shuriken Cannon"],
            ["Twin Scatter Laser","Shuriken Cannon"],
            ["Twin Bright Lance","Shuriken Cannon"],
            ["Twin Starcannon","Shuriken Cannon"],
            ["Twin Shuriken Cannon","Twin Shuriken Catapult","Crystal Targeting Matrix"],
            ["Twin Shuriken Cannon","Twin Shuriken Catapult","Spirit Stones"],
            ["Twin Shuriken Cannon","Twin Shuriken Catapult","Star Engines"],
            ["Twin Shuriken Cannon","Twin Shuriken Catapult","Vectored Engines"],
            ["Twin Shuriken Cannon","Twin Shuriken Catapult","Crystal Targeting Matrix","Spirit Stones"],
            ["Twin Shuriken Cannon","Twin Shuriken Catapult","Crystal Targeting Matrix","Star Engines"],
            ["Twin Shuriken Cannon","Twin Shuriken Catapult","Crystal Targeting Matrix","Vectored Engines"],
            ["Twin Shuriken Cannon","Twin Shuriken Catapult","Spirit Stones","Star Engines"],
            ["Twin Shuriken Cannon","Twin Shuriken Catapult","Spirit Stones","Vectored Engines"],
            ["Twin Shuriken Cannon","Twin Shuriken Catapult","Star Engines","Vectored Engines"],
            ["Twin Shuriken Cannon","Twin Shuriken Catapult","Crystal Targeting Matrix","Spirit Stones","Star Engines"],
            ["Twin Shuriken Cannon","Twin Shuriken Catapult","Crystal Targeting Matrix","Spirit Stones","Vectored Engines"],
            ["Twin Shuriken Cannon","Twin Shuriken Catapult","Crystal Targeting Matrix","Star Engines","Vectored Engines"],            
            ["Twin Shuriken Cannon","Twin Shuriken Catapult","Spirit Stones","Star Engines","Vectored Engines"],
            ["Twin Aeldari Missile Launcher","Twin Shuriken Catapult","Crystal Targeting Matrix"],
            ["Twin Aeldari Missile Launcher","Twin Shuriken Catapult","Spirit Stones"],
            ["Twin Aeldari Missile Launcher","Twin Shuriken Catapult","Star Engines"],
            ["Twin Aeldari Missile Launcher","Twin Shuriken Catapult","Vectored Engines"],
            ["Twin Aeldari Missile Launcher","Twin Shuriken Catapult","Crystal Targeting Matrix","Spirit Stones"],
            ["Twin Aeldari Missile Launcher","Twin Shuriken Catapult","Crystal Targeting Matrix","Star Engines"],
            ["Twin Aeldari Missile Launcher","Twin Shuriken Catapult","Crystal Targeting Matrix","Vectored Engines"],
            ["Twin Aeldari Missile Launcher","Twin Shuriken Catapult","Spirit Stones","Star Engines"],
            ["Twin Aeldari Missile Launcher","Twin Shuriken Catapult","Spirit Stones","Vectored Engines"],
            ["Twin Aeldari Missile Launcher","Twin Shuriken Catapult","Star Engines","Vectored Engines"],
            ["Twin Aeldari Missile Launcher","Twin Shuriken Catapult","Crystal Targeting Matrix","Spirit Stones","Star Engines"],
            ["Twin Aeldari Missile Launcher","Twin Shuriken Catapult","Crystal Targeting Matrix","Spirit Stones","Vectored Engines"],
            ["Twin Aeldari Missile Launcher","Twin Shuriken Catapult","Crystal Targeting Matrix","Star Engines","Vectored Engines"],            
            ["Twin Aeldari Missile Launcher","Twin Shuriken Catapult","Spirit Stones","Star Engines","Vectored Engines"],
            ["Twin Scatter Laser","Twin Shuriken Catapult","Crystal Targeting Matrix"],
            ["Twin Scatter Laser","Twin Shuriken Catapult","Spirit Stones"],
            ["Twin Scatter Laser","Twin Shuriken Catapult","Star Engines"],
            ["Twin Scatter Laser","Twin Shuriken Catapult","Vectored Engines"],
            ["Twin Scatter Laser","Twin Shuriken Catapult","Crystal Targeting Matrix","Spirit Stones"],
            ["Twin Scatter Laser","Twin Shuriken Catapult","Crystal Targeting Matrix","Star Engines"],
            ["Twin Scatter Laser","Twin Shuriken Catapult","Crystal Targeting Matrix","Vectored Engines"],
            ["Twin Scatter Laser","Twin Shuriken Catapult","Spirit Stones","Star Engines"],
            ["Twin Scatter Laser","Twin Shuriken Catapult","Spirit Stones","Vectored Engines"],
            ["Twin Scatter Laser","Twin Shuriken Catapult","Star Engines","Vectored Engines"],
            ["Twin Scatter Laser","Twin Shuriken Catapult","Crystal Targeting Matrix","Spirit Stones","Star Engines"],
            ["Twin Scatter Laser","Twin Shuriken Catapult","Crystal Targeting Matrix","Spirit Stones","Vectored Engines"],
            ["Twin Scatter Laser","Twin Shuriken Catapult","Crystal Targeting Matrix","Star Engines","Vectored Engines"],            
            ["Twin Scatter Laser","Twin Shuriken Catapult","Spirit Stones","Star Engines","Vectored Engines"],
            ["Twin Bright Lance","Twin Shuriken Catapult","Crystal Targeting Matrix"],
            ["Twin Bright Lance","Twin Shuriken Catapult","Spirit Stones"],
            ["Twin Bright Lance","Twin Shuriken Catapult","Star Engines"],
            ["Twin Bright Lance","Twin Shuriken Catapult","Vectored Engines"],
            ["Twin Bright Lance","Twin Shuriken Catapult","Crystal Targeting Matrix","Spirit Stones"],
            ["Twin Bright Lance","Twin Shuriken Catapult","Crystal Targeting Matrix","Star Engines"],
            ["Twin Bright Lance","Twin Shuriken Catapult","Crystal Targeting Matrix","Vectored Engines"],
            ["Twin Bright Lance","Twin Shuriken Catapult","Spirit Stones","Star Engines"],
            ["Twin Bright Lance","Twin Shuriken Catapult","Spirit Stones","Vectored Engines"],
            ["Twin Bright Lance","Twin Shuriken Catapult","Star Engines","Vectored Engines"],
            ["Twin Bright Lance","Twin Shuriken Catapult","Crystal Targeting Matrix","Spirit Stones","Star Engines"],
            ["Twin Bright Lance","Twin Shuriken Catapult","Crystal Targeting Matrix","Spirit Stones","Vectored Engines"],
            ["Twin Bright Lance","Twin Shuriken Catapult","Crystal Targeting Matrix","Star Engines","Vectored Engines"],            
            ["Twin Bright Lance","Twin Shuriken Catapult","Spirit Stones","Star Engines","Vectored Engines"],
            ["Twin Shuriken Cannon","Shuriken Cannon","Crystal Targeting Matrix"],
            ["Twin Shuriken Cannon","Shuriken Cannon","Spirit Stones"],
            ["Twin Shuriken Cannon","Shuriken Cannon","Star Engines"],
            ["Twin Shuriken Cannon","Shuriken Cannon","Vectored Engines"],
            ["Twin Shuriken Cannon","Shuriken Cannon","Crystal Targeting Matrix","Spirit Stones"],
            ["Twin Shuriken Cannon","Shuriken Cannon","Crystal Targeting Matrix","Star Engines"],
            ["Twin Shuriken Cannon","Shuriken Cannon","Crystal Targeting Matrix","Vectored Engines"],
            ["Twin Shuriken Cannon","Shuriken Cannon","Spirit Stones","Star Engines"],
            ["Twin Shuriken Cannon","Shuriken Cannon","Spirit Stones","Vectored Engines"],
            ["Twin Shuriken Cannon","Shuriken Cannon","Star Engines","Vectored Engines"],
            ["Twin Shuriken Cannon","Shuriken Cannon","Crystal Targeting Matrix","Spirit Stones","Star Engines"],
            ["Twin Shuriken Cannon","Shuriken Cannon","Crystal Targeting Matrix","Spirit Stones","Vectored Engines"],
            ["Twin Shuriken Cannon","Shuriken Cannon","Crystal Targeting Matrix","Star Engines","Vectored Engines"],            
            ["Twin Shuriken Cannon","Shuriken Cannon","Spirit Stones","Star Engines","Vectored Engines"],
            ["Twin Aeldari Missile Launcher","Shuriken Cannon","Crystal Targeting Matrix"],
            ["Twin Aeldari Missile Launcher","Shuriken Cannon","Spirit Stones"],
            ["Twin Aeldari Missile Launcher","Shuriken Cannon","Star Engines"],
            ["Twin Aeldari Missile Launcher","Shuriken Cannon","Vectored Engines"],
            ["Twin Aeldari Missile Launcher","Shuriken Cannon","Crystal Targeting Matrix","Spirit Stones"],
            ["Twin Aeldari Missile Launcher","Shuriken Cannon","Crystal Targeting Matrix","Star Engines"],
            ["Twin Aeldari Missile Launcher","Shuriken Cannon","Crystal Targeting Matrix","Vectored Engines"],
            ["Twin Aeldari Missile Launcher","Shuriken Cannon","Spirit Stones","Star Engines"],
            ["Twin Aeldari Missile Launcher","Shuriken Cannon","Spirit Stones","Vectored Engines"],
            ["Twin Aeldari Missile Launcher","Shuriken Cannon","Star Engines","Vectored Engines"],
            ["Twin Aeldari Missile Launcher","Shuriken Cannon","Crystal Targeting Matrix","Spirit Stones","Star Engines"],
            ["Twin Aeldari Missile Launcher","Shuriken Cannon","Crystal Targeting Matrix","Spirit Stones","Vectored Engines"],
            ["Twin Aeldari Missile Launcher","Shuriken Cannon","Crystal Targeting Matrix","Star Engines","Vectored Engines"],            
            ["Twin Aeldari Missile Launcher","Shuriken Cannon","Spirit Stones","Star Engines","Vectored Engines"],
            ["Twin Scatter Laser","Shuriken Cannon","Crystal Targeting Matrix"],
            ["Twin Scatter Laser","Shuriken Cannon","Spirit Stones"],
            ["Twin Scatter Laser","Shuriken Cannon","Star Engines"],
            ["Twin Scatter Laser","Shuriken Cannon","Vectored Engines"],
            ["Twin Scatter Laser","Shuriken Cannon","Crystal Targeting Matrix","Spirit Stones"],
            ["Twin Scatter Laser","Shuriken Cannon","Crystal Targeting Matrix","Star Engines"],
            ["Twin Scatter Laser","Shuriken Cannon","Crystal Targeting Matrix","Vectored Engines"],
            ["Twin Scatter Laser","Shuriken Cannon","Spirit Stones","Star Engines"],
            ["Twin Scatter Laser","Shuriken Cannon","Spirit Stones","Vectored Engines"],
            ["Twin Scatter Laser","Shuriken Cannon","Star Engines","Vectored Engines"],
            ["Twin Scatter Laser","Shuriken Cannon","Crystal Targeting Matrix","Spirit Stones","Star Engines"],
            ["Twin Scatter Laser","Shuriken Cannon","Crystal Targeting Matrix","Spirit Stones","Vectored Engines"],
            ["Twin Scatter Laser","Shuriken Cannon","Crystal Targeting Matrix","Star Engines","Vectored Engines"],            
            ["Twin Scatter Laser","Shuriken Cannon","Spirit Stones","Star Engines","Vectored Engines"],
            ["Twin Bright Lance","Shuriken Cannon","Crystal Targeting Matrix"],
            ["Twin Bright Lance","Shuriken Cannon","Spirit Stones"],
            ["Twin Bright Lance","Shuriken Cannon","Star Engines"],
            ["Twin Bright Lance","Shuriken Cannon","Vectored Engines"],
            ["Twin Bright Lance","Shuriken Cannon","Crystal Targeting Matrix","Spirit Stones"],
            ["Twin Bright Lance","Shuriken Cannon","Crystal Targeting Matrix","Star Engines"],
            ["Twin Bright Lance","Shuriken Cannon","Crystal Targeting Matrix","Vectored Engines"],
            ["Twin Bright Lance","Shuriken Cannon","Spirit Stones","Star Engines"],
            ["Twin Bright Lance","Shuriken Cannon","Spirit Stones","Vectored Engines"],
            ["Twin Bright Lance","Shuriken Cannon","Star Engines","Vectored Engines"],
            ["Twin Bright Lance","Shuriken Cannon","Crystal Targeting Matrix","Spirit Stones","Star Engines"],
            ["Twin Bright Lance","Shuriken Cannon","Crystal Targeting Matrix","Spirit Stones","Vectored Engines"],
            ["Twin Bright Lance","Shuriken Cannon","Crystal Targeting Matrix","Star Engines","Vectored Engines"],            
            ["Twin Bright Lance","Shuriken Cannon","Spirit Stones","Star Engines","Vectored Engines"],
            ["Twin Starcannon","Twin Shuriken Catapult","Crystal Targeting Matrix"],
            ["Twin Starcannon","Twin Shuriken Catapult","Spirit Stones"],
            ["Twin Starcannon","Twin Shuriken Catapult","Star Engines"],
            ["Twin Starcannon","Twin Shuriken Catapult","Vectored Engines"],
            ["Twin Starcannon","Twin Shuriken Catapult","Crystal Targeting Matrix","Spirit Stones"],
            ["Twin Starcannon","Twin Shuriken Catapult","Crystal Targeting Matrix","Star Engines"],
            ["Twin Starcannon","Twin Shuriken Catapult","Crystal Targeting Matrix","Vectored Engines"],
            ["Twin Starcannon","Twin Shuriken Catapult","Spirit Stones","Star Engines"],
            ["Twin Starcannon","Twin Shuriken Catapult","Spirit Stones","Vectored Engines"],
            ["Twin Starcannon","Twin Shuriken Catapult","Star Engines","Vectored Engines"],
            ["Twin Starcannon","Twin Shuriken Catapult","Crystal Targeting Matrix","Spirit Stones","Star Engines"],
            ["Twin Starcannon","Twin Shuriken Catapult","Crystal Targeting Matrix","Spirit Stones","Vectored Engines"],
            ["Twin Starcannon","Twin Shuriken Catapult","Crystal Targeting Matrix","Star Engines","Vectored Engines"],            
            ["Twin Starcannon","Twin Shuriken Catapult","Spirit Stones","Star Engines","Vectored Engines"],
            ["Twin Starcannon","Shuriken Cannon","Crystal Targeting Matrix"],
            ["Twin Starcannon","Shuriken Cannon","Spirit Stones"],
            ["Twin Starcannon","Shuriken Cannon","Star Engines"],
            ["Twin Starcannon","Shuriken Cannon","Vectored Engines"],
            ["Twin Starcannon","Shuriken Cannon","Crystal Targeting Matrix","Spirit Stones"],
            ["Twin Starcannon","Shuriken Cannon","Crystal Targeting Matrix","Star Engines"],
            ["Twin Starcannon","Shuriken Cannon","Crystal Targeting Matrix","Vectored Engines"],
            ["Twin Starcannon","Shuriken Cannon","Spirit Stones","Star Engines"],
            ["Twin Starcannon","Shuriken Cannon","Spirit Stones","Vectored Engines"],
            ["Twin Starcannon","Shuriken Cannon","Star Engines","Vectored Engines"],
            ["Twin Starcannon","Shuriken Cannon","Crystal Targeting Matrix","Spirit Stones","Star Engines"],
            ["Twin Starcannon","Shuriken Cannon","Crystal Targeting Matrix","Spirit Stones","Vectored Engines"],
            ["Twin Starcannon","Shuriken Cannon","Crystal Targeting Matrix","Star Engines","Vectored Engines"],            
            ["Twin Starcannon","Shuriken Cannon","Spirit Stones","Star Engines","Vectored Engines"]
          ]
          // TODO: vehicle equipment
        },
        "Abilities": {
          "Serpent Shield": "Any damage suffered by a Wave Serpent from a ranged weapon is reduced by 1, to a minimum of 1. In addition, once per battle, a Wave Serpent can discharge its serpent shield in its Shooting phase by rolling a D6. On a 2+ the nearest visible enemy unit within 24\" suffers D3 mortal wounds. The Wave Serpent then gains no benefit from this ability for the remainder of the battle.",
          "Hover Tank":"Distance and ranges are always measured to and from this model's hull, even though it has a base.",
          "Explodes": "If a model in this unit is reduced to 0 wounds, roll a D6 before removing it from the battlefield. On a 6 it explodes, and each unit within 6\" suffers D3 mortal wounds.",
          "Transport": "This model can transport 12 PHOENIX LORD or [Craftworld] INFANTRY models. Each WRAITHGUARD or WRAITHBLADE model takes the space of two other models. It cannot transport JUMP PACK models."
        },
        "Faction Keywords": ["AELDARI", "ASURYANI", "WARHOST"],
        "Allegiance": ["[Craftworld]","ALAITOC","BIEL-TAN","IYANDEN","AIM-HANN","ULTHWE"],
        "Keywords": ["Vehicle", "Transport", "Fly", "Wave Serpent"]
      },
      "Crimson Hunter": {
        "Points": 120,
        "PointsIncludesWargear": false,
        "M": [
          {
            "Wounds": [7, 12],
            "value": "20-60"
          },
          {
            "Wounds": [4, 6],
            "value": "20-40"
          },
          {
            "Wounds": [1, 3],
            "value": "20-25"
          }
        ],
        "WS": "6+",
        "BS": [
          {
            "Wounds": [7, 12],
            "value": "2+"
          },
          {
            "Wounds": [4, 6],
            "value": "3+"
          },
          {
            "Wounds": [1, 3],
            "value": "4+"
          }
        ],
        "S": 6,
        "T": 6,
        "W": 12,
        "A": 3,
        "Ld": 8,
        "Sv": "3+",
        "Wargear": {
          "weapons": [
            ["Pulse Laser","Bright Lance","Bright Lance"]
          ]
        },
        "Abilities": {
          "Wings of Khaine":"When this model Advances, add 20\" to its Move characteristic for that Movement phase instead of rolling a dice. Each time this model moves, first pivot it on the spot up to 90° (this does not contribute to how far the model moves), and then move the model straight forwards. Once its move has finished, you can pivot it a further 90° as before.",
          "Airborne":"This model cannot charge, can only be charged by units that can FLY, and can only attack or be attacked in the Fight phase by units that can FLY.",
          "Hard to Hit":"Your opponent must subtract 1 from hit rolls for attacks that target this model in the Shooting phase.",
          "Skyhunters":"You can re-roll all failed wound rolls for this model's ranged weapons that target units that can FLY.",
          "Crash and Burn":"If this model is reduced to 0 wounds, roll a D6 before removing it from the battlefield. On a 6 it crashes in a fiery explosion and each unit within 6\" suffers D3 mortal wounds."
        },
        "Faction Keywords": ["AELDARI", "ASURYANI", "ASPECT WARRIOR"],
        "Allegiance": ["[Craftworld]","ALAITOC","BIEL-TAN","IYANDEN","AIM-HANN","ULTHWE"],
        "Keywords": ["Vehicle", "Fly", "Crimson Hunter"]
      },
      "Crimson Hunter Exarch": {
        "Points": 135,
        "PointsIncludesWargear": false,
        "M": [
          {
            "Wounds": [7, 12],
            "value": "20-60"
          },
          {
            "Wounds": [4, 6],
            "value": "20-40"
          },
          {
            "Wounds": [1, 3],
            "value": "20-25"
          }
        ],
        "WS": "6+",
        "BS": [
          {
            "Wounds": [7, 12],
            "value": "2+"
          },
          {
            "Wounds": [4, 6],
            "value": "3+"
          },
          {
            "Wounds": [1, 3],
            "value": "4+"
          }
        ],
        "S": 6,
        "T": 6,
        "W": 12,
        "A": 3,
        "Ld": 8,
        "Sv": "3+",
        "Wargear": {
          "weapons": [
            ["Pulse Laser","Bright Lance","Bright Lance"],
            ["Pulse Laser","Starcannon","Starcannon"]
          ]
        },
        "Abilities": {
          "Wings of Khaine":"When this model Advances, add 20\" to its Move characteristic for that Movement phase instead of rolling a dice. Each time this model moves, first pivot it on the spot up to 90° (this does not contribute to how far the model moves), and then move the model straight forwards. Once its move has finished, you can pivot it a further 90° as before.",
          "Airborne":"This model cannot charge, can only be charged by units that can FLY, and can only attack or be attacked in the Fight phase by units that can FLY.",
          "Hard to Hit":"Your opponent must subtract 1 from hit rolls for attacks that target this model in the Shooting phase.",
          "Skyhunters":"You can re-roll all failed wound rolls for this model's ranged weapons that target units that can FLY.",
          "Crash and Burn":"If this model is reduced to 0 wounds, roll a D6 before removing it from the battlefield. On a 6 it crashes in a fiery explosion and each unit within 6\" suffers D3 mortal wounds.",
          "Marksman's Eye":"You can re-roll hit rolls of 1 for this model's ranged weapons."
        },
        "Faction Keywords": ["AELDARI", "ASURYANI", "ASPECT WARRIOR"],
        "Allegiance": ["[Craftworld]","ALAITOC","BIEL-TAN","IYANDEN","AIM-HANN","ULTHWE"],
        "Keywords": ["Vehicle", "Fly", "Crimson Hunter"]
      },
      "Hemlock Wraithfighter": {
        "Points": 200,
        "PointsIncludesWargear": false,
        "M": [
          {
            "Wounds": [7, 12],
            "value": "20-60"
          },
          {
            "Wounds": [4, 6],
            "value": "20-40"
          },
          {
            "Wounds": [1, 3],
            "value": "20-25"
          }
        ],
        "WS": "6+",
        "BS": "3+",
        "S": 6,
        "T": 6,
        "W": 12,
        "A": 3,
        "Ld": 8,
        "Sv": "3+",
        "Wargear": {
          "weapons": [
            ["Heavy D-Scythe","Heavy D-Scythe"]
          ]
        },
        "Abilities": {
          "Wings of Khaine":"When this model Advances, add 20\" to its Move characteristic for that Movement phase instead of rolling a dice. Each time this model moves, first pivot it on the spot up to 90° (this does not contribute to how far the model moves), and then move the model straight forwards. Once its move has finished, you can pivot it a further 90° as before.",
          "Airborne":"This model cannot charge, can only be charged by units that can FLY, and can only attack or be attacked in the Fight phase by units that can FLY.",
          "Hard to Hit":"Your opponent must subtract 1 from hit rolls for attacks that target this model in the Shooting phase.",
          "Crash and Burn":"If this model is reduced to 0 wounds, roll a D6 before removing it from the battlefield. On a 6 it crashes in a fiery explosion and each unit within 6\" suffers D3 mortal wounds.",
          "Mindshock Pod":"Units must subtract 2 from their Leadership characteristic whilst they are within 12\" of any enemy Hemloc kWraithfighters."
        },
        "Psyker": "This model can attempt to manifest one psychic power in each friendly Psychic phase, and attempt to deny one psychic power in each enemy Psychic phase. It knows the Smite power and one psychic power from the Runes of Battle discipline (pg124). Hemlock Wraithfighters can only attempt to manifest the second effect of psychic powers from the Rune of Battle discipline. For example, if a Hemlock Wraithfighter knew the Embolden/Horrify power, it could only attempt to manifest Horrify.",
        "Faction Keywords": ["AELDARI", "ASURYANI", "SPIRIT HOST"],
        "Allegiance": ["[Craftworld]","ALAITOC","BIEL-TAN","IYANDEN","AIM-HANN","ULTHWE"],
        "Keywords": ["Vehicle", "Fly", "Wraith COnstruct", "Hemlock Wraithfighter"]
      },
      "Wraithknight": {
        "Points": 402,
        "PointsIncludesWargear": false,
        "M": [
          {
            "Wounds": [13, 24],
            "value": 12
          },
          {
            "Wounds": [7, 12],
            "value": 10
          },
          {
            "Wounds": [1, 6],
            "value": 8
          }
        ],
        "WS": [
          {
            "Wounds": [13, 24],
            "value": "3+"
          },
          {
            "Wounds": [7, 12],
            "value": "4+"
          },
          {
            "Wounds": [1, 6],
            "value": "5+"
          }
        ],
        "BS": [
          {
            "Wounds": [13, 24],
            "value": "3+"
          },
          {
            "Wounds": [7, 12],
            "value": "4+"
          },
          {
            "Wounds": [1, 6],
            "value": "5+"
          }
        ],
        "S": 8,
        "T": 8,
        "W": 24,
        "A": 4,
        "Ld": 9,
        "Sv": "3+",
        "Wargear": {
          "weapons": [
            ["Heavy Wraithcannon","Heavy Wraithcannon","Titanic Wraithbone Fists","Titanic Feet"],
            ["Titanic Ghostglaive","Scattershield","Titanic Wraithbone Fists","Titanic Feet"],
            ["Suncannon","Scattershield","Titanic Wraithbone Fists","Titanic Feet"],
            ["Heavy Wraithcannon","Heavy Wraithcannon","Titanic Wraithbone Fists","Titanic Feet","Scatter Laser"],
            ["Heavy Wraithcannon","Heavy Wraithcannon","Titanic Wraithbone Fists","Titanic Feet","Shuriken Cannon"],
            ["Heavy Wraithcannon","Heavy Wraithcannon","Titanic Wraithbone Fists","Titanic Feet","Starcannon"],
            ["Heavy Wraithcannon","Heavy Wraithcannon","Titanic Wraithbone Fists","Titanic Feet","Scatter Laser","Scatter Laser"],
            ["Heavy Wraithcannon","Heavy Wraithcannon","Titanic Wraithbone Fists","Titanic Feet","Scatter Laser","Shuriken Cannon"],
            ["Heavy Wraithcannon","Heavy Wraithcannon","Titanic Wraithbone Fists","Titanic Feet","Scatter Laser","Starcannon"],
            ["Heavy Wraithcannon","Heavy Wraithcannon","Titanic Wraithbone Fists","Titanic Feet","Shuriken Cannon","Shuriken Cannon"],
            ["Heavy Wraithcannon","Heavy Wraithcannon","Titanic Wraithbone Fists","Titanic Feet","Shuriken Cannon","Starcannon"],
            ["Heavy Wraithcannon","Heavy Wraithcannon","Titanic Wraithbone Fists","Titanic Feet","Starcannon","Starcannon"],
            ["Titanic Ghostglaive","Scattershield","Titanic Wraithbone Fists","Titanic Feet","Scatter Laser"],
            ["Titanic Ghostglaive","Scattershield","Titanic Wraithbone Fists","Titanic Feet","Shuriken Cannon"],
            ["Titanic Ghostglaive","Scattershield","Titanic Wraithbone Fists","Titanic Feet","Starcannon"],
            ["Titanic Ghostglaive","Scattershield","Titanic Wraithbone Fists","Titanic Feet","Scatter Laser","Scatter Laser"],
            ["Titanic Ghostglaive","Scattershield","Titanic Wraithbone Fists","Titanic Feet","Scatter Laser","Shuriken Cannon"],
            ["Titanic Ghostglaive","Scattershield","Titanic Wraithbone Fists","Titanic Feet","Scatter Laser","Starcannon"],
            ["Titanic Ghostglaive","Scattershield","Titanic Wraithbone Fists","Titanic Feet","Shuriken Cannon","Shuriken Cannon"],
            ["Titanic Ghostglaive","Scattershield","Titanic Wraithbone Fists","Titanic Feet","Shuriken Cannon","Starcannon"],
            ["Titanic Ghostglaive","Scattershield","Titanic Wraithbone Fists","Titanic Feet","Starcannon","Starcannon"],
            ["Suncannon","Scattershield","Titanic Wraithbone Fists","Scatter Laser"],
            ["Suncannon","Scattershield","Titanic Wraithbone Fists","Shuriken Cannon"],
            ["Suncannon","Scattershield","Titanic Wraithbone Fists","Starcannon"],
            ["Suncannon","Scattershield","Titanic Wraithbone Fists","Scatter Laser","Scatter Laser"],
            ["Suncannon","Scattershield","Titanic Wraithbone Fists","Scatter Laser","Shuriken Cannon"],
            ["Suncannon","Scattershield","Titanic Wraithbone Fists","Scatter Laser","Starcannon"],
            ["Suncannon","Scattershield","Titanic Wraithbone Fists","Shuriken Cannon","Shuriken Cannon"],
            ["Suncannon","Scattershield","Titanic Wraithbone Fists","Shuriken Cannon","Starcannon"],
            ["Suncannon","Scattershield","Titanic Wraithbone Fists","Starcannon","Starcannon"]
          ]
        },
        "Abilities": {
          "faction": ["Ancient Doom"],
          "Catastrophic Collapse":"If this model is reduced to 0 wounds, roll a D6 before removing it from the battlefield. On a 6 it collapses with catastrophic effect, and each unit within 2D6\" suffers D6 mortal wounds.",
          "Unstoppable Revenant":"A Wraithknight can Fall Back in the Movement phase and still shoot and/or charge during its turn. When a Wraithknight Falls Back, it can even move over enemy INFANTRY models, though at the end of its move it must be more than 1\" from all enemy units. In addition, a Wraithknight can move and fire Heavy weapons without suffering the penalty to its hit rolls. Finally, a Wraithknight only gains a bonus to its save in cover if at least half of the model is obscured from the firer."
        },
        "Faction Keywords": ["AELDARI", "ASURYANI", "SPIRIT HOST"],
        "Allegiance": ["[Craftworld]","ALAITOC","BIEL-TAN","IYANDEN","AIM-HANN","ULTHWE"],
        "Keywords": ["Monster", "Titanic", "Wraith Construct", "Wraithknight"]
      },
    },
    "units": {
      "HQ": {
        "Autarch": {
          "modelTypes": [
            {
              "model": "Autarch",
              "defaultAmount": 1,
              "maxAmount": 1
            }
          ],
          "power": [
            [1, 4]
          ]
        },
        "Autarch Skyrunner": {
          "modelTypes": [
            {
              "model": "Autarch Skyrunner",
              "defaultAmount": 1,
              "maxAmount": 1
            }
          ],
          "power": [
            [1, 6]
          ]
        },
        "Autarch with Swooping Hawk Wings": {
          "modelTypes": [
            {
              "model": "Autarch with Swooping Hawk Wings",
              "defaultAmount": 1,
              "maxAmount": 1
            }
          ],
          "power": [
            [1, 5]
          ]
        },
        "Asurmen": {
          "modelTypes": [
            {
              "model": "Asurmen",
              "defaultAmount": 1,
              "maxAmount": 1
            }
          ],
          "power": [
            [1, 9]
          ]
        },
        "Avatar of Khaine": {
          "modelTypes": [
            {
              "model": "Avatar of Khaine",
              "defaultAmount": 1,
              "maxAmount": 1
            }
          ],
          "power": [
            [1, 13]
          ]
        },
        "Baharroth": {
          "modelTypes": [
            {
              "model": "Baharroth",
              "defaultAmount": 1,
              "maxAmount": 1
            }
          ],
          "power": [
            [1, 6]
          ]
        },
        "Eldrad Ulthran": {
          "modelTypes": [
            {
              "model": "Eldrad Ulthran",
              "defaultAmount": 1,
              "maxAmount": 1
            }
          ],
          "power": [
            [1, 8]
          ]
        },
        "Farseer": {
          "modelTypes": [
            {
              "model": "Farseer",
              "defaultAmount": 1,
              "maxAmount": 1
            }
          ],
          "power": [
            [1, 6]
          ]
        },
        "Farseer Skyrunner": {
          "modelTypes": [
            {
              "model": "Farseer Skyrunner",
              "defaultAmount": 1,
              "maxAmount": 1
            }
          ],
          "power": [
            [1, 7]
          ]
        },
        "Fuegan": {
          "modelTypes": [
            {
              "model": "Fuegan",
              "defaultAmount": 1,
              "maxAmount": 1
            }
          ],
          "power": [
            [1, 8]
          ]
        },
        "Illic Nightspear": {
          "modelTypes": [
            {
              "model": "Illic Nightspear",
              "defaultAmount": 1,
              "maxAmount": 1
            }
          ],
          "power": [
            [1, 4]
          ]
        },
        "Jain Zar": {
          "modelTypes": [
            {
              "model": "Jain Zar",
              "defaultAmount": 1,
              "maxAmount": 1
            }
          ],
          "power": [
            [1, 7]
          ]
        },
        "Karandras": {
          "modelTypes": [
            {
              "model": "Karandras",
              "defaultAmount": 1,
              "maxAmount": 1
            }
          ],
          "power": [
            [1, 8]
          ]
        },
        "Maugan Ra": {
          "modelTypes": [
            {
              "model": "Maugan Ra",
              "defaultAmount": 1,
              "maxAmount": 1
            }
          ],
          "power": [
            [1, 7]
          ]
        },
        "Prince Yriel": {
          "modelTypes": [
            {
              "model": "Prince Yriel",
              "defaultAmount": 1,
              "maxAmount": 1
            }
          ],
          "power": [
            [1, 5]
          ]
        }, 
        "Spiritseer": {
          "modelTypes": [
            {
              "model": "Spiritseer",
              "defaultAmount": 1,
              "maxAmount": 1
            }
          ],
          "power": [
            [1, 3]
          ]
        },
        "Warlock": {
          "modelTypes": [
            {
              "model": "Warlock",
              "defaultAmount": 1,
              "maxAmount": 1
            }
          ],
          "power": [
            [1, 2]
          ]
        },
        "Warlock Conclave": {
          "modelTypes": [
            {
              "model": "Warlock Conclave",
              "defaultAmount": 2,
              "maxAmount": 10
            }
          ],
          "power": [
            [2, 3],
            [3, 5],
            [4, 7],
            [5, 9],
            [6, 11],
            [7, 13],
            [8, 15],
            [9, 17],
            [10, 19]
          ]
        },
        "Warlock Skyrunner": {
          "modelTypes": [
            {
              "model": "Warlock Skyrunner",
              "defaultAmount": 1,
              "maxAmount": 1
            }
          ],
          "power": [
            [1, 4]
          ]
        },
        "Warlock Skyrunner Conclave": {
          "modelTypes": [
            {
              "model": "Warlock Skyrunner Conclave",
              "defaultAmount": 2,
              "maxAmount": 10
            }
          ],
          "power": [
            [2, 7],
            [3, 10],
            [4, 13],
            [5, 16],
            [6, 19],
            [7, 22],
            [8, 25],
            [9, 28],
            [10, 31]
          ]
        }
      },
      "Troops": {
        "Dire Avengers": {
          "modelTypes": [
            {
              "model": "Dire Avenger",
              "defaultAmount": 5,
              "maxAmount": 10
            },
            {
              "model": "Dire Avenger Exarch",
              "defaultAmount": 0,
              "maxAmount": 1
            }
          ],
          "power": [
            [5, 3],
            [10, 6]
          ]
        },
        "Guardian Defenders": {
          "modelTypes": [
            {
              "model": "Guardian",
              "defaultAmount": 10,
              "maxAmount": 20
            },
            {
              "model": "Heavy Weapon Platform",
              "defaultAmount": 1,
              "maxAmount": 2
            }
          ],
          "power": [
            [10, 5],
            [20, 9]
          ]
        },
        "Rangers": {
          "modelTypes": [
            {
              "model": "Ranger",
              "defaultAmount": 5,
              "maxAmount": 10
            }
          ],
          "power": [
            [5, 3],
            [10, 6]
          ]
        },
        "Storm Guardians": {
          "modelTypes": [
            {
              "model": "Storm Guardian",
              "defaultAmount": 8,
              "maxAmount": 16
            }
          ],
          "power": [
            [8, 3],
            [16, 6],
            [24, 9]
          ]
        },
      },
      "Elites": {
        "Fire Dragons": {
          "modelTypes": [
            {
              "model": "Fire Dragon",
              "defaultAmount": 5,
              "maxAmount": 10
            },
            {
              "model": "Fire Dragon Exarch",
              "defaultAmount": 0,
              "maxAmount": 1
            }
          ],
          "power": [
            [5, 6],
            [10, 12]
          ]
        },
        "Howling Banshees": {
          "modelTypes": [
            {
              "model": "Howling Banshee",
              "defaultAmount": 5,
              "maxAmount": 10
            },
            {
              "model": "Howling Banshee Exarch",
              "defaultAmount": 0,
              "maxAmount": 1
            }
          ],
          "power": [
            [5, 3],
            [10, 6]
          ]
        },
        "Striking Scorpions": {
          "modelTypes": [
            {
              "model": "Striking Scorpion",
              "defaultAmount": 5,
              "maxAmount": 10
            },
            {
              "model": "Striking Scorpion Exarch",
              "defaultAmount": 0,
              "maxAmount": 1
            }
          ],
          "power": [
            [5, 4],
            [10, 7]
          ]
        },
        "Wraithblades": {
          "modelTypes": [
            {
              "model": "Wraithblade",
              "defaultAmount": 5,
              "maxAmount": 10
            }
          ],
          "power": [
            [5, 10],
            [10, 20]
          ]
        },
        "Wraithguard": {
          "modelTypes": [
            {
              "model": "Wraithguard",
              "defaultAmount": 5,
              "maxAmount": 10
            }
          ],
          "power": [
            [5, 11],
            [10, 21]
          ]
        }
      },
      "Fast Attack": {
        "Shining Spears": {
          "modelTypes": [
            {
              "model": "Shining Spear",
              "defaultAmount": 3,
              "maxAmount": 9
            },
            {
              "model": "Shining Spear Exarch",
              "defaultAmount": 0,
              "maxAmount": 1
            },

          ],
          "power": [
            [3, 5],
            [6, 10],
            [9, 14]
          ]
        },
        "Swooping Hawks": {
          "modelTypes": [
            {
              "model": "Swooping Hawk",
              "defaultAmount": 5,
              "maxAmount": 10
            },
            {
              "model": "Swooping Hawk Exarch",
              "defaultAmount": 0,
              "maxAmount": 1
            }
          ],
          "power": [
            [5, 3],
            [10, 6]
          ]
        },
        "Vypers": {
          "modelTypes": [
            {
              "model": "Vyper",
              "defaultAmount": 1,
              "maxAmount": 2
            }
          ],
          "power": [
            [1, 4],
            [2, 8],
            [3, 12]
          ]
        },
        "Warp Spiders": {
          "modelTypes": [
            {
              "model": "Warp Spider",
              "defaultAmount": 5,
              "maxAmount": 10
            },
            {
              "model": "Warp Spider Exarch",
              "defaultAmount": 0,
              "maxAmount": 1
            }
          ],
          "power": [
            [5, 5],
            [10, 9]
          ]
        },   
        "Windriders": {
          "modelTypes": [
            {
              "model": "Windrider",
              "defaultAmount": 3,
              "maxAmount": 6
            }
          ],
          "power": [
            [3, 4],
            [6, 8],
            [9, 12]
          ]
        },      
      },
      "Heavy Support": {
        "Dark Reapers": {
          "modelTypes": [
            {
              "model": "Dark Reaper",
              "defaultAmount": 3,
              "maxAmount": 10
            },
            {
              "model": "Dark Reaper Exarch",
              "defaultAmount": 0,
              "maxAmount": 1
            }
          ],
          "power": [
            [3, 4],
            [5, 7],
            [10, 13]
          ]
        }, 
        "Falcon": {
          "modelTypes": [
            {
              "model": "Falcon",
              "defaultAmount": 1,
              "maxAmount": 1
            }
          ],
          "power": [
            [1, 9]
          ]
        }, 
        "Fire Prism": {
          "modelTypes": [
            {
              "model": "Fire Prism",
              "defaultAmount": 1,
              "maxAmount": 1
            }
          ],
          "power": [
            [1, 9]
          ]
        },
        "Night Spinner": {
          "modelTypes": [
            {
              "model": "Night Spinner",
              "defaultAmount": 1,
              "maxAmount": 1
            }
          ],
          "power": [
            [1, 8]
          ]
        },
        "Support Weapons": {
          "modelTypes": [
            {
              "model": "Support Weapon",
              "defaultAmount": 1,
              "maxAmount": 3
            }
          ],
          "power": [
            [1, 3],
            [2, 6],
            [3, 9]
          ]
        },
        "War Walkers": {
          "modelTypes": [
            {
              "model": "War Walker",
              "defaultAmount": 1,
              "maxAmount": 3
            }
          ],
          "power": [
            [1, 4],
            [2, 8],
            [3, 12]
          ]
        },
        "Wraithlord": {
          "modelTypes": [
            {
              "model": "Wraithlord",
              "defaultAmount": 1,
              "maxAmount": 1
            }
          ],
          "power": [
            [1, 8]
          ]
        }
      },
      "Dedicated Transport": {
        "Wave Serpent": {
          "modelTypes": [
            {
              "model": "Wave Serpent",
              "defaultAmount": 1,
              "maxAmount": 1
            }
          ],
          "power": [
            [1, 9]
          ]
        }
      },
      "Flyer": {
        "Crimson Hunter": {
          "modelTypes": [
            {
              "model": "Crimson Hunter",
              "defaultAmount": 1,
              "maxAmount": 1
            }
          ],
          "power": [
            [1, 8]
          ]
        }, 
        "Crimson Hunter Exarch": {
          "modelTypes": [
            {
              "model": "Crimson Hunter Exarch",
              "defaultAmount": 1,
              "maxAmount": 1
            }
          ],
          "power": [
            [1, 9]
          ]
        }, 
        "Hemlock Wraithfighter": {
          "modelTypes": [
            {
              "model": "Hemlock Wraithfighter",
              "defaultAmount": 1,
              "maxAmount": 1
            }
          ],
          "power": [
            [1, 10]
          ]
        }
      },
      "Fortification": {},
      "Lord Of War": {
        "Wraithknight": {
          "modelTypes": [
            {
              "model": "Wraithknight",
              "defaultAmount": 1,
              "maxAmount": 1
            }
          ],
          "power": [
            [1, 27]
          ]
        }
      }
      // TODO: Craftworld attributes
      // TODO: Strategems
      // TODO: Warlord Traits
      // TODO: Tactical Objectives
    }
  },
  "Harlequins": {
    "icon": "harlequins.png",
    "factionSpecialRules": [
      {
        "name": "Rising Cresendo",
        "description": "Units with this ability can Advance and charge in the same turn. In addition, they can Fall Back and still shoot and/or charge in the same turn."
      }
    ],
    "spells": {
      "Phantasmancy Discipline": {
        1: {
          "name": "Twilight Pathways",
          "description": "Twilight Pathways has a warp charge value of 6. If manifested, select a visible friendly HARLEQUINS unit within 3\" of the psyker. That unit can immediately move as if it were its Movement phase. You cannot use Twilight Pathways on a unit more than once in each Psychic phase."
        },
        2: {
          "name": "Fog of Dreams",
          "description": "Fog of Dreams has a warp charge value of 7. If manifested, select a visible enemy unit within 18\" of the psyker. Until the start of your next Psychic phase, your opponent must subtract 1 from all hit rolls for that unit that target HARLEQUIN INFANTRY units."
        },
        3: {
          "name": "Mirror of Minds",
          "description": "Mirror of Minds has a warp charge value of 8. If manifested, select an enemy unit within 24\" of the psyker. Then, both players roll a dice. If the Harlequin player's roll is equal to or higher than their opponent's, then the target unit suffers 1 mortal wound. Repeat this process until the target is destroyed, or the enemy player rolls a result that is higher than the Harlequin player's roll."
        }
      },
    },
    "wargear": {
      "Fusion pistol": {
        "Range": "6",
        "Type": "Pistol 1",
        "S": "8",
        "AP": "-4",
        "D": "D6",
        "Abilities": "If when the target inflicting is within damage half with range it and of this discard weapon, the lowest roll two result.",
        "Points": 9
      },
      "Hallucinogen grenade launcher": {
        "Range": "28",
        "Type": "Assault 1",
        "S": "*",
        "AP": "*",
        "D": "*",
        "Abilities": "Roll 2D6 if a unit is hit by this weapon - if the roll is equal to or greater than the target unit's Leadership, then it suffers D3 mortal wounds.",
        "Points": 0
      },
      "Haywire cannon": {
        "Range": "24",
        "Type": "Heavy D3",
        "S": "4",
        "AP": "-1",
        "D": "1",
        "Abilities": "If the target is a VEHICLE and you roll a wound roll of 4+ for this weapon, the target suffers 1 mortal wound in addition to any other damage. If the wound roll is 6+, the target suffers D3 mortal wounds instead of 1.",
        "Points": 14
      },
      "Neuro disruptor": {
        "Range": "12",
        "Type": "Pistol 1",
        "S": "3",
        "AP": "-3",
        "D": "D3",
        "Abilities": "This weapon has a Damage of 1 against VEHICLE targets.",
        "Points": 10
      },
      "Prismatic cannon": {
        "description": "When attacking with this weapon, choose one of the profiles below.",
        "profiles": {
          "Dispersed": {
            "Range": "24",
            "Type": "Heavy D6",
            "S": "4",
            "AP": "-2",
            "D": "1",
            "Abilities": "-",
          },
          "Focused": {
            "Range": "24",
            "Type": "Heavy D3",
            "S": "6",
            "AP": "-3",
            "D": "D3",
            "Abilities": "-",
          },
          "Lance": {
            "Range": "24",
            "Type": "Heavy 1",
            "S": "8",
            "AP": "-4",
            "D": "D6",
            "Abilities": "-",
          }
        },
        "Points": 20
      },
      "Prismatic grenade": {
        "Range": "6",
        "Type": "Grenade D6",
        "S": "4",
        "AP": "-1",
        "D": "1",
        "Abilities": "-",
        "Points": 0
      },
      "Shrieker cannon": {
        "description": "When attacking with this weapon, choose one of the profiles below. Each time you make a wound roll of 6+ for this weapon, that hit is resolved with an AP of -3 instead of 0.",
        "profiles": {
          "Shrieker": {
            "Range": "24",
            "Type": "Assault 1",
            "S": "6",
            "AP": "0",
            "D": "1",
            "Abilities": "If an INFANTRYmodel is slain by an attack made with this weapon, then its unit suffers D3 mortal wounds.",
          },
          "Shuriken": {
            "Range": "24",
            "Type": "Assault 3",
            "S": "6",
            "AP": "0",
            "D": "1",
            "Abilities": "-",
          }
        },
        "Points": 0
      },
      "Shuriken cannon": {
        "Range": "24",
        "Type": "Assault 3",
        "S": "6",
        "AP": "0",
        "D": "1",
        "Abilities": "Each time you make a wound roll of 6+ for this weapon, that hit is resolved with an AP of -3 instead of 0",
        "Points": 10
      },
      "Shuriken pistol": {
        "Range": "12",
        "Type": "Pistol 1",
        "S": "4",
        "AP": "0",
        "D": "1",
        "Abilities": "Each time you make a wound roll of 6+ for this weapon, that hit is resolved with an AP of -3 instead of 0.",
        "Points": 0
      },
      "Star bolas": {
        "Range": "12",
        "Type": "Grenade D3",
        "S": "6",
        "AP": "-3",
        "D": "1",
        "Abilities": "-",
        "Points": 0
      },
      "Harlequin's blade": {
        "Range": "Melee",
        "Type": "Melee",
        "S": "User",
        "AP": "0",
        "D": "1",
        "Abilities": "-",
        "Points": 1
      },
      "Harlequin's caress": {
        "Range": "Melee",
        "Type": "Melee",
        "S": "5",
        "AP": "-2",
        "D": "1",
        "Abilities": "-",
        "Points": 9
      },
      "Harlequin's embrace": {
        "Range": "Melee",
        "Type": "Melee",
        "S": "4",
        "AP": "-3",
        "D": "1",
        "Abilities": "-",
        "Points": 6
      },
      "Harlequin's kiss": {
        "Range": "Melee",
        "Type": "Melee",
        "S": "4",
        "AP": "-1",
        "D": "D3",
        "Abilities": "-",
        "Points": 14
      },
      "Miststave": {
        "Range": "Melee",
        "Type": "Melee",
        "S": "+2",
        "AP": "-1",
        "D": "D3",
        "Abilities": "-",
        "Points": 0
      },
      "Power sword": {
        "Range": "Melee",
        "Type": "Melee",
        "S": "User",
        "AP": "-3",
        "D": "1",
        "Abilities": "-",
        "Points": 4
      },
      "Zephyrglaive": {
        "Range": "Melee",
        "Type": "Melee",
        "S": "+1",
        "AP": "-2",
        "D": "2",
        "Abilities": "-",
        "Points": 11
      }
    },
    "vehicleEquipment": {},
    "models": {
      "Death Jester": {
        "Points": 75,
        "PointsIncludesWargear": false,
        "M": 8,
        "WS": "2+",
        "BS": "2+",
        "S": 3,
        "T": 3,
        "W": 5,
        "A": 4,
        "Ld": 9,
        "Sv": "6+",
        "Wargear": {
          "weapons": [
            ["Shrieker cannon"]
          ]
        },
        "Abilities": {
          "faction": ["Rising Cresendo"],
          "Flip Belt": "This unit can move across models and terrain as if they were not there.",
          "Holo-suit": "Models in this unit have a 4+ invulnerable save.",
          "Deadly Hunter": "This model may target a CHARACTER even if it is not the closest enemy unit.",
          "Death Is Not Enough": " If any models flee from a unit in the same turn that it has been attacked by this model, then you can choose the first model that flees instead of your opponent choosing."
        },
        "Faction Keywords": ["Aeldari", "Harlequins"],
        "Allegiance": ["[Masque]"],
        "Keywords": ["Character", "Infantry", "Death Jester"]
      },
      "Shadowseer": {
        "Points": 134,
        "PointsIncludesWargear": false,
        "M": 8,
        "WS": "2+",
        "BS": "2+",
        "S": 3,
        "T": 3,
        "W": 5,
        "A": 3,
        "Ld": 9,
        "Sv": "7+",
        "Wargear": {
          "weapons": [
            ["Shuriken pistol","Hallucinogen grenade launcher","Miststave"],
            ["Neuro disruptor","Hallucinogen grenade launcher","Miststave"]
          ]
        },
        "Abilities": {
          "faction": ["Rising Cresendo"],
          "Flip Belt": "This unit can move across models and terrain as if they were not there.",
          "Holo-suit": "Models in this unit have a 4+ invulnerable save.",
          "Shield From Harm": "Your opponent must subtract 1 from the wound rolls for any attacks made against this model, and for attacks against any friendly [Masque] INFANTRY units that are within 6\" of one or more models with this ability."
        },
        "Psyker": "This model can attempt to manifest two psychic powers in each friendly Psychic phase, and attempt to deny one psychic power in each enemy Psychic phase. It knows the Smite power and one psychic power from the Phantasmancy discipline (pg 68)",
        "Faction Keywords": ["Aeldari", "Harlequins"],
        "Allegiance": ["[Masque]"],
        "Keywords": ["Character", "Infantry", "Psyker", "Shadowseer"]
      },
      "Skyweaver": {
        "Points": 35,
        "PointsIncludesWargear": false,
        "M": 16,
        "WS": "3+",
        "BS": "3+",
        "S": 3,
        "T": 4,
        "W": 3,
        "A": 3,
        "Ld": 8,
        "Sv": "4+",
        "Wargear": {
          "weapons": [
            ["Shuriken cannon","Star bolas"],
            ["Haywire cannon","Star bolas"],
            ["Shuriken cannon","Zephyrglaive"],
            ["Haywire cannon","Zephyrglaive"]
          ]
        },
        "Abilities": {
          "faction": ["Rising Cresendo"],
          "Blur of Colour": "When this unit Advances, add 6\" to its Move characteristic for that Movement phase instead of rolling a dice.",
          "Holo-suit": "Models in this unit have a 4+ invulnerable save.",
          "Mirage Launchers": "Your opponent must subtract 1 from any hit rolls made against this unit in the Shooting phase."
        },
        "Faction Keywords": ["Aeldari", "Harlequins"],
        "Allegiance": ["[Masque]"],
        "Keywords": ["Biker", "Fly", "Skyweavers"]
      },
      "Solitaire": {
        "Points": 94,
        "PointsIncludesWargear": false,
        "M": 12,
        "WS": "2+",
        "BS": "2+",
        "S": 3,
        "T": 3,
        "W": 5,
        "A": 8,
        "Ld": 9,
        "Sv": "6+",
        "Wargear": {
          "weapons": [
            ["Harlequin's caress","Harlequin's kiss"]
          ]
        },
        "Abilities": {
          "faction": ["Rising Cresendo"],
          "Flip Belt": "This unit can move across models and terrain as if they were not there.",
          "Blitz": "Once per battle, instead of making a normal move with the Solitaire, you can make a Blitz move with it. If you do so, add 2D6\" to the model's Move characteristic for this turn. In addition, the model's Attacks characteristic is increased to 10 for the rest of the turn. This ability may not be used if the model has been selected as the target of the Twilight Pathways psychic power in the previous Psychic phase.",
          "Impossible Form": "The Solitaire has a 3+ invulnerable save."
        },
        "Faction Keywords": ["Aeldari", "Harlequins"],
        "Keywords": ["Character", "Infantry", "Solitaire"]
      },
      "Starweaver": {
        "Points": 79,
        "PointsIncludesWargear": false,
        "M": 16,
        "WS": "3+",
        "BS": "3+",
        "S": 3,
        "T": 4,
        "W": 3,
        "A": 3,
        "Ld": 8,
        "Sv": "4+",
        "Wargear": {
          "weapons": [
            ["Shuriken cannon","Shuriken cannon"]
          ]
        },
        "Abilities": {
          "Open-topped": "Models embarked on this model can attack in their Shooting phase. Measure the range and draw line of sight from any point on this model. When they do so, any restrictions or modifiers that apply to this model also apply to its passengers; for example, the passengers cannot shoot if this model has Fallen Back in the same turn, cannot shoot (except with Pistols) if this model is within 1\" of an enemy unit, and so on. Note that the passengers cannot shoot if this model Falls Back, even though the Starweaver itself can.",
          "Blur of Colour": "When this unit Advances, add 6\" to its Move characteristic for that Movement phase instead of rolling a dice.",
          "Mirage Launchers": "Your opponent must subtract 1 from any hit rolls made against this unit in the Shooting phase.",
          "Holo-fields": "This model has a 4+ invulnerable save.",
          "Explodes": "If this model is reduced to 0 wounds, roll a D6 before removing it from the battlefield and before any models disembark. On a 6 it explodes, and each unit within 6\" suffers 1 mortal wound."
        },
        "Faction Keywords": ["Aeldari", "Harlequins"],
        "Allegiance": ["[Masque]"],
        "Keywords": ["Vehicle", "Transport", "Fly", "Starweaver"]
      },
      "Player": {
        "Points": 15,
        "PointsIncludesWargear": false,
        "M": 8,
        "WS": "3+",
        "BS": "3+",
        "S": 3,
        "T": 3,
        "W": 1,
        "A": 4,
        "Ld": 8,
        "Sv": "6+",
        "Wargear": {
          "weapons": [
            ["Shuriken pistol","Harlequin's blade","Prismatic grenade"],
            ["Neuro disruptor","Harlequin's blade","Prismatic grenade"],
            ["Fusion pistol","Harlequin's blade","Prismatic grenade"],
            ["Shuriken pistol","Harlequin's embrace","Prismatic grenade"],
            ["Neuro disruptor","Harlequin's embrace","Prismatic grenade"],
            ["Fusion pistol","Harlequin's embrace","Prismatic grenade"],
            ["Shuriken pistol","Harlequin's kiss","Prismatic grenade"],
            ["Neuro disruptor","Harlequin's kiss","Prismatic grenade"],
            ["Fusion pistol","Harlequin's kiss","Prismatic grenade"],
            ["Shuriken pistol","Harlequin's caress","Prismatic grenade"],
            ["Neuro disruptor","Harlequin's caress","Prismatic grenade"],
            ["Fusion pistol","Harlequin's caress","Prismatic grenade"],
          ]
        },
        "Abilities": {
          "faction": ["Rising Cresendo"],
          "Flip Belt": "This unit can move across models and terrain as if they were not there.",
          "Holo-suit": "Models in this unit have a 4+ invulnerable save."
        },
        "Faction Keywords": ["Aeldari", "Harlequins"],
        "Allegiance": ["[Masque]"],
        "Keywords": ["Infantry", "Troupe"]
      },
      "Troupe Master": {
        "Points": 59,
        "PointsIncludesWargear": false,
        "M": 8,
        "WS": "2+",
        "BS": "2+",
        "S": 3,
        "T": 3,
        "W": 5,
        "A": 5,
        "Ld": 9,
        "Sv": "6+",
        "Wargear": {
          "weapons": [
            ["Shuriken pistol", "Harlequin's blade", "Prismatic grenade"],
            ["Neuro disruptor", "Harlequin's blade", "Prismatic grenade"],
            ["Fusion pistol", "Harlequin's blade", "Prismatic grenade"],
            ["Shuriken pistol", "Power sword", "Prismatic grenade"],
            ["Shuriken pistol", "Harlequin's embrace", "Prismatic grenade"],
            ["Shuriken pistol", "Harlequin's kiss", "Prismatic grenade"],
            ["Shuriken pistol", "Harlequin's caress", "Prismatic grenade"],
            ["Neuro disruptor", "Power sword", "Prismatic grenade"],
            ["Neuro disruptor", "Harlequin's embrace", "Prismatic grenade"],
            ["Neuro disruptor", "Harlequin's kiss", "Prismatic grenade"],
            ["Neuro disruptor", "Harlequin's caress", "Prismatic grenade"],
            ["Fusion pistol", "Power sword", "Prismatic grenade"],
            ["Fusion pistol", "Harlequin's embrace", "Prismatic grenade"],
            ["Fusion pistol", "Harlequin's kiss", "Prismatic grenade"],
            ["Fusion pistol", "Harlequin's caress", "Prismatic grenade"]
          ]
        },
        "Abilities": {
          "faction": ["Rising Cresendo"],
          "Flip Belt": "This unit can move across models and terrain as if they were not there.",
          "Holo-suit": "Models in this unit have a 4+ invulnerable save.",
          "Choreographer of War": "All friendly [Masque] units that are within 6\" of this model in the Fight phase can re-roll failed wound rolls."
        },
        "Faction Keywords": ["Aeldari", "Harlequins"],
        "Allegiance": ["[Masque]"],
        "Keywords": ["Character", "Infantry", "Troupe Master"]
      },
      "Voidweaver": {
        "Points": 68,
        "PointsIncludesWargear": false,
        "M": 16,
        "WS": "3+",
        "BS": "3+",
        "S": 5,
        "T": 5,
        "W": 6,
        "A": 3,
        "Ld": 8,
        "Sv": "4+",
        "Wargear": {
          "weapons": [
            ["Shuriken cannon", "Shuriken cannon", "Haywire cannon"],
            ["Shuriken cannon", "Shuriken cannon", "Prismatic cannon"]
          ]
        },
        "Abilities": {
          "Blur of Colour": "When this unit Advances, add 6\" to its Move characteristic for that Movement phase instead of rolling a dice.",
          "Mirage Launchers": "Your opponent must subtract 1 from any hit rolls made against this unit in the Shooting phase.",
          "Holo-fields": "This model has a 4+ invulnerable save.",
          "Explodes": "If this model is reduced to 0 wounds, roll a D6 before removing it from the battlefield and before any models disembark. On a 6 it explodes, and each unit within 6\" suffers 1 mortal wound."
        },
        "Faction Keywords": ["Aeldari", "Harlequins"],
        "Allegiance": ["[Masque]"],
        "Keywords": ["Vehicle", "Fly", "Starweaver"]
      }
    },
    "units": {
      "HQ": {
        "Shadowseer": {
          "modelTypes": [
            {
              "model": "Shadowseer",
              "defaultAmount": 1,
              "maxAmount": 1
            }
          ],
          "power": [
            [1, 7]
          ]
        },
        "Troupe Master": {
          "modelTypes": [
            {
              "model": "Troupe Master",
              "defaultAmount": 1,
              "maxAmount": 1
            }
          ],
          "power": [
            [1, 4]
          ]
        }
      },
      "Troops": {
        "Troupe": {
          "modelTypes": [
            {
              "model": "Player",
              "defaultAmount": 5,
              "maxAmount": 12
            }
          ],
          "power": [
            [5, 7],
            [6, 8],
            [7, 9],
            [8, 10],
            [9, 11],
            [10, 12],
            [11, 13],
            [12, 14]
          ]
        }
      },
      "Elites": {
        "Death Jester": {
          "modelTypes": [
            {
              "model": "Death Jester",
              "defaultAmount": 1,
              "maxAmount": 1
            }
          ],
          "power": [
            [1, 4]
          ]
        },
        "Solitaire": {
          "modelTypes": [
            {
              "model": "Solitaire",
              "defaultAmount": 1,
              "maxAmount": 1
            }
          ],
          "power": [
            [1, 6]
          ]
        }
      },
      "Fast Attack": {
        "Skyweavers": {
          "modelTypes": [
            {
              "model": "Skyweaver",
              "defaultAmount": 2,
              "maxAmount": 6
            }
          ],
          "power": [
            [2, 5],
            [4, 10],
            [6, 15]
          ]
        }
      },
      "Heavy Support": {
        "Voidweavers": {
          "modelTypes": [
            {
              "model": "Voidweaver",
              "defaultAmount": 1,
              "maxAmount": 3
            }
          ],
          "power": [
            [1, 6],
            [2, 12],
            [3, 18]
          ]
        }
      },
      "Dedicated Transport": {
        "Starweaver": {
          "modelTypes": [
            {
              "model": "Starweaver",
              "defaultAmount": 1,
              "maxAmount": 1
            }
          ],
          "power": [
            [1, 5]
          ]
        }
      },
      "Flyer": {},
      "Fortification": {},
      "Lord Of War": {}
    }
  },
  "Ynnari": {
    "icon": "ynnari.png",
    "factionSpecialRules": [
      {
        "name": "Strength from Death",
        "description": "This ability is common to all YNNARI INFANTRYand YNNARI BIKER units and the Yncarne. Each time a unit is completely destroyed within 7\" of one or more units with this ability, except in the Morale phase, pick one of those units to make a Soulburst action. That unit can immediately do one of the following, even if it has already done so in this turn: <br/>1. The unit can move as if it were your Movement phase. It can Advance or Fall Back as part of this move. <br/>2. The unit can, if it is a PSYKER, immediately attempt to manifest a single psychic power as if it were the Psychic phase. <br/>3. The unit can shoot as if it were your Shooting phase, even if it Advanced or Fell Back this turn. <br/>4. The unit can charge as if it were the Charge phase, even if it Advanced or Fell Back this turn (enemy units can fire Overwatch as normal). A unit cannot do this if it is within 1\" of an enemy unit. <br/>5. The unit can fight as if it were the Fight phase. <br/>Note that this means that a unit may be able to shoot or fight twice in the same turn. <br/>A unit can only make a Soulburst action once per turn."
      },
      {
        "name": "Ynnead's Will",
        "description": "Units with this ability can embark onto any AELDARI TRANSPORT, even though the transport in question might normally only permit models with other Faction keywords to do so. All other restrictions apply normally."
      }
    ],
    "spells": {
      "Revenant": {
        1: {
          "name": "Gaze of Ynnead",
          "description": "Gaze of Ynnead has a warp charge value of 8. If manifested, select a visible enemy unit within 18\" of the psyker and roll a D6. On a 1, that unit suffers a mortal wound. On a 2-5 that unit suffers D3 mortal wounds. On a 6, that unit suffers D6 mortal wounds."
        },
        2: {
          "name": "Ancestor's Grace",
          "description": "Ancestors' Grace has a warp charge value of 5. If manifested, select a friendly YNNARI unit within 18\" of the psyker. Until the start of your next Psychic phase, you can re-roll hit rolls of 1 for that unit."
        },
        3: {
          "name": "Word of the Phoenix",
          "description": "Word of the Phoenix has a warp charge value of 6. If manifested, select a friendly YNNARI unit within 18\" of the psyker that has not made a Soulburst action this turn. That unit can immediately make a Soulburst action (see Strength from Death)."
        }
      }
    },
    "wargear": {
      "Asu-var, the Sword of Silent Screams": {
        "Range": "Melee",
        "Type": "Melee",
        "S": "+2",
        "AP": "-3",
        "D": "D3",
        "Abilities": "Enemy units that suffer any unsaved wounds from this weapon subtract 1 from their Leadership until the end of the turn.",
        "Points": 0
      },
      "Kha-vir, the Sword of Sorrows": {
        "Range": "Melee",
        "Type": "Melee",
        "S": "+1",
        "AP": "-2",
        "D": "D3",
        "Abilities": "-",
        "Points": 0
      },
      "Vilith-zhar, the Sword of Souls": {
        "Range": "Melee",
        "Type": "Melee",
        "S": "User",
        "AP": "-4",
        "D": "D6",
        "Abilities": "You can re-roll failed wound rolls for this weapon.",
        "Points": 0
      }
    },
    "models": {
      "Yvraine": {
        "Points": 132,
        "PointsIncludesWargear": false,
        "M": 8,
        "WS": "2+",
        "BS": "2+",
        "S": 3,
        "T": 3,
        "W": 5,
        "A": 4,
        "Ld": 9,
        "Sv": "6+",
        "Wargear": {
          "weapons": [
            ["Kha-vir, the Sword of Sorrows"]
          ]
        },
        "Abilities": {
          "faction": ["Strength from Death", "Ynnead's Will"],
          "Runesuit": "Yvraine has a 4+ invulnerable save.",
          "Gyrinx Familiar": "You can add 1 to all of Yvraine's Psychic tests and Deny the Witch tests.",
          "Herald of Ynnead": "Each time another AELDARI model is slain within 7\" of Yvraine, roll a D6. On a 4+, Yvraine immediately regains a lost wound. If the model was a PSYKER, you can immediately generate another psychic power for Yvraine from the Revenant discipline.",
        },
        "Psyker": "Yvraine can attempt to manifest two psychic powers in each friendly Psychic phase, and attempt to deny one psychic power in each enemy Psychic phase. She knows the Smite power and two psychic powers from the Revenant discipline (pg 76).",
        "Faction Keywords": ["Aeldari", "Ynnari"],
        "Keywords": ["Character", "Infantry", "Psyker", "Yvraine"]
      },
      "The Visarch": {
        "Points": 141,
        "PointsIncludesWargear": false,
        "M": 8,
        "WS": "2+",
        "BS": "2+",
        "S": 3,
        "T": 3,
        "W": 5,
        "A": 5,
        "Ld": 9,
        "Sv": "3+",
        "Wargear": {
          "weapons": [
            ["Asu-var, the Sword of Silent Screams"]
          ]
        },
        "Abilities": {
          "faction": ["Strength from Death", "Ynnead's Will"],
          "Champion of Ynnead": "Each time another AELDARI model is slain within 7\" of the Visarch, roll a D6. On a 4+, the Visarch immediately regains a lost wound. If that model was a CHARACTER, add 1 to the Visarch's Attacks characteristic for the rest of the battle (to a maximum Attacks characteristic of 7).",
          "Warden of Yvraine": "If Yvraine suffers a wound or mortal wound while the Visarch is within 3\", you can choose for the Visarch to shield Yvraine. If you do, roll a D6. On a 2+ Yvraine does not suffer the wound, but the Visarch suffers a mortal wound.",
        },
        "Faction Keywords": ["Aeldari", "Ynnari"],
        "Keywords": ["Character", "Infantry", "The Visarch"]
      },
      "The Yncarne": {
        "Points": 337,
        "PointsIncludesWargear": false,
        "M": 8,
        "WS": "2+",
        "BS": "2+",
        "S": 6,
        "T": 6,
        "W": 9,
        "A": 6,
        "Ld": 9,
        "Sv": "3+",
        "Wargear": {
          "weapons": [
            ["Vilith-zhar, the Sword of Souls"]
          ]
        },
        "Abilities": {
          "faction": ["Strength from Death"],
          "Daemonic Avatar": "The Yncarne has a 4+ invulnerable save.",
          "Inevitable Death": "When you set up the Yncarne, it must be set up in waiting rather than on the battlefield. When a unit (friend or foe) is completely destroyed, you may immediately set up the Yncarne as close as possible to the position of that unit, more than 1\" from all enemy models. Each time a unit (friend or foe) is completely destroyed, you may immediately remove the Yncarne from the battlefield and set it up again as close as possible to the position of that unit, more than 1\" from all enemy models. The Yncarne may not charge in the turn it is set up in this manner.",
          "Ynnead Stirs": "Friendly YNNARI units within 6\" of the Yncarne automatically pass Morale tests. In addition, whenever a friendly YNNARI unit within 6\" of the Yncarne suffers an unsaved wound or mortal wound, roll a D6. On a 6 that wound is ignored.",
          "Avatar of Ynnead": "Each time another AELDARI model is slain within 7\" of the Yncarne, roll a D6. On a 4+, the Yncarne regains a wound lost earlier in the battle."
        },
        "Psyker": "The Yncarne can attempt to manifest two psychic powers in each friendly Psychic phase, and attempt to deny one psychic power in each enemy Psychic phase. It knows the Smite power and two psychic powers from the Revenant discipline (pg 76).",
        "Faction Keywords": ["Aeldari", "Ynnari"],
        "Keywords": ["Character", "Monster", "Daemon", "Fly", "Psyker", "The Yncarne"]
      }
    },
    "units": {
      "HQ": {
        "The Visarch": {
          "modelTypes": [
            {
              "model": "The Visarch",
              "defaultAmount": 1,
              "maxAmount": 1
            }
          ],
          "power": [
            [1, 7]
          ]
        },
        "The Yncarne": {
          "modelTypes": [
            {
              "model": "The Yncarne",
              "defaultAmount": 1,
              "maxAmount": 1
            }
          ],
          "power": [
            [1, 17]
          ]
        },
        "Yvraine": {
          "modelTypes": [
            {
              "model": "Yvraine",
              "defaultAmount": 1,
              "maxAmount": 1
            }
          ],
          "power": [
            [1, 7]
          ]
        }
      },
      "Troops": {},
      "Elites": {},
      "Fast Attack": {},
      "Heavy Support": {},
      "Dedicated Transport": {},
      "Flyer": {},
      "Fortification": {},
      "Lord Of War": {}
    }
  },
  "Drukhari": {
    "icon": "drukhari.png",
  },
  "Necrons": {
    "icon": "necrons.png",
  },
  "Orks": {
    "icon": "orks.png",
  },
  "T'au Empire": {
    "icon": "tau.png",
  },
  "Tyranids": {
    "icon": "tyranids.png",
  },
  "Genestealer Cults": {
    "icon": "genestealers.png",
  },
  "Space Marines": {
    "icon": "spacemarines.png",
  },
  "Blood Angels": {
    "icon": "bloodangels.png",
  },
  "Dark Angels": {
    "icon": "darkangels.png",
  },
  "Space Wolves": {
    "icon": "spacewolves.png",
  },
  "Grey Knights": {
    "icon": "greyknights.png",
  },
  "Deathwatch": {
    "icon": "deathwatch.png",
  },
  "Legion of the Damned": {
    "icon": "legionofthedamned.png",
  },
  "Astra Militarum": {
    "icon": "astramilitarum.png",
  },
  "Adeptus Mechanicus": {
    "icon": "adeptusmechanicus.png",
  },
  "Imperial Knights": {
    "icon": "imperialknights.png",
  },
  "Imperial Agents": {
    "icon": "imperialagents.png",
  },
  "Talons of the Emporer": {
    "icon": "talonsoftheemperor.png",
  },
  "Heretic Astartes": {
    "icon": "hereticastartes.png",
  },
  "Chaos Daemons": {
    "icon": "chaosdaemons.png",
  },
  "Questor Traitoris": {
    "icon": "questortraitoris.png",
  }
};

export default factions;
