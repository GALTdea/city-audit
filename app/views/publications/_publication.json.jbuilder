json.extract! publication, :id, :title, :likes, :resume, :link, :journalist, :publisher, :rating, :user_id, :created_at, :updated_at
json.url publication_url(publication, format: :json)
