require 'rails_helper'

describe 'As an authenticated user,' do
  context 'when viewing links#index,' do
    scenario 'I see a form to submit a new link' do

      user = create(:user)

      allow_any_instance_of(ApplicationController).to receive(:current_user).and_return(user)

      visit links_path

      fill_in 'link-url', with: "www.google.com"
      fill_in 'link-title', with: "google"

      click_on "Add Link"

      expect(current_path).to eq(links_path)
    end

    scenario 'cannot submit an invalid link' do

      user = create(:user)

      allow_any_instance_of(ApplicationController).to receive(:current_user).and_return(user)

      visit links_path

      fill_in 'link-url', with: "this"
      fill_in 'link-title', with: "this"

      click_on "Add Link"

      expect(Link.count).to eq(0)
    end
  end
end
