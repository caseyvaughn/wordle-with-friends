class WordsController < ApplicationController
  before_action :set_word, only: %i[ show update destroy ]

  # GET /words
  def index
    @words = Word.all

    render json: @words
  end

  # GET /words/1
  def show
    render json: @word #can add ,include: :reviews to add reviews to word
  end

  # POST /words
  def create
    @word = Word.new(word_params)
    @word.user=@current_user

    if @word.save
      render json: @word, status: :created, location: @word
    else
      render json: @word.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /words/1
  def update
    if @word.update(word_params)
      render json: @word
    else
      render json: @word.errors, status: :unprocessable_entity
    end
  end

  # DELETE /words/1
  def destroy
    @word.destroy
    render json: @word
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_word
      @word = Word.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def word_params
      params.require(:word).permit(:solution_word, :user_id)
    end
end
