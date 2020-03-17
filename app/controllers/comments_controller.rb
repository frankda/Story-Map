class CommentsController < ApplicationController
    def new
        @comment = Comment.new
    end
    
    def create
        @comment = Comment.new comment_params
        @current_user.comments << @comment
        respond_to do |format|
            if @comment.save
                format.js
                format.html { redirect_to storymap_path }
            else
                format.html { render :new }
            end
        end
    end
    
    private
    def comment_params
        params.require(:comment).permit(:content)
    end
    
end