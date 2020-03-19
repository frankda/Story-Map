class MapController < ApplicationController
    before_action :check_for_login

    def map_page
        
    end
    
    def create_favorite_location
        
    end

    def marker
        @comments = Comment.all
    end
    
    
end