const FEED_ANIMAL = 'FEED_ANIMAL'
const FEED_ANIMAL_SELECT = 'FEED_ANIMAL_SELECT'

export const feedAnimal = () => ({
	type: FEED_ANIMAL
})

export const selectFeedAnimalStart = (target) => ({
	type: FEED_ANIMAL_SELECT,
	target
})