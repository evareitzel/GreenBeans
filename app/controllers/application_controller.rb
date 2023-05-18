class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  before_action :authorize

  private

  def authorize
    @current_wallet = Wallet.find_by(wallet_key: session[:wallet_key])

    render json: { errors: ['Not authorized'] }, status: :unauthorized unless @current_wallet
  end

  def render_unprocessable_entity_response(exception)
    render json: {errors: exception.record.errors.full_messages }, status: :unprocessable_entity
  end

end
