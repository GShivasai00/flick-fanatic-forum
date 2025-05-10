
export interface Movie {
  id: number;
  title: string;
  year: number;
  director: string;
  genre: string[];
  poster: string;
  backdrop?: string;
  rating: number;
  plot: string;
  reviewCount: number;
  isFeatured?: boolean;
}

export interface Review {
  id: number;
  movieId: number;
  username: string;
  rating: number;
  content: string;
  date: string;
  likes: number;
}

export const movies: Movie[] = [
  {
    id: 1,
    title: "Inception",
    year: 2010,
    director: "Christopher Nolan",
    genre: ["Action", "Sci-Fi", "Thriller"],
    poster: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
    backdrop: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
    rating: 4.8,
    plot: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    reviewCount: 2543,
    isFeatured: true
  },
  {
    id: 2,
    title: "The Matrix",
    year: 1999,
    director: "Lana Wachowski, Lilly Wachowski",
    genre: ["Action", "Sci-Fi"],
    poster: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    rating: 4.7,
    plot: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    reviewCount: 1823
  },
  {
    id: 3,
    title: "Parasite",
    year: 2019,
    director: "Bong Joon-ho",
    genre: ["Drama", "Thriller"],
    poster: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    rating: 4.6,
    plot: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    reviewCount: 1305
  },
  {
    id: 4,
    title: "Pulp Fiction",
    year: 1994,
    director: "Quentin Tarantino",
    genre: ["Crime", "Drama"],
    poster: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
    rating: 4.9,
    plot: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    reviewCount: 3214
  },
  {
    id: 5,
    title: "The Dark Knight",
    year: 2008,
    director: "Christopher Nolan",
    genre: ["Action", "Crime", "Drama"],
    poster: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    backdrop: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    rating: 4.9,
    plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    reviewCount: 4782,
    isFeatured: true
  },
  {
    id: 6,
    title: "Interstellar",
    year: 2014,
    director: "Christopher Nolan",
    genre: ["Adventure", "Drama", "Sci-Fi"],
    poster: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    rating: 4.7,
    plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    reviewCount: 2975
  }
];

export const reviews: Review[] = [
  {
    id: 1,
    movieId: 1,
    username: "filmBuff42",
    rating: 5,
    content: "Inception is a masterpiece of storytelling and visual effects. The way Nolan plays with the concept of dreams within dreams is nothing short of brilliant. The ensemble cast delivers powerful performances across the board.",
    date: "2023-09-25",
    likes: 123
  },
  {
    id: 2,
    movieId: 5,
    username: "cinemaLover",
    rating: 5,
    content: "Heath Ledger's performance as the Joker is legendary and deserving of every accolade. This film redefined what a superhero movie could be - dark, complex, and philosophically rich.",
    date: "2023-10-15",
    likes: 187
  },
  {
    id: 3,
    movieId: 2,
    username: "scifiEnthusiast",
    rating: 4.5,
    content: "Even after all these years, The Matrix remains groundbreaking in its visual style and philosophical depth. The action sequences still hold up remarkably well.",
    date: "2023-11-02",
    likes: 95
  },
  {
    id: 4,
    movieId: 1,
    username: "dreamExplorer",
    rating: 4.8,
    content: "The concept of dream infiltration combined with the emotional core of Cobb's story makes this film both intellectually stimulating and emotionally resonant. Hans Zimmer's score is iconic.",
    date: "2024-01-10",
    likes: 76
  }
];
