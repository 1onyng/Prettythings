class Api::FollowsController < ApplicationController
  def index
    @follows = Comment.all.where(user_id: params[:user_id])
  end

  def show
    @follow = Follow.find_by(id: params[:id])
  end

  def create
    @follow = Follow.new(follow_params)
    @follow.user_id = current_user.id 

    if @follow.save
      render :show
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def destroy
    @follow = Follow.where(followed_user_id: params[:id]).where(user_id: current_user.id)[0]
    @follow.destroy
    render :show
  end

  private
  def follow_params
    params.require(:follow).permit(:followed_user_id)
  end
end
