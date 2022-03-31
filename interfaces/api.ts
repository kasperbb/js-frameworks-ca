import { Nullable } from './utils'

export namespace API {
  export interface GameList {
    count: number
    next: Nullable<string>
    previous: Nullable<string>
    results: Game[]
  }

  export interface Game {
    id: number
    slug: string
    name: string
    released: string
    tba: boolean
    background_image: string
    rating: number
    rating_top: number
    ratings: object
    ratings_count: number
    reviews_text_count: string
    added: number
    added_by_status: object
    metacritic: number
    playtime: number
    suggestions_count: number
    updated: string
    esrb_rating: Nullable<object>
    platforms: object[]
    tags: Tag[]
  }

  export interface GameDetails {
    id: number
    slug: string
    name: string
    name_original: string
    description: string
    metacritic: number
    metacritic_platforms: {
      metascore: number
      url: string
    }[]
    released: string
    tba: boolean
    updated: string
    background_image: string
    background_image_additional: string
    website: string
    rating: number
    rating_top: number
    ratings: {}
    reactions: {}
    added: number
    added_by_status: {}
    playtime: number
    screenshots_count: number
    movies_count: number
    creators_count: number
    achievements_count: number
    parent_achievements_count: string
    reddit_url: string
    reddit_name: string
    reddit_description: string
    reddit_logo: string
    reddit_count: number
    twitch_count: string
    youtube_count: string
    reviews_text_count: string
    ratings_count: number
    suggestions_count: number
    alternative_names: string[]
    metacritic_url: string
    parents_count: number
    additions_count: number
    game_series_count: number
    esrb_rating: {
      id: number
      slug: string
      name: string
    }
    platforms: {
      platform: {
        id: number
        slug: string
        name: string
      }
      released_at: string
      requirements: {
        minimum: string
        recommended: string
      }
    }[]
  }

  export interface Tag {
    games_count: number
    id: number
    image_background: string
    language: string
    name: string
    slug: string
  }
}
