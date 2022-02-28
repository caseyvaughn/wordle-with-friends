class GamesController < ApplicationController
  before_action :set_game, only: %i[ show update destroy ]
  before_action :authorize_request, only: [:create, :update, :destroy]

  # GET /games
  def index
    @games = Game.all

    render json: @games
  end

  # GET /games/1
  def show
    render json: @game, include: [:word, :user]
  end

  # POST /games
  def create
    @game = Game.new(game_params)
    @game.user = @current_user
    @game.word_id = params[:word_id]

    if @game.save
      render json: @game, status: :created
      # render json: @game, status: :created, location: @game
    else
      render json: @game.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /games/1
  def update
    if @game.update(game_params)
      render json: @game
    else
      render json: @game.errors, status: :unprocessable_entity
    end
  end

  # DELETE /games/1
  def destroy
    @game.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_game
      @game = Game.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def game_params
      params.require(:game).permit(:guesses, :user_won, :word_id, :user_id)
    end
end
