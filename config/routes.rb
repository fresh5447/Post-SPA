Rails.application.routes.draw do
  
namespace :apiv1 do
  resources :posts, except: [:new, :edit]
end

end
