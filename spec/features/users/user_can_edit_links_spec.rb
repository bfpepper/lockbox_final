require "rails_helper"

describe "As a logged in user" do
  context "I can see my links" do
    scenario "And I can click a link to edit them." do

      user = create(:user)
      link = create(:link, user: user)

      allow_any_instance_of(ApplicationController).to receive(:current_user).and_return(user)

      visit root_path

      expect(page).to have_content("Google")
      expect(page).to have_content("http://www.google.com")
      expect(page).to have_link("Edit This Link", href: edit_link_path(link))
      click_on ("Edit This Link")

      expect(current_path).to eq(edit_link_path(link))

      fill_in 'link[url]', with: "http://turing.io"
      fill_in 'link[title]', with: "Turing"
      click_on "Update Link"

      expect(current_path).to eq(links_path)
      # expect(page).to have_content("Turing")
      # expect(page).to_not have_content("Google")
      # expect(page).to have_content("http://turing.io")
      # expect(page).to_not have_content("http://www.google.com")

    end
  end
end
