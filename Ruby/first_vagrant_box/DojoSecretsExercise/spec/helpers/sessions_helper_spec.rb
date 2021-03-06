require 'rails_helper'

def log_in email: "oscar@gmail.com", password: "password"
  visit '/sessions/new' unless current_path == '/sessions/new'
  fill_in 'Email', with: email
  fill_in 'Password', with: password
  click_button 'Log In'
end
# Specs in this file have access to a helper object that includes
# the SessionsHelper. For example:
#
# describe SessionsHelper do
#   describe "string concat" do
#     it "concats two strings with spaces" do
#       expect(helper.concat_strings("this","that")).to eq("this that")
#     end
#   end
# end
RSpec.configure do |config|
  config.expect_with :rspec do |expectations|
    expectations.include_chain_clauses_in_custom_matcher_descriptions = true
  end
  config.mock_with :rspec do |mocks|
    mocks.verify_partial_doubles = true
  end
end
