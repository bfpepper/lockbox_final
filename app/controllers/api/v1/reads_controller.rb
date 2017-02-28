class Api::V1::ReadsController < ApplicationController

  def create
    @read = Read.create(read_params)

    if @read.save
      render json: @read, status: 201
    else
      render json: @read.errors.full_messages, status: 500
    end
  end

  private

  def read_params
    params.permit(:link_id)
  end
end
