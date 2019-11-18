class Api::CommentsController < ApplicationController
  before_action :require_log_in 
  
  def index
    @comments = Comment.all.where(post_id: params[:post_id])
  end

  def show
    @comment = Comment.find_by(id: params[:id])
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id

    if @comment.save
      render :show
    else
      render json: ["Comment cannot be blank"], status: 422
    end
  end

  def destroy
    @comment = Comment.find_by(id: params[:id])

    if @comment && @comment.user_id == current_user.id
      @comment.destroy
      render :show
    else
      render json: ["Users may only delete their own comments"], status: 422
    end
  end

  private
  def comment_params
    params.require(:comment).permit(:body,:post_id)
  end
end
