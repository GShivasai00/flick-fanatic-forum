
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, ThumbsUp } from "lucide-react";
import type { Review } from "@/data/moviesData";

interface ReviewPreviewProps {
  review: Review;
  movieTitle?: string;
}

const ReviewPreview: React.FC<ReviewPreviewProps> = ({ review, movieTitle }) => {
  const initials = review.username
    .split(/\s/)
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <Card className="h-full flex flex-col">
      <CardContent className="pt-6 flex-grow">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center">
            <Avatar className="h-8 w-8 mr-2 bg-movie-purple-100">
              <AvatarFallback className="bg-movie-purple-300 text-white text-xs">
                {initials}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium text-sm">{review.username}</div>
              <div className="text-xs text-muted-foreground">{review.date}</div>
            </div>
          </div>
          <div className="flex items-center bg-secondary px-2 py-1 rounded-full">
            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
            <span className="text-xs font-medium">{review.rating.toFixed(1)}</span>
          </div>
        </div>

        {movieTitle && (
          <div className="mb-2 text-sm font-medium text-movie-purple-300">
            {movieTitle}
          </div>
        )}

        <p className="text-sm text-foreground/90 line-clamp-5 mb-2">
          {review.content}
        </p>
      </CardContent>

      <CardFooter className="pt-2 pb-4 border-t flex items-center justify-between text-muted-foreground">
        <div className="flex items-center text-xs">
          <ThumbsUp className="h-3 w-3 mr-1" />
          <span>{review.likes} likes</span>
        </div>
        <div className="text-xs hover:text-foreground hover:underline cursor-pointer">
          Read full review
        </div>
      </CardFooter>
    </Card>
  );
};

export default ReviewPreview;
