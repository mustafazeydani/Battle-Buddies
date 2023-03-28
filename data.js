import {
    v4 as uuidv4
} from 'https://jspm.dev/uuid'

const cardAttributes = [{
        name: "Fire",
        srcAttr: "./assets/card/card-types/fire.webp",
        animation: "./assets/animations/fire.webp",
        frame: 81,
        duration: 1.5
    },
    {
        name: "Light",
        srcAttr: "./assets/card/card-types/light.webp",
        animation: "./assets/animations/light.webp",
        frame: 16,
        duration: 1.5
    },
    {
        name: "Wind",
        srcAttr: "./assets/card/card-types/wind.webp",
        animation: "./assets/animations/wind.webp",
        frame: 10,
        duration: 1
    },
    {
        name: "Water",
        srcAttr: "./assets/card/card-types/water.webp",
        animation: "./assets/animations/water.webp",
        frame: 17,
        duration: 1
    }
]

const cardTypes = [{
        name: "Effect",
        srcType: "./assets//card/frames/Effect.webp",
        percent: 40
    },
    {
        name: "Normal",
        srcType: "./assets/card/frames/Normal.webp",
        percent: 28
    },
    {
        name: "Fusion",
        srcType: "./assets/card/frames/Fusion.webp",
        percent: 15
    },
    {
        name: "Ritual",
        srcType: "./assets/card/frames/Ritual.webp",
        percent: 10
    },
    {
        name: "Synchro",
        srcType: "./assets/card/frames/Synchro.webp",
        percent: 5
    },
    {
        name: "Xyz",
        srcType: "./assets/card/frames/Xyz.webp",
        percent: 2
    }
]

const data = [{
        cardType: {},
        title: "Code Sensei",
        cardAttribute: {},
        face: "./assets/photos/Mustafa.gif",
        charType: "[Coding Conjurer ",
        description: "This guy is a coding prodigy, he writes code faster than thought, leaving opponents stunned and scrambling to keep up with his furious programming skills.",
        used: false,
        level: 1,
        health: 1,
        atk: 1,
        def: 1,
        uuid: uuidv4()
    },
    {
        cardType: {},
        title: "Calculus Commander",
        cardAttribute: {},
        face: "./assets/photos/Radwan.gif",
        charType: "[Calculation King ",
        description: "My algebraic abilities are unparalleled. I'll use them to unleash a devastating attack that will leave you reeling!",
        used: false,
        level: 1,
        health: 1,
        atk: 1,
        def: 1,
        uuid: uuidv4()
    },
    {
        cardType: {},
        title: "Head Bopper",
        cardAttribute: {},
        face: "./assets/photos/Khayat.gif",
        charType: "[Trickster ",
        description: "Watch out, I may be bobbing my head to the beat, but when it comes to a fight, I'll make your head spin faster than my dance moves!",
        used: false,
        level: 1,
        health: 1,
        atk: 1,
        def: 1,
        uuid: uuidv4()
    },
    {
        cardType: {},
        title: "Clap Crusher",
        cardAttribute: {},
        face: "./assets/photos/Abbas.gif",
        charType: "[Clapping Lord ",
        description: "I'll shuffle my way through your cards and crush them with my clapping hands - my rhythm will be your destruction!",
        used: false,
        level: 1,
        health: 1,
        atk: 1,
        def: 1,
        uuid: uuidv4()
    },
    {
        cardType: {},
        title: "The Flipper",
        cardAttribute: {},
        face: "./assets/photos/Omar.webp",
        charType: "[Rapid Flipper ",
        description: "The Flipper's middle finger is not just a rude gesture, it's also a weapon. His lightning-fast jabs to his opponents' pressure points make them hear the 'whoosh' before they feel the 'ouch'.",
        used: false,
        level: 1,
        health: 1,
        atk: 1,
        def: 1,
        uuid: uuidv4()
    },
    {
        cardType: {},
        title: "The Mastermind",
        cardAttribute: {},
        face: "./assets/photos/Assaf.gif",
        charType: "[Strategist ",
        description: "I may look goofy, but I strike with deadly precision. Taking out my opponents one by one. By the time they realize what's happening, it's already too late.",
        used: false,
        level: 1,
        health: 1,
        atk: 1,
        def: 1,
        uuid: uuidv4()
    },
    {
        cardType: {},
        title: "The Charmer",
        cardAttribute: {},
        face: "./assets/photos/Ramez.gif",
        charType: "[Manipulator ",
        description: "Watch as my charm disarms not only you, but also your fighting spirit. I'm not just a player, I'm a master manipulator!",
        used: false,
        level: 1,
        health: 1,
        atk: 1,
        def: 1,
        uuid: uuidv4()
    },
    {
        cardType: {},
        title: "Laserlord",
        cardAttribute: {},
        face: "./assets/photos/Hanki.webp",
        charType: "[Villainous Leader ",
        description: "I am a leader of men, feared by my enemies and respected by my allies, for my power and my intelligence. I'll use my lazereyes to burn your cards to ashes!",
        used: false,
        level: 1,
        health: 1,
        atk: 1,
        def: 1,
        uuid: uuidv4()
    }
]

const dataEnemyAll = [{
        cardType: cardTypes[0],
        title: "Achacha Chanbara",
        cardAttribute: {},
        face: "./assets/photos-enemy/Achacha-Chanbara.webp",
        back: "./assets/card/frames/back.webp",
        charType: "[Warrior / Effect]",
        description: "This quick and agile warrior wields a sharp katana and can deliver a deadly strike to its opponent.",
        used: false,
        picked: false,
        level: 1,
        health: 1,
        atk: 1,
        def: 1
    },
    {
        cardType: cardTypes[0],
        title: "Acorno",
        cardAttribute: {},
        face: "./assets/photos-enemy/Acorno.webp",
        back: "./assets/card/frames/back.webp",
        charType: "[Plant / Effect]",
        description: "This small but mighty acorn can grow into a towering tree, causing chaos and destruction on the field.",
        used: false,
        picked: false,
        level: 1,
        health: 1,
        atk: 1,
        def: 1
    },
    {
        cardType: cardTypes[0],
        title: "Alien Skull",
        cardAttribute: {},
        face: "./assets/photos-enemy/Alien-Skull.webp",
        back: "./assets/card/frames/back.webp",
        charType: "[Reptile / Effect]",
        description: "This otherworldly monster uses its powerful psychic abilities to manipulate its enemies and turn the tides of battle.",
        used: false,
        picked: false,
        level: 1,
        health: 1,
        atk: 1,
        def: 1
    },
    {
        cardType: cardTypes[0],
        title: "Amazoness Tiger",
        cardAttribute: {},
        face: "./assets/photos-enemy/Amazoness-Tiger.webp",
        back: "./assets/card/frames/back.webp",
        charType: "[Beast / Effect]",
        description: "This fierce feline is a skilled hunter, stalking its prey and delivering a ferocious attack.",
        used: false,
        picked: false,
        level: 1,
        health: 1,
        atk: 1,
        def: 1
    },
    {
        cardType: cardTypes[0],
        title: "Ameba",
        cardAttribute: {},
        face: "./assets/photos-enemy/Ameba.webp",
        back: "./assets/card/frames/back.webp",
        charType: "[Aqua / Effect]",
        description: "This microscopic creature may seem harmless, but it can quickly multiply and swarm its enemies.",
        used: false,
        picked: false,
        level: 1,
        health: 1,
        atk: 1,
        def: 1
    },
    {
        cardType: cardTypes[0],
        title: "Ancient Gear Frame",
        cardAttribute: {},
        face: "./assets/photos-enemy/Ancient-Gear-Frame.webp",
        back: "./assets/card/frames/back.webp",
        charType: "[Machine / Effect]",
        description: "This ancient machine has been restored to its former glory, and can crush its enemies with its immense strength.",
        used: false,
        picked: false,
        level: 1,
        health: 1,
        atk: 1,
        def: 1
    },
    {
        cardType: cardTypes[0],
        title: "Ape Fighter",
        cardAttribute: {},
        face: "./assets/photos-enemy/Ape-Fighter.webp",
        back: "./assets/card/frames/back.webp",
        charType: "[Beast / Effect]",
        description: "This powerful primate is a skilled fighter, using its brute strength to overpower its enemies.",
        used: false,
        picked: false,
        level: 1,
        health: 1,
        atk: 1,
        def: 1
    },
    {
        cardType: cardTypes[0],
        title: "Archfiend Cavalry",
        cardAttribute: {},
        face: "./assets/photos-enemy/Archfiend-Cavalry.webp",
        back: "./assets/card/frames/back.webp",
        charType: "[Fiend / Effect]",
        description: "This dark knight rides on the back of a fearsome monster, striking fear into the hearts of its opponents.",
        used: false,
        picked: false,
        level: 1,
        health: 1,
        atk: 1,
        def: 1
    },

    // ----------------------- Normal --------------------------
    {
        cardType: cardTypes[1],
        title: "Aqua Snake",
        cardAttribute: {},
        face: "./assets/photos-enemy/Aqua-Snake.webp",
        back: "./assets/card/frames/back.webp",
        charType: "[Aqua / Normal]",
        description: "This sleek serpent can move quickly through water, surprising its enemies with lightning-fast attacks.",
        used: false,
        picked: false,
        level: 1,
        health: 1,
        atk: 1,
        def: 1
    },
    {
        cardType: cardTypes[1],
        title: "Arma Knight",
        cardAttribute: {},
        face: "./assets/photos-enemy/Arma-Knight.webp",
        back: "./assets/card/frames/back.webp",
        charType: "[Warrior / Normal]",
        description: "This heavily-armored knight can withstand even the toughest of blows, and is a stalwart defender of its allies.",
        used: false,
        picked: false,
        level: 1,
        health: 1,
        atk: 1,
        def: 1
    },
    {
        cardType: cardTypes[1],
        title: "Armaill",
        cardAttribute: {},
        face: "./assets/photos-enemy/Armaill.webp",
        back: "./assets/card/frames/back.webp",
        charType: "[Aqua / Normal]",
        description: "This nimble warrior uses its speed and agility to evade attacks and strike its opponents when they least expect it.",
        used: false,
        picked: false,
        level: 1,
        health: 1,
        atk: 1,
        def: 1
    },
    {
        cardType: cardTypes[1],
        title: "Battle Footballer",
        cardAttribute: {},
        face: "./assets/photos-enemy/Battle-Footballer.webp",
        back: "./assets/card/frames/back.webp",
        charType: "[Machine / Normal]",
        description: "This football-playing robot is a master of both offense and defense, and can outmaneuver even the most skilled opponents.",
        used: false,
        picked: false,
        level: 1,
        health: 1,
        atk: 1,
        def: 1
    },
    {
        cardType: cardTypes[1],
        title: "Big Koala",
        cardAttribute: {},
        face: "./assets/photos-enemy/Big-Koala.webp",
        back: "./assets/card/frames/back.webp",
        charType: "[Beast / Normal]",
        description: "This massive marsupial may look cuddly, but its powerful claws and ferocious roar can strike fear into the hearts of its enemies.",
        used: false,
        picked: false,
        level: 1,
        health: 1,
        atk: 1,
        def: 1
    },
    {
        cardType: cardTypes[1],
        title: "Claw Reacher",
        cardAttribute: {},
        face: "./assets/photos-enemy/Claw-Reacher.webp",
        back: "./assets/card/frames/back.webp",
        charType: "[Fiend / Normal]",
        description: "This monster has sharp claws that can extend to great lengths, allowing it to strike from a safe distance.",
        used: false,
        picked: false,
        level: 1,
        health: 1,
        atk: 1,
        def: 1
    },
    {
        cardType: cardTypes[1],
        title: "Dark Blade",
        cardAttribute: {},
        face: "./assets/photos-enemy/Dark-Blade.webp",
        back: "./assets/card/frames/back.webp",
        charType: "[Warrior / Normal]",
        description: "This fearsome warrior wields a powerful sword, and can vanquish its enemies with a single blow.",
        used: false,
        picked: false,
        level: 1,
        health: 1,
        atk: 1,
        def: 1
    },
    {
        cardType: cardTypes[1],
        title: "Disk Magician",
        cardAttribute: {},
        face: "./assets/photos-enemy/Disk-Magician.webp",
        back: "./assets/card/frames/back.webp",
        charType: "[Machine / Normal]",
        description: "This master of illusions can create multiple copies of itself, confusing and disorienting its enemies.",
        used: false,
        picked: false,
        level: 1,
        health: 1,
        atk: 1,
        def: 1
    },

    // ----------------------- Fusion --------------------------
    {
        cardType: cardTypes[2],
        title: "Empress Judge",
        cardAttribute: {},
        face: "./assets/photos-enemy/Empress-Judge.webp",
        back: "./assets/card/frames/back.webp",
        charType: "[Warrior / Fusion]",
        description: "This powerful queen commands the respect and loyalty of her followers, and can strike down any who oppose her.",
        used: false,
        picked: false,
        level: 1,
        health: 1,
        atk: 1,
        def: 1
    },
    {
        cardType: cardTypes[2],
        title: "Frightfur wolf",
        cardAttribute: {},
        face: "./assets/photos-enemy/Frightfur-wolf.webp",
        back: "./assets/card/frames/back.webp",
        charType: "[Fiend / Fusion]",
        description: "This terrifying monster is made up of stitched-together animal parts, and can deliver a devastating attack with its razor-sharp teeth.",
        used: false,
        picked: false,
        level: 1,
        health: 1,
        atk: 1,
        def: 1
    },
    {
        cardType: cardTypes[2],
        title: "Fusionist",
        cardAttribute: {},
        face: "./assets/photos-enemy/Fusionist.webp",
        back: "./assets/card/frames/back.webp",
        charType: "[Beast / Fusion]",
        description: "This creature is a master of fusing with other monsters, creating powerful and unpredictable hybrids.",
        used: false,
        picked: false,
        level: 1,
        health: 1,
        atk: 1,
        def: 1
    },
    {
        cardType: cardTypes[2],
        title: "Koalo Koala",
        cardAttribute: {},
        face: "./assets/photos-enemy/Koalo-Koala.webp",
        back: "./assets/card/frames/back.webp",
        charType: "[Beast / Fusion]",
        description: "This cute and cuddly creature may not look like much, but its healing powers can save its allies in times of need.",
        used: false,
        picked: false,
        level: 1,
        health: 1,
        atk: 1,
        def: 1
    },
    {
        cardType: cardTypes[2],
        title: "Marine Beast",
        cardAttribute: {},
        face: "./assets/photos-enemy/Marine-Beast.webp",
        back: "./assets/card/frames/back.webp",
        charType: "[Fish / Fusion]",
        description: "This fearsome sea monster can move quickly through water, and can unleash a powerful blast of water to drown its enemies.",
        used: false,
        picked: false,
        level: 1,
        health: 1,
        atk: 1,
        def: 1
    },
    {
        cardType: cardTypes[2],
        title: "Pragtical",
        cardAttribute: {},
        face: "./assets/photos-enemy/Pragtical.webp",
        back: "./assets/card/frames/back.webp",
        charType: "[Dinosaur / Fusion]",
        description: "This mechanical monster is a master of practical jokes, using its wits and cunning to outsmart its enemies.",
        used: false,
        picked: false,
        level: 1,
        health: 1,
        atk: 1,
        def: 1
    },
    {
        cardType: cardTypes[2],
        title: "Soul Hunter",
        cardAttribute: {},
        face: "./assets/photos-enemy/Soul-Hunter.webp",
        back: "./assets/card/frames/back.webp",
        charType: "[Fiend / Fusion]",
        description: "This sinister creature feeds on the souls of its enemies, growing stronger with each victory.",
        used: false,
        picked: false,
        level: 1,
        health: 1,
        atk: 1,
        def: 1
    },
    {
        cardType: cardTypes[2],
        title: "Zombie Warrior",
        cardAttribute: {},
        face: "./assets/photos-enemy/Zombie-Warrior.webp",
        back: "./assets/card/frames/back.webp",
        charType: "[Zombie / Fusion]",
        description: "This undead warrior is a relentless fighter, immune to many types of attacks and able to endure even the toughest battles.",
        used: false,
        picked: false,
        level: 1,
        health: 1,
        atk: 1,
        def: 1
    },
    // ----------------------- Ritual --------------------------
    {
        cardType: cardTypes[3],
        title: "Chakra",
        cardAttribute: {},
        face: "./assets/photos-enemy/Chakra.webp",
        back: "./assets/card/frames/back.webp",
        charType: "[Fiend / Ritual]",
        description: "This mystic creature channels its energy to unleash devastating attacks, overwhelming its enemies with its power.",
        used: false,
        picked: false,
        level: 1,
        health: 1,
        atk: 1,
        def: 1
    },
    {
        cardType: cardTypes[3],
        title: "Crab Turtle",
        cardAttribute: {},
        face: "./assets/photos-enemy/Crab-Turtle.webp",
        back: "./assets/card/frames/back.webp",
        charType: "[Aqua / Ritual]",
        description: "This armored beast is a master of defense, able to withstand even the strongest attacks and retaliate with its crushing pincers.",
        used: false,
        picked: false,
        level: 1,
        health: 1,
        atk: 1,
        def: 1
    },
    {
        cardType: cardTypes[3],
        title: "Cyberse Magician",
        cardAttribute: {},
        face: "./assets/photos-enemy/Cyberse-Magician.webp",
        back: "./assets/card/frames/back.webp",
        charType: "[Cyberse / Ritual]",
        description: "This powerful wizard is a master of technology, using its skills to hack into its enemies' defenses and launch devastating attacks.",
        used: false,
        picked: false,
        level: 1,
        health: 1,
        atk: 1,
        def: 1
    },
    {
        cardType: cardTypes[3],
        title: "Dokurorider",
        cardAttribute: {},
        face: "./assets/photos-enemy/Dokuro-Rider.webp",
        back: "./assets/card/frames/back.webp",
        charType: "[Zombie / Ritual]",
        description: "This dark knight rides on the back of a fearsome steed, wielding a lance and scythe to strike down its enemies with deadly precision.",
        used: false,
        picked: false,
        level: 1,
        health: 1,
        atk: 1,
        def: 1
    },
    {
        cardType: cardTypes[3],
        title: "Fiend's Mirror",
        cardAttribute: {},
        face: "./assets/photos-enemy/Fiend's-Mirror.webp",
        back: "./assets/card/frames/back.webp",
        charType: "[Fiend / Ritual]",
        description: "Those who gaze too long into Fiend's Mirror risk losing their minds, as the mirror's dark power can corrupt and warp even the strongest of wills.",
        used: false,
        picked: false,
        level: 1,
        health: 1,
        atk: 1,
        def: 1
    },
    {
        cardType: cardTypes[3],
        title: "Fortress Whale",
        cardAttribute: {},
        face: "./assets/photos-enemy/Fortress-Whale.webp",
        back: "./assets/card/frames/back.webp",
        charType: "[Fish / Ritual]",
        description: "This massive sea monster can unleash a powerful jet of water to knock its enemies off balance and clear the field.",
        used: false,
        picked: false,
        level: 1,
        health: 1,
        atk: 1,
        def: 1
    },
    {
        cardType: cardTypes[3],
        title: "Megalith Phaleg",
        cardAttribute: {},
        face: "./assets/photos-enemy/Megalith-Phaleg.webp",
        back: "./assets/card/frames/back.webp",
        charType: "[Rock / Ritual]",
        description: "This towering golem is a master of earth magic, able to manipulate the very ground beneath its enemies' feet.",
        used: false,
        picked: false,
        level: 1,
        health: 1,
        atk: 1,
        def: 1
    },
    {
        cardType: cardTypes[3],
        title: "Transonic Bird",
        cardAttribute: {},
        face: "./assets/photos-enemy/Transonic-Bird.webp",
        back: "./assets/card/frames/back.webp",
        charType: "[Winged Beast / Ritual]",
        description: "This swift avian can move at incredible speeds, striking its enemies with lightning-fast attacks that are nearly impossible to dodge.",
        used: false,
        picked: false,
        level: 1,
        health: 1,
        atk: 1,
        def: 1
    },
    // ----------------------- Synchro --------------------------
    {
        cardType: cardTypes[4],
        title: "Jurrac Giganoto",
        cardAttribute: {},
        face: "./assets/photos-enemy/Jurrac-Giganoto.webp",
        back: "./assets/card/frames/back.webp",
        charType: "[Dinosaur / Synchro]",
        description: "This fearsome dinosaur is a master of fire and destruction, able to incinerate its enemies with a single breath.",
        used: false,
        picked: false,
        level: 1,
        health: 1,
        atk: 1,
        def: 1
    },
    {
        cardType: cardTypes[4],
        title: "Lightning Tricorn",
        cardAttribute: {},
        face: "./assets/photos-enemy/Lightning-Tricorn.webp",
        back: "./assets/card/frames/back.webp",
        charType: "[Beast / Synchro]",
        description: "This electrified unicorn can charge up its horn to deliver a devastating shock to its enemies, leaving them paralyzed and vulnerable.",
        used: false,
        picked: false,
        level: 1,
        health: 1,
        atk: 1,
        def: 1
    },
    {
        cardType: cardTypes[4],
        title: "Orient Dragon",
        cardAttribute: {},
        face: "./assets/photos-enemy/Orient-Dragon.webp",
        back: "./assets/card/frames/back.webp",
        charType: "[Dragon / Synchro]",
        description: "This wise dragon is a master of ancient magic, able to manipulate time and space to gain the upper hand in battle.",
        used: false,
        picked: false,
        level: 1,
        health: 1,
        atk: 1,
        def: 1
    },
    {
        cardType: cardTypes[4],
        title: "Satellite Warrior",
        cardAttribute: {},
        face: "./assets/photos-enemy/Satellite-Warrior.webp",
        back: "./assets/card/frames/back.webp",
        charType: "[Warrior / Synchro]",
        description: "This high-tech warrior uses its advanced weaponry and stealth tactics to take out its enemies from a distance.",
        used: false,
        picked: false,
        level: 1,
        health: 1,
        atk: 1,
        def: 1
    },
    {
        cardType: cardTypes[4],
        title: "Scrap Dragon",
        cardAttribute: {},
        face: "./assets/photos-enemy/Scrap-Dragon.webp",
        back: "./assets/card/frames/back.webp",
        charType: "[Dragon / Synchro]",
        description: "This fierce dragon can unleash a powerful blast of fire and metal scraps, demolishing its enemies' defenses and clearing the field.",
        used: false,
        picked: false,
        level: 1,
        health: 1,
        atk: 1,
        def: 1
    },
    {
        cardType: cardTypes[4],
        title: "Sun Dragon Inti",
        cardAttribute: {},
        face: "./assets/photos-enemy/Sun-Dragon-Inti.webp",
        back: "./assets/card/frames/back.webp",
        charType: "[Dragon / Synchro]",
        description: "This blazing dragon is a master of the sun's energy, using its intense heat and light to incinerate its enemies and bring forth a new day.",
        used: false,
        picked: false,
        level: 1,
        health: 1,
        atk: 1,
        def: 1
    },
    {
        cardType: cardTypes[4],
        title: "Tatsunoko",
        cardAttribute: {},
        face: "./assets/photos-enemy/Tatsunoko.webp",
        back: "./assets/card/frames/back.webp",
        charType: "[Wyrm / Synchro]",
        description: "This sleek robot can transform into various vehicles, allowing it to adapt to any situation and surprise its enemies.",
        used: false,
        picked: false,
        level: 1,
        health: 1,
        atk: 1,
        def: 1
    },
    {
        cardType: cardTypes[4],
        title: "XX-Saber Hyunlei",
        cardAttribute: {},
        face: "./assets/photos-enemy/XX-Saber-Hyunlei.webp",
        back: "./assets/card/frames/back.webp",
        charType: "[Warrior / Synchro]",
        description: "This nimble warrior uses its sword and agility to outmaneuver its enemies and deliver precise strikes that leave them reeling.",
        used: false,
        picked: false,
        level: 1,
        health: 1,
        atk: 1,
        def: 1
    },
    // ----------------------- Xyz --------------------------
    {
        cardType: cardTypes[5],
        title: "Gear Gigant X",
        cardAttribute: {},
        face: "./assets/photos-enemy/Gear-Gigant-X.webp",
        back: "./assets/card/frames/back.webp",
        charType: "[Machine / Xyz]",
        description: "This giant robot is a master of technology, using its advanced weaponry and shields to overpower its enemies and clear the field.",
        used: false,
        picked: false,
        level: 1,
        health: 1,
        atk: 1,
        def: 1
    },
    {
        cardType: cardTypes[5],
        title: "Lavalval Chain",
        cardAttribute: {},
        face: "./assets/photos-enemy/Lavalval-Chain.webp",
        back: "./assets/card/frames/back.webp",
        charType: "[Sea Serpent / Xyz]",
        description: "This fiery creature can channel the power of the earth's molten core, unleashing a devastating blast of lava that can consume its enemies.",
        used: false,
        picked: false,
        level: 1,
        health: 1,
        atk: 1,
        def: 1
    },
    {
        cardType: cardTypes[5],
        title: "Lavalval Ignis",
        cardAttribute: {},
        face: "./assets/photos-enemy/Lavalval-Ignis.webp",
        back: "./assets/card/frames/back.webp",
        charType: "[Warrior / Xyz]",
        description: "This fierce dragon is a master of the flames, able to incinerate anything in its path with a single blast of its fiery breath.",
        used: false,
        picked: false,
        level: 1,
        health: 1,
        atk: 1,
        def: 1
    },
    {
        cardType: cardTypes[5],
        title: "Nine Lives Cat",
        cardAttribute: {},
        face: "./assets/photos-enemy/Nine-Lives-Cat.webp",
        back: "./assets/card/frames/back.webp",
        charType: "[Zombie / Xyz]",
        description: "This cunning feline has multiple lives, allowing it to survive even the toughest battles and emerge victorious in the end.",
        used: false,
        picked: false,
        level: 1,
        health: 1,
        atk: 1,
        def: 1
    },
    {
        cardType: cardTypes[5],
        title: "Pilgrim Reaper",
        cardAttribute: {},
        face: "./assets/photos-enemy/Pilgrim-Reaper.webp",
        back: "./assets/card/frames/back.webp",
        charType: "[Zombie / Xyz]",
        description: "This ominous creature is a harbinger of death, able to summon spirits and other supernatural entities to do its bidding.",
        used: false,
        picked: false,
        level: 1,
        health: 1,
        atk: 1,
        def: 1
    },
    {
        cardType: cardTypes[5],
        title: "Shining Elf",
        cardAttribute: {},
        face: "./assets/photos-enemy/Shining-Elf.webp",
        back: "./assets/card/frames/back.webp",
        charType: "[Spellcaster / Xyz]",
        description: "This mystical creature is a master of light magic, able to heal its allies and banish darkness from the battlefield.",
        used: false,
        picked: false,
        level: 1,
        health: 1,
        atk: 1,
        def: 1
    },
    {
        cardType: cardTypes[5],
        title: "Unformed Void",
        cardAttribute: {},
        face: "./assets/photos-enemy/Unformed-Void.webp",
        back: "./assets/card/frames/back.webp",
        charType: "[Aqua / Xyz]",
        description: "This chaotic entity is a master of entropy, able to break down matter and energy and reshape them into new forms at will.",
        used: false,
        picked: false,
        level: 1,
        health: 1,
        atk: 1,
        def: 1
    },
    {
        cardType: cardTypes[5],
        title: "ZS - Utopic Sage",
        cardAttribute: {},
        face: "./assets/photos-enemy/ZS-Utopic-Sage.webp",
        back: "./assets/card/frames/back.webp",
        charType: "[Warrior / Xyz]",
        description: "This powerful wizard is a master of astral magic, able to tap into the energy of the cosmos and unleash devastating attacks on its enemies.",
        used: false,
        picked: false,
        level: 1,
        health: 1,
        atk: 1,
        def: 1
    }
]

let dataFriend, dataEnemy // global to export 

function resetData() {
    let matchedObj = null
    const charTypes = ["Coding Conjurer", "Calculation King", "Trickster", "Clapping Lord", "Rapid Flipper", "Strategist", "Manipulator", "Villainous Leader"]
    for (let i = 0; i < charTypes.length; i++) {
        data.charType = [`[${charTypes[i]} `]
    }
    // Shuffle My Cards 
    let shuffledArr = data.sort(() => Math.random() - 0.5)
    dataFriend = shuffledArr
    dataFriend.forEach((card) => {
        card.level = Math.floor(Math.random() * 12) + 1
        card.cardType = getRandomCardType()
        card.charType += `/ ${card.cardType.name}]`
        card.cardAttribute = cardAttributes[Math.floor(Math.random() * cardAttributes.length)]
        card.atk = Math.floor(Math.random() * 5.1) * 100 + card.level * 300
        card.def = Math.floor(Math.random() * 5.1) * 100 + card.level * 300
        card.health = card.def * 8
        card.used = false
    })

    dataEnemyAll.forEach((card) => {
        card.picked = false
    })

    dataEnemy = []
    for (let i = 0; i < data.length; i++) {
        do {
            matchedObj = getCardOfType(getRandomCardType())
        } while (!matchedObj) // Keep looking until you find a card
        dataEnemy.push(matchedObj)
    }

    const preloadImage = (url) => {
        const img = new Image();
        img.src = url;
    }

    dataEnemy.forEach(card => {
        preloadImage(card.face)
        card.cardAttribute = cardAttributes[Math.floor(Math.random() * cardAttributes.length)]
        card.level = Math.floor(Math.random() * 12) + 1
        card.atk = Math.floor(Math.random() * 5.1) * 100 + card.level * 300
        card.def = Math.floor(Math.random() * 5.1) * 100 + card.level * 300
        card.health = card.def * 8
        card.used = false
    })
}

function getRandomCardType() {
    const randomNumber = Math.random() * 100;
    let percentageSum = 0;
    for (const cardType of cardTypes) {
        percentageSum += cardType.percent;
        if (randomNumber <= percentageSum) {
            return cardType
        }
    }
}

function getCardOfType(type) {
    const cardsOfType = dataEnemyAll.filter(card => card.cardType === type && !card.picked)
    if (!cardsOfType.length) return null
    if (cardsOfType.length === 1) {
        cardsOfType[0].picked = true
        return cardsOfType[0]
    }
    const randomNumber = Math.floor(Math.random() * cardsOfType.length)
    cardsOfType[randomNumber].picked = true
    return cardsOfType[randomNumber]
}

export {
    dataFriend,
    dataEnemy,
    cardAttributes,
    resetData
}