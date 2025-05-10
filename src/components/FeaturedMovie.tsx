
import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Film, Star, MessageSquare } from "lucide-react";
import type { Movie } from "@/data/moviesData";

interface FeaturedMovieProps {
  movie: Movie;
}

const FeaturedMovie: React.FC<FeaturedMovieProps> = ({ movie }) => {
  return (
    <div className="relative w-full h-[70vh] overflow-hidden">
      {/* Backdrop image with gradient overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={movie.backdrop || movie.poster} 
          alt={`${movie.title} backdrop`}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 movie-gradient-overlay"></div>
      </div>
      
      {/* Content overlay */}
      <div className="relative h-full movie-container flex items-end pb-16">
        <div className="max-w-3xl text-white">
          <div className="flex items-center space-x-2 mb-3">
            <Badge className="bg-movie-purple-300 text-white">Featured</Badge>
            <Badge className="bg-movie-purple-500">{movie.year}</Badge>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
            {movie.title}
          </h1>
          
          <div className="flex items-center space-x-4 text-sm mb-6">
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
              <span>{movie.rating.toFixed(1)} / 5.0</span>
            </div>
            <div className="flex items-center">
              <MessageSquare className="h-4 w-4 mr-1" />
              <span>{movie.reviewCount} Reviews</span>
            </div>
            <div className="flex items-center">
              <Film className="h-4 w-4 mr-1" />
              <span>{movie.director.split(",")[0]}</span>
            </div>
          </div>
          
          <p className="text-sm md:text-base opacity-90 mb-8 max-w-2xl">
            {movie.plot}
          </p>
          
          <div className="flex flex-wrap gap-3 mb-8">
            {movie.genre.map(genre => (
              <Badge 
                key={genre} 
                variant="outline" 
                className="border-white/30 text-white"
              >
                {genre}
              </Badge>
            ))}
          </div>
          
          <div className="flex space-x-4">
            <Button 
              className="bg-movie-purple-300 hover:bg-movie-purple-500 text-white"
            >
              Read Reviews
            </Button>
            <Button 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 hover:border-white/50"
            >
              Add to Watchlist
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedMovie;
