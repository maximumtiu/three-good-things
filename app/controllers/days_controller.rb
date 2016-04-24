class DaysController < ApplicationController
  before_action :authenticate_user!
  before_action :set_state, only: [:show, :edit]

  def index
    @days = current_user.days
    @things = Thing.all.find_all { |thing| @days.ids.any? { |day_id| day_id == thing.day_id } }
  end

  def show
    @day.things
  end

  def create
    user_id = current_user.id
    date = Date.today
    day = Day.create(user_id: user_id, date: date)

    Thing.where(day_id: nil).each do |thing| 
      day.things << thing
      thing.update(day_id: day)
    end
  end

  def edit
  end

  private
    def set_state
      @day = Day.find(params[:id])
    end
end