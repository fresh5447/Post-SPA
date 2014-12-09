class Apiv1::PostsController < ApplicationController
	def index
		render json: Post.all
	end

	def new
		render json: Post.create
	end
end
