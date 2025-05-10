
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MessageSquare } from "lucide-react";
import { Movie } from "@/data/moviesData";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <Card className="overflow-hidden movie-card-shadow w-full bg-card h-full flex flex-col">
      <div className="relative aspect-[2/3] overflow-hidden">
        <img
          src={movie.poster}
          alt={`${movie.title} poster`}
          className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-2 right-2">
          <Badge className="bg-movie-purple-300 text-white font-medium">
            {movie.rating.toFixed(1)}
            <Star className="ml-1 h-3 w-3 fill-current" />
          </Badge>
        </div>
      </div>
      <CardContent className="p-4 flex flex-col flex-grow">
        <h3 className="font-display font-semibold text-base line-clamp-1">{movie.title}</h3>
        <div className="text-xs text-muted-foreground mb-2">{movie.year} • {movie.director.split(",")[0]}</div>
        
        <div className="flex flex-wrap gap-1 mb-3">
          {movie.genre.slice(0, 2).map((genre) => (
            <Badge key={genre} variant="outline" className="text-xs bg-secondary text-secondary-foreground">
              {genre}
            </Badge>
          ))}
        </div>
        
        <p className="text-xs text-muted-foreground line-clamp-2 mb-3 flex-grow">
          {movie.plot}
        </p>
        
        <div className="flex items-center text-xs text-muted-foreground mt-auto">
          <MessageSquare className="h-3 w-3 mr-1" />
          <span>{movie.reviewCount} reviews</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
