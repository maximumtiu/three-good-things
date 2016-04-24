class ThingsController < ApplicationController
  private
    def set_state
      @day = Day.find(params[:id])
    end
end