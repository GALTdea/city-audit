json.extract! item, :id, :title, :votes, :resume, :link, :region, :rating, :user_id, :created_at, :updated_at
json.url item_url(item, format: :json)
