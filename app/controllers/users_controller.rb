class UsersController < ApplicationController
    before_action :check_for_admin, :only => [:admin]
    before_action :check_for_login, :only => [:index]
    
    def admin
        
    end
    
    def index
        @users = User.all
    end
    
    def new
        @user = User.new
    end
    
    def create
        @user = User.new user_params
        if @user.save
            session[:user_id] = @user.id
            redirect_to storymap_path
        else
            render :new
        end
    end
    
    private
    def user_params
        params.require(:user).permit(:email, :password, :password_confirmation)
    end
    
end
