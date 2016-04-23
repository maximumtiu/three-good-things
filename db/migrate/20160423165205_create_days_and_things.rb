class CreateDaysAndThings < ActiveRecord::Migration
  def change
    create_table :days do |t|
      t.date :date
      t.integer :user_id

      t.timestamps null: false
    end

    create_table :things do |t|
      t.string :title
      t.text :why
      t.text :details
      t.integer :day_id

      t.timestamps null: false
    end
  end
end
