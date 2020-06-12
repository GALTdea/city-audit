json.extract! entry, :id, :title, :likes, :resume, :link, :city, :county, :state, :rating, :user_id, :created_at, :updated_at
json.url entry_url(entry, format: :json)
