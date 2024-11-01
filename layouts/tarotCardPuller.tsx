/*
list of tarot cards
Major Arcana (22 cards) represent significant life events, themes, or spiritual lessons.
Minor Arcana (56 cards) are divided into four suits and represent everyday events, emotions, and experiences:
Cups relate to emotions, relationships, and creativity.
Pentacles (or Coins) pertain to material aspects, work, and finance.
Swords represent thoughts, conflicts, and decisions.
Wands signify passion, action, and ambition.
Major Arcana Cards
The Fool – New beginnings, innocence, adventure
The Magician – Manifestation, power, creativity
The High Priestess – Intuition, mystery, inner knowledge
The Empress – Fertility, nurturing, abundance
The Emperor – Authority, structure, control
The Hierophant – Tradition, spiritual guidance, conformity
The Lovers – Relationships, choices, harmony
The Chariot – Determination, success, willpower
Strength – Courage, patience, self-confidence
The Hermit – Introspection, solitude, inner guidance
The Wheel of Fortune – Cycles, change, luck
Justice – Fairness, truth, cause and effect
The Hanged Man – Surrender, letting go, new perspectives
Death – Transformation, endings, transitions
Temperance – Balance, moderation, harmony
The Devil – Materialism, addiction, bondage
The Tower – Sudden change, upheaval, revelation
The Star – Hope, inspiration, healing
The Moon – Illusion, intuition, subconscious
The Sun – Joy, success, positivity
Judgement – Rebirth, self-evaluation, awakening
The World – Completion, accomplishment, unity
Minor Arcana Cards
Cups
Ace of Cups – New love, emotional beginnings, spirituality
Two of Cups – Partnership, unity, attraction
Three of Cups – Celebration, friendship, collaboration
Four of Cups – Contemplation, apathy, reevaluation
Five of Cups – Loss, regret, disappointment
Six of Cups – Nostalgia, reunion, childhood memories
Seven of Cups – Choices, imagination, illusion
Eight of Cups – Departure, withdrawal, seeking deeper meaning
Nine of Cups – Contentment, satisfaction, gratitude
Ten of Cups – Happiness, fulfillment, family
Page of Cups – Creativity, intuition, new emotions
Knight of Cups – Romance, charm, idealism
Queen of Cups – Compassion, caring, sensitivity
King of Cups – Emotional balance, control, generosity
Pentacles (or Coins)
Ace of Pentacles – New financial opportunity, manifestation, prosperity
Two of Pentacles – Balance, adaptability, juggling resources
Three of Pentacles – Teamwork, collaboration, skill development
Four of Pentacles – Control, security, materialism
Five of Pentacles – Financial loss, poverty, hardship
Six of Pentacles – Generosity, charity, balance of giving and receiving
Seven of Pentacles – Patience, perseverance, long-term vision
Eight of Pentacles – Diligence, craftsmanship, hard work
Nine of Pentacles – Luxury, self-sufficiency, financial gain
Ten of Pentacles – Wealth, inheritance, family legacy
Page of Pentacles – Ambition, new ventures, learning
Knight of Pentacles – Efficiency, reliability, practicality
Queen of Pentacles – Nurturing, resourceful, grounded
King of Pentacles – Security, abundance, leadership
Swords
Ace of Swords – Clarity, breakthroughs, mental focus
Two of Swords – Indecision, choices, stalemate
Three of Swords – Heartbreak, sorrow, betrayal
Four of Swords – Rest, recovery, contemplation
Five of Swords – Conflict, betrayal, defeat
Six of Swords – Transition, moving on, healing
Seven of Swords – Deception, strategy, stealth
Eight of Swords – Restriction, helplessness, limitations
Nine of Swords – Anxiety, worry, nightmares
Ten of Swords – Painful ending, betrayal, collapse
Page of Swords – Curiosity, mental agility, new ideas
Knight of Swords – Ambition, action, haste
Queen of Swords – Independence, perception, honesty
King of Swords – Authority, intellect, truth
Wands
Ace of Wands – Inspiration, new beginnings, growth
Two of Wands – Planning, decisions, progress
Three of Wands – Expansion, foresight, opportunity
Four of Wands – Celebration, harmony, homecoming
Five of Wands – Competition, conflict, rivalry
Six of Wands – Success, recognition, victory
Seven of Wands – Perseverance, defense, challenge
Eight of Wands – Speed, movement, swift action
Nine of Wands – Resilience, persistence, courage
Ten of Wands – Burden, responsibility, stress
Page of Wands – Enthusiasm, exploration, discovery
Knight of Wands – Energy, adventure, impulsiveness
Queen of Wands – Confidence, determination, vibrancy
King of Wands – Leadership, vision, ambition
 */

const cards = [
    "The Fool",
    "The Magician",
    "The High Priestess",
    "The Empress",
    "The Emperor",
    "The Hierophant",
    "The Lovers",
    "The Chariot",
    "Strength",
    "The Hermit",
    "The Wheel of Fortune",
    "Justice",
    "The Hanged Man",
    "Death",
    "Temperance",
    "The Devil",
    "The Tower",
    "The Star",
    "The Moon",
    "The Sun",
    "Judgement",
    "The World",
    "Ace of Cups",
    "Two of Cups",
    "Three of Cups",
    "Four of Cups",
    "Five of Cups",
    "Six of Cups",
    "Seven of Cups",
    "Eight of Cups",
    "Nine of Cups",
    "Ten of Cups",
    "Page of Cups",
    "Knight of Cups",
    "Queen of Cups",
    "King of Cups",
    "Ace of Pentacles",
    "Two of Pentacles",
    "Three of Pentacles",
    "Four of Pentacles",
    "Five of Pentacles",
    "Six of Pentacles",
    "Seven of Pentacles",
    "Eight of Pentacles",
    "Nine of Pentacles",
    "Ten of Pentacles",
    "Page of Pentacles",
    "Knight of Pentacles",
    "Queen of Pentacles",
    "King of Pentacles",
    "Ace of Swords",
    "Two of Swords",
    "Three of Swords",
    "Four of Swords",
    "Five of Swords",
    "Six of Swords",
    "Seven of Swords",
    "Eight of Swords",
    "Nine of Swords",
    "Ten of Swords",
    "Page of Swords",
    "Knight of Swords",
    "Queen of Swords",
    "King of Swords",
    "Ace of Wands",
    "Two of Wands",
    "Three of Wands",
    "Four of Wands",
    "Five of Wands",
    "Six of Wands",
    "Seven of Wands",
    "Eight of Wands",
    "Nine of Wands",
    "Ten of Wands",
    "Page of Wands",
    "Knight of Wands",
    "Queen of Wands",
    "King of Wands"
];

export const tarotCardPuller = () => {
    return cards[Math.floor(Math.random() * cards.length)];
}