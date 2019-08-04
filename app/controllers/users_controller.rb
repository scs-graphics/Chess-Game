class UsersController < ApplicationController

    def show
        @user = User.find(params[:id])
    end

    def update
        @user = User.find(params[:id])
        @user.update_attributes(user_params)
        if @user.valid?
            redirect_to root_path
        else
            render :edit, status: :unprocessable_entity
        end
    end

    private

    def user_params
        params.require(:user).permit(:avatar, :email, :password)
    end

end
