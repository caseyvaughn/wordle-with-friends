class RatingsController < ApplicationController
  before_action :set_rating, only: %i[ show update destroy ]

  # GET /ratings
  def index
    @ratings = Rating.all
    @ratings = @word.ratings

    render json: @ratings #, include: :user
  end

  # GET /ratings/1
  def show
    render json: @rating
  end

  # POST /ratings
  def create
    @rating = Rating.new(rating_params)
    @rating.user=@current_user

    if @rating.save
      render json: @rating, status: :created, location: @rating
    else
      render json: @rating.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /ratings/1
  def update
    if @rating.update(rating_params)
      render json: @rating
    else
      render json: @rating.errors, status: :unprocessable_entity
    end
  end

  # DELETE /ratings/1
  def destroy
    @rating.destroy
    render json: @rating
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_rating
      @rating = Rating.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def rating_params
      params.require(:rating).permit(:difficulty_rating, :is_real_word, :user_id, :word_id)
    end
end
