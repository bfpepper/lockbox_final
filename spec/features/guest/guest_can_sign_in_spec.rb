require 'rails_helper'

describe 'As a guest' do
  context 'when I visit /users/new' do
    scenario 'I can sign up for a new account' do

      user = build(:user)

      visit new_user_path
      expect(page).to have_content("Email")
      expect(page).to have_content("Password")
      expect(page).to have_content("Password Confirmation")

      fill_in "user[email]", with: user.email
      fill_in "user[password]", with: user.password
      fill_in "user[password_confirmation]", with: user.password

      click_on("Submit")

      expect(current_path).to eq(root_path)
    end

    scenario "If I dont enter the right password twice I dont get to create an account" do

      user = build(:user)

      visit new_user_path

      fill_in "user[email]", with: user.email
      fill_in "user[password]", with: user.password
      fill_in "user[password_confirmation]", with: "NotAPassword"

      click_on("Submit")

      expect(current_path).to eq(signup_path)
    end

    scenario "If I enter an existing email I dont get to create an account" do

      user_1 = create(:user)
      user_2 = build(:user)

      visit new_user_path

      fill_in "user[email]", with: user_1.email
      fill_in "user[password]", with: user_2.password
      fill_in "user[password_confirmation]", with: user_1.password

      click_on("Submit")

      expect(current_path).to eq(signup_path)
    end
  end
end
