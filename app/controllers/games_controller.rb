class GamesController < ApplicationController
    before_action :authenticate_user!, only: [:new]
    
    def new
        @game = Game.new
    end

end
