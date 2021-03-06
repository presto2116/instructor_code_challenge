
require 'sinatra'



  get '/' do
    File.read('index.html')
    erb :search
  end

  get '/favorites' do
    response.header['Content-Type'] = 'application/json'
    File.read('data.json')
  end

  
  post '/favorites' do
    file = JSON.parse(File.read('data.json'))
    unless params[:name] && params[:oid]
      return 'Invalid Request'
    movie = { name: params[:name], oid: params[:oid] }
    file << movie
    File.write('data.json',JSON.pretty_generate(file))
    movie.to_json
    redirect '/'
  end

end