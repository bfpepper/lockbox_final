FactoryGirl.define do
  factory :link do
    url "http://www.google.com"
    title "Google"
    read false
    user
  end
end
