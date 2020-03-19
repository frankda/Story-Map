class CommentsController < ApplicationController
    
    def new
        @comment = Comment.new
    end
    
    def create
        @comment = Comment.new comment_params
        @location = Location.create location_params
        @current_user.comments << @comment
        @location.comments << @comment
        respond_to do |format|
            if @comment.save
                format.js
                format.html { redirect_to storymap_path }
            else
                format.html { render :new }
            end
        end
    end

    def edit
        @comment = Comment.find params[:id]
    end
    
    def update
        comment = Comment.find params[:id]
        comment = comment.update comment_params
        @comment = Comment.find params[:id]
        respond_to do |format|
            format.js
            format.html { redirect_to storymap_path }
        end
    end
    
    private
    def comment_params
        params.require(:comment).permit(:content)
    end
    
    def location_params
        params.require(:comment).permit(:lat, :lng)
    end
end