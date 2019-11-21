class Api::PostsController < ApplicationController
  before_action :require_log_in 

  def index
    @posts = Post.where(user_id: current_user.follows.ids)
    render :index
  end

  def show
    @post = Post.find(params[:id])
    render :show
  end

  def explore
    @posts = Post.all
    render :index
  end

  def profile_posts
      @posts = Post.where(user_id: params[:id])
      render :index
  end

  def create
    @post = Post.new(post_params)
    @post.user_id = current_user.id

    if @post.save
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def update
    @post = Post.find(params[:id])
      if @post.update(post_params)
          render :show
      else
          render json: @post.errors.full_messages, status: 422
      end
  end

  def destroy 
    @post = Post.find(params[:id])
      if @post.user_id = current_user.id 
        @post.destroy
      else 
        render json: ["Users may only delete their own photos"], status: 401
      end

      render :show
  end
  
  private

  def post_params
    params.require(:post).permit(:title, :photo, :post_id)
  end
end
