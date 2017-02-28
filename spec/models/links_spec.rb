require 'rails_helper'

RSpec.describe Link, type: :model do

  context "Validations" do
    it { should validate_presence_of(:url) }
    it { should validate_presence_of(:title) }
  end

  context "Relationships" do
    it { should belong_to(:user) }
  end
end
