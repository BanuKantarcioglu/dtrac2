# Be sure to restart your server when you modify this file.

# Avoid CORS issues when API is called from the frontend app.
# Handle Cross-Origin Resource Sharing (CORS) in order to accept cross-origin AJAX requests.

# Read more: https://github.com/cyu/rack-cors

#BK uncomment gem rack-CORS
#BK bundle install

Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins '*'

    #TODO DRY
    resource '/document_types.json',
      headers: :any,
      methods: [:get]
    resource '/personnels.json',
      headers: :any,
      methods: [:get]
  end
end
