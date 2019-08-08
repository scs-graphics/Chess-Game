require 'rails_helper'

RSpec.describe GamesController, type: :controller do

    describe "games#new action" do

        it "should require users to be logged in" do
            get :new
            expect(response).to redirect_to new_user_session_path
        end

        it "should successfully show the new form" do
            user = FactoryBot.create(:user)
            sign_in user

            get :new
            expect(response).to have_http_status(:success)
        end
    end

end
