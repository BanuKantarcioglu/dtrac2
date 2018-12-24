# Be sure to restart your server when you modify this file.

# Avoid CORS issues when API is called from the frontend app.
# Handle Cross-Origin Resource Sharing (CORS) in order to accept cross-origin AJAX requests.

# Read more: https://github.com/cyu/rack-cors

#BK uncomment gem rack-CORS
#BK bundle install

Rails.application.config.middleware.insert_before 0, Rack::Cors ,:debug=> true do
  allow do
    origins '*'
    resource '*',
      :headers=>:any,:methods =>[:get,:post,:options,:delete]
      # TODO how about get requests? do we need this?  NO we don't. or do we.
      # no errors because of client cache? Any restrictions?


    #TODO DRY

    # resource '/personnels.json',
    #   headers: :any,
    #   methods: [:get,:post,:options], credentials: true
    # resource '/document_types.json',
    #   headers: :any,
    #   methods: [:get]
    end

end
