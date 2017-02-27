require 'rails_helper'

describe 'As a guest' do
  context 'I can visit root' do
    scenario 'and can see a link to sign up' do

      visit root_path

      expect(page).to have_link("Sign Up", href: new_user_path)
    end
  end
end
