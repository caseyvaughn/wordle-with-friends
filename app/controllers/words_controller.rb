class WordsController < ApplicationController
  before_action :set_word, only: %i[ show update destroy ]
  #authorize_request will run before the methods listed after only
  before_action :authorize_request, only: [:create, :destroy, :get_user_words]
  before_action :authorize_item, only: [:destroy]

  # GET /words
  def index
    @words = Word.all

    render json: @words, include: :user
  end

   # Get /users/:user_id/words
   def get_user_words
    @user = User.find(params[:user_id])
    render json: @user.words
  end

  # GET /words/1
  def show
    render json: @word,  include: :user
    #can add include: [:user, :rating] to add ratings to word
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

  #disable edit word functionality! users CANNOT change a solution word
  # PATCH/PUT /words/1
  # def update
  #   if @word.update(word_params)
  #     render json: @word
  #   else
  #     render json: @word.errors, status: :unprocessable_entity
  #   end
  # end

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

    #users can only delete words they have created 
    def authorize_item
      unless @word.user == @current_user 
        render json: @word, status: :unauthorized
      end
    end
end
