
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Film, Search, User, MessageSquare } from "lucide-react";

const Navbar: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border py-4">
      <div className="movie-container">
        <div className="flex items-center justify-between">
          {/* Logo and site name */}
          <div className="flex items-center space-x-2">
            <Film className="h-6 w-6 text-movie-purple-300" />
            <a href="/" className="text-xl font-display font-bold text-foreground">
              CineTalk
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <a 
              href="/" 
              className="text-foreground hover:text-movie-purple-300 transition-colors"
            >
              Home
            </a>
            <a 
              href="#movies" 
              className="text-foreground hover:text-movie-purple-300 transition-colors"
            >
              Movies
            </a>
            <a 
              href="#discussions" 
              className="text-foreground hover:text-movie-purple-300 transition-colors"
            >
              Discussions
            </a>
            <a 
              href="#reviews" 
              className="text-foreground hover:text-movie-purple-300 transition-colors"
            >
              Reviews
            </a>
          </div>

          {/* Search and User Actions */}
          <div className="flex items-center space-x-4">
            {/* Search toggle */}
            {isSearchOpen ? (
              <div className="relative w-full md:w-64 transition-all duration-300 animate-fade-in">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search movies, reviews..." 
                  className="pl-8 pr-4 py-2 w-full md:w-64 bg-muted/50"
                  autoFocus
                  onBlur={() => setIsSearchOpen(false)}
                />
              </div>
            ) : (
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setIsSearchOpen(true)}
                className="text-muted-foreground hover:text-foreground"
              >
                <Search className="h-5 w-5" />
              </Button>
            )}
            
            {/* Discussions */}
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <MessageSquare className="h-5 w-5" />
            </Button>
            
            {/* User Profile / Login */}
            <Button variant="outline" className="hidden md:flex items-center space-x-2">
              <User className="h-4 w-4 mr-1" />
              <span>Sign In</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
