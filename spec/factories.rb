FactoryBot.define do

    factory :user do
        sequence (:email) { |n| "dummyEmail#{n}@gmail.com" }
        password { "secretPassword" }
        password_confirmation { "secretPassword" }
    end

end