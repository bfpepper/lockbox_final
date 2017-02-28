require 'rails_helper'

RSpec.describe Read, type: :model do

  context "Relationships" do
    it { should belong_to(:link) }
  end
end
