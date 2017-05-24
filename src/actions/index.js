const FEED_ANIMAL = 'FEED_ANIMAL'
const FEED_ANIMAL_START = 'FEED_ANIMAL_START'

export const feedAnimal = (feed) => ({
	type: FEED_ANIMAL,
	feed
})

export const selectFeedAnimalStart = (target) => ({
	type: FEED_ANIMAL_START,
	target
})