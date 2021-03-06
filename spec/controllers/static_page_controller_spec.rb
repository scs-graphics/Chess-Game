require 'rails_helper'

RSpec.describe StaticPageController, type: :controller do
    
    describe "static_page#index action" do
        it "should successfully show the page" do
            get :index
            expect(response).to have_http_status(:success)
        end
    end

    describe "static_page#team action" do
      it "should successfully show the page" do
        get :team
        expect(response).to have_http_status(:success)
      end
    end
end
