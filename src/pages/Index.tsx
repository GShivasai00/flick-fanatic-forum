import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Film, MessageSquare, Star } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MovieCard from "@/components/MovieCard";
import FeaturedMovie from "@/components/FeaturedMovie";
import ReviewPreview from "@/components/ReviewPreview";

import { movies, reviews } from "@/data/moviesData";

const Index: React.FC = () => {
  const featuredMovie = movies.find(movie => movie.isFeatured) || movies[0];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero section with featured movie */}
        <section>
          <FeaturedMovie movie={featuredMovie} />
        </section>
        
        {/* Movies section */}
        <section className="py-16" id="movies">
          <div className="movie-container">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-display font-bold">Popular Movies</h2>
                <p className="text-muted-foreground mt-1">Discover trending movies on CineTalk</p>
              </div>
              
              <Button variant="outline" className="hidden md:flex items-center">
                View All <Film className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
              {movies.slice(0, 5).map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
            
            <div className="mt-8 text-center md:hidden">
              <Button variant="outline">View All Movies</Button>
            </div>
          </div>
        </section>
        
        {/* Browse categories section */}
        <section className="py-16 bg-card">
          <div className="movie-container">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-display font-bold">Browse Categories</h2>
                <p className="text-muted-foreground mt-1">Find movies by your favorite genre</p>
              </div>
            </div>
            
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid grid-cols-4 md:grid-cols-8 gap-2">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="action">Action</TabsTrigger>
                <TabsTrigger value="drama">Drama</TabsTrigger>
                <TabsTrigger value="scifi">Sci-Fi</TabsTrigger>
                <TabsTrigger value="thriller">Thriller</TabsTrigger>
                <TabsTrigger value="comedy">Comedy</TabsTrigger>
                <TabsTrigger value="horror">Horror</TabsTrigger>
                <TabsTrigger value="romance">Romance</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="mt-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                  {movies.slice(0, 5).map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                  ))}
                </div>
              </TabsContent>
              
              {/* We'd populate these with filtered movies based on genre */}
              <TabsContent value="action" className="mt-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                  {movies.filter(m => m.genre.includes('Action')).slice(0, 5).map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="scifi" className="mt-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                  {movies.filter(m => m.genre.includes('Sci-Fi')).slice(0, 5).map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="drama" className="mt-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                  {movies.filter(m => m.genre.includes('Drama')).slice(0, 5).map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="thriller" className="mt-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                  {movies.filter(m => m.genre.includes('Thriller')).slice(0, 5).map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                  ))}
                </div>
              </TabsContent>
              
              {/* Other tabs would be implemented similarly */}
            </Tabs>
          </div>
        </section>
        
        {/* Reviews section */}
        <section className="py-16" id="reviews">
          <div className="movie-container">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-display font-bold">Recent Reviews</h2>
                <p className="text-muted-foreground mt-1">See what the community is talking about</p>
              </div>
              
              <Button variant="outline" className="hidden md:flex items-center">
                All Reviews <Star className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review) => {
                const movie = movies.find(m => m.id === review.movieId);
                return (
                  <ReviewPreview 
                    key={review.id} 
                    review={review} 
                    movieTitle={movie?.title}
                  />
                );
              })}
            </div>
            
            <div className="mt-8 text-center md:hidden">
              <Button variant="outline">View All Reviews</Button>
            </div>
          </div>
        </section>
        
        {/* Discussion section */}
        <section className="py-16 bg-card" id="discussions">
          <div className="movie-container">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-display font-bold">Join The Discussion</h2>
                <p className="text-muted-foreground mt-1">Connect with fellow movie enthusiasts</p>
              </div>
              
              <Button variant="outline" className="hidden md:flex items-center">
                All Discussions <MessageSquare className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6 items-stretch">
                <div className="flex-1 bg-background rounded-lg p-6 border">
                  <h3 className="text-lg font-semibold mb-2">This Week's Hot Topic</h3>
                  <h4 className="font-display text-xl font-bold mb-4 text-movie-purple-300">
                    Are superhero movies dominating at the expense of original content?
                  </h4>
                  <p className="text-muted-foreground mb-6">
                    Join the debate on whether the saturation of superhero movies in theaters is crowding out more diverse and original storytelling.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MessageSquare className="h-4 w-4 mr-1" />
                      <span>127 comments</span>
                    </div>
                    <Button size="sm" variant="secondary">
                      Join Discussion
                    </Button>
                  </div>
                </div>
                
                <div className="flex-1 bg-background rounded-lg p-6 border">
                  <h3 className="text-lg font-semibold mb-2">New Discussion</h3>
                  <h4 className="font-display text-xl font-bold mb-4 text-movie-purple-300">
                    Exploring the influence of A24 on modern independent cinema
                  </h4>
                  <p className="text-muted-foreground mb-6">
                    From "Moonlight" to "Everything Everywhere All at Once" - how has A24 changed the landscape for independent films?
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MessageSquare className="h-4 w-4 mr-1" />
                      <span>84 comments</span>
                    </div>
                    <Button size="sm" variant="secondary">
                      Join Discussion
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center md:hidden">
              <Button variant="outline">View All Discussions</Button>
            </div>
          </div>
        </section>
        
        {/* Join CTA section */}
        <section className="py-24 bg-movie-purple-900 text-white">
          <div className="movie-container text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Join Our Movie-Loving Community
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
              Connect with fellow film enthusiasts, share your opinions, discover new favorites, and keep track of your watchlist.
            </p>
            <Button className="bg-movie-purple-300 hover:bg-movie-purple-500 text-white">
              Sign Up Free
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
