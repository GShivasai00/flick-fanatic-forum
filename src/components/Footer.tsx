
import React from "react";
import { Separator } from "@/components/ui/separator";
import { Film } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-card text-card-foreground pt-12 pb-6">
      <div className="movie-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Film className="h-5 w-5 text-movie-purple-300" />
              <span className="text-lg font-display font-bold">CineTalk</span>
            </div>
            <p className="text-sm text-muted-foreground">
              A community for movie lovers to discuss, review, and discover great films together.
            </p>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-muted-foreground hover:text-movie-purple-300 transition-colors">Home</a>
              </li>
              <li>
                <a href="#movies" className="text-muted-foreground hover:text-movie-purple-300 transition-colors">Movies</a>
              </li>
              <li>
                <a href="#discussion" className="text-muted-foreground hover:text-movie-purple-300 transition-colors">Discussions</a>
              </li>
              <li>
                <a href="#reviews" className="text-muted-foreground hover:text-movie-purple-300 transition-colors">Reviews</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-movie-purple-300 transition-colors">Action</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-movie-purple-300 transition-colors">Drama</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-movie-purple-300 transition-colors">Sci-Fi</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-movie-purple-300 transition-colors">Thriller</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-movie-purple-300 transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-movie-purple-300 transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-movie-purple-300 transition-colors">Cookie Policy</a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-6" />

        <div className="text-center text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} CineTalk. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
